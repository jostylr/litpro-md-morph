# [md2md](# "version: 0.1.0; modifying md files")

This is the project file for converting md files to md. Ideally, this is just
a bunch of little programs that demo and can be tweaked as needed. 

* [lprc.js](#lprc "save:") This contains the supportive code for compiling the
  litpro in the way we want.
* [package.json](#package "save:") This supports the lprc.
* [README.md](#readme "save:") This is the readme file. 
* [.gitignore](#gitignore "save:") gotta have one of these. 

## readme

    # Litpro Plugin: Markdown Morphing

    This is the repository for a directive that allows for taking a litpro doc and
    transforming it into something else. 

    

## gitignore

    node_modules/
    .checksum
    

## lprc

    module.exports = function (Folder, args) {

        if (args.file.length === 0) {
            args.file = ["project.md"];
        }

        args.build = ".";
        args.src = ".";

The local property was in the code, but not sure how it is being used.
Probably can remove it. 

        if (!Folder.prototype.local) {
            Folder.prototype.local = {};
        }

        require('litpro-jshint')(Folder, args);
        
    };    

## package

The requisite npm package file. 

    {
      "name": "_`g::docname`",
      "description": "_`g::tagline`",
      "version": "_`g::docversion`",
      "homepage": "https://github.com/_`g::gituser`/_`g::docname`",
      "author": {
        "name": "_`g::authorname`",
        "email": "_`g::authoremail`"
      },
      "repository": {
        "type": "git",
        "url": "git://github.com/_`g::gituser`/_`g::docname`.git"
      },
      "bugs": {
        "url": "https://github.com/_`g::gituser`/_`g::docname`/issues"
      },
      "license": "MIT",
      "main": "index.js",
      "engines": {
        "node": ">=0.12"
      },
      "dependencies":{
        _"g::npm dependencies"
      },
      "devDependencies" : {
        _"g::npm dev dependencies"
      },
      "scripts" : { 
        "test" : "node ./test.js"
      },
      "keywords": ["literate programming"],
      "private": true

    }


by [James Taylor](https://github.com/jostylr "npminfo: jostylr@gmail.com ; 
    deps: commonmark 0.25.1;
    dev: litpro 0.12.1,litpro-jshint 0.2.1")
