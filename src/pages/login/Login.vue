<template>
	<div class="qn_main">
		<div class="qn_header">
			<span class="back">&#xe600;</span>
			<div class="title">登录</div>
		</div>
		<!--<div class="qn_header_sub">
			<div class="tab">
				<div class="tab-item cur">
					短信验证码登录
				</div>
				<div class="tab-item">
					账号登录
				</div>
			</div>
		</div>-->
		<div class="form-style">
			<form>
				<div class="form-control">
					<label class="control-label">用户名</label>
					<div class="control-container">
						<input type="text" class="control-text" placeholder="请输入用户名"/>
					</div>
				</div>
				<div class="form-control">
					<label class="control-label">密码</label>
					<div class="control-container">
						<input type="password" class="control-text" placeholder="请输入密码"/>
					</div>
				</div>
				<div class="form-control">
					<label class="control-label">验证码</label>
					<div class="control-container">
						<input type="password" class="control-text" placeholder="请输入验证码"/>
						<!--<a class="right-btn btn-getrandcode">
							获取验证码
						</a>-->
						<div class="right-btn" @click="refreshCode">
							<s-identify :identifyCode="identifyCode"></s-identify>
					  	</div>
					</div>
				</div>
			</form>
		</div>
		<div class="operate clearfix" style="margin-top: 0.1rem;">
			<router-link :to="{path:'/index',query: {title: '主页'}}">
				<a class="btn btn-submit">登录</a>
			</router-link>
		</div>
	</div>
</template>

<script>
	import SIdentify  from './components/Identify'
	export default {
		name: "Login",
		components: {
			SIdentify
		},
	  	data() {
	    	return {
      			identifyCodes: "1234567890",
	      		identifyCode: ""
	    	};
	  	},
	  	mounted() {
	    	this.identifyCode = "";
	    	this.makeCode(this.identifyCodes, 4);
	  	},
	  	methods: {
	    	randomNum(min, max) {
      			return Math.floor(Math.random() * (max - min) + min);
	    	},
		    refreshCode() {
		      this.identifyCode = "";
		      this.makeCode(this.identifyCodes, 4);
		    },
		    makeCode(o, l) {
		      for (let i = 0; i < l; i++) {
		        this.identifyCode += this.identifyCodes[
		          this.randomNum(0, this.identifyCodes.length)
		        ];
		      }
		      console.log(this.identifyCode);
	    	}
	  	}
	};
</script>

<style scoped>
</style>