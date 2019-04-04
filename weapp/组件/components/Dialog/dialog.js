// components/Dialog/dialog.js
Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      value: '提示',
      type: String
    },
    content: {
      type: String,
      value: '弹窗内容'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    confirmText: {
      type: String,
      value: '确定'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showDialog(){
      this.setData({
        isShow: !this.data.isShow
      })
    },

    // 触发内部方法
    _cancelEvent(){
      // 内部方法处理时间
      console.log('cancel')
      let cancelInfo = {
        name: 'yijun',
        way: 'components'
      }
      let info = {
        info: 'info2',
        way: 'info'
      }
      //把方法暴露出去给其他组件使用   其他组件绑定cancelEvent 事件
      this.triggerEvent('cancelEvent', info ,cancelInfo)
    },
    _confirmEvent(){
      console.log('confirm')
      this.triggerEvent('confirmEvent')
    }
  }
})
