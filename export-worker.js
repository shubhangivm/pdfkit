const childProcess = require('child_process');

function doWork(args, cb) {
  const forked_child_process = childProcess.fork('./execute-worker.js');

  const timeout = setTimeout(() => {
    console.log("Timeout ---------------------------");
    forked_child_process.kill();
    if(cb && (typeof cb === 'function')){
      cb(null,null);
    }
  }, 300000); //1800000 //1200000

  forked_child_process.on("message", result =>
  {
    clearTimeout(timeout);
    console.log("export-worker","onmessage");
    const pdfData =Buffer.from(result, "base64")
    forked_child_process.kill();
    if(cb && (typeof cb === 'function')){
      cb(null,pdfData);
    }
  });

  forked_child_process.on('error',err=>{
    console.log("export-worker","error",err);
    forked_child_process.kill();
    if(cb && (typeof cb === 'function')){
      cb(null,null);
    }
  });

  forked_child_process.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  forked_child_process.send(args);
}

module.exports = doWork;
