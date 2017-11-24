# rufus-api
Api to handle jobs workers and customers relationships

## Requisites

You should have installed

- docker-compose
- node
- npm
- sequelize-cli

## Install

### Install dependencies

```
npm install
```

### Create config files

```
cp config.example.js config.js
```

```
cp db/config.example.js db/config.js
```

### Get up postgres with docker

```
docker-compose up -d
```

### Migrate and seed db

```
sequelize db:migrate
```

```
sequelize db:seed:all
```

## Use

```
npm start
```

Go to `http://localhost:3001/graphiql` to test it
