<!-- 导航组件 -->
<template>
  <div class="nav">
    <div class="nav-left" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-if="collapse" class=" el-icon-s-unfold"></i>
    </div>
    <div class="nav-right">
      <el-avatar :size="size" :src="userPic"></el-avatar>
    </div>
  </div>
</template>

<script>
  //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  //例如：import 《组件名称》 from '《组件路径》';

  export default {
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
      //这里存放数据
      return {
        collapse: false,
        userPic: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      }
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      collapseChage(){
        this.collapse=!this.collapse;
      }
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
  .nav {
    height: 50px;
    background: #2b91d5;
  }
  .nav-left {
    float: left;
    text-align: center;
  }
  .nav-right {
    float: right;
  }
  .el-icon-s-fold,.el-icon-s-unfold {
    width: 50px;
    height: 50px;
    font-size: 35px;
    line-height: 50px;
  }
</style>
