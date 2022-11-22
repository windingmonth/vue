<template>
  <el-main>
    <el-select v-model="pickValue" @change='getweather' placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div>
    <h2>城市: {{weatherData.city}}</h2>
    <h3>实时天气</h3>
    <span>温度: {{weatherData.realtime.temperature}}</span><br>
    <span>湿度: {{weatherData.realtime.humidity}}</span><br>
    <span>描述: {{weatherData.realtime.info}}</span><br>
    <span>风向: {{weatherData.realtime.direct}}</span><br>
    <span>风力: {{weatherData.realtime.power}}</span><br>
    <span>空气质量: {{weatherData.realtime.aqi}}</span><br>
    <h3>未来天气</h3>
    <ul>
      <li v-for='f in weatherData.future' :key="f.date">
        <span>日期: {{f.date}}</span><br>
        <span>温度: {{f.temperature}}</span><br>
        <span>天气: {{f.weather}}</span><br>
        <span>风向: {{f.direct}}</span><br>
      </li>
    </ul>
  </div>
  </el-main>
</template>


<script>

import axios from 'axios'

export default {
  name: "WeatherComp",
  data() {
    return {
      info: null,
      citys: {},
      options: [{
          value: '北京',
          label: '北京'
        }, {
          value: '上海',
          label: '上海'
        }, {
          value: '深圳',
          label: '深圳'
        }, {
          value: '广州',
          label: '广州'
        }, {
          value: '揭阳',
          label: '揭阳'
        }],
        pickValue:'',
        weatherData:{
          city:'',
          future:[],
          realtime:{}
        },
    };
  },

  mounted() {
    //城市列表
    this.citys = require('/src/static/simpleCitys.json');
    
  },
  methods: {
    getweather(val){
      console.log(val)
      axios
        .get("/api/simpleWeather/query",{
          params: {
            city:val,
            key:'9b38ee94a41252e3dc8727d7ef7bb08c'
          }
        })
        .then((response) => (this.weatherData = response.data.result, console.log(this.weatherData)));
    }
  }
};
</script>