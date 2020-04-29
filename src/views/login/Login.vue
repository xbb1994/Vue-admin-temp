<!-- 登录组件 -->
<template>
  <div class="">
    <el-form :model="loginForm" size="medium">
      <el-form-item label="">
        <el-input type="text" v-model="loginForm.userName" prefix-icon="el-icon-user" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input type="password" v-model="loginForm.passWord" prefix-icon="el-icon-lock" placeholder="密码"></el-input>
      </el-form-item>
      <el-button type="primary" @click="loginSuccess" style="width:100%">登录</el-button>
    </el-form>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import http from '../../utils/http'
  import { login } from '@/api/api'
  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        loginForm: {
          userName: '',
          passWord: '',
        },
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      login() {
        login('/test/testApi', this.loginForm)
          .then((res) => {
            console.log(res)
            this.$message.success(res.message)
            this.$router.push({ name: 'dashboard' })
          })
          .catch((err) => {})
        // http.post();
      },
      loginSuccess() {
        this.$message.success('login success')

        this.$router.push({ name: 'dashboard' })
      },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style scoped>
  .el-input {
    width: 100%;
  }
</style>
