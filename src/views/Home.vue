<template>
  <div>
    <container>
      <div>
          <h1>{{time}}</h1>
          <div class="c-date">{{days[date.getDay()]}}
              {{date.getDate()}}
              {{months[date.getMonth()]}}
              <router-link to="/overview" class="c-overviewButton">

                <div>{{date.getDate()+1}}</div>
              </router-link>
            </div>
      </div>

      <div>
        <clock>
        </clock>
      </div>
    </container>
  </div>
</template>

<script>
import Container from "@/components/layout/Container";
import Clock from "@/components/layout/Clock";

export default {
  name: 'home',
  components: {
    Container,
    Clock,
  },

  data(){
    return{
      date: new Date(),
      days: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      months: ['January','February','March','April','May','June','July','August','September','October','November','December'],
      minutes: new Date().getMinutes(),
      time: null
    }
  },

  methods:{

    ConvertTime: function(date){
      
      let hours= date.getHours();
      let minutes = date.getMinutes();
      if(hours<10){
        hours= "0" + hours;
      }
      if(minutes<10){
        minutes="0"+ minutes;
      }

      let time = hours +":" +minutes;

      return time;
      
    }
  },

  mounted(){
    this.time =this.ConvertTime(this.date);
     setInterval(() => {
       this.date= new Date();
        this.time =this.ConvertTime(this.date);
           }, 1000);
  },

}


</script>

<style lang="scss" scoped>
@import '@/assets/style/components/overviewButton';
</style>