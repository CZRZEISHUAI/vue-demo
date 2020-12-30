<template>
  <div class="test">
    <div id="myChart" ref="chart" style="width: 100%; height: 100%"></div>
  </div>
</template>
<script>
// // 引入基本模板
// let echarts = require("echarts/lib/echarts");
// // 引入柱状图组件
// require("echarts/lib/chart/bar");
// // 引入提示框和title组件
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/title");
import * as echarts from "echarts";

export default {
  name: "test",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      option: {
        title: { text: "ECharts 入门示例" },
        legend: {
          right: "0",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
          {
            name: "利润",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },

  methods: {
    // 初始化图表
    initCharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(this.option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.initCharts();
  },
};
</script>
<style lang="css" scoped>
.test {
  width: 50%;
  height: 50%;
  margin: 0 auto;
}
</style>
