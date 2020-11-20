<template>
	<div class="container-fluid">
		<div class="row">
			<div class="form_content z-depth-2">
				<form method="post" action="" id="add_order">
					<fieldset>
						<div class="d-flex justify-content-between">
							<h6>فرم ثبت نام</h6>
						</div>
					</fieldset>
					<hr>

					<div class="form-row">
						<div class="form-group col-md-5 col-sm-10">
							<label for="name">نام</label>
							<input type="text" class="form-control" id="name" v-model="name">
							<span class="invalid-feedback" role="alert">
								<strong>متن خطا</strong>
							</span>
						</div>
						<div class="form-group col-md-5 col-sm-10 required">
							<label for="email">ایمیل</label>
							<input type="email" class="form-control" id="email" v-model="email">
						</div>
					</div>

					<div class="form-row">
						<div class="form-group col-md-5 col-sm-10 required">
							<label for="password">پسورد</label>
							<input type="password" class="form-control" id="password" v-model="password">
							<span class="invalid-feedback" role="alert">
								<strong>متن خطا</strong>
							</span>
						</div>
						<div class="form-group col-md-5 col-sm-10 required">
							<label for="rePassword">تکرار پسورد</label>
							<input type="password" class="form-control" id="rePassword" v-model="rePassword">
						</div>
					</div>

					<button type="submit" class="waves-effect waves-block btn indigo float-left mt-3" v-on:click.prevent="registerUser()">ثبت نام
					</button>
				</form>
			</div>
		</div>
	</div>
</template>


<script>
import {
	required,
	maxLength,
	email,
	minLength,
	sameAs
} from "vuelidate/lib/validators";

export default {
	data(){
		return{
			name: "",
			email: "",
			password: "",
			rePassword: ""
		};
	},
	methods:{
		registerUser(){
			const register = {
				name: this.name,
				email: this.email,
				password: this.password,
				password_confirmation: this.rePassword
			};
			this.$store.dispatch("RegisterUser", register);
		}
	}

};
</script>