.PHONY: setup clean build develop
.ONESHELL: setup clean build develop

SHELL := /bin/bash
TAG := $(shell git rev-parse --short HEAD || echo 0000000)

setup: clean
	npm install .
	./node_modules/.bin/jest --clearCache

clean:
	-rm -fR ./dist
	-rm -fR ./node_modules

test:
	./node_modules/.bin/jest --clearCache
	docker run -it -d \
		-p 5432:5432 \
		--name defect-db \
		--env-file ./config/local.db.env \
		--volume $(shell pwd)/sql/init:/docker-entrypoint-initdb.d \
		postgres:14-alpine
	npm run test
	docker rm -f defect-db

build:
	npm run build

develop: build
	docker run -it -d \
		-p 5432:5432 \
		--name defect-db \
		--env-file ./config/local.db.env \
		--volume $(shell pwd)/sql/init:/docker-entrypoint-initdb.d \
		postgres:14-alpine
	-bash -c "trap 'docker rm -f defect-db' INT; npm run develop || true"