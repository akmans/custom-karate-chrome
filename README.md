
# Custom the Karate-chrome
This project is for learning purpose.   
It provides a way to rewrite the Karate-chrome container to provide the below features.
- Support multi-bytes fonts, such as Japanese
- Set proxy to chrome browser
- Rewrite the whole Dockerfile to install a newer version of chrome.

# The Wrapper Karate-chrome
- Go to `Wrapper` folder and run below command.
```bash
cd custom-karate-chrome/Wrapper
docker build . -t wrapper/karate-chrome
```
Here `wrapper/karate-chrome` is the image name. You can choose a name you like.

- Go to `Sample` folder and run below command to start up a Karate-chrome container instance.
```bash
cd ../Sample
docker run -itd --name wrapper-karate-chrome -p 9222:9222 --rm -e KARATE_SOCAT_START=true --cap-add=SYS_ADMIN -v ${PWD}:/src wrapper/karate-chrome
```

- Then use below command to run test.
```bash
docker exec -it -w /src wrapper-karate-chrome mvn clean test "-Dkarate.env=ci" -Dtest=ScenariosRunner
```
Note: here we use `mvn` command.

- Kill the container instance after test.
```bash
docker kill wrapper-karate-chrome
```

# The Rewrite Karate-chrome
- Go to `Rewrite` folder and run below command.
```bash
cd ../Rewrite
docker build . -t rewrite/karate-chrome
```

- Go to `Sample` folder and run below command to start up a Karate-chrome container instance.
```bash
cd ../Sample
docker run -itd --name rewrite-karate-chrome -p 9222:9222 --rm -e KARATE_SOCAT_START=true --cap-add=SYS_ADMIN -v ${PWD}:/src rewrite/karate-chrome
```

- THen use below command to run test.
```
docker exec -it -w /src rewrite-karate-chrome ./mvnw clean test "-Dkarate.env=ci" -Dtest=ScenariosRunner
```
Note: here we use `./mvnw` command.

- Kill the container instance after test.
```bash
docker kill rewrite-karate-chrome
```

# The Official Karate-chrome
You can find the Official Karate-chrome from below link.
https://hub.docker.com/r/ptrthomas/karate-chrome
