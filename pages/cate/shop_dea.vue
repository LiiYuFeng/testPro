<template>
	<view>
		<view class="swiperCon">
			<uni-swiper-dot :info="swipers" :current="current" :dots-styles="dotsStyles" field="content" :mode="mode">
				<swiper class="swiper"
				 @change="change"
				circular 
				:autoplay="autoplay" 
				:interval="interval"
				:duration="duration"
				indicator-active-color="red">
					<swiper-item v-for="(item,index) in swipers" :key="index">
						<image :src = "item.src"></image>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		
		
		<view class="shopTop">
			<button @click="open">打开弹窗</button>
			<uni-popup ref="popup"  background-color="#fff" type="bottom" >
				<view>
					<text class="h6">推荐给朋友</text>
					<view class="desc">
						<button open-type="share" size="mini" >分享给朋友</button>
						<button type="default" open-type="contact" size="mini" >客服</button>
						<button class="mini-btn" type="default" @click="shareImg" size="mini">生成海报</button>
					</view>
				</view>
			</uni-popup>
		</view>
		<!-- 海报 -->
		<view>
		    <!-- 生成海报 -->
			<uni-popup ref="poster" @touchmove.stop.prevent background-color="#fff" type="center" @change="changeInfo">
				<view class="myCanvass">
					<canvas canvas-id="myCanvas"></canvas>
					<button type="primary" @click="downloadPoster">下载海报</button>
				</view>
			</uni-popup>
		    <!-- 预览和下载海报 -->
		  </view>
		
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 imageUrl: '../../static/logo.png', // 要分享的图片链接
				title: '这是要分享的标题', // 要分享的文本内容
				poster: '', // 生成的海报链接
				canvasWidth: 375, // canvas宽度
				canvasHeight: 600, // canvas高度
				options: [{
					icon: 'shop',
					text: '首页',
					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'chat',
					text: '客服'
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
				autoplay: false,
				interval: 2000,
				duration: 500,
				current: 0,
				mode: 'indexes',
				dotsStyles:{"bottom":50},
				swipers:[
					{
						content:"分页",
						src:"https://imgcps.jd.com/ling4/100035927374/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa42/60f03300/cr/s/q.jpg"
					},
					{
						content:"分页",
						src:"https://img12.360buyimg.com/pop/s1180x940_jfs/t1/217650/27/18929/95548/627b69e5E7f4c1ff2/1a6be6e037e34e5c.jpg.webp"
					},
					{
						content:"分页",
						src:"https://imgcps.jd.com/ling4/100012043978/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa09/00d13111/cr/s/q.jpg"
					}
				],
			}
		},
		// #ifdef MP
		onLoad(){
		    uni.showShareMenu({
		        withShareTicket:true,
		        //设置下方的Menus菜单，才能够让发送给朋友与分享到朋友圈两个按钮可以点击
		        menus:["shareAppMessage","shareTimeline"]
		    })
		},
		onShareAppMessage: function(res) {
		    let that = this;
		    return {
		    	title:'这是标题',
		    	imageUrl: '../../static/logo.png',
		    	path: '/pages/index/index?id=' + that.id, 
		    }
		},
		// #endif
		methods: {
			createPoster() {
			        // 获取canvas上下文
			        const ctx = uni.createCanvasContext('myCanvas', this);
			        // 绘制背景
			        ctx.fillStyle = '#000';
			        ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
			        // 绘制图片
			        ctx.drawImage(this.imageUrl, 0, 0, this.canvasWidth, this.canvasHeight);
			        // 绘制文本
			        ctx.fillStyle = '#000';
			        ctx.font = 'bold 32px Arial';
			        ctx.fillText(this.title, 50, 50);
			        // 保存canvas图片，并获取链接
			        ctx.draw(false, () => {
					  setTimeout(()=>{
						  console.log(ctx)
						  uni.canvasToTempFilePath({
							canvasId: 'myCanvas',
							x: 0,
							y: 0,
							width: this.canvasWidth,
							height: this.canvasHeight,
						    success: (res) => {
								console.log(res)
								this.poster = (res.tempFilePath).replace(/[\r\n]/g,'');
								console.log(this.poster)
							   uni.hideLoading();
						    }
						  }, this);
					  },100)
			        });
			      },
			change(e) {
				this.current = e.detail.current;
			},
			onClick(e) {
				if(e.index==0){
					uni.switchTab({
						url: '../index/index'
					})
				}else if(e.index==1){
					uni.showToast({
						title: `联系客服`,
						icon: 'none'
					})
				}else if(e.index==2){
					uni.switchTab({
						url: '../shop/shop'
					})
				}
			},
			buttonClick(e) {
				if(e.index==0){
					this.options[2].info++
					uni.showToast({
						title: `加入购物车`,
						icon: 'none'
					})
				}else{
					uni.showToast({
						title: `立即购买`,
						icon: 'none'
					})
				}
			},
			open(){
			// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('bottom')
			  },
			shareImg(){
				uni.showLoading({
					title:"海报生成中~",
					icon:1
				});
				  this.$refs.popup.close('bottom');
				  this.$refs.poster.open();
			},
			 downloadPoster() {
			  var _this = this
			  uni.showLoading({
				title: '正在生成图片...'
			  })
			  uni.saveImageToPhotosAlbum({
				filePath: _this.poster,
				success(res) {
				  uni.hideLoading();
				  uni.showModal({
					title: '保存成功',
					content: '图片已成功保存到相册，快去分享到您的圈子吧',
					showCancel: false
				  })
				}
			  })
			},
			getBase64URL(pic) {
				const blob = this.base64ImgtoFile(pic)
				const blobUrl = window.webkitURL.createObjectURL(blob) || window.URL.createObjectURL(blob);
				return blobUrl
			},
			base64ImgtoFile (dataurl, filename = 'file') {
			  const arr = dataurl.split(',')
			  const mime = arr[0].match(/:(.*?);/)[1]
			  const suffix = mime.split('/')[1]
			  const bstr = atob(arr[1])
			  let n = bstr.length
			  const u8arr = new Uint8Array(n)
			  while (n--) {
				u8arr[n] = bstr.charCodeAt(n)
			  }
			  return new File([u8arr], `${filename}.${suffix}`, {
				type: mime
			  })
			},
			changeInfo(e){
				setTimeout(()=>{
					this.createPoster();
				},100)
			}
		}
	}
</script>

<style>
	.swiper image{
		will-change: transform;
		width: 750rpx;
	}
	uni-swiper,uni-image{height: 320px;}
	.shopTop{width: 96%;margin: -20px auto 15px;background-color: white;position: relative;z-index: 99;}
	.goods-carts {
			flex-direction: column;
			position: fixed;
			left: 0;
			right: 0;
			/* #ifdef H5 */
			left: var(--window-left);
			right: var(--window-right);
			/* #endif */
			bottom: 0;
		}
	.h6{text-align: center;font-size: 17px;font-weight: 700;display: block;margin: 10px;}
	.desc{display: flex;justify-content: space-between;margin: 10px auto 20px;}
	.myCanvass{width: 720rpx;height:80vh;}
	.myCanvass canvas{width: 100%;height: 300px;}
</style>
