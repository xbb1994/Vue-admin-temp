<!-- 登录首页 -->
<template>
  <div class="login-container">
    <el-form class="login-form">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick" stretch>
        <el-tab-pane label="登录" name="login"><router-view></router-view></el-tab-pane>
        <el-tab-pane label="注册" name="regist"><router-view></router-view></el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import login from './Login'
  import regist from './Regist'

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      login,
      regist,
    },
    data() {
      //这里存放数据
      return {
        activeName: 'login',
        currentActiveName: 'login',
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      show(val) {},
      handleClick(tab) {
        if (tab.name == 'regist' && this.currentActiveName != tab.name) {
          this.currentActiveName = 'regist'
          this.$router.push({ name: 'regist' })
        } else if (tab.name == 'login' && this.currentActiveName != tab.name) {
          this.currentActiveName = 'login'
          this.$router.push({ name: 'login' })
        }
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
  /**@import url(); 引入公共css类 **/
  .login-container {
    background: url('../../assets/imgs/car.jpg');
    width: 100%;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  .login-form {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
</style>
