<template>
    <div class="albums">
            <div class="album__card">
                <h3>{{ artist}}</h3>
                <img :src="img" alt="">
                <p>{{ album }}</p>
            </div>
        </div>
</template>

<script>
export default {
    name: 'component-name',
    props: {
        id:{
            type:String,
            Required:true
        },
        artist:{
            type:String,
            Required:true
        },
        img:{
            type:String,
            Required:true
        },
        album:{
            type:String,
            Required:true
        }
    },
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .album__card{
        width: 25rem;
        height: 25rem;
        padding: 20px;
        -webkit-box-shadow: 9px 10px 18px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 9px 10px 18px 0px rgba(0,0,0,0.75);
        box-shadow: 9px 10px 18px 0px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }
    img{
        width: 80%;
    }
</style>