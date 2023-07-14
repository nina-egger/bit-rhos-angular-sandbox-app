## local run the commands "docker build -t gugus ." and "docker run -d -it -p 80:80/tcp --name gugus-app gugus:latest"

## Deploy
FROM bit-base-images-docker-hosted.nexus.bit.admin.ch/bit/ubi9-minimal:latest

WORKDIR /

FROM toolchain-docker.nexus.bit.admin.ch/bit/nginx-120:1-110

COPY /dist/bit-angular-sandbox /usr/share/nginx/html

EXPOSE 8080
