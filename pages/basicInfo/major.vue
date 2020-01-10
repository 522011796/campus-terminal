<template>
  <div class="container">
    <div class="pull-left layout-left" :style="styleLeftHeight">
      <div class="layout-left-title margin-top-5">
        <Button type="info" class="font-size-12" ghost icon="ios-home" @click="addCollege($event)">{{$t("basicInfo.major.addSchool")}}</Button>
      </div>
      <div class="margin-top-5">
        <Menu width="240">
          <MenuItem name="1">
            <span>
              <Icon type="ios-home" />
              财经商贸系
            </span>
            <span>
              <i class="fa fa-edit color-success" @click="addCollege($event)"></i>
              <i class="fa fa-trash color-error" @click="delCollege($event)"></i>
            </span>
          </MenuItem>
          <MenuItem name="2">
            <span>
              <Icon type="ios-home" />
              财经商贸系
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
            <Button type="success" long class="font-size-12" ghost icon="ios-home-outline" @click="addProfession($event)">{{$t("basicInfo.major.addProfession")}}</Button>
          </div>
          <List class="margin-top-5" border size="small">
            <div slot="header">
              <label class="layout-list-header">xxxxxxx学院</label>
            </div>
            <ListItem>
              <span>
                xxxxxx专业
              </span>
              <span class="margin-left-5">
                <i class="fa fa-edit color-success" @click="addProfession($event)"></i>
                <i class="fa fa-trash color-error" @click="delProfession($event)"></i>
              </span>
            </ListItem>
            <ListItem>
              <span>
                xxxxxx专业
              </span>
              <span class="margin-left-5">
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
            <ListItem>
              <span>
                xxxxxx专业
              </span>
              <span class="margin-left-5">
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
            <ListItem>
              <span>
                xxxxxx专业
              </span>
              <span class="margin-left-5">
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
            <ListItem>
              <span>
                xxxxxx专业
              </span>
              <span class="margin-left-5">
                <i class="fa fa-edit color-success"></i>
                <i class="fa fa-trash color-error"></i>
              </span>
            </ListItem>
          </List>
        </div>
        <div class="layout-right-right">
          <div class="container-top-block">
            <Button type="info" class="font-size-12" @click="addClass($event)"><i class="fa fa-plus"></i>{{$t("basicInfo.major.addClass")}}</Button>
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

    <!--添加学院模态框-->
    <Modal
      v-model="collegeModal"
      :title="collegeTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel">

      <Form ref="formValidate" :label-width="120">
        <FormItem :label="$t('basicInfo.major.collegeNo')" prop="roleNo">
          <Input placeholder="" class="width260"></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.major.collegeName')" prop="roleName">
          <Input placeholder="" class="width260"></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.major.collegeManage')" prop="roles">
          <Input readonly class="width260">
            <Poptip slot="append" trigger="click" placement="bottom-end" offset="15" width="400" :transfer="true">
              <Button icon="ios-search"></Button>
              <div class="api" slot="content">
                <div>
                  <Input suffix="ios-search" :placeholder="$t('teacher.searchNameAndNo')" style="width: auto" />
                </div>
                <div class="margin-top-5 table-teacher-height">
                  <table class="popTips-table">
                    <thead>
                      <tr>
                        <th>{{$t("teacher.teacherName")}}</th>
                        <th>{{$t("teacher.teacherNo")}}</th>
                        <th>{{$t("opr.selected")}}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="font-size-12">
                          1
                        </td>
                        <td>

                        </td>
                        <td>
                          <a href="javascript:;">{{ $t('opr.selected') }}</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-12">
                          1
                        </td>
                        <td>

                        </td>
                        <td>
                          <a href="javascript:;">{{ $t('opr.selected') }}</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="font-size-12">
                          1
                        </td>
                        <td>

                        </td>
                        <td>
                          <a href="javascript:;">{{ $t('opr.selected') }}</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Poptip>
          </Input>
        </FormItem>
      </Form>
    </Modal>

    <!--添加专业模态框-->
    <Modal
      v-model="professionModal"
      :title="professionTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel">

      <Form ref="formValidate" :label-width="120">
        <FormItem :label="$t('basicInfo.major.innerCollege')" prop="roleNo">
          <Select class="width260">
            <Option value="1">xxxxxxxxxx</Option>
          </Select>
        </FormItem>
        <FormItem :label="$t('basicInfo.major.professionName')" prop="roleName">
          <Input placeholder="" class="width260"></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.major.professionNo')" prop="roles">
          <Input placeholder="" class="width260"></Input>
        </FormItem>
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
            <FormItem :label="$t('basicInfo.major.classNo')" prop="roles">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.major.className')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.major.collegeAndProfession')" prop="roleName">
              <Cascader :data="dataCollegeGroup" :load-data="loadData"></Cascader>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.major.buildAndClassroome')" prop="roles">
              <Cascader :data="dataBuildGroup" :load-data="loadData"></Cascader>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.major.counselor')" prop="roleName">
              <Input readonly>
                <Poptip slot="append" trigger="click" placement="bottom-start" offset="-15" width="400" :transfer="true">
                  <Button icon="ios-search"></Button>
                  <div class="api" slot="content">
                    <div>
                      <Input suffix="ios-search" :placeholder="$t('teacher.searchNameAndNo')" style="width: auto" />
                    </div>
                    <div class="margin-top-5 table-teacher-height">
                      <table class="popTips-table">
                        <thead>
                        <tr>
                          <th>{{$t("teacher.teacherName")}}</th>
                          <th>{{$t("teacher.teacherNo")}}</th>
                          <th>{{$t("opr.selected")}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td class="font-size-12">
                            1
                          </td>
                          <td>

                          </td>
                          <td>
                            <a href="javascript:;">{{ $t('opr.selected') }}</a>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-size-12">
                            1
                          </td>
                          <td>

                          </td>
                          <td>
                            <a href="javascript:;">{{ $t('opr.selected') }}</a>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-size-12">
                            1
                          </td>
                          <td>

                          </td>
                          <td>
                            <a href="javascript:;">{{ $t('opr.selected') }}</a>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Poptip>
              </Input>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem :label="$t('basicInfo.major.headTeacher')" prop="roles">
              <Input readonly>
                <Poptip slot="append" trigger="click" placement="bottom" offset="0" width="400" :transfer="true">
                  <Button icon="ios-search"></Button>
                  <div class="api" slot="content">
                    <div>
                      <Input suffix="ios-search" :placeholder="$t('teacher.searchNameAndNo')" style="width: auto" />
                    </div>
                    <div class="margin-top-5 table-teacher-height">
                      <table class="popTips-table">
                        <thead>
                        <tr>
                          <th>{{$t("teacher.teacherName")}}</th>
                          <th>{{$t("teacher.teacherNo")}}</th>
                          <th>{{$t("opr.selected")}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td class="font-size-12">
                            1
                          </td>
                          <td>

                          </td>
                          <td>
                            <a href="javascript:;">{{ $t('opr.selected') }}</a>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-size-12">
                            1
                          </td>
                          <td>

                          </td>
                          <td>
                            <a href="javascript:;">{{ $t('opr.selected') }}</a>
                          </td>
                        </tr>
                        <tr>
                          <td class="font-size-12">
                            1
                          </td>
                          <td>

                          </td>
                          <td>
                            <a href="javascript:;">{{ $t('opr.selected') }}</a>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Poptip>
              </Input>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="12">
            <FormItem :label="$t('basicInfo.major.createTime')" prop="roleName">
              <Input placeholder=""></Input>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      collegeModal: false,
      collegeTitle: this.$t('basicInfo.major.addSchool'),
      professionModal: false,
      professionTitle: this.$t('basicInfo.major.addProfession'),
      classModal: false,
      classTitle: this.$t('basicInfo.major.addClass'),
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
          title: this.$t('basicInfo.major.serialNo'),
          key: 'no'
        },
        {
          title: this.$t('basicInfo.major.classNo'),
          key: 'classNo'
        },
        {
          title: this.$t('basicInfo.major.className'),
          key: 'className'
        },
        {
          title: this.$t('basicInfo.major.profession'),
          key: 'profession'
        },
        {
          title: this.$t('basicInfo.major.headTeacher'),
          key: 'headTeacher'
        },
        {
          title: this.$t('basicInfo.major.counselor'),
          key: 'counselor'
        },
        {
          title: this.$t('basicInfo.major.fixClassRoom'),
          key: 'fixClassRoom'
        },
        {
          title: this.$t('basicInfo.major.oprTitle'),
          slot: 'oprTitle',
          key: 'oprTitle',
          width: '100'
        }
      ],
      data: [
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        },
        {
          no: 1,
          classNo: 1,
          className: 1,
          profession: 1,
          headTeacher: 1,
          counselor: 1,
          fixClassRoom: 1,
          oprTitle: 1,
        }
      ],
      dataCollegeGroup: [
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
      ],
      dataBuildGroup: [
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
  },
  methods:{
    tableH(){
      if (process.browser) {
        this.styleTableHeight["max-height"] = window.innerHeight - 80 - 35 - 55 + 'px';
        this.styleDrawerHeight.height = window.innerHeight - 80 - 30 + 'px';
        this.styleLeftHeight.height = window.innerHeight - 80 + 'px';
        this.styleRightHeight.height = window.innerHeight - 80 + 'px';
        this.tableHeight = window.innerHeight - 80 - 50;
        this.$store.commit("SET_DEFAULT_RIGHT_OVERFLOWY",false);
      }
    },
    test(event){
      console.log(event);
    },
    addCollege(event){
      this.collegeModal = true;
    },
    okDelCollege(event){
      this.$Modal.remove();
    },
    addProfession(event){
      this.professionModal = true;
    },
    okDelProfession(event){
      this.$Modal.remove();
    },
    okDelClass(event){
      this.$Modal.remove();
    },
    addClass(event){
      this.classModal = true;
    },
    delCollege(event){
      let _self = this;
      let config = {
        title: this.$t("basicInfo.role.info"),
        content: this.$t("basicInfo.role.deleteTips"),
        loading: true,
        onOk: () => {
          _self.okDelCollege(event)
        },
        onCancel: () => {
          //_self.cancelDel(event)
        }
      };
      this.$Modal.confirm(config);
    },
    delProfession(event){
      let _self = this;
      let config = {
        title: this.$t("basicInfo.role.info"),
        content: this.$t("basicInfo.role.deleteTips"),
        loading: true,
        onOk: () => {
          _self.okDelProfession(event)
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
.layout-right-top-layout{
  height:50px;
  border: 1px solid #dddddd;
}
.layout-right-title{
  padding: 5px 0px;
  font-size: 14px;
  font-weight: bold;
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
.container-top-block{
  height:35px;
  line-height: 35px;
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
.ivu-list-bordered {
  border: 1px solid #19be6b;
  border-radius: 6px;
}
.ivu-list-bordered .ivu-list-item {
  border-bottom: 1px solid #19be6b;
}
.table-teacher-height{
  max-height: 200px;
  overflow-y: auto;
}
</style>
