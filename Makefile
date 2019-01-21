build:
	set GIT_COMMIT_SHA_SHORT=$(git rev-parse --short HEAD)
	set GIT_COMMIT_SHA=$(git rev-parse HEAD)
	hugo -d docs
	@echo $(GIT_COMMIT_SHA_SHORT)
	@echo $(GIT_COMMIT_SHA)

commit:
	git add .
	git commit -m "automatic messages"
	git push --all

all: build commit
	echo "OK"

run:
	hugo server