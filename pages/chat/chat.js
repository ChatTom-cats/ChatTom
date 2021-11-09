// index.js
// 获取应用实例
const app = getApp()
//输入框置为空
var inputVal = '';
//消息数组
var msgList = [];
var inputheight = 0;
//var windowWidth = wx.getSystemInfoSync().windowWidth;

//获取屏幕高度
var windowHeight = wx.getSystemInfoSync().windowHeight;
//
var keyHeight = 0;
//设置初始的消息数组
function initDate(that){
  inputVal = ''
  msgList = [{
    speaker: 'chatTom',
    msg: '恭喜EDG夺得2021年全球总决赛冠军！'
  },
  {
    speaker: 'customer',
    msg: 'EDG牛逼！'
  }
]
  that.setData({
    msgList,
    inputVal
  })
}
Page({
  data: {
    scrollHeight: '100vh',
    inputBottom: 0,
    lastid: ''
  },
  //初始化屏幕的消息
  onLoad() {
    initDate(this);
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
    
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    
  },
  //input获得聚焦时
  onFocus(e){
    keyHeight = e.detail.height;
    console.log('键盘高度：',keyHeight)
    console.log('高度：',windowHeight)
    this.setData({
      inputBottom: keyHeight + 'px'
    })
  },
  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0 
    })

  },
  //输入框有文字输入时获取文字内容
  onInput(event) {
    const value = event.detail.value;
   this.setData({ msg: value });
    
  },
  //将输入框内容发送到scroll-view中
  send() {
    let msg = this.data.msg;
    //提示输入为空
    if (msg === '') {
      wx.showToast({
        title: '请输入内容',
        icon: 'loading',
        duration: 1000
      })
      return false;
    }
     msgList.push({
      msg,
      speaker: 'customer'
     })
     var query = wx.createSelectorQuery();
     
    //获取input高度
    query.select('#input').boundingClientRect()
    query.exec(function (res) {
      //res就是标签为input的元素的信息的数组
      //取高度
      inputheight=res[0].height;
    })
    this.setData({ 
      msgList,
      inputVal: '',
      toView: 'msg' + (msgList.length - 1),
      scrollHeight: (windowHeight - keyHeight - inputheight) + 'px'
    });
  }
})
