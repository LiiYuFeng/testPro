"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      imgsrc: "https://pic.quanjing.com/cd/ze/QJ6583825607.jpg@!794wsy",
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500,
      swipers: [
        {
          text: "风景美如画",
          src: "https://imgcps.jd.com/ling4/100035927374/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa42/60f03300/cr/s/q.jpg"
        },
        {
          text: "日出江花红胜火",
          src: "https://img12.360buyimg.com/pop/s1180x940_jfs/t1/217650/27/18929/95548/627b69e5E7f4c1ff2/1a6be6e037e34e5c.jpg.webp"
        },
        {
          text: "牧童遥指杏花村",
          src: "https://imgcps.jd.com/ling4/100012043978/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa09/00d13111/cr/s/q.jpg"
        }
      ],
      danmuList: [
        {
          text: "第 1s 出现的弹幕",
          color: "#ff0000",
          time: 1
        },
        {
          text: "第 3s 出现的弹幕",
          color: "#ff00ff",
          time: 3
        }
      ]
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.imgsrc,
    b: common_vendor.f($data.swipers, (item, index, i0) => {
      return {
        a: item.src,
        b: common_vendor.t(item.text),
        c: index
      };
    }),
    c: $data.indicatorDots,
    d: $data.autoplay,
    e: $data.interval,
    f: $data.duration,
    g: common_vendor.o((...args) => _ctx.videoErrorCallback && _ctx.videoErrorCallback(...args)),
    h: $data.danmuList
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/test/fireDemo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
