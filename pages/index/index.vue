<template>
	<view class="container">
		<view class="images">
			<image :src="imgsrc" fade-show="true"></image>
		</view>
		<view class="swiperCon">
			<swiper class="swiper" 
			circular 
			:indicator-dots="indicatorDots" 
			:autoplay="autoplay" 
			:interval="interval"
			:duration="duration"
			indicator-active-color="red">
				<swiper-item v-for="(item,index) in swipers" :key="index">
					<image :src = "item.src"></image>
					<text class="text">{{item.text}}</text>
				</swiper-item>
			</swiper>
		</view>
		<view class="videoCon">
			<video id="myVideo" 
			src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"
			@error="videoErrorCallback" 
			:danmu-list="danmuList" 
			enable-danmu danmu-btn controls>
			</video>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgsrc: 'https://pic.quanjing.com/cd/ze/QJ6583825607.jpg@!794wsy',
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				swipers:[
					{
						text:"风景美如画",
						src:"https://imgcps.jd.com/ling4/100035927374/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa42/60f03300/cr/s/q.jpg"
					},
					{
						text:"日出江花红胜火",
						src:"https://img12.360buyimg.com/pop/s1180x940_jfs/t1/217650/27/18929/95548/627b69e5E7f4c1ff2/1a6be6e037e34e5c.jpg.webp"
					},
					{
						text:"牧童遥指杏花村",
						src:"https://imgcps.jd.com/ling4/100012043978/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5bd8253082acdd181d02fa09/00d13111/cr/s/q.jpg"
					}
				],
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
			}
		},
		methods: {

		}
	}
</script>

<style scoped>
	.container {
		font-size: 14px;
		line-height: 24px;
	}
	.images image{
		will-change: transform;
		width: 750rpx;
	}
	.swiper{margin-top: 5px;}
	.swiper image{
		will-change: transform;
		width: 750rpx;
	}
	uni-swiper{height: 240px;}
	.swiper .text{position: absolute;top: 50%;left: 50%;color: rebeccapurple;transform: translate(-50%,-50%);font-size:25px;font-weight: 800;}
	.videoCon video{width: 750rpx;}
</style>
