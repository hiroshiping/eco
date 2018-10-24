<template>
	<section class="m-detail m-detail-mysetting" style="overflow: hidden;">
		<section class="m-detail-bd">
			<index-header></index-header>
			<div class="yo-list yo-list-group">
				<router-link tag="a" class="item item-myinfos" :to="{path:'/personal',query: {title: '个人信息'}}">
					<div class="flex">
						<span class="nickname">用户名</span>
						<span class="mobile">13621000000</span>
					</div>
					<span class="my-description">修改</span>
					<i class="yo-ico">&#xe601;</i>
=				</router-link>
			</div>
			<router-link tag="a" class="my-btn-group" :to="{path:'/'}">
				<input type="button" value="退出登录" class="my-btn"/>
			</router-link>
		</section>
	</section>
</template>

<script>
	import IndexHeader from 'common/components/Header'
	export default {
		name: 'Setting',
		components: {
			IndexHeader
		}
	}
</script>

<style>
</style>