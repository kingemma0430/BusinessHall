Angualr Project Environment Build
1. Install nodejs (https://nodejs.org/en/download/),   visual studio code(https://code.visualstudio.com/)

2. Open cmd, input command <npm install -g @angular/cli>, please only input content in <>

3. Open project folder,   CTRL+~    to open console,  input     <npm install>      to install all package, please only input content in <>

4. If your nodejs version is newer than before, you need to execute below script to upgrade the sass, please only input content in <>
   <npm rebuild node-sass>

5. Start Project, please only input content in <>
	<npm start>

6. publish Project, please only input content in <>, ng build --prod is compile with AOT
	<ng build --prod>

7. Angular Doc
https://angular.io/docs

8. Angular Cli doc
https://angular.io/cli


Angular offers two ways to compile your application:
https://angular.io/guide/aot-compiler
1. Just-in-Time (JIT), which compiles your app in the browser at runtime.
2. Ahead-of-Time (AOT), which compiles your app at build time.
	JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands:
	ng build
	ng serve
	For AOT compilation, include the --aot option with the ng build or ng serve command:
	ng build --aot
	ng serve --aot
	The ng build command with the --prod meta-flag (ng build --prod) compiles with AOT by default.
	
Compilation phases
There are three phases of AOT compilation.

Phase 1 is code analysis. In this phase, the TypeScript compiler and AOT collector create a representation of the source. The collector does not attempt to interpret the metadata it collects. It represents the metadata as best it can and records errors when it detects a metadata syntax violation.

Phase 2 is code generation. In this phase, the compiler's StaticReflector interprets the metadata collected in phase 1, performs additional validation of the metadata, and throws an error if it detects a metadata restriction violation.

Phase 3 is template type checking. In this optional phase, the Angular template compiler uses the TypeScript compiler to validate the binding expressions in templates. You can enable this phase explicitly by setting the fullTemplateTypeCheck configuration option; see Angular compiler options.