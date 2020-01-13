<template>
  <div class="container">
    <div class="pull-left layout-left" :style="styleLeftHeight">
      <div class="layout-left-title margin-top-5">
        <Button type="info" class="font-size-12" ghost icon="ios-home" @click="addBuild($event)">{{$t("basicInfo.floor.addFloor")}}</Button>
      </div>
      <div class="margin-top-5">
        <Menu width="240">
          <MenuItem name="1">
            <span>
              <Icon type="ios-home" />
              第一教学楼
            </span>
            <span>
              <i class="fa fa-edit color-success" @click="addBuild($event)"></i>
              <i class="fa fa-trash color-error" @click="delBuild($event)"></i>
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
            <Button type="success" long class="font-size-12" ghost icon="ios-home-outline" @click="addClass($event)">{{$t("basicInfo.floor.addClass")}}</Button>
          </div>
          <List class="margin-top-5" border size="small">
            <div slot="header">
              <label class="layout-list-header">第一教学楼</label>
            </div>
            <ListItem>
              <span class="padding-left-20">
                1楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning" @click="copyFloor($event)"></i>
              </span>
            </ListItem>
            <ListItem>
              <span class="padding-left-20">
                2楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
              </span>
            </ListItem>
            <ListItem>
              <span class="padding-left-20">
                3楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
              </span>
            </ListItem>
            <ListItem>
              <span class="padding-left-20">
                4楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
              </span>
            </ListItem>
            <ListItem>
              <span class="padding-left-20">
                5楼
              </span>
              <span class="margin-left-10">
                <i class="fa fa-copy color-warning"></i>
              </span>
            </ListItem>
          </List>
        </div>
        <div class="layout-right-right">
          <div class="container-top-block">
            <Button type="info" class="font-size-12" @click="addMutlClass($event)"><i class="fa fa-plus"></i>{{$t("basicInfo.floor.multAddClass")}}</Button>
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

    <!--添加班级模态框-->
    <Modal
      v-model="buildModal"
      :title="buildTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel">

      <Form ref="formValidate" :label-width="90">
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.buildNo')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.buildName')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.buildAreaNum')" prop="roles">
              <Input placeholder="">
                <span slot="suffix" class="color-muted" style="position: relative;top:7px;">m&sup2; </span>
              </Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.property')" prop="roleName">
              <Select>
                <Option value="1">{{$t("basicInfo.floor.selfProperty")}}</Option>
                <Option value="2">{{$t("basicInfo.floor.jointProperty")}}</Option>
                <Option value="3">{{$t("basicInfo.floor.hireProperty")}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.buildTime')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.countFloorNum')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.principai')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.startFloorNum')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.phone')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Modal>

    <!--添加班级模态框-->
    <Modal
      v-model="classModal"
      :title="classTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel">

      <Form ref="formValidate" :label-width="90">
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.buildAndFloor')" prop="roles">
              <Cascader :data="dataClassGroup" :load-data="loadData"></Cascader>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.roomNo')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.countPeople')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.buildAreaNum')" prop="roleName">
              <Input placeholder="">
                <span slot="suffix" class="color-muted" style="position: relative;top:7px;">m&sup2; </span>
              </Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.videoRoom')" prop="roles">
              <i-switch true-color="#19be6b" false-color="#ff4949">
                <span slot="open">是</span>
                <span slot="close">否</span>
              </i-switch>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.roomUsed')" prop="roleName">
              <Select>
                <Option value="1">{{$t("basicInfo.floor.selfProperty")}}</Option>
                <Option value="2">{{$t("basicInfo.floor.jointProperty")}}</Option>
                <Option value="3">{{$t("basicInfo.floor.hireProperty")}}</Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Modal>

    <!--批量添加班级模态框-->
    <Modal
      v-model="classMutlModal"
      :title="classMutlTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel">

      <Form ref="formValidate" :label-width="90">
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.roomNo')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.classNum')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.countPeople')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.buildAreaNum')" prop="roleName">
              <Input placeholder="">
                <span slot="suffix" class="color-muted" style="position: relative;top:7px;">m&sup2; </span>
              </Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.roomUsed')" prop="roleName">
              <Select>
                <Option value="1">{{$t("basicInfo.floor.selfProperty")}}</Option>
                <Option value="2">{{$t("basicInfo.floor.jointProperty")}}</Option>
                <Option value="3">{{$t("basicInfo.floor.hireProperty")}}</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.floor.videoRoom')" prop="roles">
              <i-switch true-color="#19be6b" false-color="#ff4949">
                <span slot="open">是</span>
                <span slot="close">否</span>
              </i-switch>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Modal>

    <!--复制楼层模态框-->
    <Modal
      v-model="copyModal"
      :title="copyTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel">

      <Form ref="formValidate" :label-width="160">
        <FormItem :label="$t('basicInfo.floor.floorSelect')" prop="roles">
          <span class="color-success">1楼</span>
        </FormItem>
        <FormItem :label="$t('basicInfo.floor.floorCopyed')" prop="roles">
          <Checkbox>3楼</Checkbox>
        </FormItem>
        <FormItem :label="$t('basicInfo.floor.floorNotCopyed')" prop="roles">
          <CheckboxGroup>
            <Checkbox disabled label="2">2楼</Checkbox>
            <Checkbox disabled label="4">4楼</Checkbox>
          </CheckboxGroup>
        </FormItem>
      </Form>
    </Modal>
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
      buildModal: false,
      buildTitle: this.$t("basicInfo.floor.addFloor"),
      classModal: false,
      classTitle: this.$t("basicInfo.floor.addClass"),
      classMutlModal: false,
      classMutlTitle: this.$t("basicInfo.floor.multAddClass"),
      copyModal: false,
      copyTitle: this.$t("basicInfo.floor.copyFloor"),
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
      dataClassGroup: [
        {
          value: 'beijing',
          label: '北京',
          children: [],
          loading: false
        },
        {
          value: 'hangzhou',
          label: '杭州',
          children: [],
          loading:false
        }
      ]
    }
  },
  created() {
    let _self = this;
    this.tableH();
    this.init();
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
    init(){
      var _self = this;
      this.$parent.$parent.showLoading = true;

      setTimeout(function () {
        //_self.$store.commit("SET_ALL_LOADING",false)
        _self.$parent.$parent.showLoading = false;
      },2000);
    },
    addBuild(event){
      this.buildModal = true;
    },
    okDelBuild(event){
      this.$Modal.remove();
    },
    addClass(event){
      this.classModal = true;
    },
    addMutlClass(){
      this.classMutlModal = true;
    },
    okDelClass(event){
      this.$Modal.remove();
    },
    copyFloor(event){
      this.copyModal = true;
    },
    delBuild(event){
      let _self = this;
      let config = {
        title: this.$t("basicInfo.role.info"),
        content: this.$t("basicInfo.role.deleteTips"),
        loading: true,
        onOk: () => {
          _self.okDelBuild(event)
        },
        onCancel: () => {
          //_self.cancelDel(event)
        }
      };
      this.$Modal.confirm(config);
    },
    deleteClass(event){
      let _self = this;
      let config = {
        title: this.$t("basicInfo.role.info"),
        content: this.$t("basicInfo.role.deleteTips"),
        loading: true,
        onOk: () => {
          _self.okDelClass(event)
        },
        onCancel: () => {
          //_self.cancelDel(event)
        }
      };
      this.$Modal.confirm(config);
    },
    ok(){

    },
    cancel(){

    },
    loadData (item, callback) {
      item.loading = true;
      setTimeout(() => {
        if (item.value === 'beijing') {
          item.children = [
            {
              value: 'talkingdata',
              label: 'TalkingData'
            },
            {
              value: 'baidu',
              label: '百度'
            },
            {
              value: 'sina',
              label: '新浪'
            }
          ];
        } else if (item.value === 'hangzhou') {
          item.children = [
            {
              value: 'ali',
              label: '阿里巴巴'
            },
            {
              value: '163',
              label: '网易'
            }
          ];
        }
        item.loading = false;
        callback();
      }, 1000);
    }
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
