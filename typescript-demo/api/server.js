let express = require("express");
let path = require('path');
let bodyParser = require("body-parser");
let cors = require("cors");
let session = require("express-session");
var multer = require('multer');
var upload = multer({ dest: path.resolve(__dirname, 'public') });
let MongoStore = require('connect-mongo')(session);
let { dbUrl } = require('./settings');
let { md5 } = require('./utils');
let { UserModel, SliderModel, LessonModel } = require('./db');
let app = express();
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["http://localhost:8080", "http://localhost:8081"],
        credentials: true,
        allowedHeaders: "Content-Type,x-requested-with",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS"
    })
);
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
app.use(
    session({
        secret: "zhufeng",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({
            url: dbUrl,
            mongoOptions: {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        })
    })
);
app.post('/uploadAvatar', upload.single('avatar'), async function (req, res, next) {
    let { userId } = req.body;
    let avatar = `${req.protocol}://${req.headers.host}/${req.file.filename}`;
    await UserModel.updateOne({ _id: userId }, { avatar });
    setTimeout(() => {
        res.send({ code: 0, data: avatar });
    }, 3000);
})
app.post('/register', async (req, res) => {
    let user = req.body;//username password email phone avatar
    user.avatar = `https://secure.gravatar.com/avatar/${md5(user.email)}?s=48`;
    user = await UserModel.create(user);
    req.session.user = user;
    res.json({ code: 0, user });
});

app.post('/login', async (req, res) => {
    let user = await UserModel.findOne(req.body);
    if (user) {
        req.session.user = user;
        res.json({ code: 0, data: user });
    } else {
        res.json({ code: 1, error: '用户未登录' });
    }
});
app.get("/validate", (req, res) => {
    let user = req.session.user;
    if (user) {
        res.json({ code: 0, data: user });
    } else {
        res.json({ code: 1, error: '当前用户未登录' });
    }
});
app.get("/logout", (req, res) => {
    req.session.user = null;
    res.json({ code: 0, data: "退出登录成功" });
});

app.get('/sliders', async function (req, res) {
    let sliders = await SliderModel.find();
    res.json({ code: 0, data: sliders });
});
app.get('/getlesson', async function (req, res) {
    let { id } = req.query;
    let lessons = await LessonModel.findById(id);
    res.json({ code: 0, data: lessons });
});
// http://getLessons/vue?offset=0&limit=5
app.get('/getLessons/:category', async function (req, res) {
    let category = req.params.category;
    let { offset, limit } = req.query;
    offset = isNaN(offset) ? 0 : parseInt(offset);//偏移量 
    limit = isNaN(limit) ? 5 : parseInt(limit); //每页条数
    let query = {};
    if (category && category != 'all')
        query.category = category;
    let total = await LessonModel.count(query);
    let list = await LessonModel.find(query).sort({ order: 1 }).skip(offset).limit(limit);
    setTimeout(function () {
        console.log({ list, hasMore: total > offset + limit });
        res.json({ code: 0, data: { list, hasMore: total > offset + limit } });
    }, 1000);
});
app.listen(8000);