<template>
  <div class="container">
    <div class="container-top-block container-search-block">
      <Row>
        <Col span="12">
          <Button class="font-size-12" type="info"><i class="fa fa-plus"></i>{{ $t('basicInfo.role.addRole') }}</Button>
        </Col>
        <Col span="12">
        </Col>
      </Row>
    </div>

    <div class="margin-top-5">
      <Table border ref="selection" size="small" :height="tableHeight" :columns="columns" :data="data">
        <template slot-scope="{ row, index }" slot="opr">
          <a href="javascript" class="color-success">{{ $t('basicInfo.role.setRole') }}</a>
          |
          <a href="javascript">{{ $t('basicInfo.role.addUser') }}</a>
          |
          <a href="javascript">{{ $t('basicInfo.role.edit') }}</a>
          |
          <a href="javascript" class="color-error">{{ $t('basicInfo.role.delete') }}</a>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        tableHeight: 0,
        styleTableHeight: {
          'max-height': '',
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
            key: 'opr'
          }
        ],
        data: [
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

    },
    methods:{

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
</style>
