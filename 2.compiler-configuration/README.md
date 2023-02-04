# Configuration

# Install typescript compiler

```
npm install typescript
```

# Initiate typescript configuration

```
tsc --init
```

# Configuration

Which Files?

- exclude: ["node_modules"] (tsc should not compile files inside the node_modules folder) - default value is ["node_modules"]

- include: [] (list of ts files to be compiled) - default value is all files

How to compile (compilerOptions)?

- target: es5, es6, and so on. [We may see that const/let will be compiled as var in es5, but not in es6]

- lib: ["dom", "es6", "dom.iterable", "scripthost"] - default value is all liberies available in target javascript version, placeholder value is default for es6

- sourceMap : false - generate js.map file for debugging purposes [we can see ts file in browser sources]

- outDir: "./" - where to put compiled files

- rootDir: "./" - root directory of input ts files

- removeComments: false - remove comments from compiled js files

- noEmit: false - only check ts files, do not create any js files

- strict & options

- additional checks
