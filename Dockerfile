FROM bit-base-images-docker-hosted.nexus.bit.admin.ch/bit/nginx-120:latest

# Removes the libraries that causes security issues
RUN apt-get uninstall vim-minimal
RUN apt-get uninstall vim-filesystem

# Copy the files from build step
COPY /dist/bit-angular-sandbox /usr/share/nginx/html

# Copy the nginx config
COPY src/nginx/nginx.conf /etc/nginx/nginx.conf

# Run as nginx user
USER 101

# Non-root users cannot open port 80, so use 8080 instead
EXPOSE 8080

ENTRYPOINT ["nginx","-g","daemon off;"]
