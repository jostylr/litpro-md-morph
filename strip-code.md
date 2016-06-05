# Strip Code

This is an example of stripping all the code blocks out of markdown file
except for those with language attribute demo

* [strip.js](#basic-idea "save:|jshint") The output js file

## basic idea

So we read in a file, say this one, and output a new file with all the code
blocks stripped. For testing, we just hard code the file names. Later, we get
it from the args. 

    var commonmark = require("commonmark");

    var infile = "strip-code.md";
    var outfile = "code-free.md";

    var fs = require('fs');
    var md = fs.readFileSync(infile, {encoding:"utf8"});

    var reader = new commonmark.Parser();
    var parsed = reader.parse(md);

    var out = md.split("\n");

    _"walker"


    out = _"filter";


    fs.writeFileSync(outfile, out.join("\n"));

## walker

This walks the parsed output. We just want to walk at a high level, deciding
whether to delete lines or not. We delete a line by replacing it with false
and then later we filter and join. 

sourcePos has the form 
`[[start line,  start col],[end line, end col]]` It starts at line 1 so we
need to subtract 1 for the loop


    var walker = parsed.walker();
    var event, node, source, i;
 
    while ((event = walker.next())) {
        node = event.node;
        //console.log(node.type, node.sourcepos);
        if (node.type === "code_block") {
            source = node.sourcepos;
            //console.log(source);
            for (i = source[0][0]-1; i < source[1][0]; i +=1) {
                out[i] = false;
            }
        }
    }
        

## filter

This filters out the false values

    out.filter(function (el) {
        if (el === false) {
            return false;
        } else {
            return true;
        }
    })


