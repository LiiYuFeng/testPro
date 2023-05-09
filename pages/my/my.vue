<template>
	<view>
		<uni-section title="我的订单" titleFontSize="16px" padding class="title">
			<uni-grid :column="5" :highlight="true" :showBorder="false" @change="change">
				<uni-grid-item v-for="(item, index) in list" :index="index" :key="index">
					<view class="grid-item-box" style="background-color: #fff;">
						<uni-icons custom-prefix="iconfont" :type="item.url" :size="30" color="#777" ></uni-icons>
						<text class="text">{{item.text}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
		<uni-section title="文字滚动" subTitle="使用 scrollable 属性使通告滚动,此时 single 属性将失效,始终单行显示" type="line">
			<uni-notice-bar show-icon scrollable
				text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。" />
		</uni-section>
		<uni-pagination title="标题文字" show-icon="true" total="50" current="2"></uni-pagination>
		<uni-section title="底部分享示例" type="line" padding>
			<button class="button" type="primary" @click="shareToggle"><text class="button-text">分享模版示例</text></button>
		</uni-section>
		<uni-popup ref="share" type="share" safeArea backgroundColor="#fff">
			<uni-popup-share></uni-popup-share>
		</uni-popup>
		<uni-section title="设置尺寸大小" subTitle="设置 size 属性控制组件大小" type="line" padding>
			<uni-rate size="18" :value="5" />
		</uni-section>
		 <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="button" activeColor="#4cd964"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				选项卡1的内容
			</view>
			<view v-show="current === 1">
				选项卡2的内容
			</view>
			<view v-show="current === 2">
				选项卡3的内容
			</view>
		</view>
		<view style="background-color: white;margin: 20px auto;"><l-echart ref="chart" @finished="init"></l-echart></view>
		<!-- 日历签到 -->
		<view class="content">
		    <ren-calendar ref='ren' :markDays='markDays' :headerBar='false' @onDayClick='onDayClick'></ren-calendar>
		    <view class="change">选中日期：{{curDate}}</view>
		</view>
	</view>
</template>

<script>
	import * as echarts from '@/uni_modules/lime-echart/static/echarts.esm.min'
	import RenCalendar from '@/components/ren-calendar/ren-calendar.vue'
	export default {
		data() {
			return {
				curDate:'',
				markDays:[],
				option: {
				                tooltip: {
				                    trigger: 'axis',
				                    axisPointer: {
				                        type: 'shadow' 
				                    },
				                    confine: true
				                },
				                legend: {
				                    data: ['热度', '正面', '负面']
				                },
				                grid: {
				                    left: 20,
				                    right: 20,
				                    bottom: 15,
				                    top: 40,
				                    containLabel: true
				                },
				                xAxis: [
				                    {
				                        type: 'value',
				                        axisLine: {
				                            lineStyle: {
				                                color: '#999999'
				                            }
				                        },
				                        axisLabel: {
				                            color: '#666666'
				                        }
				                    }
				                ],
				                yAxis: [
				                    {
				                        type: 'category',
				                        axisTick: { show: false },
				                        data: ['汽车之家', '今日头条', '百度贴吧', '一点资讯', '微信', '微博', '知乎'],
				                        axisLine: {
				                            lineStyle: {
				                                color: '#999999'
				                            }
				                        },
				                        axisLabel: {
				                            color: '#666666'
				                        }
				                    }
				                ],
				                series: [
				                    {
				                        name: '热度',
				                        type: 'bar',
				                        label: {
				                            normal: {
				                                show: true,
				                                position: 'inside'
				                            }
				                        },
				                        data: [300, 270, 340, 344, 300, 320, 310],
				                    },
				                    {
				                        name: '正面',
				                        type: 'bar',
				                        stack: '总量',
				                        label: {
				                            normal: {
				                                show: true
				                            }
				                        },
				                        data: [120, 102, 141, 174, 190, 250, 220]
				                    },
				                    {
				                        name: '负面',
				                        type: 'bar',
				                        stack: '总量',
				                        label: {
				                            normal: {
				                                show: true,
				                                position: 'left'
				                            }
				                        },
				                        data: [-20, -32, -21, -34, -90, -130, -110]
				                    }
				                ]
				            },
				dynamicList: [],
				items: ['选项1', '选项2', '选项3'],
				current: 0,
				list: [{
						url: 'icon-daifukuan ',
						text: '待付款',
						badge: '0',
						type: "primary"
					},
					{
						url: 'icon-yifahuo',
						text: '待发货',
						badge: '1',
						type: "success"
					},
					{
						url: 'icon-daifahuo',
						text: '待收货',
						badge: '99',
						type: "warning"
					},
					{
						url: 'icon-yiwanchengdingdan',
						text: '已完成',
						badge: '2',
						type: "error"
					},
					{
						url: 'icon-shouhou',
						text: '售后',
						badge: '2',
						type: "error"
					}
				]
			}
		},
		onReady() {
			let today = this.$refs.ren.getToday().date;
			this.curDate = today;
			this.markDays.push(today);
		},
		methods: {
			change(e) {
				let {
					index
				} = e.detail
				this.list[index].badge && this.list[index].badge++

				uni.showToast({
					title: `点击第${index+1}个宫格`,
					icon: 'none'
				})
			},
			shareToggle() {
				this.$refs.share.open()
			},
			 onClickItem(e) {
			  if (this.current != e.currentIndex) {
				this.current = e.currentIndex;
			  }
			},
			spiderCharts() {
			// 初始化图表
			let chart = hightcharts.chart('charts', {
				  chart: {
					polar: true,
					type: 'line' // 折线图
				  },
				  title: {
					text: '蜘蛛图' // 图表表态
				  },
				  pane: {
					size: '80%'
				  },
				  xAxis: {
					categories: ['箱变', '35KV配电室', '继保室', '园区围栏',
					  '10KV配电室', '主变及管母'
					],
					tickmarkPlacement: 'on',
					lineWidth: 0
				  },
				  yAxis: {
					gridLineInterpolation: 'polygon',
					lineWidth: 0,
					min: 0
				  },
				  series: [{
					name: '预算拨款', //统一的前置词,非必须
					data: [43000, 19000, 60000, 35000, 17000, 10000],
					pointPlacement: 'on'
				  }]
				});
		  },
		  async init() {
				  // chart 图表实例不能存在data里
				  const chart = await this.$refs.chart.init(echarts);
				  chart.setOption(this.option)
			  },
			onDayClick(data){
				this.curDate = data.date;
			}
		},
		components:{
			RenCalendar
		},
		 mounted() {
			// this.$refs.chart.init(echarts, chart => {
			// 	chart.setOption(this.option);
			// }) 
		}
	}
</script>

<style>
	@import "@/static/iconfont.css";
	.text {
		font-size: 14px;
		margin-top: 5px;
	}
	example-body {
			/* #ifndef APP-NVUE */
			display: block;
			/* #endif */
		}
	
		.grid-dynamic-box {
			margin-bottom: 15px;
		}
	
		.grid-item-box {
			flex: 1;
			position: relative;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	
		.grid-item-box-row {
			flex: 1;
			position: relative;
			/* #ifndef APP-NVUE */
			display: flex;
			/* #endif */
			flex-direction: row;
			align-items: center;
			justify-content: center;
			padding: 15px 0;
		}
	
		.grid-dot {
			position: absolute;
			top: 5px;
			right: 15px;
		}
		.title{margin-top: 20px;}
</style>
