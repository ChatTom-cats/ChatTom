// pages/register/register.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:"",
        check_name:"T",
        sex:"",
        age:"",
        checked:"",
        list: [{
            img: "../../images/boy.png",
            name: "male",
            checked: true,
          },
          {
            img: "../../images/girl.png",
            name: "female",
            checked: false,
          }
        ]
    },

    nameInput: function (e) {
        this.setData({
          name: e.detail.value
        })
        console.log(e.detail.value)
        var username = e.detail.value
        console.log(username)
      },

      gotoSex:function( e){
      wx.navigateTo({
        url: '/pages/register_sex/register_sex',
      }) 
    },

    choose: function (e) {
  
        let index = e.currentTarget.dataset.id;
        let list = this.data.list;
        for (let i = 0; i < list.length; i++) {
          this.data.list[i].checked = false;
        }
        if (list[index].checked) {
          this.data.list[index].checked = false;
        } else {
          this.data.list[index].checked = true;
          this.setData({checked:"T"})
        }
        this.setData({
          list: this.data.list, 
          sex: this.data.list[index].name 
        })
        console.log(this.data.sex);   
      },
    

    ageInput:function (e) {
      if(e.detail.value>0&&e.detail.value<100){
          this.setData({
            age:e.detail.value
          })
          var userage = e.detail.value
      }else{
          wx.showToast({
          title: '警告:请输入0-100的数字',     
          icon: 'none',    
          duration: 2000//持续的时间  
        })
        this.setData({
          age:0
        })
        var userage = e.detail.value
      }
    },

    chosenSex:function(e){
      this.setData({
        check_name: ""
      })
    },
    gotoRegister_data:function( ){
        wx.setStorageSync('name', this.data.name)
        wx.setStorageSync('sex', this.data.sex)
        wx.setStorageSync('age', this.data.age)
        wx.navigateTo({
          url: '/pages/register_data/register_data',
        })  
      },
    gotoChat:function( ){
        wx.navigateTo({
          url: '/pages/chat/chat',
        })  
      },

    loginForm: function(data) {
      console.log(data.detail.value)
      var username = data.detail.value.name-input
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

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