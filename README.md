# lucas-caetano-home

This repository is a website about me and my history with technology and the world of Computer Science

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` or `npm build -prod` to build the project. The build artifacts will be stored in the `dist/` directory.

## Test local in your smartphone

runnin with `ng serve --host your-ip` and access in your smartphone with `your-ip:4200`
to know your ip, run `ipconfig` in windows or `ifconfig` in linux

## This project is hosted id netlify

this project has a file netlify.toml that is a configuration file for netlify, this file has a configuration for redirect all routes to index.html, this is necessary because the angular is a SPA (Single Page Application) and the netlify needs to know that all routes will be redirected to index.html
