TESTS = tests/*.js

all: test

test:
	npm install .
	@mocha $(TESTS)

.PHONY: test
