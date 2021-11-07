// index.js
// 获取应用实例
const app = getApp()
var inputVal = '';
var msgList = [];
//var windowWidth = wx.getSystemInfoSync().windowWidth;
//var windowHeight = wx.getSystemInfoSync().windowHeight;
//var keyHeight = 0;
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
  // data: {
  //   messages: [],         // 聊天记录
  //   msg: '',              // 当前输入
  //   scrollTop: 0,         // 页面的滚动值
  //   socketOpen: false,    // websocket是否打开
  //   lastId: '',           // 最后一条消息的ID
  //   isFirstSend: true     // 是否第一次发送消息(区分历史和新加)
  // },
  // 事件处理函数

  onLoad() {
    initDate(this);
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    
  },
  onInput(event) {
    const value = event.detail.value;
   this.setData({ msg: value });
    wx.showToast({
      title: value,
      duration: 1000
    })
  },
  send() {
    let msg = this.data.msg;
     msgList.push({
      msg,
      speaker: 'customer'
     })
    this.setData({ 
      msgList,
      inputVal: '' });
  }
})
