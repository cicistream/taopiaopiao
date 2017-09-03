Page({

  /**
   * 页面的初始数据
   */
  data: {
        area: "不限",
        feature: "不限",
        show: false,
        address: [
            "北塘区", "滨湖区", "崇安区", "惠山区", "江阴市", "南长区", "市区", "新区", "锡山区", "宜兴市"
        ],
        features: [
            "退票", "改签", "观影小食", "IMAX厅", "巨幕厅", "realD厅", "4K厅", "4DX厅", "4D厅", "双机3D", "杜比厅"
        ],
        cinemaList: [
            {
                name: "星美国际影商城上海松江店",
                price: "22.8",
                address: "松江区环城路555号LOMO玩库3楼",
                features: [
                    {
                        name: "退票"
                    }
                ]
            },
            {
                name: "卢米埃上海大荣影城",
                price: "22.8",
                address: "嘉定区宝安公路100号大融城4楼",
                features: [
                    {
                        name: "退票"
                    },
                    {
                        name: "4D厅"
                    }
                ]
            },
            {
                name: "星美国际影商城上海松江店",
                price: "22.8",
                address: "松江区环城路555号LOMO玩库3楼",
                features: [
                    {
                        name: "退票"
                    },
                    {
                        name: "realD"
                    }
                ]
            },
            {
                name: "星美国际影商城上海松江店",
                price: "22.8",
                address: "松江区环城路555号LOMO玩库3楼",
                features: [
                    {
                        name: "退票"
                    },
                    {
                        name: "realD"
                    }
                ]
            },
            {
                name: "星美国际影商城上海松江店",
                price: "22.8",
                address: "松江区环城路555号LOMO玩库3楼",
                features: [
                    {
                        name: "退票"
                    },
                    {
                        name: "realD"
                    }
                ]
            },
            {
                name: "星美国际影商城上海松江店",
                price: "22.8",
                address: "松江区环城路555号LOMO玩库3楼",
                features: [
                    {
                        name: "退票"
                    },
                    {
                        name: "realD"
                    }
                ]
           }
       ]
  },
  filtrate: function(){
      wx.navigateTo({
          url: 'filtrate/filtrate',
      })
  },
  search: function(){
      wx.navigateTo({
          url: 'search/search',
      })
      wx.clearStorage();
  },
  resetChoose:function(){
      wx.clearStorage();
      this.setData({
          show: false
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var keys,key;
    var self = this;
    wx.getStorage({
        key: 'area',
        success: function (res) {
            self.setData({
               area: res.data,
               show: true
            })
        }}),
    wx.getStorage({
        key: 'fea',
        success: function (res) {
            console.log(res)
            self.setData({
                feature: res.data,
                show: true
            })
        }})
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