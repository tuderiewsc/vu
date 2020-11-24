<template>
	<div class="sidebar">
		<div class="sidebar_header">
			<figure>
				<img src="/src/assets/images/male-avatar.png" alt="">
			</figure>
			<p><strong>{{ UserFullName }}</strong></p>
		</div>
		<ul class="collapsible">
			<li class="active">
				<div class="collapsible-header">
					<span>سفارشات</span>
					<i class="material-icons left">remove</i>
				</div>
				<div class="collapsible-body" style="display:block">
					<a href="list_table.html"><p>لیست سفارشات</p></a>
					<router-link to="/dashboard/orders/add">
						<p>افزودن سفارش</p>
					</router-link>
				</div>
			</li>
			<li>
				<div class="collapsible-header">
					<span>قیمت های گرفته شده</span>
					<i class="material-icons left">add</i>
				</div>
				<div class="collapsible-body">
					<a href="list_table.html"><p>لیست قیمت ها</p></a>
					<a href="add_form.html"><p>افزودن قیمت گیری</p></a>
				</div>
			</li>
			<li>
				<div class="collapsible-header">
					<span>خریدهای انجام شده شده</span>
					<i class="material-icons left">add</i>
				</div>
				<div class="collapsible-body">
					<a href="list_table.html"><p>لیست خرید ها</p></a>
					<a href="add_form.html"><p>افزودن خرید</p></a>
				</div>
			</li>
		</ul>
	</div>
</template>


<script>
export default {
	computed: {
		UserFullName() {
			return this.$store.getters.GetUserFullName;
		}
	}
};
</script>
