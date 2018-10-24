<template>
	<section class="m-detail m-detail-mysetting" style="overflow: hidden;">
		<section class="m-detail-bd">
			<index-header></index-header>
			<div class="yo-list yo-list-group">
				<a class="item">
					<span class="flex">昵称</span>
					<span class="my-description">柔柔弱弱若若若若若若若若若若若若</span>
				</a>
			</div>
		</section>
	</section>
</template>

<script>
	import IndexHeader from 'common/components/Header'
	export default {
		name: 'Personal',
		components: {
			IndexHeader
		}
	}
</script>

<style>
</style>