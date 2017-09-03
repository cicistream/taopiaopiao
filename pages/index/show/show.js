Page({
    data: {
        currentTab: 0,
        city:'',
        navbar:[
            "正在热映",
            "即将上映"
            ],
        imgUrls: [
            '../../images/logo.png',
            '../../images/logo.png',
            '../../images/logo.png'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        dyList: [
            {
                imgUrl: "../../images/logo.png",
                name: "三生三世十里桃花",
                state: true,
                d: true,
                max: true,
                score: "69",
                star: [
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png'
                    ],
                directors: "赵小丁 安东尼·拉默里纳拉",
                actors: "刘亦菲 杨洋 罗晋 严屹宽"
            },
            {
                imgUrl: "../../images/logo.png",
                name: "战狼2",
                state: true,
                d: true,
                max: false,
                score: "96",
                star: [
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png'
                ],
                directors: "吴京",
                actors: "吴京 弗兰克·格里洛"
            },
            {
                imgUrl: "../../images/logo.png",
                name: "建国大业",
                state: true,
                d: false,
                max: true,
                score: "87",
                star: [
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png',
                    '../../images/null.png'
                ],
                directors: "刘伟强",
                actors: "刘烨 朱亚文 黄志忠 王景春"
            },
            {
                imgUrl: "../../images/logo.png",
                name: "鲛珠传",
                state: false,
                d: true,
                max: false,
                score: "评价人数不足",
                expectNum: 106227,
                showTime: "08-11 下周五",
                directors: "赵小丁 安东尼 拉默里纳拉",
                actors: "刘亦菲 杨洋 罗晋 严屹宽"
            }
        ]
    },
    onLoad: function (options) {
        var page = this;
        wx.getLocation({
            type: 'gcj02', //返回可以用于wx.openLocation的经纬度
            success: function (res) {
                var longitude = res.longitude
                var latitude = res.latitude
                page.loadCity(longitude, latitude)  
            }
        })
        
    },
    loadCity: function (longitude, latitude) {
        var page = this
        wx.request({
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=您的ak &location=' + latitude + ',' + longitude + '&output=json',
            data: {},
            header: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                // success  
                console.log(res);
                var city = res.data.result.addressComponent.city;
                page.setData({ city: city });
            },
            fail: function () {
                // fail  
            },
            complete: function () {
                // complete  
            }
        })
    },  
    navbarTap: function (e) {
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        })
    },
    bindChange: function (e) {
        this.setData({ currentTab: e.detail.current });
    },
    starState:function(score, index) {
        let state = index * 2 + 1;
        var hollow = "../../images/null.png";
        var half = "../../images/half.png";
        var full = "../../images/full.png";
        if (Math.round(score) < state) {
            return hollow;
        }
        else if (Math.round(score) > state) {
            return full;
        }
        else return half;
    },
    goDetail:function(event){
        console.log(1)
        wx.navigateTo({
            url: '../detail/detail'
        })
    }
})