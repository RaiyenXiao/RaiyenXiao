<template>
  <div class="skill" id="skill"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
export default {
  name: "skill",
   data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("skill"));
      myChart.setOption({
        // 标题
        title: {
          // 标题文本
          text: "技能分布图",
          // 标题样式
          textStyle: {
            color: "#333"
          },
          // 标题位置
          x: "center"
        },
        // 移动显示
        tooltip: {
          trigger: "item",
          // 显示文字样式
          formatter: "{a} <br/>{b} : {d}%"
        },
        // 注记
        legend: {
          x: "center",
          y: "bottom",
          textStyle: {
            color: "#333"
          },
          data: [ "HTML5", "CSS3", "JavaScript", "jQuery", "Scss/Sass","Vue", "微信小程序", "其他" ]
        },
        // 注记显示手柄
        calculable: true,
        // 图形系列
        series: [
          {
            name: "技能分布",
            type: "pie",
            radius: [30, 110],
            roseType: "area",
            data: [
              { value: 15, name: "HTML5" },
              { value: 15, name: "CSS3" },
              { value: 10, name: "JavaScript" },
              { value: 20, name: "jQuery" },
              { value: 15, name: "Scss/Sass" },
              { value: 20, name: "Vue" },
              { value: 20, name: "微信小程序" },
              { value: 15, name: "其他" }
            ]
          }
        ],
      });
    }
  }
};
</script>

<style scoped>
.skill {
  width: 100%;
  height: 500px;
}
</style>