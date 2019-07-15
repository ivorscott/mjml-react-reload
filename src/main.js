require('@babel/runtime/regenerator')
require('@babel/register')
require('webpack-hot-middleware/client?reload=true') // send down to the client the websocket connection
require('./index.html')
require('./app')
