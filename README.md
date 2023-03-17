# SnackerSwiper
A basic IP grabber in Electron. ***Now with functioning auto-quit technologies!***

Supports compiling via electron packager. Install and run it with:

```bash
npm i
npm run make
```

Keep in mind you also need a copy of the WINE project and need to be on Linux.

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.
- `preload.js` - A content script that runs before the renderer process loads.


## To Use

To clone and run this repository you'll need [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Install dependencies
npm install
# Run the app
npm start
```

## License

[MIT Modified](LICENSE.md)

## Disclaimer

FOR EDUCATIONAL USE ONLY. THIS IS A SHOWCASE OF HOW ELECTRON AND NODEJS LIBS CAN BE USED TO BYPASS WINDOWS DEFENDER USING LESS-RECOGNISED CODE AND ELECTRON AS A DISGUISE. THIS IS NOT MEANT FOR MALICE
