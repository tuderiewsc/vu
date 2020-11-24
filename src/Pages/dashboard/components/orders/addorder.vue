<template>
	<main>
		<div class="dash_container">
			<div class="row">

				<dash-sidebar></dash-sidebar>

				<div class="dash_content">
					<div class="container-fluid">
						<div class="row">

							<div class="form_content z-depth-2">
								<form id="add_order">
									<fieldset>
										<div class="d-flex justify-content-between">
											<h6>Add Part Form</h6>
											<a href="" class="btn-floating waves-effect waves-light btn-flat tooltipped"
											data-position="top" data-tooltip="My Orders">
											<i class="material-icons">list</i>
										</a>
									</div>
								</fieldset>
								<hr>
								<div class="form-row">
									<div class="form-group col-lg-3 col-md-2 col-sm-12 required">
										<label for="item_name">Item Name</label>
										<input type="text" class="form-control" id="item_name" v-model="itemName"
										value="">
										<span class="invalid-feedback" role="alert">
											<strong></strong>
										</span>
									</div>
									<div class="form-group col-lg-3 col-md-2 col-sm-12">
										<label for="brand">Brand</label>
										<input type="text" class="form-control" id="brand" v-model="brand" value="">
										<span class="invalid-feedback" role="alert">
											<strong></strong>
										</span>
									</div>
									<div class="form-group col-lg-3 col-md-2 col-sm-12 required">
										<label for="package_type">Package Type</label>
										<input type="text" class="form-control"
										id="package_type" v-model="package_type" value=""
										>
										<span class="invalid-feedback" role="alert">
											<strong></strong>
										</span>
									</div>

									<div class="form-group col-lg-3 col-md-2 col-sm-12 required">
										<label for="pcs">Pcs</label>
										<input type="text" class="form-control" id="pcs"
										v-model="pcs" value=""
										onkeyup="this.value = this.value.replace(/[^\d\.]+/g, '');">
										<span class="invalid-feedback" role="alert">
											<strong></strong>
										</span>
									</div>
									<div class="form-group col-lg-3 col-md-2 col-sm-12 text-right required">
										<label for="qc">Quality Type</label>
										<select class="form-control"
										id="qc" v-model="QC">
										<option value="0" disabled selected>---Select Quality---</option>
										<option value="0">0</option>
									</select>
									<span class="invalid-feedback" role="alert">
										<strong></strong>
									</span>
								</div>
								<div class="form-group col-lg-3 col-md-2 col-sm-12">
									<label for="target_price">Target Price</label>
									<input type="text" class="form-control"
									id="target_price" v-model="targetPrice" value="">
									<select class="form-control price_type" v-model="priceType"
									style="position: absolute;left: -6px;top: 23px;width: 100px;background-color: snow">
									<option value="1">Rial</option>
									<option value="2">Dollar</option>
									<option value="3">RMB</option>
								</select>
								<span class="invalid-feedback" role="alert">
									<strong></strong>
								</span>
							</div>

						</div>

						<div class="form-row">
							<div class="form-group col-12">
								<label for="description">Description</label>
								<textarea class="materialize-textarea" id="description" v-model="description" data-length="1000"></textarea>
								<span class="helper-text" data-error="Length is too long"></span>
								<span class="invalid-feedback" role="alert">
									<strong></strong>
								</span>
							</div>
						</div>



						<button type="submit" class="submit waves-effect waves-block btn indigo float-left mt-3" v-on:click.prevent="OrderSubmit()" id="add_order_frm_submit">
							Save <i class="material-icons mx-1" style="vertical-align:middle;">save</i>
						</button>
					</form>
				</div>

				<div class="table_content z-depth-2">
					<div class="table_content_header mb-2">
						<h6>Parts List</h6>
					</div>
					<div class="table-responsive text-nowrap">
						<table class="table table-hover table-bordered">
							<thead>
								<tr class="header-tr">
									<th scope="col">#</th>
									<th scope="col">Item Name</th>
									<th scope="col">Package Type</th>
									<th scope="col">Pieces</th>
									<th scope="col">Quality Type</th>
									<th scope="col">Target Price</th>
									<th scope="col">Operation</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td scope="row">1</td>
									<td>itemName</td>
									<td>package_type</td>
									<td>pcs</td>
									<td>
									</td>
									<td>
									</td>
									<td>
										<a href="#details_modal" data-id=""
										class="waves-effect waves-ripple btn-flat text-primary modal-trigger order_modal_trigger">
										<i class="material-icons tooltipped" data-position="bottom" data-tooltip="Details">event_note</i>
									</a>
									<a href=""
									class="waves-effect waves-ripple btn-flat text-warning edit_part">
									<i class="material-icons tooltipped" data-position="bottom" data-tooltip="Edit">edit</i>
								</a>
								<a href="#del_modal" data-url=""
								class="waves-effect waves-ripple btn-flat text-danger modal-trigger order-del">
								<i class="material-icons tooltipped" data-position="bottom" data-tooltip="Delete">delete_forever</i>
							</a>
						</td>
					</tr>
				</tbody>
			</table>
			<form method="post" action="">
				<input type="hidden" value="" name="structure_token">
				<input type="hidden" value="init" name="status">
				<button type="submit" id="submit_orders"
				class="submit waves-effect waves-block btn teal float-left mt-3" >
				Submit Order
			</button>
		</form>
	</div>
</div>



</div>
</div>
</div>
</div>
</div>
</main>
</template>


<script>
import Vue from 'vue';
import DashSidebar from '../../components/sidebar.vue';

export default {
	components: {
		dashSidebar: DashSidebar
	},
	data(){
		return{
			itemName:"",
			brand:"",
			package_type:"",
			pcs:"",
			QC:"",
			targetPrice:"",
			description:"",
			priceType:"",
			user_id:""
		}
	},
	methods:{
		OrderSubmit(){
			const form_data = {
				itemName:this.itemName,
				brand:this.brand,
				package_type:this.package_type,
				pcs:this.pcs,
				QC:this.QC,
				targetPrice:this.targetPrice,
				description:this.description,
				priceType:this.priceType,
				user_id:this.UserID
			}
			this.$store.dispatch("CreateOrder", form_data);
		}
	},
	computed: {
		UserID() {
			return Vue.cookie.get('UserToken');
		}
	}
};
</script>