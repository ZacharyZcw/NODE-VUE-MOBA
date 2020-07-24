module.exports = app => {
    const mongoose = require("mongoose")
    // mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    //     useNewUrlParser: true
    // })
    mongoose.connect("mongodb://127.0.0.1:27017/mode-vue-moba", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(res => {
        console.log('数据库连接成功')
    })
}