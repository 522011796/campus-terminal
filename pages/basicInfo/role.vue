<template>
  <div class="container">
    <div class="container-top-block container-search-block">
      <Row>
        <Col span="12">
          <Button class="font-size-12" type="info" @click="addRoleBtn($event)"><i class="fa fa-plus"></i>{{ $t('basicInfo.role.addRole') }}</Button>
        </Col>
        <Col span="12">
        </Col>
      </Row>
    </div>

    <div class="margin-top-5" :style="styleTableHeight">
      <Table border ref="selection" size="small" :columns="columns" :data="data">
        <template slot-scope="{ row, index }" slot="opr">
          <a href="javascript:;" class="color-success" @click="setRoleBtn($event)">{{ $t('basicInfo.role.setRole') }}</a>
          |
          <a href="javascript:;" @click="addUserModal($event)">{{ $t('basicInfo.role.addUser') }}</a>
          |
          <a href="javascript:;" @click="editRoleBtn($event)">{{ $t('basicInfo.role.edit') }}</a>
          |
          <a href="javascript:;" class="color-error" @click="deleteRoleBtn($event)">{{ $t('basicInfo.role.delete') }}</a>
        </template>
      </Table>
    </div>

    <div class="container-bottom-block">
      <div class="pull-right">
        <Page :total="1000" :page-size-opts="[10,20,50,100]" show-sizer show-elevator/>
      </div>
      <div class="clearfix"></div>
    </div>

    <!--添加角色模态框-->
    <Modal
      v-model="addRoleModal"
      :title="$t('basicInfo.role.addRole')"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel">

      <Form ref="formValidate" :label-width="80">
        <FormItem :label="$t('basicInfo.role.roleNo')" prop="roleNo">
          <Input placeholder=""></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.role.roleName')" prop="roleName">
          <Input placeholder=""></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.role.roles')" prop="roles">
          <Tree class="formitem-tree" :data="treeData" show-checkbox></Tree>
        </FormItem>
      </Form>
    </Modal>

    <!--编辑角色模态框-->
    <Modal
      v-model="editRoleModal"
      :title="$t('basicInfo.role.editRole')"
      :styles="{top: '20px'}"
      :mask-closable="false"
      @on-ok="ok"
      @on-cancel="cancel">

      <Form ref="formValidate" :label-width="80">
        <FormItem :label="$t('basicInfo.role.roleNo')" prop="roleNo">
          <Input placeholder=""></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.role.roleName')" prop="roleName">
          <Input placeholder=""></Input>
        </FormItem>
        <FormItem :label="$t('basicInfo.role.roleStatus')" prop="roles">
          <i-switch true-color="#13ce66" false-color="#c5c8ce" size="large">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>
      </Form>
    </Modal>

    <!--分配权限模态框-->
    <Drawer :title="drawerTitle" :closable="false" v-model="setDrawerModal">
      <div :style="styleDrawerHeight">
        <Tree class="formitem-tree" :data="treeData" show-checkbox></Tree>
      </div>
      <div class="drawer-item-bottom">
        <Button type="success" size="small">{{ $t('basicInfo.role.save') }}</Button>
        <Button size="small">{{ $t('basicInfo.role.cancel') }}</Button>
      </div>
    </Drawer>

    <!--分配用户模态框-->
    <Modal
      v-model="userListModal"
      :title="$t('basicInfo.role.userList')"
      :styles="{top: '20px'}"
      width="60"
      :mask-closable="false"
      :footer-hide="true"
      @on-visible-change="modelVisible($event)">

      <div>
        <div>
          <Button class="font-size-12" type="info" size="small" @click="addTeacherDrawer()"><i class="fa fa-plus"></i>{{ $t('basicInfo.role.addUser') }}</Button>
        </div>

        <div class="margin-top-10">
          <div class="teacher-list-table">
            <Table border ref="selection" size="small" :columns="columnsTeacher" :data="dataTeacher">
              <template slot-scope="{ row, index }" slot="opr">
                <a href="javascript:;" class="color-error" @click="removeTeacherBtn($event)">{{ $t('basicInfo.role.remove') }}</a>
              </template>
            </Table>
          </div>
          <Divider />
          <div class="margin-top-10 text-right teacher-list-table-bottom">
            <Page :total="1000" :page-size-opts="[10,20,50,100]" show-sizer show-elevator/>
          </div>
        </div>
      </div>
    </Modal>

    <!--老师列表模态框-->
    <Drawer :title="drawerTeacherTitle" :closable="true" class-name="drawer-role-class" :mask-closable="false" :mask="false" v-model="setTeacherDrawerModal">
      <div :style="styleDrawerHeight">
        <Tree class="formitem-tree" :data="treeTeacherData" show-checkbox></Tree>
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
        tableHeight: 0,
        addRoleModal: false,
        setDrawerModal: false,
        editRoleModal: false,
        delTipsModal: false,
        userListModal: false,
        setTeacherDrawerModal: false,
        drawerTitle: '',
        drawerTeacherTitle: this.$t("basicInfo.role.userList"),
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
            title: this.$t('basicInfo.role.serialNo'),
            key: 'no'
          },
          {
            title: this.$t('basicInfo.role.roleNo'),
            key: 'roleNo'
          },
          {
            title: this.$t('basicInfo.role.roleName'),
            key: 'roleName'
          },
          {
            title: this.$t('basicInfo.role.roleStatus'),
            key: 'status'
          },
          {
            title: this.$t('basicInfo.role.roleOpr'),
            slot: 'opr',
            key: 'opr',
            width: '240'
          }
        ],
        data: [
          {
            no: '1',
            roleNo: 1,
            roleName: 'New York No. 1 Lake Park',
            status: '2016-10-03'
          }
        ],
        treeData: [
          {
            title: 'parent 0-0',
            expand: false
          },
          {
            title: 'parent 1-1',
            expand: false,
            children: [
              {
                title: 'leaf 1-1-1'
              },
              {
                title: 'leaf 1-1-2',
                disabled: true
              }
            ]
          }
        ],
        treeTeacherData: [
          {
            title: 'parent 0-0',
            expand: false
          },
          {
            title: 'parent 1-1',
            expand: false,
            children: [
              {
                title: 'leaf 1-1-1'
              },
              {
                title: 'leaf 1-1-2',
                disabled: true
              }
            ]
          }
        ],
        columnsTeacher: [
          {
            title: this.$t('basicInfo.role.serialNo'),
            key: 'no'
          },
          {
            title: this.$t('basicInfo.role.teacherName'),
            key: 'roleNo'
          },
          {
            title: this.$t('basicInfo.role.teacherDept'),
            key: 'roleName'
          },
          {
            title: this.$t('basicInfo.role.roleOpr'),
            slot: 'opr',
            key: 'opr',
            width: '80'
          }
        ],
        dataTeacher: [
          {
            no: '1',
            roleNo: 1,
            roleName: 'New York No. 1 Lake Park',
            status: '2016-10-03'
          },
          {
            no: '1',
            roleNo: 1,
            roleName: 'New York No. 1 Lake Park',
            status: '2016-10-03'
          },
          {
            no: '1',
            roleNo: 1,
            roleName: 'New York No. 1 Lake Park',
            status: '2016-10-03'
          },
          {
            no: '1',
            roleNo: 1,
            roleName: 'New York No. 1 Lake Park',
            status: '2016-10-03'
          },
          {
            no: '1',
            roleNo: 1,
            roleName: 'New York No. 1 Lake Park',
            status: '2016-10-03'
          }
        ]
      }
    },
    created() {
      let _self = this;
      this.tableH();
      this.init();
    },
    props:['showLoading'],
    methods:{
      tableH(){
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
      addRoleBtn(event){
        this.addRoleModal = true;
      },
      setRoleBtn(event){
        this.setDrawerModal = true;
        this.drawerTitle = "角色名称" + "-" +this.$t('basicInfo.role.setRole');
      },
      editRoleBtn(event){
        this.editRoleModal = true;
      },
      okDel(event){
        this.$Modal.remove();
      },
      cancelDel(event){
        this.$Modal.remove();
      },
      okDelTeacher(event){
        this.$Modal.remove();
      },
      ok(){

      },
      cancel(){

      },
      deleteRoleBtn(event){
        let _self = this;
        let config = {
          title: this.$t("basicInfo.role.info"),
          content: this.$t("basicInfo.role.deleteTips"),
          loading: true,
          onOk: () => {
            _self.okDel(event)
          },
          onCancel: () => {
            //_self.cancelDel(event)
          }
        };
        this.$Modal.confirm(config);
      },
      addUserModal(event){
        this.userListModal = true;
      },
      removeTeacherBtn(event){
        let _self = this;
        let config = {
          title: this.$t("basicInfo.role.info"),
          content: this.$t("basicInfo.role.deleteTips"),
          loading: true,
          onOk: () => {
            _self.okDelTeacher(event)
          },
          onCancel: () => {
            //_self.cancelDel(event)
          }
        };
        this.$Modal.confirm(config);
      },
      addTeacherDrawer(){
        this.setTeacherDrawerModal = true;
      },
      modelVisible(event){
        if (event == false){
          this.setTeacherDrawerModal = false;
          this.userListModal = false;
        }
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
  .formitem-tree{
    position: relative;
    top: -8px;
  }
  .drawer-item-title{
    font-size: 14px;
    font-weight: bold;
    margin:0px 0px 20px 0px;
  }
  .drawer-item-bottom{
    text-align: right;
  }
  .teacher-list-table{
    max-height: 500px;
    overflow-y: auto;
  }
  .ivu-divider-horizontal {
    display: block;
    height: 1px;
    width: 100%;
    min-width: 100%;
    margin: 12px 0;
    clear: both;
  }
</style>
