build:
	mkdir -p functions
	GOBIN=${PWD}/functions go install ./functions/...