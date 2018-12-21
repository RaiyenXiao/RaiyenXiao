<template>
  <div id="app" class="app">
    <el-row>
      <el-col  :xs="24" :sm="24" :md="8" class="part">
        <router-view name="Personal"/>
      </el-col>
      <el-col class="hidden-sm-only hidden-xs-only" :md="4">
        &nbsp;
      </el-col>
      <el-col  :xs="24" :sm="24" :md="12" class="part">
          <router-view name="Skill"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="part">
        <el-row>
          <el-col :span="24">
            <router-view name="Experience"/>
          </el-col>
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="part">
        <el-row>
          <el-col :span="24">
            <router-view name="Travel"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
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
.part {
  padding: 20px;
}
@media only screen and (min-width: 992px){
  
}
</style>
