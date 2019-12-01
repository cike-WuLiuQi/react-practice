const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const { dbUrl } = require('../settings');
const conn = mongoose.createConnection(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const UserModel = conn.model('User', new Schema({
  username: { type: String, required: true },//用户名
  password: { type: String, required: true },//密码
  email: { type: String, required: true },//邮箱
  phone: { type: String, required: true },//手机号
  avatar: { type: String, required: true }//头像
}));
const SliderModel = conn.model('Slider', new Schema({
  url: String
}));
const LessonModel = conn.model('Lesson', new Schema({
  order: Number,//顺序
  title: String,//标题
  video: String,//视频
  poster: String, //海报
  url: String,//url地址
  price: String,//价格
  category: String,//分类
}));

module.exports = {
  UserModel,
  SliderModel,
  LessonModel
}

  ; (async function () {
    let sliderList = await SliderModel.find();
    if (sliderList.length == 0) {
      SliderModel.create([
        { url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/reactnative.png' },
        { url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png' },
        { url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png' },
        { url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/wechat.png' },
        { url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/architect.jpg' }
      ]);
    }
    let lessonList = await LessonModel.find();
    if (lessonList.length == 0) {
      LessonModel.create([
        {
          order: 1,
          title: '1.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥100.00元',
          category: 'react'
        },
        {
          order: 2,
          title: '2.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥200.00元',
          category: 'react'
        },
        {
          order: 3,
          title: '3.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥300.00元',
          category: 'react'
        },
        {
          order: 4,
          title: '4.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥400.00元',
          category: 'react'
        },
        {
          order: 5,
          title: '5.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥500.00元',
          category: 'react'
        },
        {
          order: 6,
          title: '6.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥100.00元',
          category: 'vue'
        },
        {
          order: 7,
          title: '7.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥200.00元',
          category: 'vue'
        },
        {
          order: 8,
          title: '8.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥300.00元',
          category: 'vue'
        },
        {
          order: 9,
          title: '9.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥400.00元',
          category: 'vue'
        },
        {
          order: 10,
          title: '10.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥500.00元',
          category: 'vue'
        },
        {
          order: 11,
          title: '11.React全栈架构',
          "video": "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥600.00元',
          category: 'react'
        },
        {
          order: 12,
          title: '12.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥700.00元',
          category: 'react'
        },
        {
          order: 13,
          title: '13.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥800.00元',
          category: 'react'
        },
        {
          order: 14,
          title: '14.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥900.00元',
          category: 'react'
        },
        {
          order: 15,
          title: '15.React全栈架构',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/react/img/react.jpg",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/react.png',
          price: '¥1000.00元',
          category: 'react'
        },
        {
          order: 16,
          title: '16.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥600.00元',
          category: 'vue'
        },
        {
          order: 17,
          title: '17.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥700.00元',
          category: 'vue'
        },
        {
          order: 18,
          title: '18.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥800.00元',
          category: 'vue'
        },
        {
          order: 19,
          title: '19.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥900.00元',
          category: 'vue'
        },
        {
          order: 20,
          title: '20.Vue从入门到项目实战',
          video: "http://img.zhufengpeixun.cn/gee2.mp4",
          poster: "http://www.zhufengpeixun.cn/vue/img/vue.png",
          url: 'http://www.zhufengpeixun.cn/themes/jianmo2/images/vue.png',
          price: '¥1000.00元',
          category: 'vue'
        }
      ]);
    }
  })();