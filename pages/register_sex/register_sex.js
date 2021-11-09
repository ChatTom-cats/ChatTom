// pages/register_sex/register_sex.js
Page({
    data: {
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
  
    // 选择
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
      }
      this.setData({
        list: this.data.list,  
      })
      console.log(this.data.list[index].name);   
    },
  
      gotoChat:function( ){
          wx.navigateTo({
            url: '/pages/index/index',
          })  
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
  