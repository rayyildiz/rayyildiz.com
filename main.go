package main

import (
	"io"
	"os"
	"os/exec"
	"strings"

	"github.com/fatih/color"
)

func panicOnError(err error, str string) {
	if err != nil {
		color.Red("%s, %v", str, err)
		os.Exit(1)
	}
}

func convertToString(data []byte) string {
	s := string(data)
	return strings.TrimSuffix(s, "\n")
}

func updateSystemEnv() {
	out, err := exec.Command("git", "rev-parse", "--short", "HEAD").Output()
	panicOnError(err, "could not get git commit ssh short")

	os.Setenv("GIT_COMMIT_SHA_SHORT", convertToString(out))

	out, err = exec.Command("git", "rev-parse", "HEAD").Output()
	panicOnError(err, "could not get git commit ssh long")
	os.Setenv("GIT_COMMIT_SHA", convertToString(out))

	color.Yellow("GIT_COMMIT_SHA_SHORT: %s", os.Getenv("GIT_COMMIT_SHA_SHORT"))
	color.Yellow("GIT_COMMIT_SHA: %s", os.Getenv("GIT_COMMIT_SHA"))
}

func gitCommit(comment string) {
	out, err := exec.Command("git", "add", ".").Output()
	panicOnError(err, "could not execute 'git add .'")
	color.Yellow(string(out))

	out, err = exec.Command("git", "commit", "-S", "-m", comment).Output()
	panicOnError(err, "could not execute 'git comment -m [COMMENT]'")
	color.Yellow(string(out))
}

func commitGhpages(comment string) {
	cmd := exec.Command("git", "add", "--all")
	cmd.Dir = "./public"
	out, err := cmd.Output()
	panicOnError(err, "could not execute 'git add --all'")
	color.Yellow(string(out))

	cmd = exec.Command("git", "commit", "-m", comment)
	cmd.Dir = "./public"
	out, err = cmd.Output()
	panicOnError(err, "could not execute 'cd public && git add --all && git commit -m COMMENT && cd ..'")
	color.Yellow(string(out))
}

func push() {
	out, err := exec.Command("git", "push").Output()
	panicOnError(err, "could not execute 'git push'")
	color.Yellow(string(out))
}

func executeHugoCommand() {
	out, err := exec.Command("hugo", "-d", "public").Output()
	panicOnError(err, "could not execute 'hugo -d docs` command")

	color.Yellow(string(out))
}

func copyFiles(source, target string) {
	in, err := os.Open(source)
	panicOnError(err, "coul not open source file")
	defer in.Close()

	out, err := os.Create(target)
	panicOnError(err, "coul not create destination file")

	defer out.Close()

	_, err = io.Copy(out, in)
	panicOnError(err, "coul not copy  content from source file to target file")
	defer out.Close()
}

func main() {
	args := os.Args[1:]
	if len(args) < 1 {
		color.Red("Usage : ")
		color.Red(" go run main.go 'this is a sample comment' ")
		os.Exit(1)
	}
	commentMessage := strings.Join(args, " ")
	color.Green("comment message '%s'", commentMessage)

	color.Green("Building sites")

	color.Green("Add and commit changes...")
	gitCommit(commentMessage)
	color.Blue("Executed git commands")

	color.Green("Updating system env variables....")
	updateSystemEnv()
	color.Blue("System venv variables updated")

	color.Green("Generating website static folder /public ...")
	executeHugoCommand()
	copyFiles("./CNAME", "./public/CNAME")
	color.Blue("website generated")

	color.Green("Commit gh-pages changes...")
	commitGhpages(commentMessage)
	color.Blue("Website pushed succesfully. Dont' forget to push your changes. git push --all")

}
