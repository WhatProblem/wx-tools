// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pHeight: 0,
    curId: '',
    toView: '',
    titleHeight: 0,
    contentHeight: 0,
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
    this.setData({
      pHeight: wx.getSystemInfoSync().windowHeight,
      curId: this.data.tabsList[0]['id']
    })
  },

  /**
   * scroll滚动
   */
  scroll(e) {
    let scrollTop = e.detail.scrollTop;
    let high = 0;
    let selectedId = '';
    this.data.foodList.forEach((item, i) => {
      let optHeight = this.data.titleHeight + item.content.length * this.data.contentHeight;
      // let optHeight = 30 + item.content.length * 60;
      if (scrollTop >= high) {
        selectedId = item.id
      }
      high += optHeight;
    });
    this.setData({
      curId: selectedId
    })
  },

  /**
   * 获取每个分类中标题和每个列表项的高度
   */
  getEleHigh() {
    let query = wx.createSelectorQuery();
    query.select('.foodTitle').boundingClientRect((rect) => {
      this.setData({
        titleHeight: rect.height
      })
    }).exec();
    query.select('.foodMain').boundingClientRect((rect) => {
      this.setData({
        contentHeight: rect.height
      })
    }).exec();
  },

  /**
   * 点击tabs
   */
  clickTabs(e) {
    let id = e.currentTarget.dataset.id;
    this.setData({
      curId: id,
      toView: id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getEleHigh();
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