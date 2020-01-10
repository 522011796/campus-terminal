<template>
  <div class="container">
    <div class="container-top-block container-search-block">
      <Row>
        <Col span="12">
          <Button class="font-size-12" type="info" @click="addYearBtn($event)"><i class="fa fa-plus"></i>{{ $t('basicInfo.term.addYear') }}</Button>
        </Col>
        <Col span="12">

        </Col>
      </Row>
    </div>

    <div class="margin-top-5" :style="styleTableHeight">
      <Table border ref="selection" size="small" :columns="columns" :data="data" :row-class-name="rowClassName">
        <template slot-scope="{ row, index }" slot="status">
          <span class="color-success" v-if="row.status == 1"> <i class="fa fa-check-circle-o"></i> {{ $t('basicInfo.term.nowYear') }}</span>
          <div v-if="row.status == 2">
            <Tag type="border" color="warning">
              <i class="fa fa-cog"></i>
              {{ $t('basicInfo.term.setNowYear') }}
            </Tag>
          </div>
        </template>

        <template slot-scope="{ row, index }" slot="year">
          <span>{{ row.year }}</span>
          <span v-if="index == 0">
            /
            <Poptip placement="bottom-start" width="600" v-model="poptipVisible" :transfer="true">
              <label class="color-success">
                <i class="fa fa-calendar"></i>
                <label>第一学期</label>
              </label>
              <div class="api" slot="content">
                <table class="popTips-table">
                    <thead>
                        <tr>
                          <th>{{$t("basicInfo.term.status")}}</th>
                          <th>{{$t("basicInfo.term.number")}}</th>
                          <th>{{$t("basicInfo.term.termName")}}</th>
                          <th>{{$t("basicInfo.term.termTimeRanger")}}</th>
                          <th>{{$t("basicInfo.term.opr")}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                          <td class="font-size-12">
                            <span class="color-success"> <i class="fa fa-check-circle-o"></i> {{ $t('basicInfo.term.nowTerm') }}</span>
                          </td>
                          <td>0.9.5</td>
                          <td>学期名称</td>
                          <td>2016-10-26 至 2019-11-11</td>
                          <td>
                            <a href="javasripr:;" class="font-size-12" @click="settingTeach($event)">{{ $t("basicInfo.term.checkedSetting") }}</a>
                            |
                            <a href="javasripr:;" class="font-size-12" @click="addTermBtn($event)">{{ $t("basicInfo.term.edit") }}</a>
                            |
                            <a href="javasripr:;" class="font-size-12 color-error" @click="deleteTermBtn($event)">{{ $t("basicInfo.term.delete") }}</a>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>
                              <Tag type="border" color="warning">
                                <i class="fa fa-cog"></i>
                                {{ $t('basicInfo.term.setNowTerm') }}
                              </Tag>
                            </div>
                          </td>
                          <td>0.0.9</td>
                          <td>学期名称</td>
                          <td>2016-10-26 至 2019-11-11</td>
                          <td>
                            <a href="javasripr:;" class="font-size-12 color-success" @click="settingTeach($event)">{{ $t("basicInfo.term.teachSetting") }}</a>
                            |
                            <a href="javasripr:;" class="font-size-12" @click="addTermBtn($event)">{{ $t("basicInfo.term.edit") }}</a>
                            |
                            <a href="javasripr:;" class="font-size-12 color-error" @click="deleteTermBtn($event)">{{ $t("basicInfo.term.delete") }}</a>
                          </td>
                        </tr>
                    </tbody>
                </table>
              </div>
            </Poptip>
          </span>
        </template>

        <template slot-scope="{ row, index }" slot="opr">
          <a href="javascript:;" @click="addYearBtn($event)">{{ $t('basicInfo.term.edit') }}</a>
          |
          <a href="javascript:;" class="color-error" @click="deleteYearBtn($event)">{{ $t('basicInfo.term.delete') }}</a>
          |
          <Button type="success" class="font-size-12" size="small" ghost @click="addTermBtn($event)"><i class="fa fa-calendar"></i>{{ $t('basicInfo.term.addTerm') }}</Button>
        </template>
      </Table>
    </div>

    <div class="container-bottom-block">
      <div class="pull-right">
        <Page :total="1000" :page-size-opts="[10,20,50,100]" show-sizer show-elevator/>
      </div>
      <div class="clearfix"></div>
    </div>

    <!--添加学年模态框-->
    <Modal
      v-model="yearModal"
      :title="yearTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      class-name="term-modal-main"
      @on-ok="okYear"
      @on-cancel="cancelYear">

      <Form ref="formValidate" :label-width="120">
        <FormItem :label="$t('basicInfo.term.yearName')" prop="roleNo">
          <Input placeholder="" class="width260"></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.term.startTime')" prop="roleName">
          <DatePicker type="date" placeholder="" class="width260"></DatePicker>
        </FormItem>
        <FormItem :label="$t('basicInfo.term.endTime')" prop="roles">
          <DatePicker type="date" placeholder="" class="width260"></DatePicker>
        </FormItem>
      </Form>
    </Modal>

    <!--添加学期模态框-->
    <Modal
      v-model="termModal"
      :title="termTitle"
      :styles="{top: '20px'}"
      :mask-closable="false"
      :z-index="1200"
      :footer-hide="false"
      class-name="term-modal-add-main"
      @on-ok="okTerm"
      @on-cancel="cancelTerm">

      <Form ref="formValidate" :label-width="120">
        <FormItem :label="$t('basicInfo.term.termNo')" prop="roleNo">
          <Input placeholder="" class="width260"></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.term.termName')" prop="roleNo">
          <Input placeholder="" class="width260"></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.term.startTime')" prop="roleName">
          <DatePicker type="date" placeholder="" class="width260"></DatePicker>
        </FormItem>
        <FormItem :label="$t('basicInfo.term.endTime')" prop="roles">
          <DatePicker type="date" placeholder="" class="width260"></DatePicker>
        </FormItem>
      </Form>

      <div slot="footer">
        <Button type="text" @click.stop="okTerm($event)">{{ $t('basicInfo.term.cancel') }}</Button>
        <Button type="info" @click.stop="cancelTerm($event)">{{ $t('basicInfo.term.ok') }}</Button>
      </div>
    </Modal>

    <!--删除模态框-->
    <Modal
      v-model="delTermModal"
      :title="$t('basicInfo.term.info')"
      :mask-closable="false"
      class-name="term-modal-del-main"
      :z-index="1200"
      :footer-hide="false"
      width="400"
      @on-ok="okTermDel"
      @on-cancel="cancelTermDel">

      <div slot="header">
        <span class="ivu-modal-confirm-head-title">
          <Icon type="ios-help-circle" color="#ff9900" size="28"/>
          {{ $t('basicInfo.term.info') }}
        </span>
      </div>

      <span>
        {{ $t('basicInfo.term.deleteTips') }}
      </span>

    </Modal>

    <Drawer
      :title="$t('basicInfo.term.teachSetting')"
      v-model="drawerSetting"
      width="580"
      class-name="drawer-index-class"
      :mask-style="drawerMaskClass"
      :mask-closable="false"
      :styles="drawerStyles"
      >
      <div class="draw-body">
        <Form :label-width="100">
          <FormItem :label="$t('basicInfo.term.year')">
            <label>xxxxxxxx</label>
          </FormItem>
          <FormItem :label="$t('basicInfo.term.term')">
            <label>xxxxxxxx</label>
          </FormItem>
          <FormItem :label="$t('basicInfo.term.startTime')">
            <DatePicker type="date" placeholder="" style="width: 100%"></DatePicker>
          </FormItem>
          <FormItem :label="$t('basicInfo.term.teachWeek')">
            <Input placeholder=""></Input>
          </FormItem>
          <FormItem :label="$t('basicInfo.term.setTeachWeek')">
            <RadioGroup>
              <Radio label="0">{{$t('basicInfo.term.setTeachWeekRadioOne')}}</Radio>
              <Radio label="1">{{$t('basicInfo.term.setTeachWeekRadioTwo')}}</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem :label="$t('basicInfo.term.teachDay')">
            <CheckboxGroup>
              <Checkbox label="1">{{$t('week.Mon')}}</Checkbox>
              <Checkbox label="2">{{$t('week.Tue')}}</Checkbox>
              <Checkbox label="3">{{$t('week.Wed')}}</Checkbox>
              <Checkbox label="4">{{$t('week.Thu')}}</Checkbox>
              <Checkbox label="5">{{$t('week.Fri')}}</Checkbox>
              <Checkbox label="6">{{$t('week.Sat')}}</Checkbox>
              <Checkbox label="7">{{$t('week.Sun')}}</Checkbox>
            </CheckboxGroup>
          </FormItem>
          <FormItem :label="$t('basicInfo.term.courseDayTime')">
            <div>
              <Input placeholder=""></Input>
            </div>
            <div class="margin-top-10 draw-table">
              <table class="popTips-table">
                <thead>
                <tr>
                  <th>{{$t("basicInfo.term.section")}}</th>
                  <th>{{$t("basicInfo.term.actionTime")}}</th>
                  <th>{{$t("basicInfo.term.courseTime")}}</th>
                </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in dataTeach" :key="index">
                    <td class="font-size-12">
                      1
                    </td>
                    <td>
                      <span v-if="item.actionEdit == false">
                        <label>{{ item.time }}</label>
                        <a href="javascript:;" @click="editActionTime($event,item)">{{ $t('basicInfo.term.edit') }}</a>
                      </span>
                      <span v-if="item.actionEdit == true">
                        <TimePicker format="HH:mm" v-model="item.time" :value="item.time" placeholder=""  style="width: 80px;"></TimePicker>
                        <a href="javascript:;" @click="saveActionTime($event,item)">{{ $t('basicInfo.term.ok') }}</a>
                      </span>
                    </td>
                    <td>
                      <span v-if="item.courseEdit == false">
                        <label>{{ item.course }} {{$t("basicInfo.term.min")}}</label>
                        <a href="javascript:;" @click="editCourseTime($event,item)">{{ $t('basicInfo.term.edit') }}</a>
                      </span>
                      <span v-if="item.courseEdit == true">
                        <Input v-model="item.course" style="width: 80px" />
                        <a href="javascript:;" @click="saveCourseTime($event,item)">{{ $t('basicInfo.term.ok') }}</a>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FormItem>
        </Form>
      </div>
      <div class="demo-drawer-footer">
        <Button type="default" size="small">{{ $t('basicInfo.term.cancel') }}</Button>
        <Button type="success" size="small">{{ $t('basicInfo.term.ok') }}</Button>
      </div>
    </Drawer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {

  },
  data() {
    return {
      yearTitle: this.$t('basicInfo.term.addYear'),
      yearModal: false,
      termTitle: this.$t('basicInfo.term.addTerm'),
      termModal: false,
      poptipVisible: false,
      delTermModal: false,
      drawerSetting: false,
      drawerActionTime: false,
      drawerCourseTime: false,
      drawerActionTimeInput: '',
      drawerCourseTimeInput: '',
      drawerMaskClass:{
        'z-index': '1200'
      },
      drawerStyles: {
        height: 'calc(100% - 55px)',
        overflow: 'auto',
        paddingBottom: '53px',
        position: 'static'
      },
      tableHeight: 0,
      styleTableHeight: {
        'max-height': '',
        'overflow-y': 'auto'
      },
      styleDrawerHeight: {
        'height': '',
        'overflow-y': 'auto'
      },
      columns: [
        {
          title: this.$t('basicInfo.term.status'),
          slot: 'status',
          key: 'status'
        },
        {
          title: this.$t('basicInfo.term.year') + " / " + this.$t('basicInfo.term.term'),
          slot: 'year',
          key: 'year'
        },
        {
          title: this.$t('basicInfo.term.startTime'),
          key: 'startTime'
        },
        {
          title: this.$t('basicInfo.term.endTime'),
          key: 'endTime'
        },
        {
          title: this.$t('basicInfo.term.opr'),
          slot: 'opr',
          key: 'opr',
          width: '190'
        }
      ],
      data: [
        {
          no: '1',
          year: '2011-11-11学年',
          startTime: '2011-11-11',
          endTime: '2016-10-03',
          status:'1'
        },
        {
          no: '1',
          year: '2011-11-11学年',
          startTime: '2011-11-11',
          endTime: '2016-10-03',
          status:'2'
        }
      ],
      columnsTerm: [
        {
          title: this.$t('basicInfo.term.status'),
          key: 'status'
        },
        {
          title: this.$t('basicInfo.term.year') + " / " + this.$t('basicInfo.term.term'),
          key: 'year'
        }
      ],
      dataTerm: [
        {
          no: '1',
          year: '2011-11-11学年',
          startTime: '2011-11-11',
          endTime: '2016-10-03',
          status:'1'
        },
        {
          no: '1',
          year: '2011-11-11学年',
          startTime: '2011-11-11',
          endTime: '2016-10-03',
          status:'2'
        }
      ],
      columnsTeach: [
        {
          title: this.$t('basicInfo.term.section'),
          key: 'section'
        },
        {
          title: this.$t('basicInfo.term.actionTime'),
          slot: 'classtTime',
          key: 'time'
        },
        {
          title: this.$t('basicInfo.term.courseTime'),
          slot: 'course',
          key: 'course'
        }
      ],
      dataTeach: [
        {
          id: 1,
          section: '1',
          time: '08:30',
          course: '40',
          actionEdit: false,
          courseEdit: false
        },
        {
          id: 2,
          section: '1',
          time: '08:30',
          course: '40',
          actionEdit: false,
          courseEdit: false
        }
      ]
    }
  },
  mounted() {
    let _self = this;
    if (process.browser) {
      document.querySelector(".term-modal-add-main").addEventListener('click',e => {
        _self.poptipVisible = true;
        e.stopPropagation();
      });

      document.querySelector(".term-modal-del-main").addEventListener('click',e => {
        _self.poptipVisible = true;
        e.stopPropagation();
      });

      document.querySelector(".drawer-index-class").addEventListener('click',e => {
        _self.poptipVisible = true;
        e.stopPropagation();
      });
    }
  },
  created() {
    let _self = this;
    this.tableH();
    this.init();
  },
  methods: {
    rowClassName (row, index) {
      if (index === 0) {
        return 'demo-table-info-row';
      }
      return '';
    },tableH(){
      if (process.browser) {
        this.styleTableHeight["max-height"] = window.innerHeight - 80 - 35 - 55 + 'px';
        this.styleDrawerHeight.height = window.innerHeight - 80 - 30 + 'px';
        this.tableHeight = window.innerHeight - 80 - 50;
        this.$store.commit("SET_DEFAULT_RIGHT_OVERFLOWY",false);
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
    addYearBtn(event){
      this.yearModal = true;
    },
    addTermBtn(event){
      //this.poptipVisible = false;
      this.termModal = true;
    },
    okYear(){

    },
    cancelYear(){

    },
    okTerm(event){
      this.termModal = false;
    },
    cancelTerm(event){
      this.termModal = false;
    },
    okYearDel(event){
      this.$Modal.remove();
    },
    okTermDel(event){
      this.delTermModal = false;
    },
    cancelTermDel(event){
      this.delTermModal = false;
    },
    deleteYearBtn(event){
      let _self = this;
      let config = {
        title: this.$t("basicInfo.term.info"),
        content: this.$t("basicInfo.term.deleteTips"),
        loading: true,
        onOk: () => {
          _self.okYearDel(event)
        },
        onCancel: () => {
          //_self.cancelDel(event)
        }
      };
      this.$Modal.confirm(config);
    },
    deleteTermBtn(event){
      this.delTermModal = true;
    },
    settingTeach(event){
      this.drawerSetting = true;
    },
    editActionTime(event,item){
      item.actionEdit = true;
      //event = true;
    },
    editCourseTime(event,item){
      item.courseEdit = true;
    },
    saveActionTime(event,item){
      item.actionEdit = false;
    },
    saveCourseTime(event,item){
      item.courseEdit = false;
    }
  }
}
</script>

<style scoped>
.container{
  padding:10px 15px;
}
.container-top-block{
  height:35px;
  line-height: 35px;
}
.container-bottom-block{
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
button i{
  margin-right: 5px;
}
.demo-drawer-footer{
  text-align: right;
}
.draw-body{
  border-bottom: 1px solid #dddddd;
  margin-bottom: 20px;
}
</style>
