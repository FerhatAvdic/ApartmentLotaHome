<template>
  <div id="Reviews">
        <v-carousel hide-delimiters>
            <v-carousel-item v-for="r in vmReviews" :key="r.profile" src="http://www.beaches.com/assets/img/home/rst-btc.jpg" class="basicFlex">
                     <div class="overlay"></div>
                     <div class="firstPlan">
                        <v-avatar :tile="false" :size="'100px'" class="grey lighten-4">
                            <img :src="r.profile">
                        </v-avatar>
                        <h4>{{r.name}}</h4>
                        <p><em>{{r.text}}</em></p>
                     </div>
            </v-carousel-item>
        </v-carousel>
  </div>
</template>

<script>
import Slider from './Slider'
import Gmap from './Gmap'
export default {
  id: '#Reviews',
  name: 'Reviews',
  data () {
    return {
        vmReviews:[],
        reviews:[{
            hr: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/mrebay007/128.jpg",
                name:"Casimer White",
                text: "Eaque eos enim iste voluptatem dolor. Nesciunt ut fugiat fugit id. Cum pariatur quae unde. Eligendi non animi et sit qui praesentium et eum. Corrupti dolor exercitationem labore neque. Aut dolor explicabo iusto quae ullam rerum expedita eligendi voluptatem."
            },
            en: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/mrebay007/128.jpg",
                name:"Casimer White",
                text: "Asperiores et voluptas dolores est. Enim iure sunt illum dolor voluptates magni accusantium tempora non. Vel aliquam aut natus voluptatem ullam consequatur ab nulla."
            },
            ge: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/mrebay007/128.jpg",
                name:"Casimer White",
                text: "Mollitia quam cupiditate quisquam. Itaque rerum alias ut. Ut inventore et aliquid."
            }
        },
        {
            hr: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/HenryHoffman/128.jpg",
                name:"Henry Hoffman",
                text: "Mollitia quam cupiditate quisquam. Itaque rerum alias ut. Ut inventore et aliquid."
            },
            en: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/HenryHoffman/128.jpg",
                name:"Henry Hoffman",
                text: "Asperiores et voluptas dolores est. Enim iure sunt illum dolor voluptates magni accusantium tempora non. Vel aliquam aut natus voluptatem ullam consequatur ab nulla."
            },
            ge: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/HenryHoffman/128.jpg",
                name:"Henry Hoffman",
                text: "Eaque eos enim iste voluptatem dolor. Nesciunt ut fugiat fugit id. Cum pariatur quae unde. Eligendi non animi et sit qui praesentium et eum. Corrupti dolor exercitationem labore neque. Aut dolor explicabo iusto quae ullam rerum expedita eligendi voluptatem."
            }
        },
        {
            hr: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/dmitriychuta/128.jpg",
                name:"Dmitriy Chuta",
                text: "Eaque eos enim iste voluptatem dolor. Nesciunt ut fugiat fugit id. Cum pariatur quae unde. Eligendi non animi et sit qui praesentium et eum. Corrupti dolor exercitationem labore neque. Aut dolor explicabo iusto quae ullam rerum expedita eligendi voluptatem."
            },
            en: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/dmitriychuta/128.jpg",
                name:"Dmitriy Chuta",
                text: "Mollitia quam cupiditate quisquam. Itaque rerum alias ut. Ut inventore et aliquid."
            },
            ge: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/dmitriychuta/128.jpg",
                name:"Dmitriy Chuta",
                text: "Asperiores et voluptas dolores est. Enim iure sunt illum dolor voluptates magni accusantium tempora non. Vel aliquam aut natus voluptatem ullam consequatur ab nulla."
            }
        }]
    }
  },
  
    created(){
       this.reviews.forEach((obj)=>{
            for(let prop in obj){
                if(obj.hasOwnProperty(this.$route.params.localeId)){
                    if (prop === this.$route.params.localeId){
                        //console.log("property", obj[prop], "locale", this.$route.params.localeId)
                        this.vmReviews.push({ profile: obj[prop].profile, name: obj[prop].name, text: obj[prop].text})
                    }    
                }
            }
       })
        console.log("reviews", this.vmReviews)
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.basicFlex{
    position:relative;
    height:100%;
    width:100%;
    color:white;
    background-size:cover;
    background-attachment: fixed;
}
.overlay{
    position: absolute;
    width:100%;
    height:100%
}
.overlay::before{
    content:"";
    display:block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.7;
    z-index: 3;
}
.firstPlan{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    z-index:5;
}
</style>
