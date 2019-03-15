// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:38,
    longitude:112
  },
bindcontroltap:function(e){
  // console.log(e)
  switch(e.controlId){
    case 1:
    this.movetoCenter();
    break;
    case 2:
    if(this.timer){
      wx.navigateBack({
        delta:1
        })
    }else{
      wx.scanCode({
        success: () => {
          wx.showLoading({
            title: '正在获取密码',
          })
          console.log(123)
          wx.request({
            url: 'https://www.easy-mock.com/mock/5ac6cd0c6ddd9f2b4bd173ba/example_copy/password',
            success: (res) => {
              console.log(res)
              wx.hideLoading();
              wx.redirectTo({
                url: '../scanResult/index?password=' + res.data.data.password + '&number=' + res.data.data.number,
                success: () => {
                  wx.showToast({
                    title: '获取密码成功',
                    duration: 1000

                  })
                }
              })


            }
          })
        },
        fail: () => {

        }
      })
    }
    break;
    case 3:
    wx.navigateTo({
      url: '../warn/index',
    })
    break;
    case 4:
    wx.navigateTo({
      url: '../my/index',
    })
    break;
  }

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.timer = options.timer;
   wx.getLocation({
     success: (res)=> {
       console.log(res)
       this.setData({
         longitude:res.longitude,
         latitude:res.latitude
       })
     },
    
   })
   wx.getSystemInfo({
     success: (res) => {
       this.setData({
         controls: [{
           id: 1,
           iconPath:"../image/2.png",
           position:{
             width:50,
             height:50,
             left:20,
             top:res.windowHeight-80
           },
           clickable:true
           },{
           id: 2,
           iconPath: "../image/1.png",
           position: {
             width: 100,
             height: 100,
             left: res.windowWidth/2-50,
             top: res.windowHeight - 110
           },
           clickable: true
           }, {
             id: 3,
             iconPath: "../image/3.png",
             position: {
               width: 50,
               height: 50,
               left: res.windowWidth-70,
               top: res.windowHeight - 80
             },
             clickable: true
           }, {
             id: 4,
             iconPath: "../image/4.png",
             position: {
               width: 50,
               height: 50,
               left: res.windowWidth-70,
               top: res.windowHeight - 150
             },
             clickable:true
         }]
       })
     },
   })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  movetoCenter:function(){
    this.mapctx.moveToLocation();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.mapctx = wx.createMapContext("ofo-map");
    this.movetoCenter();  
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