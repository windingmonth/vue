<template>
  <el-container>
        <!--顶部-->
        <el-header style="height: 300px">
          <Carousel/>
        </el-header>

        <!--中央区域-->
        <el-main>
            <el-container>
                <!--左侧导航栏-->
                <el-aside>
                  <div style="border-style:solid;border-width:1px;height: 100%;"></div>
                </el-aside>
                <!--主内容显示区域，数据内容都是在这里面渲染的-->
                <el-main>
                  <Weather/>
                </el-main>
            </el-container>
        </el-main>

        <!--底部-->
        <el-footer>
          <div style="border-style:solid;border-width:2px;height: 100%;"></div>
        </el-footer>
    </el-container>
</template>



<script>
import Weather from './components/WeatherComp.vue'
import Carousel from './components/CarouselComp.vue'

export default {
  name: 'App',
  components: {
    Weather,
    Carousel,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
