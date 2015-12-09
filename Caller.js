var fr = require('./FileReader'),
    obj = {};

//console.log('CALLER', fr.getFileContents('file.json'));

obj = fr.getFileContents('file.json');
console.log(obj.name);
