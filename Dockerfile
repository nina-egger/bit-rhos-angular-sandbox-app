## Deploy
FROM repo.bit.admin.ch:8448/repository/rhos-tools/bit-ubi9-minimal:latest
# FROM gcr.io/distroless/base-debian10

WORKDIR /

USER nonroot:nonroot

COPY /bit-angular-sandbox /bit-angular-sandbox

EXPOSE 8080

ENTRYPOINT ["/bit-angular-sandbox"]
