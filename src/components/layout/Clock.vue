<template>
        <div class="c-hands">
            <div class="c-hand c-seconds js-seconds" :style="`transform:rotate(${degrees.seconds}deg`"></div>
            <div class="c-hand c-minutes js-minutes" :style="`transform:rotate(${degrees.minutes}deg`"></div>
            <div class="c-hand c-hour js-hours" :style="`transform:rotate(${degrees.hours}deg`"></div>
            <div class="c-hand c-cirlce"></div>

    </div>
</template>

<script>
export default {
    name:"Clock",

    data(){
        return{
            degrees:{
                seconds:0,
                minutes:0,
                hours:0,
            
        }
    }
    },

    methods:{
        getDegrees:function(){
                const now= new Date();
                const seconds = now.getSeconds();
                const minutes= now.getMinutes();
                const hours= now.getHours();

                let previousSeconds = this.degrees.seconds;
           
                this.degrees.seconds = (seconds / 60)*360;
                this.degrees.minutes = (minutes /60)*360;
                this.degrees.hours = (hours/60)*360;       
           
        }
    },

    mounted(){

            this.getDegrees();
            setInterval(() => {
                this.getDegrees();
           }, 1000);


        }
}

</script>

<style lang="scss" scoped>
@import '@/assets/style/components/clock';
</style>