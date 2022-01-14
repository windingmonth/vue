<template>
  <div id="myapp">
    {{ info }}
  </div>
  <div>
    <input type="text" v-model="keyword" />
    <ul>
      <li v-for="p in pickPerson" :key="p.id">
        {{ p.name }}--{{ p.age }}--{{ p.sex }}
      </li>
    </ul>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "MyComp",

  data() {
    return {
      info: null,
      keyword: "",
      person: [
        { id: "001", name: "马冬梅", age: "19", sex: "女" },
        { id: "002", name: "周冬雨", age: "20", sex: "女" },
        { id: "003", name: "周杰伦", age: "21", sex: "男" },
        { id: "004", name: "温兆伦", age: "22", sex: "男" },
        { id: "005", name: "哈哈哈", age: "23", sex: "中" },
      ],
    };
  },

  mounted() {
    axios
      .get("https://api.oick.cn/yulu/api.php")
      .then((response) => (this.info = response.data));
  },

  computed: {
    pickPerson() {
      console.log(this.keyword);
      return this.person.filter((p) => {
        return p.name.indexOf(this.keyword) !== -1;
      });
    },
  },
};
</script>