"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      imageUrl: "../../static/logo.png",
      // 要分享的图片链接
      title: "这是要分享的标题",
      // 要分享的文本内容
      poster: "",
      // 生成的海报链接
      canvasWidth: 375,
      // canvas宽度
      canvasHeight: 600,
      // canvas高度
      options: [{
        icon: "shop",
        text: "首页",
        infoBackgroundColor: "#007aff",
        infoColor: "#f5f5f5"
      }, {
        icon: "chat",
        text: "客服"
      }, {
        icon: "cart",
        text: "购物车",
        info: 2
      }],
      buttonGroup: [
        {
          text: "加入购物车",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff"
        },
        {
          text: "立即购买",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff"
        }
      ],
      autoplay: false,
      interval: 2e3,
      duration: 500,
      current: 0,
      mode: "indexes",
      dotsStyles: { "bottom": 50 },
      swipers: [
        {
          content: "分页",
          src: "https://imgcps.jd.com/ling4/100035927374/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa42/60f03300/cr/s/q.jpg"
        },
        {
          content: "分页",
          src: "https://img12.360buyimg.com/pop/s1180x940_jfs/t1/217650/27/18929/95548/627b69e5E7f4c1ff2/1a6be6e037e34e5c.jpg.webp"
        },
        {
          content: "分页",
          src: "https://imgcps.jd.com/ling4/100012043978/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa09/00d13111/cr/s/q.jpg"
        }
      ]
    };
  },
  onLoad() {
    common_vendor.index.showShareMenu({
      withShareTicket: true,
      //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
      menus: ["shareAppMessage", "shareTimeline"]
    });
  },
  onShareAppMessage: function(res) {
    let that = this;
    return {
      title: "这是标题",
      imageUrl: "../../static/logo.png",
      path: "/pages/index/index?id=" + that.id
    };
  },
  methods: {
    createPoster() {
      const ctx = common_vendor.index.createCanvasContext("myCanvas", this);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      ctx.drawImage(this.imageUrl, 0, 0, this.canvasWidth, this.canvasHeight);
      ctx.fillStyle = "#000";
      ctx.font = "bold 32px Arial";
      ctx.fillText(this.title, 50, 50);
      ctx.draw(false, () => {
        setTimeout(() => {
          console.log(ctx);
          common_vendor.index.canvasToTempFilePath({
            canvasId: "myCanvas",
            x: 0,
            y: 0,
            width: this.canvasWidth,
            height: this.canvasHeight,
            success: (res) => {
              console.log(res);
              this.poster = res.tempFilePath.replace(/[\r\n]/g, "");
              console.log(this.poster);
              common_vendor.index.hideLoading();
            }
          }, this);
        }, 100);
      });
    },
    change(e) {
      this.current = e.detail.current;
    },
    onClick(e) {
      if (e.index == 0) {
        common_vendor.index.switchTab({
          url: "../index/index"
        });
      } else if (e.index == 1) {
        common_vendor.index.showToast({
          title: `联系客服`,
          icon: "none"
        });
      } else if (e.index == 2) {
        common_vendor.index.switchTab({
          url: "../shop/shop"
        });
      }
    },
    buttonClick(e) {
      if (e.index == 0) {
        this.options[2].info++;
        common_vendor.index.showToast({
          title: `加入购物车`,
          icon: "none"
        });
      } else {
        common_vendor.index.showToast({
          title: `立即购买`,
          icon: "none"
        });
      }
    },
    open() {
      this.$refs.popup.open("bottom");
    },
    shareImg() {
      common_vendor.index.showLoading({
        title: "海报生成中~",
        icon: 1
      });
      this.$refs.popup.close("bottom");
      this.$refs.poster.open();
    },
    downloadPoster() {
      var _this = this;
      common_vendor.index.showLoading({
        title: "正在生成图片..."
      });
      common_vendor.index.saveImageToPhotosAlbum({
        filePath: _this.poster,
        success(res) {
          common_vendor.index.hideLoading();
          common_vendor.index.showModal({
            title: "保存成功",
            content: "图片已成功保存到相册，快去分享到您的圈子吧",
            showCancel: false
          });
        }
      });
    },
    getBase64URL(pic) {
      const blob = this.base64ImgtoFile(pic);
      const blobUrl = window.webkitURL.createObjectURL(blob) || window.URL.createObjectURL(blob);
      return blobUrl;
    },
    base64ImgtoFile(dataurl, filename = "file") {
      const arr = dataurl.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const suffix = mime.split("/")[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], `${filename}.${suffix}`, {
        type: mime
      });
    },
    changeInfo(e) {
      setTimeout(() => {
        this.createPoster();
      }, 100);
    }
  }
};
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_uni_swiper_dot2 + _easycom_uni_popup2 + _easycom_uni_goods_nav2)();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_uni_swiper_dot + _easycom_uni_popup + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swipers, (item, index, i0) => {
      return {
        a: item.src,
        b: index
      };
    }),
    b: common_vendor.o((...args) => $options.change && $options.change(...args)),
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration,
    f: common_vendor.p({
      info: $data.swipers,
      current: $data.current,
      ["dots-styles"]: $data.dotsStyles,
      field: "content",
      mode: $data.mode
    }),
    g: common_vendor.o((...args) => $options.open && $options.open(...args)),
    h: common_vendor.o((...args) => $options.shareImg && $options.shareImg(...args)),
    i: common_vendor.sr("popup", "96709cb0-1"),
    j: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    }),
    k: common_vendor.o((...args) => $options.downloadPoster && $options.downloadPoster(...args)),
    l: common_vendor.sr("poster", "96709cb0-2"),
    m: common_vendor.o(() => {
    }),
    n: common_vendor.o($options.changeInfo),
    o: common_vendor.p({
      ["background-color"]: "#fff",
      type: "center"
    }),
    p: common_vendor.o($options.onClick),
    q: common_vendor.o($options.buttonClick),
    r: common_vendor.p({
      options: $data.options,
      fill: true,
      ["button-group"]: $data.buttonGroup
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/test/fireDemo/pages/cate/shop_dea.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
