Page({

  /**
   * 页面的初始数据
   */
    data: {
        currentTab: 0,
        area: -1,
        fea: -1,
        areaChoose: "不限",
        featureChoose: "不限",
        address: [
            "北塘区", "滨湖区", "崇安区", "惠山区", "江阴市", "南长区", "市区", "新区", "锡山区", "宜兴市"
        ],
        features: [
            "退票", "改签", "观影小食", "IMAX厅", "巨幕厅", "realD厅", "4K厅", "4DX厅", "4D厅", "双机3D", "杜比厅"
        ]
    },
    addressTab:function(e){
        var self=this;
        wx.setStorage({
            key: "area",
            data: e.currentTarget.dataset.idx
        });
        this.setData({
            area: e.currentTarget.dataset.idx
        })
    },
    featureTab:function(e){
        wx.setStorage({
            key: "fea",
            data: e.currentTarget.dataset.index
        })
        this.setData({
            fea: e.currentTarget.dataset.index
        })
    },
    cancel: function(){
        wx.clearStorage();
        wx.switchTab({
            url: '../cinema'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var self = this;
        wx.getStorage({
            key: 'area',
            success: function (res) {
                self.setData({
                    area: res.data,
                })
            }
        }),
        wx.getStorage({
            key: 'fea',
            success: function (res) {
                self.setData({
                    fea: res.data,
                })
            }
        })
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