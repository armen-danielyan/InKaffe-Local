var express     = require('express');
var walk        = require('walk');
var ffmpeg      = require("fluent-ffmpeg");
var router      = express.Router();

/* GET test page. */

router.get('/', function(req, res, next) {
    res.render('mediafiles', { title: 'mediafiles' });
});

router.post('/', function(req, res){
    if (req.body.getFiles == "list") {
        var files = [];
        var walker = walk.walk("d:\\mp3", {followLinks: false});

        walker.on('file', function (root, stat, next) {
            if (stat.name.match('^.*\.(avi|mp4|wav|mp3)$')) {
                files.push(root + '\\' + stat.name);
            }
            next();
        });

        walker.on('end', function () {
            res.send(files);
        });
    } else {
        res.send("...");
    }
});




module.exports = router;
