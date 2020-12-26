const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname__ + '/dist/funto'));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname__ + '/dist/funto/index.html'));
})

app.listen(process.env.PORT || 8000);