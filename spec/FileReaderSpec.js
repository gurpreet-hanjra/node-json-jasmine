describe("Contents", function() {
    var fr = require('../FileReader');
    //  var Player = require('../../lib/jasmine_examples/Player');

    var obj;

    var bool = true;
    //console.log('dadd' , Contents);

    beforeEach(function() {
        //player = new Player();
    });

    it("should have expected output", function() {
        //console.log('raw', fr.getFileContents('file.json'));
        obj = fr.getFileContents('file.json');
        //console.log(obj.name);

        expect(obj.name).toEqual('Gurpreet Singh');
    });
});
