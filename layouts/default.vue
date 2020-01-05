<template>
  <div>
    <!--top layout-->
    <div class="top-default-layout">
      <div class="top-default-left-layout">
        logo
      </div>
      <div class="top-default-right-layout">
        <div class="top-default-right-content-layout">
          <span>
            <label>xxxxxxxxxxx科技学院</label>
          </span>
          <Divider type="vertical" size="default"/>
          <span class="menu-item-layout">
            <i class="fa fa-refresh menu-icon-layout"></i>
          </span>
          <span class="menu-item-layout">
            <i class="fa fa-cogs menu-icon-layout"></i>
          </span>
          <Divider type="vertical" size="default"/>
          <span class="menu-item-layout">
            <i class="fa fa-calendar-o menu-icon-layout"></i>
          </span>
          <span class="menu-item-layout">
            <i class="fa fa-th menu-icon-layout" @click="showGruid($event)"></i>
          </span>
          <span class="menu-item-layout">
            <Poptip padding="0px 0px" :transfer="true" placement="bottom-end" offset="15" width="300">
              <i class="fa fa-volume-up menu-icon-layout"></i>
              <div class="api" slot="content">
                <div class="poptip-content-title">
                  <span class="pull-left">通知公告</span>
                  <span class="pull-right">
                    more
                  </span>
                  <span class="clearfix"></span>
                </div>
                <Divider size="small"/>
                <div class="poptip-content-list">
                  <div v-for="n in 5">
                    <div class="poptip-content-list-item">
                      <div>
                        {{$utils.getLength("消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1") > 20 ? "消息1消息1消息1消息1消息1消息1消息1消息1..." : "消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1"}}
                        </div>
                      </div>
                      <Divider size="small"/>
                    </div>
                  </div>
                </div>
              </Poptip>
          </span>
          <span class="menu-item-layout">
            <Badge :offset="[12,5]" dot>
              <Poptip padding="0px 0px" :transfer="true" placement="bottom-end" offset="15" width="300">
                <i class="fa fa-bell-o menu-icon-layout"></i>
                <div class="api" slot="content">
                  <div class="poptip-content-title">
                    <span class="pull-left">站内消息</span>
                    <span class="pull-right">
                      more
                    </span>
                    <span class="clearfix"></span>
                  </div>
                  <Divider size="small"/>
                  <div class="poptip-content-list">
                    <div v-for="n in 5">
                        <div class="poptip-content-list-item">
                        <div>
                          {{$utils.getLength("消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1") > 20 ? "消息1消息1消息1消息1消息1消息1消息1消息1..." : "消息1消息1消息1消息1消息1消息1消息1消息1消息1消息1"}}
                        </div>
                      </div>
                      <Divider size="small"/>
                    </div>
                  </div>
                </div>
              </Poptip>
            </Badge>
          </span>
          <Divider type="vertical" size="default"/>
          <Poptip padding="0px 0px" placement="bottom-end" offset="5">
            <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <div class="api" slot="content">
              <div class="avatar-content-title">
                <Avatar size="small" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                <span>xxxxxxxxx</span>
              </div>
              <Divider size="small"/>
              <div class="avatar-content-list">
                <div>
                  <span>
                    <a href="javascript:;"><i class="fa fa-user"></i>个人中心</a>
                  </span>
                </div>
              </div>
              <Divider size="small"/>
              <div class="avatar-content-opr">
                <span>
                  <a href="javascript:;"><i class="fa fa-sign-out"></i>退出登录</a>
                </span>
              </div>
            </div>
          </Poptip>
        </div>
      </div>
      <div class="clearfix"></div>

      <!--向导页面-->
      <Drawer width="40" :styles="styles" placement="right" title="向导页面" :closable="false" v-model="gruidDrawer">
        <div>
          <p>新页面</p>
        </div>
      </Drawer>
    </div>
    <!--content layout-->
    <div class="content-default-layout">
      <!--menu layout-->
      <div class="leftnav-default-layout">
        <div class="leftnav-default-content-layout">
          <div class="leftnav-default-mainmenu-layout history-layout" data-subMenu="true" data-name="baseinfo" @mouseenter="selMainMenu($event)">
            <i class="fa fa-navicon list-icon" data-subMenu="true"></i>
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" data-name="baseinfo" @mouseenter="selMainMenu($event)">
            <img src="~static/img/baseinfo-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/notice-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/stuadnter-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/jiaowu-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/xuegong-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/flow-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/dorm-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/ketangkaoqing-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/xingzheng-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/onecard-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/ai-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/face-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/bigdata-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/datashow-menu.png" class="menu-icon" data-subMenu="true">
          </div>
          <div class="leftnav-default-mainmenu-layout" data-subMenu="true" @mouseenter="selMainMenu($event)">
            <img src="~static/img/logcenter-menu.png" class="menu-icon" data-subMenu="true">
          </div>
        </div>
      </div>
      <!--二级菜单-->
      <div class="leftnav-default-submenu-layout" data-subMenu="true" v-if="showSubMenu">
        <div class="leftnav-default-submenu-title">
          xxxxxx
        </div>
        <nuxt-link to="/formTest">
          <div class="leftnav-default-submenu-menulist">
            <span>
              表单测试页面
            </span>
          </div>
        </nuxt-link>
        <nuxt-link to="/listTest">
          <div class="leftnav-default-submenu-menulist">
            <span>
              列表测试页面
            </span>
          </div>
        </nuxt-link>
      </div>
      <div class="rightnav-default-layout">
        <div class="breadcrumb-title">
          <div class="breadcrumb-item">
            <Breadcrumb>
              <BreadcrumbItem to="/formTest">menu1</BreadcrumbItem>
              <BreadcrumbItem to="/formTest">form</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <Divider class="divider-line"/>
        </div>
        <div class="rightnav-default-content-layout" :style="styleMenuObjectRight">
          <nuxt />
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showSubMenu: false,
        styles:{
          background:''
        },
        gruidDrawer: false,
        styleMenuObjectRight: {
          'height': '',
          'overflow-y': 'auto'
        }
      }
    },
    mounted() {
      document.addEventListener('click',e => {
        if(!e.target.dataset.submenu){
          this.showSubMenu = false//点击其他区域关闭
        }else{
          this.showSubMenu = true
        }
      });
    },
    created(){
      this.hh();
      if (process.browser) {
        if (localStorage.getItem("SET_DEFAULT_RIGHT_OVERFLOWY") == "false") {
          this.styleMenuObjectRight["overflow-y"] = 'hidden';
        }
      }
    },
    methods: {
      hh(){
        if (process.browser) {
          this.styleMenuObjectRight.height = window.innerHeight - 80 + 'px';
          /*this.$nextTick(function () {
            //默认选中
            this.loadingShow = true;
          });*/
        }
      },
      selMainMenu(event){
        this.showSubMenu = true;
      },
      showGruid(event){
        this.gruidDrawer = true;
      }
    },
    watch: {
      '$route': function (to, from) {//监听路由变化,为了浏览器点击后退和前进也能切换菜单选中
        this.$store.commit("SET_DEFAULT_RIGHT_OVERFLOWY",true);
      },
      '$store.state.setDefaultRightOverflowy': function () {
        if(this.$store.state.setDefaultRightOverflowy == false){
          this.styleMenuObjectRight["overflow-y"] = 'hidden';
        }else{
          this.styleMenuObjectRight["overflow-y"] = 'auto';
        }
      }
    }
  }
</script>

<style scoped>
.top-default-layout{
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px;
  background: #FFFFFF;
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.content-default-layout{
  background: #ffffff;
  position: absolute;
  width: 100%;
  top: 50px;
  bottom: 0px;
  z-index: 1;
}
.leftnav-default-layout{
  float: left;
  width: 50px;
  background: #515a6e;
  position: fixed;
  top: 50px;
  bottom: 0px;
  z-index: 2;
  overflow-y: auto;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 4px 0px;
  transition: all 0.25s ease-in-out 0s;
}
.leftnav-default-content-layout{
  position: relative;
}
.rightnav-default-layout{
  margin-left: 50px;
  background: #ffffff;
  min-height: 100%;
  position: relative;
}
.top-default-left-layout{
  float: left;
  width: 220px;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #dddddd;
  padding-left:15px;
  padding-right:15px;
  text-align: center;
}
.top-default-right-layout{
  margin-left: 220px;
  background: #FFFFFF;
  padding-right:15px;
}
.top-default-right-content-layout{
  text-align: right;
}
.top-default-right-content-layout .menu-item-layout{
  text-align: center;
  display: inline-block;
  padding: 0px 10px;
}
.menu-icon-layout{
  font-size: 17px;
  position: relative;
  top: 3px;
}
.ivu-menu-item {
  display: block;
  outline: 0;
  list-style: none;
  font-size: 12px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all .2s ease-in-out;
  background: #f5f5f5;
}
.ivu-menu {
  display: block;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  color: #515a6e;
  font-size: 12px;
  position: relative;
  z-index: 900;
}
.ivu-menu-vertical .ivu-menu-item:hover, .ivu-menu-vertical .ivu-menu-submenu-title:hover {
  color: #515a6e;
}
.leftnav-default-mainmenu-layout{
  text-align: center;
  padding:5px;
}
.leftnav-default-mainmenu-layout:hover{
  background: #fefefe;
}
.leftnav-default-submenu-layout{
  position: fixed;
  top:50px;
  left: 50px;
  bottom: 0px;
  z-index: 9999;
  overflow-y: auto;
  height: 100%;
  width: 170px;
  background: #f8f8f9;
  box-shadow: 2px 2px 5px #dcdee2;
  /*display: none;*/
}
.menu-icon{
  height:25px;
  width: 25px;
}
.history-layout{
  background: #808695;
  height:30px;
  line-height: 30px;
}
.list-icon{
  position: relative;
  top:-5px;
}
.leftnav-default-submenu-title{
  padding:0px 10px;
  height:30px;
  line-height: 30px;
  border-bottom: 1px solid #e8eaec;
  font-weight: bold;
  color:#808695;
}
.leftnav-default-submenu-menulist{
  padding:8px 20px;
  color:#808695;
}
.leftnav-default-submenu-menulist:hover{
  background: #fefefe;
}
.breadcrumb-title{
  background: #f8f8f9;
  padding:0px 0px;
  height:30px;
  line-height: 30px;
  top: 50px;
}
.breadcrumb-item{
  padding:0px 15px;
}
.divider-line{
  margin:0px 0px;
}
.rightnav-default-content-layout{
  overflow-y: hidden;
  height: 100%;
  position: relative;
}
.avatar-content-title{
  height:30px;
  line-height: 30px;
  background: #f8f8f9;
  text-align: left;
  color: #2db7f5;
  padding:0px 5px;
  font-size: 12px;
}
.ivu-divider-horizontal {
  display: block;
  height: 1px;
  width: 100%;
  min-width: 100%;
  margin: 0px 0;
  clear: both;
}
.avatar-content-list{
  padding:5px 8px;
  font-size: 12px;
  text-align: left;
  color: #808695;
}
.avatar-content-list a{
  font-size: 12px;
  text-align: left;
  color: #808695;
}
.avatar-content-list i{
  margin-right: 8px;
}
.avatar-content-opr{
  background: #f8f8f9;
  padding:5px 0px;
  text-align: center;
  font-size: 12px;
}
.avatar-content-opr i{
  margin-right: 8px;
}
.avatar-content-opr a{
  color:#ff9900;
}
.poptip-content-title{
  height:30px;
  line-height: 30px;
  background: #f8f8f9;
  text-align: left;
  color: #2db7f5;
  padding:0px 10px;
  font-size: 12px;
}
.poptip-content-list{
  font-size: 12px;
  text-align: left;
  color: #808695;
  padding-bottom: 8px;
}
.poptip-content-list a{
  font-size: 12px;
  text-align: left;
  color: #808695;
}
.poptip-content-list-item{
  padding:5px 8px;
}
</style>
