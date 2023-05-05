"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dynamicList: [],
      items: ["选项1", "选项2", "选项3"],
      current: 0,
      list: [
        {
          url: "icon-daifukuan ",
          text: "待付款",
          badge: "0",
          type: "primary"
        },
        {
          url: "icon-yifahuo",
          text: "待发货",
          badge: "1",
          type: "success"
        },
        {
          url: "icon-daifahuo",
          text: "待收货",
          badge: "99",
          type: "warning"
        },
        {
          url: "icon-yiwanchengdingdan",
          text: "已完成",
          badge: "2",
          type: "error"
        },
        {
          url: "icon-shouhou",
          text: "售后",
          badge: "2",
          type: "error"
        }
      ]
    };
  },
  methods: {
    change(e) {
      let {
        index
      } = e.detail;
      this.list[index].badge && this.list[index].badge++;
      common_vendor.index.showToast({
        title: `点击第${index + 1}个宫格`,
        icon: "none"
      });
    },
    shareToggle() {
      this.$refs.share.open();
    },
    onClickItem(e) {
      if (this.current != e.currentIndex) {
        this.current = e.currentIndex;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_pagination2 = common_vendor.resolveComponent("uni-pagination");
  const _easycom_uni_popup_share2 = common_vendor.resolveComponent("uni-popup-share");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  (_easycom_uni_icons2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_section2 + _easycom_uni_notice_bar2 + _easycom_uni_pagination2 + _easycom_uni_popup_share2 + _easycom_uni_popup2 + _easycom_uni_rate2 + _easycom_uni_segmented_control2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_pagination = () => "../../uni_modules/uni-pagination/components/uni-pagination/uni-pagination.js";
const _easycom_uni_popup_share = () => "../../uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_section + _easycom_uni_notice_bar + _easycom_uni_pagination + _easycom_uni_popup_share + _easycom_uni_popup + _easycom_uni_rate + _easycom_uni_segmented_control)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: "1cfb8da0-3-" + i0 + "," + ("1cfb8da0-2-" + i0),
        b: common_vendor.p({
          ["custom-prefix"]: "iconfont",
          type: item.url,
          size: 30,
          color: "#777"
        }),
        c: common_vendor.t(item.text),
        d: index,
        e: "1cfb8da0-2-" + i0 + ",1cfb8da0-1",
        f: common_vendor.p({
          index
        })
      };
    }),
    b: common_vendor.o($options.change),
    c: common_vendor.p({
      column: 5,
      highlight: true,
      showBorder: false
    }),
    d: common_vendor.p({
      title: "我的订单",
      titleFontSize: "16px",
      padding: true
    }),
    e: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      text: "uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
    }),
    f: common_vendor.p({
      title: "文字滚动",
      subTitle: "使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示",
      type: "line"
    }),
    g: common_vendor.p({
      title: "标题文字",
      ["show-icon"]: "true",
      total: "50",
      current: "2"
    }),
    h: common_vendor.o((...args) => $options.shareToggle && $options.shareToggle(...args)),
    i: common_vendor.p({
      title: "底部分享示例",
      type: "line",
      padding: true
    }),
    j: common_vendor.sr("share", "1cfb8da0-8"),
    k: common_vendor.p({
      type: "share",
      safeArea: true,
      backgroundColor: "#fff"
    }),
    l: common_vendor.p({
      size: "18",
      value: 5
    }),
    m: common_vendor.p({
      title: "设置尺寸大小",
      subTitle: "设置 size 属性控制组件大小",
      type: "line",
      padding: true
    }),
    n: common_vendor.o($options.onClickItem),
    o: common_vendor.p({
      current: $data.current,
      values: $data.items,
      styleType: "button",
      activeColor: "#4cd964"
    }),
    p: $data.current === 0,
    q: $data.current === 1,
    r: $data.current === 2
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/test/fireDemo/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
