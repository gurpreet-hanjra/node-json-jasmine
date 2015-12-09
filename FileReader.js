var fs = require('fs'),
    file = 'file.json',
    info;


var readModules = {

    getFileContents: function (file) {
        var result = fs.readFileSync(file, 'utf8', function (err, contents) {
            if (err) throw err;
            info = JSON.parse(contents);
        });

        return JSON.parse(result);
    }
};

/*function getFileContents (file) {
    fs.readFile(file, 'utf8', function (err, contents) {
        if (err) throw err;
        var info = JSON.parse(contents);
        console.log('contents:', info);
    })
};*/

//module(file);
module.exports = readModules;

