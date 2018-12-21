<template>
  <div id="app" class="app">
    <div class="top">
      Raiyen
    </div>
    <!-- 第一行 -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6" class="part">
        <router-view name="Personal"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10" class="part">
        <router-view name="Travel"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8" class="part">
        <router-view name="Skill"/>
      </el-col>
    </el-row>
    <!-- 第二行 -->
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="part">
        <router-view name="Experience"/>
      </el-col>
    </el-row> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  /* background: #011128; */
  color: #333;
}
.app {
  width: 100%;
}
.top{
  font-size: 28px;
}
.part {
  padding: 20px;
}
</style>
