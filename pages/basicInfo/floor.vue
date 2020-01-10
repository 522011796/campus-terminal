<template>
  <div class="container">
    <div class="pull-left layout-left" :style="styleLeftHeight">
      <div class="layout-left-title margin-top-5">
        <Button type="info" class="font-size-12" ghost icon="ios-home" @click="addCollege($event)">{{$t("basicInfo.floor.addFloor")}}</Button>
      </div>
      <div class="margin-top-5">
        <Menu width="240">
          <MenuItem name="1">
            <span>
              <Icon type="ios-home" />
              第一教学楼
            </span>
            <span>
              <i class="fa fa-edit color-success" @click="addCollege($event)"></i>
              <i class="fa fa-trash color-error" @click="delCollege($event)"></i>
            </span>
          </MenuItem>
          <MenuItem name="2">
            <span>
              <Icon type="ios-home" />
              第一教学楼
            </span>
            <span>
              <i class="fa fa-edit color-success"></i>
              <i class="fa fa-trash color-error"></i>
            </span>
          </MenuItem>
        </Menu>
      </div>
    </div>
    <div class="layout-right" :style="styleRightHeight">
      <div>
        <div class="pull-left layout-right-left" :style="styleRightHeight">
          <div class="container-top-block">
            <Button type="success" long class="font-size-12" ghost icon="ios-home-outline" @click="addProfession($event)">{{$t("basicInfo.floor.addClass")}}</Button>
          </div>
          <List class="margin-top-5" border size="small">
            <div slot="header">
              <label class="layout-list-header">第一教学楼</label>
            </div>
            <ListItem>
              <span>
                1楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
                |
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
            <ListItem>
              <span>
                2楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
                |
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
            <ListItem>
              <span>
                3楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
                |
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
            <ListItem>
              <span>
                4楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
                |
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
            <ListItem>
              <span>
                5楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
                |
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
          </List>
        </div>
        <div class="layout-right-right">
          <div class="container-top-block">
            <Button type="info" class="font-size-12" @click="addClass($event)"><i class="fa fa-plus"></i>{{$t("basicInfo.floor.multAddClass")}}</Button>
          </div>
          <div class="margin-top-5">
            <Table border ref="selection" size="small" :columns="columns" :data="data">
              <template slot-scope="{ row, index }" slot="oprTitle">
                <a href="javascript:;" @click="addClass($event)">{{ $t('opr.edit') }}</a>
                |
                <a href="javascript:;" class="color-error" @click="deleteClass($event)">{{ $t('opr.delete') }}</a>
              </template>
            </Table>
          </div>

          <div class="container-bottom-block">
            <div class="pull-right">
              <Page :total="1000" :page-size-opts="[10,20,50,100]" show-sizer show-elevator/>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  },
  data() {
    return {
      styleTableHeight: {
        'max-height': '',
        'overflow-y': 'auto'
      },
      styleDrawerHeight: {
        'height': '',
        'overflow-y': 'auto'
      },
      styleLeftHeight: {
        'height': '',
        'overflow-y': 'auto'
      },
      styleRightHeight: {
        'height': '',
        'overflow-y': 'auto'
      },
      columns: [
        {
          title: this.$t('basicInfo.floor.serialNo'),
          key: 'no'
        },
        {
          title: this.$t('basicInfo.floor.roomNo'),
          key: 'roomNo'
        },
        {
          title: this.$t('basicInfo.floor.floorNum'),
          key: 'floor'
        },
        {
          title: this.$t('basicInfo.floor.buildAreaNum'),
          key: 'buildAreaNum'
        },
        {
          title: this.$t('basicInfo.floor.countPeople'),
          key: 'countPeople'
        },
        {
          title: this.$t('basicInfo.floor.videoRoom'),
          key: 'videoRoom'
        },
        {
          title: this.$t('basicInfo.floor.oprTitle'),
          slot: 'oprTitle',
          key: 'oprTitle',
          width: '100'
        }
      ],
      data: [
        {
          no: 1,
          roomNo: 1,
          floor:1,
          buildAreaNum: 1,
          countPeople: 1,
          videoRoom: 1
        }
      ],
    }
  },
  created() {
    let _self = this;
    this.tableH();
  },
  methods: {
    tableH() {
      if (process.browser) {
        this.styleTableHeight["max-height"] = window.innerHeight - 80 - 35 - 55 + 'px';
        this.styleDrawerHeight.height = window.innerHeight - 80 - 30 + 'px';
        this.styleLeftHeight.height = window.innerHeight - 80 + 'px';
        this.styleRightHeight.height = window.innerHeight - 80 + 'px';
        this.tableHeight = window.innerHeight - 80 - 50;
        this.$store.commit("SET_DEFAULT_RIGHT_OVERFLOWY", false);
      }
    },
  }
}
</script>

<style scoped>
.container{
  padding:0px 0px;
}
.layout-left{
  width: 200px;
  border-right: 1px solid #dcdee2;
  padding:0px 0px;
}
.layout-right{
  margin-left: 200px;
  padding:5px 10px;
  background: #ffffff;
}
.ivu-menu-vertical.ivu-menu-light:after {
  content: '';
  display: block;
  width: 0px;
  height: 100%;
  background: #dcdee2;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
}
.layout-left-title{
  height:35px;
  line-height: 35px;
  text-align: center;
}
.layout-right-left{
  width: 130px;
}
.layout-list-header{
  font-weight: bold;
}
.layout-right-right{
  margin-left: 130px;
  padding:0px 10px;
}
.layout-right-right .container-bottom-block{
  padding:0px 15px;
  height: 40px;
  line-height: 40px;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  z-index: 999999;
  width: 100%;
  background: #fefefe;
}
.container-top-block{
  height:35px;
  line-height: 35px;
}
.ivu-list-bordered {
  border: 1px solid #19be6b;
  border-radius: 6px;
}
.ivu-list-bordered .ivu-list-item {
  border-bottom: 1px solid #19be6b;
}
</style>
