<template>
	<div class="my-info-container">
		<div class="m-header-back">
			<div class="yo-header">
				<span class="regret">
					<a @click="$router.go(-1)">
						<i class="yo-ico yo-icon-back">&#xe600;</i>
					</a>
				</span>
				<div class="title">{{$route.query.title}}</div>
			</div>
		</div>
	</div>	
</template>

<script>
export default{
	name: 'HomeHeader'
	
}
</script>

<style lang="stylus" scoped>
	.my-info-container
	    position: relative
	    z-index: 2
	    height: .44rem
	    .m-header-back
	    	position: fixed
		    z-index: 9990
		    width: 100%
	    	.yo-header
	    		position: relative
			    height: .44rem
			    line-height: .44rem
			    border-bottom: 1px solid #18609d
			    background-color: #18609d
			    color: #fff
			    font-size: .18rem
			    overflow: hidden
			    white-space: nowrap
			    text-overflow: ellipsis
			    text-align: center
				.yo-header>.regret
					position: absolute
					top: 0
					width: .6rem
					height: .44rem
					line-height: .44rem
					cursor: pointer
					font-size: .2rem
					font-weight: bold
					padding-left: .1rem
					left: 0
					text-align: left
					.m-header-back .yo-header .regret .yo-ico
						font-size: .2rem
						color: #dff0ff
</style>