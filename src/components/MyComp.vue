<template>
  <div id="myapp">
    {{ info }}
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'MyComp',

  data () {
    return {
      info: null
    }
  },

  mounted () {
    axios
      .get('https://api.oick.cn/yulu/api.php')
      .then(response => (this.info = response.data))
  }
}
</script>