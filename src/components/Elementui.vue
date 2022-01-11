<template>
  
  <div id="elementui">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>


<script>


export default {
  name: 'elementui',

  data(){
    return { visible: false }
  }
}
</script>
