<script>
	export default {
		onLaunch: function() {
			console.warn('当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！')
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
	// 修改checkbox
	checkbox.mycheck .wx-checkbox-input,
	checkbox.mycheck .uni-checkbox-input {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: solid 2px #cccccc;
	}
	// 选中后的 对勾样式 
	checkbox.mycheck .uni-checkbox-input svg,
	checkbox.mycheck .wx-checkbox-input svg{
		color: firebrick;
		fill:currentColor; 
	}
	checkbox.mycheck .uni-checkbox-input svg path{fill: firebrick;}
	.uni-section-header{font-weight: 700 !important;border-bottom: 1px solid #eee;}
</style>
