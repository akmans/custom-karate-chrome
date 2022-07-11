function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
    myVarName: 'someValue'
  }

  if (env == 'ci') {
    // Browser指定
    karate.configure('driver', { type: 'chrome', start: false, showDriverLog: true, beforeStart: 'supervisorctl start ffmpeg', afterStop: 'supervisorctl stop ffmpeg', videoFile: '/tmp/karate.mp4'});
  }

  return config;
}