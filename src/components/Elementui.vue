<template>
  <div id="elementui">
    <el-button @click="showinfo">Button</el-button>
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
  },
  methods: {
    showinfo(e){
      e.target.visible = true;
      console.log('dianji');
    }
  }
}
</script>
