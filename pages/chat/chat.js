// index.js
// 获取应用实例
const app = getApp()
//输入框置为空
var inputVal = '';
//消息数组
var msgList = [];
//var windowWidth = wx.getSystemInfoSync().windowWidth;
var scrollHeight = 0;
//获取屏幕高度
var windowHeight = wx.getSystemInfoSync().windowHeight;
//
var keyHeight = 0;
//设置初始的消息数组
function initDate(that){
  inputVal = ''
  msgList = [{
    speaker: 'chatTom',
    contentType: 'text',
    msg: '恭喜EDG夺得2021年全球总决赛冠军！'
  },
  {
    speaker: 'customer',
    contentType: 'text',
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
    scrollHeight: '100rpx',
    inputBottom: 0
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
  onFocus(event){
    
    keyHeight = event.detail.height;
    console.log('键盘高度：',keyHeight)
    console.log('高度：',windowHeight)
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    console.log('滑动view高度：',scrollHeight)
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
  },
  //输入框有文字输入时获取文字内容
  onInput(event) {
    const value = event.detail.value;
   this.setData({ msg: value });
    // wx.showToast({
    //   title: value,
    //   duration: 1000
    // })
  },
  //将输入框内容发送到scroll-view中
  send() {
    let msg = this.data.msg;
     msgList.push({
      msg,
      speaker: 'customer'
     })
    this.setData({ 
      msgList,
      inputVal: '' 
    });
    wx.request({
      url: 'http://localhost:8080/test/test1',
      data: {
        testdata: this.data.msg
      },
      dataType: "json",
      method: 'POST',
      header: { 
        "Content-Type": "application/json" 
      },
      success:res => {
        console.log("success");
      }
    })
  }
})
