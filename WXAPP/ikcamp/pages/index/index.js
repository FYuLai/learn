// pages/index/index.js
import util from '../../utils/index'
const app = getApp()
let page = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
    articleList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.requestArticle()
  },
  requestArticle(){
    //分页请求
    page++;
    util.request({
      mock:true,
      url: 'list',
      page:1,
      pageSize:4
    }).then(res => {
      // 正常
      let articleList = res.data;
      console.log(articleList)
      articleList = this.formatArticle(articleList);
      // 把标记过的属性拿过来 拿到所有文章 判断一下
      //加上hasVisited 属性
      let oldArticleList = this.data.articleList;
      let newArtilceList = oldArticleList.concat(articleList)
      this.setData({
        articleList: newArtilceList
      })

    }).catch(() => {
      // 
    })
  },
  formatArticle(articleList){
    let visitedID = wx.getStorageSync('visitedID') || [];
    //根据一份数据 来返回另一份数据 多用map 
    articleList = articleList.map(group => {
      group.articles = group.articles.map(item => {
        if(visitedID.includes(item.contentId)) {
          item.hasVisited = true;
        }
        return item;
      })
      return group;
    })
    return articleList;
  },

  
  showDetail(e){
    let item = e.target.dataset.item;
    const contentId = item.contentId;
    console.log(contentId)
    let visitedID = wx.getStorageSync('visitedID') || []
    if (!visitedID.includes(contentId)){
      visitedID.push(contentId);
    }
    
    wx.setStorageSync('visitedID',visitedID);
    wx.navigateTo({
      url: `../detail/detail?contentId=${contentId}`
    })
    // contentId
    // 设置本地缓存
    // 标记为已经阅读过的
    //去到详情页
  },
  onReachBottom(){
    this.requestArticle()
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
  

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})