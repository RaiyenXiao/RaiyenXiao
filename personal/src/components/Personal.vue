<template>
    <div class="personal-info">
        <img src="/static/image/avatar.png" alt="">
        <p>姓&emsp;&emsp;名：肖琳娜</p>
        <p>学&emsp;&emsp;历：本科</p>
        <p>工作年限：3 年</p>
        <p>联系电话：18206191865</p>
        <p>电子邮箱：xiaolinna0625@163.com</p>
        <p>GitHub：<a href="https://github.com/RaiyenXiao" target="_blank">RaiyenXiao</a></p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.personal-info {
  width: 100%;
  height: 500px;
  padding-left: 20px;
}
.personal-info img{
    width: 60%;
    margin-bottom: 30px;
}
.personal-info p{
    line-height: 1.5;
}
.personal-info p a{
    color: #333;
}
</style>