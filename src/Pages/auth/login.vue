<template>
	<div class="container-fluid">
		<div class="row">
			<div class="form_content z-depth-2">
				<form method="post" action="" id="add_order">
					<fieldset>
						<div class="d-flex justify-content-between">
							<h6>فرم ورود</h6>
							<h6>{{ title }}</h6>
						</div>
					</fieldset>
					<hr>

					<div class="form-row">
						<div class="form-group col-md-5 col-sm-10 required">
							<label for="email">ایمیل</label>
							<input type="email" class="form-control" id="email" v-model="email">
						</div>
						<div class="form-group col-md-5 col-sm-10 required">
							<label for="password">پسورد</label>
							<input type="password" class="form-control" id="password" v-model="password">
						</div>
					</div>

					<button type="submit" class="waves-effect waves-block btn teal float-left mt-3" v-on:click.prevent="loginUser()">ورود
					</button>
				</form>
			</div>
		</div>
	</div>
</template>


<script>
export default {
	metaInfo: {
		title: 'login page',
		titleTemplate: '%s | vue-meta Example App',
		htmlAttrs: {
			reptilian: 'gator'
		},
		headAttrs: {
			nest: 'eggs'
		},
		meta: [
		{ charset: 'utf-8' },
		{ name: 'description', content: 'gator' }
		]
	},
	data(){
		return{
			email: "",
			password: "",
		}
	},
	methods:{
		loginUser(){
			const register = {
				email: this.email,
				password: this.password
			};
			this.$store.dispatch("LoginUser", register);
		}
	}

};
</script>