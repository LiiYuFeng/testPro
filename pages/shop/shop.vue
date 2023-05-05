<template>
	<view class="shopBox">
		<view class="shop">
			<text class="howNum">共1件商品</text>
			<text class="oprateBut" @click="oprateBut()">{{isTojie ? '管理' : '完成'}}</text>
		</view>
		<view v-if="list.length==0">暂无购物商品</view>
		<scroll-view v-else class="shopOver" scroll-y  :scroll-top="scrollLeftTop" scroll-with-animation>
			<view class="shopList" v-for="(item,index) in list" :key="index">
				<checkbox-group @change="checkboxChange($event,item.id)">
					<checkbox value="item.id" :checked="item.checked"  class="mycheck" />
				</checkbox-group>
				<view class="shopImg">
					<image :src="item.imgUrl" ></image>
				</view>
				<view class="shopCon">
					<h6>{{item.name}}</h6>
					<text class="tip">{{item.color}}</text>
					<view class="priceNum">
						<view class="price">
							<text>￥</text>
							<text class="priceval">{{item.pprice}}</text>
						</view>
						<view class="num">
							<uni-number-box @change="changeValue($event,item.id)" :value="item.num" :min="1" />
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="shopBottom">
			<view>
				<checkbox-group @change="checkedAllFn" class="checkedAllFn">
					<label class="radio foot-radio">
						<checkbox value="all" class="mycheck" :checked="checkedAll" />全选
					</label>
				</checkbox-group>
				<text class="money" v-if="isTojie">合计：￥{{totalPrice}}</text>
			</view>
			<button size="mini" class="toJie" v-if="isTojie">去结算({{totalNum}})</button>
			<button size="mini" class="toJie" v-else @click="toDel">去删除(0)</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isTojie:true,
				scrollLeftTop:0,
				checkedAll:false,
				list:[
					{
						id:1,
						name:"(雀巢)超启能恩3段 800g ",
						color:"800g 罐装",
						imgUrl:"../../static/logo.png",
						pprice:"27",
						num:2,
						checked:false
					},{
						id:2,
						name:"032经济法能聚聚会技能大赛 经济法能聚聚会技能大赛",
						color:"颜色：嘿嘿嘿激活",
						imgUrl:"../../static/logo.png",
						pprice:"48",
						num:6,
						checked:false
					}
				],
			}
		},
		computed: {
			// 总价
			totalPrice () {
				let totalP = 0
				this.list.map(item => {
					return item.checked? totalP += Number(item.pprice * item.num) : totalP += 0
				})
				return totalP.toFixed(2)
			},
			// 总数
			totalNum () {
				let totalN = 0
				this.list.map(item => {
					return item.checked? totalN += 1 : totalN += 0
				})
				return totalN.toFixed(0)
			},
		},
		methods: {
			oprateBut(){
				this.isTojie ? this.isTojie=false : this.isTojie=true;
			},
			changeValue:function(e,id){
				this.list.map(item => {
					item.id==id ? item.num=e : "";
				})
			},
			checkedAllFn:function(e){
				if (e.detail.value.length == 0) {
					this.list.forEach((item) => {
						item.checked=false;
					});
				} else {
					this.list.forEach((item) => {
						item.checked=true;
					});
				}
			},
			checkboxChange: function (e,id) {
				let values = e.detail.value.length;
				let allCheck=0;
				if(values==1){
					this.list.map(item => {
						item.id==id ? item.checked=true : "";
					})
				}else{
					this.list.map(item => {
						item.id==id ? item.checked=false : "";
					})
				}
				this.list.forEach((item) => {
					if(item.checked){
						allCheck++
					}
				});
				allCheck==this.list.length ? this.checkedAll=true : this.checkedAll=false;
			},
			toDel:function(){
				this.list=[];
			}
		},
		onShow() {
			uni.setTabBarBadge({ //显示数字
			  index: 2,//tabbar下标
			  text: this.list.length//数字
			})
		}
	}
</script>

<style scoped>
	.shop{width: 100%;box-sizing: border-box;display: flex;justify-content: space-between;align-items: center;background-color: white;padding: 3px 5px;border-top: 1px solid #eee;}
	.shop .howNum{font-size: 13px;}
	.shop .oprateBut{font-weight: 800;}
	.shopBottom{position: fixed;bottom: 50px;left: 0;right: 0;padding:8px 5px;background-color: white;display: flex;align-items: center;justify-content: space-between;}
	.toJie{margin: 0;background-color: #e43d33;color: white;padding: .2rem 1.5rem;border-radius: 2rem;}
	.money{font-weight: 700;margin-left: 20rpx;display: inline-block;}
	.shopImg image{width: 80px;height: 80px;}
	.checkedAllFn{display: inline-block;}
	.shopOver{width: 96%;margin: 10px auto;height: 450px;}
	.shopOver .shopList{display: flex;align-items: center;margin-top: 15px;padding: 8px 8px;background-color: white;}
	.shopCon{padding-left: 10px;width: 100%;}
	.shopCon h6{font-weight: 500;line-height: 20px;}
	.shopCon .tip{font-size: 12px;color: #999;background-color: #eee;display: inline-block;padding: 2px 5px;margin: 5px 0;}
	.shopCon .priceNum{display: flex;justify-content: space-between;}
	.shopCon .price{color: #e43d33;font-size: 15px;}
	.shopCon .priceval{font-size: 17px;font-weight: 700;}
</style>
