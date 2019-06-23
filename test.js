const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require("fs");

function launchChromeAndRunLighthouse(url, opts, config) {
  config=null;
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      return chrome.kill().then(() => results.lhr)
    });
  });
}

const opts = {
  chromeFlags: ['--show-paint-rects']
};

launchChromeAndRunLighthouse('https://www.baidu.com', opts).then(results => {
    const out = fs.createWriteStream('./test.json',{encoding:"utf8"})
    out.write(JSON.stringify(results, null, 2));
    out.end();
});