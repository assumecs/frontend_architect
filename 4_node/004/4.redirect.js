let express = require('express');

let app = express();

app.listen(3000);

app.get('/', function(req, resp) {
    resp.setHeader('Location', 'http://www.baidu.com');
    resp.statusCode = 302;
    resp.end();
    // resp.redirect('http://www.baidu.com');
})