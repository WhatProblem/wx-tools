// pages/parabola/parabola.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pHeight: 0,
    ballX: 0,
    ballY: 0,
    showBall: false,
    animationX: null,
    animationY: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      pHeight: wx.getSystemInfoSync().windowHeight,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 抛物线动画
   */
  handleClick(e) {
    let x = e.detail.x;
    let y = e.detail.y;
    this.cartAnimation(x, y);
  },

  cartAnimation(x, y) { // x y 为手指点击的坐标，即球的起始坐标
    let self = this;
    let cartY = this.data.pHeight - 200; // 结束位置（购物车图片）纵坐标
    let cartX = 50; // 结束位置（购物车图片）的横坐标
    let animationX = this.flyX(cartX, x); // 创建球的横向动画
    let animationY = this.flyY(cartY, y); // 创建球的纵向动画
    this.setData({
      ballX: x,
      ballY: y,
      showBall: true
    })
    self.setTimeoutES6(100).then(() => { // 100 秒延时，确保球已经到位并显示
      self.setData({
        animationX: animationX.export(),
        animationY: animationY.export(),
      })
      return self.setTimeoutES6(400) // 400 是球的抛物线动画时长
    }).then(() => { // 400 秒延时后隐藏球
      this.setData({
        showBall: false,
      })
    })
  },

  setTimeoutES6(sec) { // Promise 化 setTimeout
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, sec)
    })
  },

  flyX(cartX, oriX) { // 水平动画
    let animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'linear',
    })
    animation.left(cartX).step()
    return animation
  },

  flyY(cartY, oriY) { // 垂直动画
    let animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease-in',
    })
    animation.top(cartY).step()
    return animation
  }
})