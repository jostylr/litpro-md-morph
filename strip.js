var commonmark = require("commonmark");


var fs = require('fs');
var md = fs.readFileSync("strip-code.md", {encoding:"utf8"});

var reader = new commonmark.Parser();
var parsed = reader.parse(md);

var out = md.split("\n");

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

//console.log(out);

out = out.filter(function (el) {
    if (el === false) {
        return false;
    } else {
        return true;
    }
});

//console.log(out.join("\n"));

fs.writeFileSync("code-free.md", out.join("\n"));
