Page({

  /**
   * 页面的初始数据
   */
    data: {
            showNo: true,
            list: [
                {
                    photo: "../../images/logo.png",
                    name: "赵小丁",
                    role: "导演"
                },
                {
                    photo: "../../images/logo.png",
                    name: "安东尼·拉默里纳拉",
                    role: "导演"
                },
                {
                    photo: "../../images/logo.png",
                    name: "刘亦菲",
                    role: "饰 白浅"
                },
                {
                    photo: "../../images/logo.png",
                    name: "杨洋",
                    role: "饰 夜华"
                },
                {
                    photo: "../../images/logo.png",
                    name: "赵小丁",
                    role: "导演"
                },
                {
                    photo: "../../images/logo.png",
                    name: "赵小丁",
                    role: "导演"
                }
            ],
            showPic: [
                {
                    imgUrl: "../../images/logo.png"
                },
                {
                    imgUrl: "../../images/logo.png"
                },
                {
                    imgUrl: "../../images/logo.png"
                },
                {
                    imgUrl: "../../images/logo.png"
                },
                {
                    imgUrl: "../../images/logo.png"
                },
            ]
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
    
  },
  showIt: function () {
    this.setData({
            showNo: false
    })
        
  },
  hideIt: function(){
    this.setData({
        showNo: true
    })
  }
})