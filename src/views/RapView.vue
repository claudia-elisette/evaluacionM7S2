<template>
    <div class="container">
        <h1>Rap</h1>
        <div class="albums">
            <AlbumCard v-for="album in rap" 
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
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['rap'])
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