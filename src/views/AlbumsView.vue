<template>
    <div class="container">
        <h1>{{genre}}</h1>
        <div class="albums">
            <AlbumCard v-for="album in albums" 
                        :key="album.id"
                        :id="album.id"
                        :artist="album.artist"
                        :img="album.image"
                        :album="album.album"
            />
        </div>
        
    </div>
</template>

<script>
import AlbumCard from '@/components/AlbumCard.vue';
import { mapState } from 'vuex';
export default {
    name: 'rap-comp',
    props: {
        genre:{
            type:String,
            Required:true
        }
    },
    data: function(){
        return {}
    },
    computed: {
        //entrar prop a mapState
        ...mapState({
            albums(state){
                return state[this.genre]
            }
        }) 
    },
    //methods: {}
    // watch: {},
    components: {
        AlbumCard
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4rem;
    }
    h1{
        text-decoration: underline;
    }
    .albums{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        column-gap: 1.25rem;
        row-gap: 1.875rem;
        margin-top:3rem;
    }
</style>