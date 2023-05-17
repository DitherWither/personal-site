FROM node:latest AS build

WORKDIR /app/homepage

COPY ./homepage /app/homepage

RUN cd /app/homepage && \
    npm install && \
    npm run build

FROM caddy:latest

COPY ./Caddyfile /srv
COPY --from=build /app/dist /srv/www

WORKDIR /srv/

EXPOSE 80

EXPOSE 8080


CMD ["caddy", "run", "--config", "/srv/Caddyfile", "--adapter", "caddyfile"]