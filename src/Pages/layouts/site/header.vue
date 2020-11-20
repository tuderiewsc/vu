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
        <router-link to="/">
          <img src="/src/assets/images/logo.png" width="30" height="30">
        </router-link>

        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i>
        </a>
        <ul class="left hide-on-med-and-down">
          <li class="navitem">
            <router-link to="/register">ثبت نام</router-link>
          </li>
          <li class="navitem">
            <router-link to="/login">ورود</router-link>
          </li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down mr-4">
          <li class="navitem active">
            <router-link to="/">
              <i class="material-icons">home</i>
            </router-link>

          </li>
          <li class="navitem"><a href="admin_dash.html">پنل کاربری</a></li>
          <!-- Dropdown Trigger -->
          <li class="dropdown"><a class="dropdown-trigger" href="#!" data-target="dropdown1">دراپ داون<i class="material-icons left">arrow_drop_down</i></a></li>
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