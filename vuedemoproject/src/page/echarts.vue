<template>
  <div>
    <div ref="mainEcharts" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default{
    data(){
      return {
        lists:[]
      }
    },

    created(){
    },

    mounted(){
      this.get_data()
    },

    methods: {
      get_data: function(params) {
        let this_ = this;
        let myChart = echarts.init(this_.$refs.mainEcharts);

        var option = {
          visualMap: {
            show: false,
            min: 0,
            max: 1000
          },
          calendar: {
            range: '2017'
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: this.getVirtulData(2017),
          }
        }
        myChart.setOption(option);

      },

      // 模拟数据
      getVirtulData : function (year) {
        year = year || '2017';
        var date = +echarts.number.parseDate(year + '-01-01');
        var end = +echarts.number.parseDate(year + '-12-31');
        var dayTime = 3600 * 24 * 1000;
        var data = [];
        for (var time = date; time <= end; time += dayTime) {
          data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
          ]);
        }
        return data;
      }
    }
  }
</script>
