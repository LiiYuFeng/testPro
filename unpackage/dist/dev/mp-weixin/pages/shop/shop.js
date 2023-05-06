"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      isTojie: true,
      scrollLeftTop: 0,
      checkedAll: false,
      list: [
        {
          id: 1,
          name: "(雀巢)超启能恩3段 800g ",
          color: "800g 罐装",
          imgUrl: "../../static/logo.png",
          pprice: "27",
          num: 2,
          checked: false
        },
        {
          id: 2,
          name: "032经济法能聚聚会技能大赛 经济法能聚聚会技能大赛",
          color: "颜色：嘿嘿嘿激活",
          imgUrl: "../../static/logo.png",
          pprice: "48",
          num: 6,
          checked: false
        }
      ]
    };
  },
  computed: {
    // 总价
    totalPrice() {
      let totalP = 0;
      this.list.map((item) => {
        return item.checked ? totalP += Number(item.pprice * item.num) : totalP += 0;
      });
      return totalP.toFixed(2);
    },
    // 总数
    totalNum() {
      let totalN = 0;
      this.list.map((item) => {
        return item.checked ? totalN += 1 : totalN += 0;
      });
      return totalN.toFixed(0);
    }
  },
  methods: {
    oprateBut() {
      this.isTojie ? this.isTojie = false : this.isTojie = true;
    },
    changeValue: function(e, id) {
      this.list.map((item) => {
        item.id == id ? item.num = e : "";
      });
    },
    checkedAllFn: function(e) {
      if (e.detail.value.length == 0) {
        this.list.forEach((item) => {
          item.checked = false;
        });
      } else {
        this.list.forEach((item) => {
          item.checked = true;
        });
      }
    },
    checkboxChange: function(e, id) {
      let values = e.detail.value.length;
      let allCheck = 0;
      if (values == 1) {
        this.list.map((item) => {
          item.id == id ? item.checked = true : "";
        });
      } else {
        this.list.map((item) => {
          item.id == id ? item.checked = false : "";
        });
      }
      this.list.forEach((item) => {
        if (item.checked) {
          allCheck++;
        }
      });
      allCheck == this.list.length ? this.checkedAll = true : this.checkedAll = false;
    },
    toDel: function() {
      this.list = [];
    }
  },
  onShow() {
    common_vendor.index.setTabBarBadge({
      //显示数字
      index: 2,
      //tabbar下标
      text: this.list.length
      //数字
    });
  }
};
if (!Array) {
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  _easycom_uni_number_box2();
}
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  _easycom_uni_number_box();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.isTojie ? "管理" : "完成"),
    b: common_vendor.o(($event) => $options.oprateBut()),
    c: $data.list.length == 0
  }, $data.list.length == 0 ? {} : {
    d: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.checked,
        b: common_vendor.o(($event) => $options.checkboxChange($event, item.id), index),
        c: item.imgUrl,
        d: common_vendor.t(item.name),
        e: common_vendor.t(item.color),
        f: common_vendor.t(item.pprice),
        g: common_vendor.o(($event) => $options.changeValue($event, item.id), index),
        h: "2a6aaf81-0-" + i0,
        i: common_vendor.p({
          value: item.num,
          min: 1
        }),
        j: index
      };
    }),
    e: $data.scrollLeftTop
  }, {
    f: $data.checkedAll,
    g: common_vendor.o((...args) => $options.checkedAllFn && $options.checkedAllFn(...args)),
    h: $data.isTojie
  }, $data.isTojie ? {
    i: common_vendor.t($options.totalPrice)
  } : {}, {
    j: $data.isTojie
  }, $data.isTojie ? {
    k: common_vendor.t($options.totalNum)
  } : {
    l: common_vendor.o((...args) => $options.toDel && $options.toDel(...args))
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2a6aaf81"], ["__file", "D:/test/fireDemo/pages/shop/shop.vue"]]);
wx.createPage(MiniProgramPage);
