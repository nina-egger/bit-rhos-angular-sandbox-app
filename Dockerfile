## local run the commands "docker build -t gugus ." and "docker run -d -it -p 80:80/tcp --name gugus-app gugus:latest"

## Deploy
FROM bit-base-images-docker-hosted.nexus.bit.admin.ch/bit/ubi9-minimal:latest

WORKDIR /

FROM toolchain-docker.nexus.bit.admin.ch/bit/nginx-120:1-110

COPY /dist/bit-angular-sandbox /usr/share/nginx/html

# Run as nginx user
USER 101

# Non-root users cannot open port 80, so use 8080 instead
EXPOSE 8080

ENTRYPOINT ["nginx","-g","daemon off;"]
