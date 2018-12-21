<template>
  <div class="map-content" id="map-content"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引用中国地图
require("echarts/map/js/china.js");
export default {
  name: "mapCcontent",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("map-content"));
      // 优先想去的地方
      let wantCity = [
        { name: "成都", value: ["104.04", "30.40", "10"] },
        { name: "重庆", value: ["106.33", "29.35", "8"] },
        { name: "西安", value: ["108.57", "34.17", "6"] },
        { name: "北京", value: ["116.24", "39.55", "5"] },
      ];
      // 已经去过的地
      let beenCity = [
        { name: "长沙", value: ["113", "28.21", "4"] },
        { name: "张家界", value: ["110.479191", "29.117096", "4"] },
        { name: "上海", value: ["121", "31.22", "4"] },
        { name: "昆山", value: ["120.95", "31.39", "4"] },
        { name: "昆明", value: ["102.73", "25.04", "4"] },
        { name: "佛山", value: ["113.11", "23.05", "4"] },
        { name: "苏州", value: ["120.62", "31.32", "4"] },
        { name: "扬州", value: ["119.42", "32.39", "4"] },
        { name: "南京", value: ["118.78", "32.04", "4"] },
        { name: "杭州", value: ["120.19", "30.26", "4"] },
        { name: "芜湖", value: ["118.38", "31.33", "4"] },
        { name: "武汉", value: ["114.31", "30.52", "4"] },
      ];
      myChart.setOption({
        // 标题
        title: {
          text: "将行",
          textStyle: {
            color: "#333"
          },
          x: "center"
        },
        // 移动显示
        tooltip: {
          trigger: "item",
        },
        // geo
        geo: {
          map: "china",
          roam:true,
          itemStyle:{
              normal:{
                  arerColor:'deepskyblue',
                  borderColor:'rgba(120,204,204,.8)',
                  borderWidth:2
              }
          }
        },
        // 数据
        series: [
          // 想去的城市
          {
            name: "想去的城市",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function(val) {
              return val[2] * 2;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: true,
                color: "#333"
              }
            },
            itemStyle: {
              normal: {
                color: "#ff6584",
              }
            },
            // 类似于 z-index
            zlevel: 1,
            data: wantCity,
          },
          // 已经去过的城市
          {
            name: "走过的城市",
            type: "effectScatter",
            coordinateSystem: "geo",
            symbolSize: function(val) {
              return val[2] * 2;
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: true,
            itemStyle: {
              normal: {
                color: "#ffd700",
                shadowColor: "#333",
              }
            },
            // 类似于 z-index
            zlevel: 1,
            data: beenCity,
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
.map-content {
  width: 100%;
  height: 500px;
}
</style>