# Routes_Manager-API

<p align="center"> 
  <a href="https://www.linkedin.com/in/samuel-ricardo/" target="_blank">
    <img width="auto" src="https://cdn.webo.digital/uploads/2022/09/Nestjs_hero1.png"/>
  </a> 
</p>

<h4 align="center" > 🚀 🟥 Discovery 🟥 🚀 </h4>

<h4 align="center">
  Application developed with the purpose of studying the NestJS Ecosystem </a>
</h4>

#

<p align="center">
  |&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#project">Overview</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#techs">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#app">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#routes">Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#run-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
  <a style="color: #8a4af3;" href="#author">Author</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

#

<br>

<p id="project"/>

<h2>  | :artificial_satellite: About:  </h2>

<p>
    This API target is to explore a <b>Clean Architeture implementation</b> With NestJS Framework, fro this, i coded an traditional CRUD that manages Routes and apply some business rules using TypeORM and SQLite Database with a complete development ambient using Docker.
</p>

<br>

<h2 id="techs">
  :building_construction: | Technologies and Concepts Studied:
</h2>

> <a href='https://nestjs.com/'> <img width="48px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain-wordmark.svg" /> </a>

- NestJS - [Express]
- TypeORM
- SQLite
- Swagger | [Documentation]
- JS | Typescript
- Test | Jest
- Docker
- eslint
- prettier
- husky
- lint-sataged
- @swc | [Rust Compiler]

> Among Others...

<br>

#

<h2 id="app">
  💻 | Application:
</h2>

<img src="https://miro.medium.com/v2/resize:fit:818/1*aGCx1q4rO5Uny9AauDCqyw.png"/>

In @Core folder you can find the heart of the software where all business rules are applied, the idea is that you can pick this folder and put in any project that it still working without adaptations, the NestJS is just a implementation and is Nest that need to adapt to my @Core

About the routes you can create and list Routes and store in SQLite Database (loca-storage)

Application use the powerfull swc a fast rust compiler and a complete dev ambient, code formater and verify code errors, automated tests and Docker contaieners

<p id="routes"/>

> API Example:

```bash
$ route_manager > api.http

GET http://localhost:3000/prefixo/hello

###
GET http://localhost:3000/routes

###
POST http://localhost:3000/routes
Content-Type: application/json

{
    "title": "minha rota",
    "startPosition": { "lat": 0, "lng": 1 },
    "endPosition": { "lat": 2, "lng": 3 }
}

```

#

<br>

<h2 id="run-project"> 
   👨‍💻 | How to use
</h2>
