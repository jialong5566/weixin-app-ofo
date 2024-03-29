// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:{
      num:0,
      desc:''
    },
    picUrls:[],
    actionText:'拍摄/相册',
    checkBoxvalue:[],
    itemsValue:[{value:"私用",
      checked:false,
      color:"#b9dd08"},
      {value: "没牌",
        checked: false,
        color: "#b9dd08"
      },{value: "爆胎",
        checked: false,
        color: "#b9dd08"
      },{value: "锁坏",
        checked: false,
        color: "#b9dd08"
      },{value: "乱放",
        checked: false,
        color: "#b9dd08"
      }, {value: "密错",
        checked: false,
        color: "#b9dd08"
      }, {value: "没刹",
        checked: false,
        color: "#b9dd08"
      }, {value: "其他",
        checked: false,
        color: "#b9dd08"
      }],
      btnColor:"#f2f2f2"
  },
changeCheckbox:function(e){
  var _value=e.detail.value;
  if(_value.length==0){
    this.setData({
      btnColor:"#f2f2f2",
      checkboxValue:[]
    })
  }else{
    this.setData({
      checkboxValue:_value,
      btnColor:"#b9dd08"
    })
  }
  console.log(this)  
},
clickPhoto:function(){
  wx.chooseImage({
    success:(res)=>{
      var _picUrls = this.data.picUrls;
      var _tfs = res.tempFilePaths;
      for(let temp of _tfs){
        _picUrls.push(temp);
        this.setData({
          picUrls:_picUrls,
          actionText:"+"
        })
      }
    }
  })
},
delPic:function(e){
  let index = e.target.dataset.index;
  let _picUrls = this.data.picUrls;
  _picUrls.splice(index,1);
  this.setData({
    picUrls:_picUrls
  })
  if(_picUrls.length==0){
    this.setData({
      actionText:'拍摄/相册'
    })
  }
},
changeNumber(e){
  this.setData({
    inputValue:{
      num:e.detail.value,
      desc:this.data.inputValue.desc
    }
  })

},
changeDesc(e) {
  this.setData({
    inputValue: {
      num: this.data.inputValue.desc,
      desc: e.detail.value
    }
  })

},
submit:function(){
  if(this.data.picUrls.length>0&&this.data.checkboxValue.length>0){
    wx.request({
      url: 'https://www.easy-mock.com/mock/5ac6cd0c6ddd9f2b4bd173ba/example_copy/password_copy_1522983472794',
      success:(res)=>{
        wx.showToast({
          title: '提交成功',
          icon:'success'
        })
      }
    })
  }else{
    wx.showModal({
      title: '请填写完整信息',
      content: '快点的',
      confirmText:'没有问题',
      cancelText:'你算老几',
      success:(res)=>{
        if(res.confirm){

        }else{
          wx.navigateBack({
            delta:1
          })
        }
      }
    })

  }
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