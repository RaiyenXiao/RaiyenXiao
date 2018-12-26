<template>
  <div id="app" class="app">
    <el-row :span="24">
      <router-view name="Personal"/>
    </el-row>
    <el-row>
      <el-col  :xs="24" :sm="24" :md="12" class="part">
          <router-view name="Skill"/>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" class="part">
        <router-view name="Travel"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
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
.app {
  width: 1170px;
  margin: 0 auto;
}
.part {
  padding: 0 40px;
}
</style>
