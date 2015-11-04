var ffmpeg = require("fluent-ffmpeg");

var mediaSource = "d:/Bonus_2.mp4";
var mediaTarget = "d:/aaa.mp3";

var proc = new ffmpeg({source: mediaSource, nolog: false})
    .noVideo()
    .withAudioCodec('libmp3lame')
    .withAudioBitrate('320k')
    .withAudioChannels(2)
    .toFormat('mp3')
    .on('progress', function(progress) {
        console.log('Processing: ' + Math.floor(progress.percent) + '% done');
    })
    .on('error', function(err, stdout, stderr) {
        console.log('Cannot process video: ' + err.message);
    })
    .on('end', function() {
        console.log('Transcoding succeeded !');
    })
    .save(mediaTarget);