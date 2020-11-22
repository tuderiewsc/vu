import Vue from 'vue';
import {router} from '../../main';

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
        alert("ثبت نام با موفقیت انجام شد");
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
        alert('کاربری با مشخصات وارد شده یافت نشد');
      }else if(response.body.result == "validation_error"){
        alert(response.body.err_text);
      }

      if (response.body.result == "Done") {
        context.commit("SetAuthCookie", response);
        context.commit("SetUserFullName", response.body.user_name);
        context.commit("SetUserAuthenticated", true);
        router.push('/dashboard');
      }

    });
  },
  CheckForLogin(context , Filter) {
    if (Vue.cookie.get('UserToken')) {
      //context.commit("SetUserFullName", response.body.user_name);
      //context.commit("SetUserAuthenticated", true);

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
