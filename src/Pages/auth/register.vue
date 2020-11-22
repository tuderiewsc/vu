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
						</div>
						<div class="form-group col-md-5 col-sm-10 required">
							<label for="email">ایمیل</label>
							<input type="email" class="form-control" id="email" v-model="email" @input="$v.email.$touch()" :class="{invalid:$v.email.$error}">
							<span class="invalid-feedback" role="alert" v-if="!$v.email.required && $v.email.$dirty">
								<strong>لطفا ایمیل را وارد کنید</strong>
							</span>
							<span class="invalid-feedback" role="alert" v-if="!$v.email.email && $v.email.$dirty">
								<strong>لطفا ایمیل معتبر وارد کنید</strong>
							</span>
							<span class="invalid-feedback" role="alert" v-if="!$v.email.maxLength">
								<strong>ایمیل کاربر نمیتواند بیشتر از {{$v.email.$params.maxLength.max}} کاراکتر داشته باشد</strong>
							</span>
						</div>
					</div>

					<div class="form-row">
						<div class="form-group col-md-5 col-sm-10 required">
							<label for="password">پسورد</label>
							<input type="password" class="form-control" id="password" v-model="password" @blur="$v.password.$touch()" :class="{invalid:$v.password.$error}">
							<span class="invalid-feedback" role="alert" v-if="!$v.password.required && $v.password.$dirty">
								<strong>لطفا کلمه عبور را وارد کنید</strong>
							</span>
							<span class="invalid-feedback" role="alert" v-if="!$v.password.minLength">
								<strong>کلمه عبور باید حداقل شمال {{$v.password.$params.minLength.min}} کاراکتر باشد</strong>
							</span>
						</div>
						<div class="form-group col-md-5 col-sm-10 required">
							<label for="rePassword">تکرار پسورد</label>
							<input type="password" class="form-control" id="rePassword" v-model="rePassword" @input="$v.rePassword.$touch()" :class="{invalid:$v.rePassword.$error}">
							<span class="invalid-feedback" role="alert" v-if="!$v.rePassword.sameAs && $v.rePassword.$dirty">
								<strong>کلمه عبور مغایرت دارد!!!</strong>
							</span>
						</div>
					</div>

					<button type="submit" class="waves-effect waves-block btn indigo float-left mt-3" v-on:click.prevent="registerUser()" :disabled="$v.$invalid">ثبت نام
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
	},
	validations: {
		email: {
			required,
			email,
			maxLength: maxLength(100)
		},
		password: {
			minLength: minLength(4),
			required
		},
		rePassword: {
			sameAs: sameAs("password")
		}
	}

};
</script>