<template>
	<main>
		<div class="dash_container">
			<div class="row">
				<dash-sidebar></dash-sidebar>

				<div class="dash_content">
					<div class="container-fluid">
						<div class="row">
							<div class="jumbotron">
								<h1 class="display-4">Order registration Dashboard</h1>
								<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="pageCover"></div>
			</div>
		</div>
	</main>
</template>



<script>
import Vue from 'vue';
import DashSidebar from './components/sidebar.vue';
export default {
	components: {
		dashSidebar: DashSidebar
	}
};

</script>