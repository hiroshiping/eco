<template>
	<section class="m-detail" style="overflow: hidden;">
		<section class="m-detail-bd">
			<index-header></index-header>
			<div class="yo-list yo-list-group my-info">
				<div class="item">
					<span class="my-icon">
						<i class="yo-ico">&#xe650;</i>
					</span>
					<span class="flex">详情</span>
				</div>
				<div class="item my-item-info">
					<a href="#" class="flex">
						<label>0.00</label>
						<label class="my-tip">项目1</label>
					</a>
					<a href="#" class="flex">
						<label>0</label>
						<label class="my-tip">项目2</label>
					</a>
					<a href="#" class="flex">
						<label>0</label>
						<label class="my-tip">项目3</label>
					</a>
				</div>
			</div>
			<div class="yo-list yo-list-group my-menu">
				<a class="item">
					<span class="my-icon my-icon1">
						<i class="yo-ico">&#xe6a7;</i>
					</span>
					<span class="flex">功能1</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
				<a class="item">
					<span class="my-icon my-icon2">
						<i class="yo-ico">&#xe672;</i>
					</span>
					<span class="flex">功能2</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
				<a class="item">
					<span class="my-icon my-icon3">
						<i class="yo-ico">&#xe677;</i>
					</span>
					<span class="flex">功能3</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
				<a class="item">
					<span class="my-icon my-icon4">
						<i class="yo-ico">&#xe674;</i>
					</span>
					<span class="flex">功能4</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
				<a class="item">
					<span class="my-icon my-icon5">
						<i class="yo-ico">&#xe6a6;</i>
					</span>
					<span class="flex">功能5</span>
					<i class="yo-ico">&#xe601;</i>
				</a>
			</div>
			<div class="yo-list yo-list-group my-setting">
				<router-link tag="a" class="item" :to="{path:'/setting',query: {title: '设置'}}">
					<span class="my-icon my-icon">
						<i class="yo-ico">&#xe621;</i>
					</span>
					<span class="flex">设置</span>
					<span class="my-description">个人信息、安全设置等</span>
					<i class="yo-ico">&#xe601;</i>
				</router-link>
			</div>
		</section>
	</section>
</template>

<script>
	import IndexHeader from 'common/components/Header'
	export default {
		name: 'Index',
		components: {
			IndexHeader
		}
	}
</script>

<style lang="stylus" scoped>
</style>