# Documentation

## Basic Information
- Project name: nested-forms-exercise
- Repository: [nested-forms-exercise](https://github.com/amappola7/nested-forms-exercise)
- Author: Ana María Porras Pinto - [amappola7](https://github.com/amappola7)

## Architecture
This is a project automatically generated with the Angular CLI, because of that, you will found the common Angular structure with some additions:

### 1. Models `src\app\models`
In the models directory, you will found all the necessary models to type data used in the project.

### 2. Services `src\app\services`
The services directory contains all the injectable classes that are used to interact with the backend server.

### 3. UI `src\app\ui`
The ui directory contains the components used to build the interface of the project. It is divided in two main parts:
#### 3.1 Shared `src\app\ui\shared`
This folder is responsible for components, directives and pipes shared across different modules of the application.
#### 3.1 Components `src\app\ui\components`
This folder contains larger independent components that make up the user interface.

### 4. Utils `src\app\utils`
The utils directory contains adittional functions that are reused in several parts of the project and provide help with certain functionalities.

## Additional information
- This project use as backend server a JSON Server API, run `json-server --watch db.json` in your terminal to initialize it.

