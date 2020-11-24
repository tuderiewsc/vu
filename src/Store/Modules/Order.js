import Vue from 'vue';
import {router} from '../../main';
import Swal from 'sweetalert2';


const state = {

};

const getters = {

};

const mutations = {

};

const actions = {
  CreateOrder(context , data) {
    let submit_btn = $('#add_order_frm_submit');
    submit_btn.html('<i class="fa fa-circle-o-notch fa-spin"></i>');

    Vue.http.post('orders/orders', data).then(response => {
      if (response.status === 200 && response.body.result == "Done") {
        context.commit("SetIsProcessingFinished" , true);
        Swal.fire({
          title: 'سفارش ثبت شد.',
          icon: 'success',
          confirmButtonText: 'باشه'
        });
        $('form#add_order').find("input[type=text], textarea").val("");
        submit_btn.html('Save <i class="material-icons mx-1" style="vertical-align:middle;">save</i>');
      }
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
