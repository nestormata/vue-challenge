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
docker compose exec -it challenge npm install
```


## Serve

```
docker compose exec -it challenge npm run serve
```

Then visit http//localhost/


## Run tests

```
docker compose exec -it challenge npm run test
```