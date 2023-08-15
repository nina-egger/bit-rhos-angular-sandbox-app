FROM toolchain-docker.nexus.bit.admin.ch/bit/nginx-120:1-110

# Copy the files from build step
COPY /dist/bit-angular-sandbox /var/www

# Copy the nginx config
COPY src/nginx/nginx.conf /etc/nginx/nginx.conf

RUN chmod -R 777 /var/log/nginx /var/cache/nginx /var/run /var/www \
     && chgrp -R 0 /etc/nginx \
     && chmod -R g+rwX /etc/nginx

# Run as nginx user
USER 101

# Non-root users cannot open port 80, so use 8080 instead
EXPOSE 8080

ENTRYPOINT ["nginx","-g","daemon off;"]
