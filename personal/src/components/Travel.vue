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
        { name: "成都", value: ["104.065735", "30.659462", "8"] },
        { name: "北京", value: ["116.405285", "	39.904989", "6"] },
      ];
      // 已经去过的地
      let beenCity = [
        { name: "长沙", value: ["112.982279","28.19409", "4"] },
        { name: "张家界", value: ["110.479921", "29.127401", "4"] },
        { name: "湘西土家族苗族自治州", value: ["109.739735", "28.314296", "4"] },
        { name: "上海", value: ["121.472644", "31.231706", "4"] },
        { name: "昆山", value: ["120.95", "31.39", "4"] },
        { name: "昆明", value: ["102.712251", "25.040609", "4"] },
        { name: "大理", value: ["100.225668", "25.589449", "4"] },     
        { name: "丽江", value: ["100.233026", "26.872108", "4"] },
        { name: "佛山", value: ["113.122717", "23.028762", "4"] },
        { name: "苏州", value: ["120.619585", "31.299379", "4"] },
        { name: "扬州", value: ["119.421003", "32.393159", "4"] },
        { name: "南京", value: ["118.767413", "32.041544", "4"] },
        { name: "杭州", value: ["120.153576", "30.287459", "4"] },
        { name: "芜湖", value: ["118.376451", "31.326319", "4"] },
        { name: "武汉", value: ["114.298572", "30.584355", "4"] },
        { name: "西安", value: ["108.948024", "34.263161", "4"] },
        { name: "重庆", value: ["106.504962", "29.533155", "4"] },
      ];    
      var geoCoordMap = {  //全国Geo ·http://datav.aliyun.com/tools/atlas/#&lat=33.521903996156105&lng=104.29849999999999&zoom=4
        '无锡': [120.301663,31.574729],
        '上海': [121.472644,31.231706],
        '张家界': [110.479921,29.127401],
        '湘西土家族苗族自治州': [109.739735,28.314296],
        '长沙': [112.982279,28.19409],
        '昆明': [102.712251,25.040609],
        '大理': [100.225668,25.589449],
        '丽江': [100.233026,26.872108],
        '佛山': [113.122717,23.028762],
        '苏州': [120.619585,31.299379],
        '昆山': [120.95,31.39],
        '扬州': [119.421003,32.393159],
        '南京': [118.767413,32.041544],
        '杭州': [120.153576,30.287459],
        '芜湖': [118.376451,31.326319],
        '武汉': [114.298572,30.584355],
        '西安': [108.948024,34.263161],
        '重庆': [106.504962,29.533155]
      };
      let WXData = [
          [{name:'无锡'},{name:'上海'}],
          [{name:'无锡'},{name:'长沙'}],
          [{name:'无锡'},{name:'张家界'}],      
          [{name:'无锡'},{name:'湘西土家族苗族自治州'}],
          [{name:'无锡'},{name:'昆明'}],   
          [{name:'无锡'},{name:'大理'}],
          [{name:'无锡'},{name:'丽江'}],
          [{name:'无锡'},{name:'佛山'}],
          [{name:'无锡'},{name:'苏州'}],
          [{name:'无锡'},{name:'昆山'}],
          [{name:'无锡'},{name:'扬州'}],
          [{name:'无锡'},{name:'南京'}],
          [{name:'无锡'},{name:'芜湖'}],
          [{name:'无锡'},{name:'武汉'}],
          [{name:'无锡'},{name:'杭州'}],
          [{name:'无锡'},{name:'西安'}],
          [{name:'无锡'},{name:'重庆'}]
      ];
      var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
      var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
      };
      myChart.setOption({
        // 标题
        title: {
          text: "脚步",
          subtext:"红点为想去的城市，飞机轨迹是去过的城市",
          textStyle: {
            color: "#333"
          },
          x: "center"
        },
        // 移动显示
        tooltip: {
          trigger: "item",
          // 显示文字样式
          //formatter: "{a}:{b}"
        },
        // geo
        geo: {
          map: "china",
          roam:true,
          label: {
            emphasis: {
                show: false//高亮不显示文字
            }
          },
          //center:[120.3442,31.5527],//当前视角中心无锡
          itemStyle: {
            normal: {
              borderColor:'rgba(100,149,237,.8)',
              borderWidth:0.5
            },
            emphasis: {
                areaColor: '#eee'
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
          //已经去过的城市
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
                color: "#46bee9",
                shadowColor: "#333",
              }
            },
            // 类似于 z-index
            zlevel: 1,
            data: beenCity,
          },
          {
            type: 'lines',
            symbol: ['none', 'arrow'],
            symbolSize: 8,
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 12
            },
            lineStyle: {
                normal: {
                    color: '#46bee9',
                    width: 1,
                    opacity: 0.8,
                    curveness: 0.2
                }
            },
            data: convertData(WXData)
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