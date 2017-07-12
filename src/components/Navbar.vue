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
      <li is="Dropdown" :icon="'fa fa-envelope'">
        <ul class="dropdown-menu message-dropdown">
          <li v-for="message in messages" class="message-preview">
            <a href="#">
              <div class="media">
                <span class="pull-left">
                  <img class="media-object" src="http://placehold.it/50x50" alt="">
                </span>
                <div class="media-body">
                  <h5 class="media-heading"><strong>{{ message.from }}</strong>
                  </h5>
                  <p class="small text-muted"><i class="fa fa-clock-o"></i>{{ message.time }}</p>
                  <p>{{ message.content }}</p>
                </div>
              </div>
            </a>
          </li>
          <li class="message-footer">
            <a href="#">Read All New Messages</a>
          </li>
        </ul>
      </li>
      <li is="Dropdown" :icon="'fa fa-bell'">
        <ul class="dropdown-menu alert-dropdown">
          <li v-for="alert in alerts">
            <a href="#">{{ alert.message }} <span :class="getAlertLabelClass(alert.type)">{{ alert.name }}</span></a>
          </li>
          <li class="divider"></li>
          <li>
              <a href="#">View All</a>
          </li>
        </ul>
      </li>
      <li is="Dropdown" :icon="'fa fa-user'">
        <ul class="dropdown-menu">
          <li>
            <a href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-fw fa-envelope"></i> Inbox</a>
          </li>
          <li>
            <a href="#"><i class="fa fa-fw fa-gear"></i> Settings</a>
          </li>
          <li class="divider"></li>
          <li>
            <a href="#"><i class="fa fa-fw fa-power-off"></i> Log Out</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="collapse navbar-collapse navbar-ex1-collapse">
      <ul class="nav navbar-nav side-nav">
        <li v-for="route in routes">
          <router-link v-if="!route.hasChild" router-link :to="route.path"><i :class="route.icon"></i> {{ route.name }}</router-link>
          <a v-if="route.hasChild" href="javascript:;" data-toggle="collapse" :data-target="'#' + route.name"><i :class="route.icon"></i> {{ route.name }}<i class="fa fa-fw fa-caret-down"></i></a>
          <ul :id="route.name" class="collapse">
              <li v-for="child in route.childs">
                  <router-link :to="child.path"><i :class="child.icon"></i> {{ child.name }}</router-link>
              </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import Dropdown from './Dropdown'; 
  import RoutesList from '../routes';

  export default {
    name: 'navbar',
    components: {
      Dropdown
    },
    mounted() {
      console.log(window.$)
    },
    methods: {
      getAlertLabelClass(alertType) {
        return 'label label-' + alertType;
      }
    },
    data() {
      return {
        alerts: [
          {
            type: 'danger',
            message: 'Makan',
            name: 'Bahaya'
          }
        ],
        messages: [
          {
            from: 'Budi',
            time: 'Yesterday at 4:32 PM',
            content: 'Lorem ipsum dolor sit amet'
          }
        ],
        routes: RoutesList
      };
    }
  }
</script>

<style scoped>
  .router-link-active {
    background-color: black;
  }
</style>