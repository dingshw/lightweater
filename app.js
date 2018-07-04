App({
  onLaunch () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.systeminfo = res
      },
    })
  },
  globalData: {
    // 是否保持常亮，离开小程序失效
    keepscreenon:false,
    systeminfo: {},
    ak: '4tRDfmeg8kuxRk2E4ZgPkH0Fpli7ieIX',
  },
  setGeocoderUrl (address) {
    return `https://api.map.baidu.com/geocoder/v2/?address=${address}&output=json&ak=${this.globalData.ak}`
  },
})