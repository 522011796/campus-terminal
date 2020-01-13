<template>
  <div class="container">
    <div class="pull-left layout-innder-tree-left" :style="styleLeftHeight">
      <div class="margin-top-5">
        <Menu width="240">
          <MenuItem name="1">
            <span>
              <Icon type="ios-home" />
              行政机构
            </span>
          </MenuItem>
          <MenuItem name="2">
            <span>
              <Icon type="ios-home" />
              教学院系
            </span>
          </MenuItem>
        </Menu>
      </div>
    </div>
    <div class="layout-inner-tree-right" :style="styleRightHeight">
      <div>
        <div class="pull-left layout-right-left" :style="styleRightHeight">
          <div class="container-top-block">
            <Button type="info" long class="font-size-12"@click="addTeacher($event)"><i class="fa fa-plus"></i>{{$t("basicInfo.teacherManges.addTeacher")}}</Button>
          </div>
          <List class="margin-top-5" border size="small">
            <div slot="header">
              <label class="layout-list-header">第一教学楼</label>
            </div>
            <ListItem>
              <span>
                1楼
              </span>
            </ListItem>
            <ListItem>
              <span>
                2楼
              </span>
            </ListItem>
            <ListItem>
              <span>
                3楼
              </span>
            </ListItem>
            <ListItem>
              <span>
                4楼
              </span>
            </ListItem>
            <ListItem>
              <span>
                5楼
              </span>
            </ListItem>
          </List>
        </div>
        <div class="layout-right-right">
          <div class="container-top-block">
            <Button type="warning" class="font-size-12" ghost @click="expendClass($event)"><i class="fa fa-upload"></i>{{$t("opr.expand")}}</Button>
          </div>
          <div class="margin-top-5">
            <Table border ref="selection" size="small" :columns="columns" :data="data">
              <template slot-scope="{ row, index }" slot="oprTitle">
                <a href="javascript:;" @click="addTeacher($event)">{{ $t('opr.edit') }}</a>
                |
                <a href="javascript:;" class="color-error" @click="deleteTeacher($event)">{{ $t('opr.delete') }}</a>
                |
                <a href="javascript:;" class="color-warning" @click="deleteTeacher($event)">{{ $t('basicInfo.teacherManges.resetPwd') }}</a>
                |
                <a href="javascript:;" class="color-error" @click="deleteTeacher($event)">{{ $t('basicInfo.teacherManges.unBind') }}</a>
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

    <!--添加教师模态框-->
    <Modal
      v-model="teacherModal"
      :title="teacherTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel"
      @on-visible-change="modelVisible($event)">

      <Form ref="formValidate" :label-width="90">
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.teacherNo')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.teacherName')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.sex')" prop="roles">
              <Select>

              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.nations')" prop="roleName">
              <Select>

              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.birthday')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.idCardNo')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.phone')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.email')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.intoTime')" prop="roles">
              <DatePicker type="month" placeholder=""></DatePicker>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.workTime')" prop="roleName">
              <DatePicker type="month" placeholder=""></DatePicker>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.status')" prop="roles">
              <Select>

              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.jobLevel')" prop="roleName">
              <Select>

              </Select>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.department')" prop="roles">
              <Input>
                <Button slot="append" icon="ios-search" @click="setDeptment($event)"></Button>
              </Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.teacherManges.teacherType')" prop="roleName">
              <Select>

              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Modal>

    <!--设置部门模态框-->
    <Drawer :title="drawerTitle" :closable="false" :mask-closable="false" :mask="false" class-name="drawer-index-class" v-model="setDrawerModal">
      <div :style="styleDrawerHeight">
        <Menu width="180">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper" />
              内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="drawer-item-bottom">
        <Button type="success" size="small">{{ $t('basicInfo.role.save') }}</Button>
        <Button size="small">{{ $t('basicInfo.role.cancel') }}</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      teacherModal: false,
      teacherTitle: this.$t("basicInfo.teacherManges.addTeacher"),
      setDrawerModal: false,
      drawerTitle: this.$t("basicInfo.teacherManges.selectDept"),
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
          title: this.$t('basicInfo.teacherManges.serialNo'),
          key: 'no'
        },
        {
          title: this.$t('basicInfo.teacherManges.teacherNo'),
          key: 'teacherNo'
        },
        {
          title: this.$t('basicInfo.teacherManges.sex'),
          key: 'sex'
        },
        {
          title: this.$t('basicInfo.teacherManges.idCardNo'),
          key: 'idCardNo'
        },
        {
          title: this.$t('basicInfo.teacherManges.teacherName'),
          key: 'teacherName'
        },
        {
          title: this.$t('basicInfo.teacherManges.phone'),
          key: 'phone'
        },
        {
          title: this.$t('basicInfo.teacherManges.department'),
          key: 'department'
        },
        {
          title: this.$t('basicInfo.teacherManges.jobName'),
          key: 'jobName'
        },
        {
          title: this.$t('basicInfo.teacherManges.status'),
          key: 'status'
        },
        {
          title: this.$t('basicInfo.teacherManges.oprTitle'),
          slot: 'oprTitle',
          key: 'oprTitle',
          width: '200'
        }
      ],
      data: [
        {
          no: 1,
          teacherNo: 1,
          sex:1,
          idCardNo: 1,
          teacherName: 1,
          phone: 1,
          department: 1,
          jobName: 1,
          status: 1
        }
      ]
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
    addTeacher(event){
      this.teacherModal = true;
    },
    setDeptment(event){
      this.setDrawerModal = true;
    },
    modelVisible(event){
      console.log(event);
      if (event == false){
        this.setDrawerModal = false;
        this.teacherModal = false;
      }
    },
    ok(){

    },
    cancel(){
      this.teacherModal = false;
    },
    okTeacherDel(event){
      this.$Modal.remove();
    },
    deleteTeacher(event){
      let _self = this;
      let config = {
        title: this.$t("basicInfo.term.info"),
        content: this.$t("basicInfo.term.deleteTips"),
        loading: true,
        onOk: () => {
          _self.okTeacherDel(event)
        },
        onCancel: () => {
          //_self.cancelDel(event)
        }
      };
      this.$Modal.confirm(config);
    },
    expendClass(event){

    }
  }
}
</script>

<style scoped>
.container{
  padding:10px 15px;
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
