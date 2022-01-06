<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

## Arquitectura

La arquitectura de esta aplicación es una architectura hexagonal, para encontrar detalle de la comunicación de los componentes se muestra la siguiente imagen:


## Dominio

Un modelo domain es un modelo conceptual, una representación de conceptos significativos para el domain que han de ser modelados en el software. Los conceptos incluyen la información envuelta en el negocio y dirige los usos de negocio en relación a esa información.

## Ports

Los puertos son interfaces que permiten el flujo entrante y saliente. Por lo tanto, la parte central de la aplicación se comunica con la parte exterior mediante los puertos dedicados.

## Application

La Aplicación es el núcleo del sistema, contiene los Servicios de la Aplicación que organizan la funcionalidad o los casos de uso. También contiene el modelo de dominio, que es la lógica empresarial incorporada en agregados, entidades y objetos de valor. La aplicación está representada por un hexágono que recibe comandos o consultas de los puertos y envía solicitudes a otros actores externos, como bases de datos, también a través de puertos.

## Shared 
Archivos compartidos, funciones y utilitarios para toda la aplicación

# Proyecto

## URL publica

https://lacl-test-backend-api.herokuapp.com/

## DockerFile:

 ```docker

FROM node:12.19.0-alpine3.9 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:12.19.0-alpine3.9
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start"]

```

## YAML for Heroku CI / CD

Variables guadadas en Github Secrets:

- secrets.HEROKU_EMAIL
- secrets.HEROKU_APP_NAME 
- secrets.HEROKU_APP_NAME

 ```yaml

name: Deploy

on:
  push:
    branches:
      - master

# Your workflows jobs.
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # Check-out your repository.
      - name: Checkout
        uses: actions/checkout@v2


      # Build

      - name: Build and Deploy. 
        uses: gonuit/heroku-docker-deploy@v1.3.3 # GitHub action name (leave it as it is).
        with:

          email: ${{ secrets.HEROKU_EMAIL }}
          
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          
          heroku_app_name: ${{ secrets.HEROKU_APP_NAME }}

          dockerfile_directory: ./

          dockerfile_name: Dockerfile

          docker_options: "--no-cache"

          process_type: web


```


Herramientas y librerias utilizadas:

- NestJS
- Mongoose
- NestJS/Mongoose
- Csv-Parse

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://github.com/netcordovaleon/test-backend-nodejs/blob/develop/docs/architecture.png?raw=true" width="320" alt="Arquitectura" /></a>
</p>

 La solución de la aplicación en un MVP para la empresa VANK, podra encontrar diferentes API's como:

 ```bash
# CREAR UN NUEVO CLIENTE
$ (POST) /client => (body: request)
# ACTUALIZAR UN CLIENTE
$ (PATCH) /client => (head: id, body: request)

# BUSCAR TODOS INVOICES
$ (POST) /invoice => (body: request)
# BUSCAR INVOICES POR FILTRO
$ (PATCH) /invoice/filter?vendor={vendor}&dateIni={dateIni}&dateFin={dateFin} => (queryparam: request)
# GRABAR CSV HACIA BASE NOSQL
$ (POST) /invoice/bulk => ()
```

Para ejecutar las pruebas en POSTMAN, se comparte la siguiente collection:

 ```bash
POSTMAN: Collection v2.1 
```
- Archivo de pruebas - [Descargar postman collection](https://github.com/netcordovaleon/test-backend-nodejs/blob/master/docs/testCollection.json)



[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# Correr aplicación
$ npm run start

```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
