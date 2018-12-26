<template>
    <!-- <div class="personal-info">
        <img src="static/image/avatar.png" alt="">
        <p>姓&emsp;&emsp;名：肖琳娜</p>
        <p>学&emsp;&emsp;历：本科</p>
        <p>工作年限：3 年</p>
        <p>联系电话：18206191865</p>
        <p>电子邮箱：xiaolinna0625@163.com</p>
        <p>GitHub：<a href="https://github.com/RaiyenXiao" target="_blank">RaiyenXiao</a></p>
    </div> -->
        <div class="personal-part">
            <div class="name">
                <h2 class="typed-text" id="typed-text">I'm <span class="typed"></span></h2>
                <!-- <h2>RaiyenXiao</h2> -->
                <p>Web Developer</p>
            </div>
            <div class="info">
                        <div class="img-bg">
                            <div class="about-img">
                            <img src="static/image/me.jpg">
                            </div>
                        </div>
                        <div class="info-detail">
                            <p>姓&emsp;&emsp;名：肖琳娜</p>
                            <p>学&emsp;&emsp;历：本科</p>
                            <p>工作年限：3 年</p>
                            <p>联系电话：18206191865</p>
                            <p>电子邮箱：xiaolinna0625@163.com</p>
                            <p>GitHub：<a href="https://github.com/RaiyenXiao" target="_blank">RaiyenXiao</a></p>
                        </div>
            </div>
        </div>
</template>

<script>
    import Typed from 'typed.js';

    export default {
        name:'typed-text',
        data () {
            return {
            typedOptions : ["RaiyenXiao", "Web Developer"]
            }
        },
        mounted() { 
              const typed = new Typed('.typed', {
                strings: this.typedOptions,
                typeSpeed: 100,
                loop: true,
                backDelay: 2000
                })
        }
    }
</script>

<style scoped>
.personal-part{
    margin-bottom: 50px;
}
.personal-part .name{
    margin: 180px auto 80px;
    text-align: center;
}
.personal-part .name h2{
    font-size: 45px;
    color: #333;
    font-family: 'Poppins', helvetica;
    font-weight: 100;
}
.personal-part .name p{
    font-size: 14px;
    margin: 10px 0 15px;
    letter-spacing: 11px;
    color: #bbb;
}
.personal-part .info{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.personal-part .info .img-bg{
    padding-bottom: 20px;
    border: 20px solid #b8a07e;
    max-width: 300px;
}
.personal-part .info .img-bg img{
    width: 100%;
    box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
    margin-top: -50px;
    margin-left: 30px;
    object-fit: cover;
}
.personal-part .info .info-detail{
    line-height: 1.5;
}
</style>