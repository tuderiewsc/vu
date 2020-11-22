import Vue from 'vue';
import {router} from '../../main';
import Swal from 'sweetalert2';

const state = {
  UserFullName: '',
  IsUserAuthenticated: false
};


const getters = {
  GetUserFullName(state) {
    return state.UserFullName;
  },
  IsUserAuthenticated(state) {
    return state.IsUserAuthenticated;
  },
  GetCookieName(state){
    return state.GetCookieName;
  }
};

const mutations = {
  SetAuthCookie(state, loginResult) {
    Vue.cookie.set(
      loginResult.body.token_name,
      loginResult.body.token_value,
      3,null,null,true,true
      );
  },
  SetUserFullName(state, userFullName) {
    state.UserFullName = userFullName;
  },
  SetUserAuthenticated(state, isAuth) {
    state.IsUserAuthenticated = isAuth;
  },
  DeleteAuthCookie(state , response) {
    Vue.cookie.delete(response.body.token_name);
  }
};

const actions = {
  RegisterUser(context, registerData) {
    Vue.http.post('user/register', registerData)
    .then(response => {
      if (response.status == 200) {
        console.log(response);
        Swal.fire('ثبت نام موفق', '', 'info');
        router.push('/login');
      }
      //console.log(response);
    }, data => {
      console.log(data);
    });
  },
  LoginUser(context, loginData) {
    Vue.http.post('user/login', loginData).then(response => {
      console.log(response);
      if (response.body.result == "nodata") {
        Swal.fire('کاربری با مشخصات وارد شده یافت نشد', '', 'error');
      }else if(response.body.result == "validation_error"){
        Swal.fire(response.body.err_text, '', 'error');
      }

      if (response.body.result == "Done") {
        context.commit("SetAuthCookie", response);
        context.commit("SetUserFullName", response.body.user_name);
        context.commit("SetUserAuthenticated", true);
        Swal.fire({
          title: 'ورود موفق',
          icon: 'success',
          confirmButtonText: 'باشه'
        });
//         Swal.fire({
//           title: 'Are you sure?',
//           text: 'You will not be able to recover this imaginary file!',
//           icon: 'warning',
//           showCancelButton: true,
//           confirmButtonText: 'Yes, delete it!',
//           cancelButtonText: 'No, keep it'
//         }).then((result) => {
//           if (result.value) {
//             Swal.fire(
//               'Deleted!',
//               'Your imaginary file has been deleted.',
//               'success'
//               )
//   // For more information about handling dismissals please visit
//   // https://sweetalert2.github.io/#handling-dismissals
// } else if (result.dismiss === Swal.DismissReason.cancel) {
//   Swal.fire(
//     'Cancelled',
//     'Your imaginary file is safe :)',
//     'error'
//     )
// }
// })
router.push('/dashboard');
}

});
  },
  CheckForLogin(context , Filter) {
    if (Vue.cookie.get(this.CookieName)) {
      Vue.http.get('user/loginCheck',{
        params: {
          user_id: Filter.user_id
        }
      }).then(response => {
        console.log(response);
        if (response.status !== 401 && response.body.result == 'OK') {
          context.commit("SetUserFullName", response.body.user_name);
          context.commit("SetUserAuthenticated", true);
        }
      });

    }

  },
  SignOutUser(context , userId) {
    Vue.http.post('user/logout', userId).then(response => {
      console.log(response);
      if (response.status !== 401 && response.body.result == "success") {
        context.commit("SetUserFullName", '');
        context.commit("SetUserAuthenticated", false);
        context.commit("DeleteAuthCookie" , response);
        router.push('/');
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
