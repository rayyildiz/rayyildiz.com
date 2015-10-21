build:
	hugo -d docs

commit:
	git add .
	git commit -m "automatic messages"
	git push --all

all: build commit
	echo "OK"

run:
	hugo server