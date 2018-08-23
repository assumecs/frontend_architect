let express = require('express');
let router = express.Router();  // 创建一个路由池

router.get('/post', function(req, resp) {
    resp.send('发表');
})
router.get('/delete', function(req, resp) {
    resp.send('删除');
})

module.exports = router;