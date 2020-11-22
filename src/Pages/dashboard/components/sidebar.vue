<template>
	<div class="sidebar">
		<div class="sidebar_header">
			<figure>
				<img src="/src/assets/images/male-avatar.png" alt="">
			</figure>
			<p><strong>admin</strong></p>
		</div>
		<ul class="collapsible">
			<li>
				<div class="collapsible-header">
					<span>سفارشات</span>
					<i class="material-icons left">add</i>
				</div>
				<div class="collapsible-body">
					<a href="list_table.html"><p>لیست سفارشات</p></a>
					<a href="add_form.html"><p>افزودن سفارش</p></a>
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