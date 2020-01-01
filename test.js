const ffmpeg = require('./lib/index');
ffmpeg.forceDownload();
console.log(__dirname);
console.log(ffmpeg.path);
ffmpeg.run('-version').catch((result)=>console.log(result)).then((result)=>console.log(result)); // Asynchronous
ffmpeg.run('error').then((result)=>console.log(result)).catch((result)=>console.log('Test ERROR')); // Asynchronous
try {
	console.log(ffmpeg.runSync('-version'));
} catch(e) {
	console.log(e.stdout, e.stderr, e.pid, e.signal, e.status, e.output);
    console.error(e);
}