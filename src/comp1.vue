<template>
<section>
 <div>
        {{call}}
    <div v-for="(item,i) in data" :key="item">
       {{i}} -{{item}}

    </div>
    </div>
    <button @click.once="func">click</button>
    <button @click.once="newitem()">bring avengers</button>
    <p @click="change()">{{name}}</p>

    <div v-for="img in imges" :key="img">
        <img :src="img" alt="nothing">
    </div>
    <div v-for="hero in heros" :key="hero">
        {{hero.id}}-
        {{hero.name}}
        <img :src="hero.image.url">
    </div>
    <div v-for="data in id" :key='data'>
        {{data.name}}
    </div>
    <div v-for="loop in heros" :key="loop">
        <h1 v-for="name in loop.biography.aliases" :key = 'name'>{{name}}</h1>
    </div>
    <div v-for="info in details" :key="info">
        {{info.speed}}
    </div>
    <div>
        <img src="" id="demo">
    </div>
<div v-for="i in all" :key='i'>
</div>
</section>
    <slot></slot>

</template>


<!-- css -->
<style scoped>
    p{
        color: red;
    }
    button{
        margin: 10px;
    }


</style>

<!-- js part -->
<script type="text/javascript">
// import image from ''
import axios from 'axios'
export default{
    props:{
        data:{
            type:Array,
        },
        func:{

        },
        name:{
        
                }
    },
            data(){
                return{
                    call:"hey dear how are you??",
                    api_key: 'a3ecb4ef93ae2286d3393714794f9a05',
                    url_base: 'https://api.openweathermap.org/data/2.5/',
                    weather:{},
                    query:'Bangladesh,BD',
                    heros:{},
                    id:[{
                        name:'rifat'
                    }],
                    details:{},
                    all_heros:[],
                    image:[],
                    names:[],
                    all:{
                        names:[],
                    },
                    iron:[],
                    marvel_heros:[]
                    
        }
    },
    created(){
        for(var i=1;i<731;i++){
            axios.get('https://www.superheroapi.com/api.php/1033043583819218/'+i.toString()).then(data=>{
               if(data.data.biography.publisher =="Marvel Comics"){
               }
            })
        }
    },
    methods:{
       change(){
        this.$emit('chagename','Robert')
       },
       newitem(){
        this.$emit('additem',"captain marvel")
       },
}

  
}
</script>