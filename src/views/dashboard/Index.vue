<!--  -->
<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <side-bar></side-bar>
      </el-aside>
      <el-main>
        <nav-bar></nav-bar>
        <main-body></main-body>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';
  import NavBar from '../../components/NavBar'
  import SideBar from '../../components/SideBar'
  import MainBody from '../../components/MainBody'

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {
      NavBar,
      SideBar,
      MainBody,
    },
    data() {
      //这里存放数据
      return {}
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
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

  .el-header {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    padding: 0px;
  }
  .el-container {
    /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    margin: 0px;
    height: 100vh;
    width: 100vw;
  }
</style>
