<template>
 <header>
  <ul id="dropdown1" class="dropdown-content">
    <li><a href="#!">آیتم 1</a></li>
    <li><a href="#!">آیتم 2</a></li>
    <li class="divider"></li>
    <li><a href="#!">آیتم 3</a></li>
  </ul>
  <ul id="dropdown11" class="dropdown-content">
    <li><a href="#!">آیتم 1</a></li>
    <li><a href="#!">آیتم 2</a></li>
    <li class="divider"></li>
    <li><a href="#!">آیتم 3</a></li>
  </ul>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
       <!--  <router-link to="/">
          <img src="/src/assets/images/logo.png" width="30" height="30">
        </router-link> -->

        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i>
        </a>
        <ul class="left hide-on-med-and-down">
          <div v-if="IsUserAuthenticated">
            <li class="not_link mx-1">امروز : {{ new Date().toISOString().slice(0,10) }}</li>
            <li class="not_link mx-1">سلام {{ UserFullName  }}</li>
            <li class="navitem mr-3"><a v-on:click="SignOutUser()">خروج</a></li>
          </div>
          <div v-else>
            <router-link tag="li" class="navitem" to="/register" active-class="active">
              <a>ثبت نام</a>
            </router-link>
            <router-link tag="li" class="navitem" to="/login" active-class="active">
              <a>ورود</a>
            </router-link>
          </div>

        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down mr-4">
          <router-link tag="li" class="navitem" to="/" active-class="active" exact>
            <a><i class="material-icons">home</i></a>
          </router-link>
          <router-link tag="li" class="navitem" to="/dashboard" active-class="active" exact>
            <a>پنل کاربری</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
  <ul class="sidenav" id="mobile-demo" style="z-index: 1500">
    <li><a href="index.html">صفحه اصلی</a></li>
    <li class="dropdown"><a class="dropdown-trigger" href="#!" data-target="dropdown11">دراپ داون<i class="material-icons left">arrow_drop_down</i></a>
    </li>
  </ul>

</header>
</template>


<script>
import Vue from 'vue';

export default {
  computed: {
    IsUserAuthenticated() {
      return this.$store.getters.IsUserAuthenticated;
    },
    UserFullName() {
      return this.$store.getters.GetUserFullName;
    }
  },
  methods: {
    CheckForLogin() {
      const userId = {
        'user_id' : Vue.cookie.get(this.CookieName)
      };
      this.$store.dispatch("CheckForLogin" , userId);
    },
    SignOutUser() {
      const userId = {
        'user_id' : Vue.cookie.get(this.CookieName)
      };
      this.$store.dispatch("SignOutUser" , userId);
    }
  },
  created() {
    this.CheckForLogin();
  }
};
</script>
