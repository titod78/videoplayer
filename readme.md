
# <a id="Video_Player_0"></a>Video Player

# <a id="STARZ_PLAY_Code_Challenge_4"></a>JavaScript ES6 Video Player.

*   Video Web Page
*   You can play video in Chrome, Firefox and Safari
*   In Safari only, the player use the native video player to play HLS instead of MPEG-DASH
*   The video has subtitles
*   English and Arabic languages are supported

For this project, i used a modular architecture based on components made with JavaScript ES6. The reason is that i needn’t data persistence.
if is necessary, the components return a public interface for can used it from another components.
The request to REST service are cached in broeser session storage.

### <a id="Tech_16"></a>Tech

The technologies that i used are:

*   [JavaScript] - ES6
*   [HTML5]
*   [CSS3]

### <a id="External_libraries_24"></a>External libraries

*   [webpack](https://webpack.js.org/) - Module bundler for modern JavaScript applications
*   [dashjs](http://cdn.dashjs.org/latest/jsdoc/index.html) - A reference client implementation for the playback of MPEG DASH via JavaScript

### <a id="Installation_29"></a>Installation

Video Player requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```
$ cd videoplayer
$ npm install

```

For build the bundle.js

```
$ npm run build

```

### <a id="Web_server_46"></a>Web server

Is necessary install a web server for running the video on Chrome browsers

*   [http-server](http://jasonwatmore.com/post/2016/06/22/nodejs-setup-simple-http-server-local-web-server) - The web server runs on the http-server npm package

#### <a id="Instalation_52"></a>Instalation

Install the http-server globally on your machine using the node package manager (npm) command line tool, this will allow you to run a web server from anywhere on your computer

```
$ npm install -g http-server

```

In the project directory start the server with this command

```
$ http-server

```

You should see something like the following:

```
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.3:8080
Hit CTRL-C to stop the server

```

## <a id="Browse_to_your_local_website_with_a_browser_73"></a>Browse to your local website with a browser

Open your browser and go to the address [http://localhost:8080](http://localhost:8080) and you should see your local website.

**Thank you so much for your time, Hell Yeah!**