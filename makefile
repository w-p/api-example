.PHONY: setup clean build run develop
.ONESHELL: setup clean build run develop

TAG := $(shell git rev-parse --short HEAD || echo 0000000)

setup: clean
	npm install .

clean:
	-rm -fR ./dist
	-rm -fR ./node_modules

build:
	npm run build

run:
	docker build -t defect-db:$(TAG) .
	docker run -it --rm -d \
		--env-file ./config/local.db.env \
		--name defect-db \
		defect-db:$(TAG)
	npm run start
	docker rm -f defect-db

develop:
	docker build -t defect-db:$(TAG) .
	docker run -it --rm -d \
		--env-file ./config/local.db.env \
		--name defect-db \
		defect-db:$(TAG)
	npm run develop
	docker rm -f defect-db