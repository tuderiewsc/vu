<template>
	<div>
		<a class="btn-small scroll_top_btn">
			<i class="material-icons">keyboard_arrow_up</i>
		</a>

		<footer class="page-footer" v-if="!IsUserAuthenticated">
			<div class="footer-copyright">
				<div class="container">
					<p>© 2014 Copyright Text</p>
				</div>
			</div>
		</footer>
	</div>

</template>


<script>
import Vue from 'vue';

export default {
	computed: {
		IsUserAuthenticated() {
			return this.$store.getters.IsUserAuthenticated;
		}
	},
	methods: {
		CheckForLogin() {
			const userId = {
				'user_id' : Vue.cookie.get('UserToken')
			};
			this.$store.dispatch("CheckForLogin" , userId);
		}
	},
	created() {
		this.CheckForLogin();
	}
};
</script>