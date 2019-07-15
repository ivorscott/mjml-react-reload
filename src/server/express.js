import http from 'http'
import express from 'express'
import { render } from 'mjml-react'
import reload from 'reload'
import logger from 'morgan'
import bodyParser from 'body-parser'
import * as mjmlReactTemplate from './templates/email-1'

import { reloadable } from './helpers'

const app = express()

const webpack = require('webpack')
const config = require('../../config/webpack.dev.js')
const compiler = webpack(config)

const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer
)

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(webpackHotMiddleware)
app.use(webpackDevMiddleware)

const staticMiddleware = express.static('dist')

app.set('port', process.env.PORT || 3000)
app.use(staticMiddleware)

/**
 * MJML Email template examples
 * email-1 uses mjml-react (its dynamic -- allows variables)
 */
app.get('/email-1', (req, res) => {
    const { html } = render(mjmlReactTemplate.generate(/* give me data */), {
        validationLevel: 'soft',
    })
    res.send(reloadable(html))
})

const server = http.createServer(app)

reload(app)
    .then(function() {
        server.listen(app.get('port'), () => {
            console.log('Web server is listening on port ' + app.get('port'))
        })
    })
    .catch(function(err) {
        console.error(
            'Reload could not start, could not start server/sample app',
            err
        )
    })
