# How to run locally with docker

## Build it

```
docker compose build
```

## Bring it up

```
docker compose up -d
```

## Install NPM

```
docker compose exec -it challenge npm install  --legacy-peer-deps
```

Note: webpack is giving an issue because of the version, that is why it needs the --legacy-peers-deps

## Serve

```
docker compose exec -it challenge npm run serve
```

Then visit http//localhost/


## Compile assets

```
docker compose exec -it challenge npm run build
```