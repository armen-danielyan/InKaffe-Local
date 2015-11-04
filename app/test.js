var ffmpeg = require("ffmpeg");

try {
    new ffmpeg("d:/Bonus_2.mp4", function(err, video) {
        if (!err) {
            console.log(video.metadata);
            video.fnExtractSoundToMP3("d:/converted.mp3", {bitrate: 320}, function(error, file){
                if (!error) {
                    console.log('Audio file: ' + file);
                }
            });
            //console.log(video.info_configuration);
        } else {
            console.log('Error: ' + err);
        }
    });
} catch (e) {
    console.log(e.code);
    console.log(e.msg);
}