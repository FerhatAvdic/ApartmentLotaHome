<template>
  <div id="Reviews">
        <v-carousel hide-delimiters>
            <v-carousel-item v-for="r in vmReviews" :key="r.profile" src="">
                     <div class="review-item">
                        <v-avatar :tile="false" :size="'80px'" class="grey lighten-4">
                            <img :src="r.profile">
                        </v-avatar>
                        <h2>{{r.name}}</h2>
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
                text: "Eaque eos enim iste voluptatem dolor. Nesciunt ut fugiat fugit id. Cum pariatur quae unde. Elidendi non animi et sit qui praesentium et eum. Corrupti dolor exercitationem labore neque. Aut dolor explicabo iusto quae ullam rerum expedita elidendi voluptatem."
            },
            en: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/mrebay007/128.jpg",
                name:"Casimer White",
                text: "Asperiores et voluptas dolores est. Enim iure sunt illum dolor voluptates magni accusantium tempora non. Vel aliquam aut natus voluptatem ullam consequatur ab nulla."
            },
            de: {
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
            de: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/HenryHoffman/128.jpg",
                name:"Henry Hoffman",
                text: "Eaque eos enim iste voluptatem dolor. Nesciunt ut fugiat fugit id. Cum pariatur quae unde. Elidendi non animi et sit qui praesentium et eum. Corrupti dolor exercitationem labore neque. Aut dolor explicabo iusto quae ullam rerum expedita elidendi voluptatem."
            }
        },
        {
            hr: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/dmitriychuta/128.jpg",
                name:"Dmitriy Chuta",
                text: "Eaque eos enim iste voluptatem dolor. Nesciunt ut fugiat fugit id. Cum pariatur quae unde. Elidendi non animi et sit qui praesentium et eum. Corrupti dolor exercitationem labore neque. Aut dolor explicabo iusto quae ullam rerum expedita elidendi voluptatem."
            },
            en: {
                profile: "https://s3.amazonaws.com/uifaces/faces/twitter/dmitriychuta/128.jpg",
                name:"Dmitriy Chuta",
                text: "Mollitia quam cupiditate quisquam. Itaque rerum alias ut. Ut inventore et aliquid."
            },
            de: {
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
h2{
    margin: 15px 0;
}
.carousel{
    background-color:#3ab09c;
    background-size:cover;
    background-attachment: fixed;
    height: 100%;
    padding: 50px 0;
}
.carousel::before{
    content:"";
    display:block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color:#3ab09c;/*#a51534; rgb(14, 161, 172);*/
    opacity: 0.9;
    z-index: 0;
}
.review-item{
    display: flex;
    width:50%;
    text-align: center;
    color:white;
    flex-direction: column;
    align-items:center;
    justify-content: center;

}
.review-item, .carousel__right, .carousel__left{
    z-index:5;
}
</style>
