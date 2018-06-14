const express = require('express')
const app = express()

const path = require('path')
const viewsFolder = path.join(__dirname, 'views');
app.set('views', viewsFolder);

const jsToJs = require('js-to-js');
app.engine('js', jsToJs);

const {store, retrieve} = require('./my_modules/local-storage')

app.get('/js/io-config.js', function (req, res) {
    // use this for correct content-type -
    // Express will think it is text/html by default
    res.setHeader('content-type', 'application/javascript');
    // this path is WRT views folder
    res.render('js/io-config.js', {
        // use any run-time values, for example from config
        store: store.toString(),
        retrieve: retrieve.toString()
    });
});

app.use(express.static('public'));

app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})