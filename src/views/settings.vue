<template>
  <container>
    <div>
      <h2>{{$t("TITLE-SETTINGS")}}</h2>
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF0000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </router-link>
    </div>
    <select name="LeaveType" @change="onChange($event)" class="form-control" v-model="key">
        <option value="en">english</option>
        <option value="ru">russisch</option>
        <option value="zh">chinees/japanees/whatever</option>
        <option value="nl">nederlands</option>
      </select>
</container>
</template>
<script>
// @ is an alias to /src
import Container from '../components/layout/Container';



export default {
  name: 'settings', 
  data() {
    return{
      key: ""
    }
  },
  components: {
    Container
  },
  methods:{
      onChange: function(event){
        console.log(event.target.value);
        localStorage.setItem('locale', event.target.value)
      }
  },

  created() {},
}
</script>