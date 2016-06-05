module.exports = function (Folder, args) {

    if (args.file.length === 0) {
        args.file = ["project.md"];
    }

    args.build = ".";
    args.src = ".";
    if (!Folder.prototype.local) {
        Folder.prototype.local = {};
    }

    require('litpro-jshint')(Folder, args);
    
};    
