// pages/userdata/userdata.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      name:"",
      sex:"",
      age:"",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.setData({
        name:wx.getStorageSync('name'),
        sex:wx.getStorageSync('sex'),
        age:wx.getStorageSync('age')
      })
      console.log(wx.getStorageSync('name'),wx.getStorageSync('sex'),wx.getStorageSync('age'))
     
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    gotologin:function( e){
        wx.navigateTo({
          url: '/pages/login/login',
        })
    },
  //   gotoregister:function( e){
  //     wx.navigateTo({
  //       url: '/pages/register/register',
  //     })
  // },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
      
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
  
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})