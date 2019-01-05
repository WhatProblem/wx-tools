// pages/storage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabsList: [
      { id: 'tab1', name: '酱油类' },
      { id: 'tab2', name: '耗油类' },
      { id: 'tab3', name: '米醋类' },
      { id: 'tab4', name: '甜酱类' },
      { id: 'tab5', name: '辣酱类' },
      { id: 'tab6', name: '食品类' }
    ],
    foodList: [
      {
        id: "tab1",
        title: "酱油类",
        content: [
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
        ]
      },
      {
        id: "tab2",
        title: "耗油类",
        content: [
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
        ]
      },
      {
        id: "tab3",
        title: "米醋类",
        content: [
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
        ]
      },
      {
        id: "tab4",
        title: "甜酱类",
        content: [
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
        ]
      },
      {
        id: "tab5",
        title: "辣酱类",
        content: [
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
        ]
      },
      {
        id: "tab6",
        title: "食品类",
        content: [
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
          { des: 'text' },
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setSession();
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

  /**
   * 初始化设置缓存
   */
  setSession() {
    let allData = this.data.foodList;
    wx.setStorage({
      key: 'initAllData',
      data: allData,
    })
  },

  /**
   * 替换缓存
   */
  repSession() {
    let newStorage = this.data.tabsList;
    wx.setStorage({
      key: 'initAllData',
      data: newStorage,
    })
  },

  /**
   * 获取缓存
   */
  getSession() {
    wx.getStorage({
      key: 'initAllData',
      success: function(res) {
        console.log(res.data)
      },
    })
  }
})