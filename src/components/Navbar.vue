<template>
  <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">SB Admin</a>
    </div>
    <ul class="nav navbar-right top-nav">
      <ul class="dropdown-menu message-dropdown">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-envelope"></i> <b class="caret"></b></a>
          <ul class="dropdown-menu message-dropdown">
            <li class="message-preview">
              <a href="#">
                <div class="media">
                  <span class="pull-left">
                    <img class="media-object" src="http://placehold.it/50x50" alt="">
                  </span>
                  <div class="media-body">
                    <h5 class="media-heading"><strong>John Smith</strong></h5>
                    <p class="small text-muted"><i class="fa fa-clock-o"></i> Yesterday at 4:32 PM</p>
                    <p>Lorem ipsum dolor sit amet, consectetur...</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </ul>
    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav side-nav">
        <li>
          <router-link to="/dashboard"><i class="fa fa-fw fa-dashboard"></i> Dashboard</router-link>
        </li>
        <li>
          <router-link to="/table"><i class="fa fa-fw fa-table"></i> Table</router-link>
        </li>
        <li>
          <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i class="fa fa-fw fa-arrows-v"></i> Dropdown <i class="fa fa-fw fa-caret-down"></i></a>
          <ul id="demo" class="collapse">
              <li>
                  <a href="#">Dropdown Item</a>
              </li>
              <li>
                  <a href="#">Dropdown Item</a>
              </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'navbar',
  }
</script>

<style scoped>
  .router-link-active {
    background-color: black;
  }
</style>