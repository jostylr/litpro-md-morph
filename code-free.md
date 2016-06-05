# Strip Code

This is an example of stripping all the code blocks out of markdown file
except for those with language attribute demo

* [strip.js](#basic-idea "save:|jshint") The output js file

## basic idea

So we read in a file, say this one, and output a new file with all the code
blocks stripped. For testing, we just hard code the file names. Later, we get
it from the args. 

## walker

This walks the parsed output. We just want to walk at a high level, deciding
whether to delete lines or not. We delete a line by replacing it with false
and then later we filter and join. 

sourcePos has the form 
`[[start line,  start col],[end line, end col]]` It starts at line 1 so we
need to subtract 1 for the loop


## filter

This filters out the false values

