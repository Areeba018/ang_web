# AngWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.





##  Project detail:
##  Step 1: Set Up Your Angular Project
If you don’t have an Angular project yet, create one using:
ng new ang_web

Then, open the project in VS Code or any code editor.

##  Step 2: Install Bootstrap for Styling
Since the design looks clean and modern, Bootstrap will help in styling. Run the following command to install Bootstrap:

npm install bootstrap

Now, add Bootstrap to angular.json:
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.css"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
##  Step 3: Create the Navbar Component
Generate a new navbar component:
ng generate component components/navbar

This will create:

src/app/components/navbar/navbar.component.ts

src/app/components/navbar/navbar.component.html

src/app/components/navbar/navbar.component.css

## Step 4: Write the Navbar Code
Now, edit navbar.component.html to add the MeisterTask-style navbar.

## Step 5: Add Some Styling
Open navbar.component.css and add

## Step 6: Include Navbar in App Component
Open app.component.html and replace everything

## Step 7: Run Your Application
Now, start your Angular app:
ng serve