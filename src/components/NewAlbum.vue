<template>
    <div class="container">
        <h1>Agregar nuevo Album</h1>
        <form>
            <div class="formItem">
                <label for="">Artista </label>
                <input v-model="album.artist" type="text">
            </div>
            <div class="formItem">
                <label for="">Album </label>
                <input v-model="album.album" type="text">
            </div>
            <div class="formItem">
                <label for="">Imagen </label>
                <input v-model="album.image" type="text">
            </div>
            <div class="formItem">
                <label for="">Género </label>
                <select v-model="album.category" name="" id="">
                    <option value="rap">Rap</option>
                    <option value="pop">Pop</option>
                    <option value="rock">Rock</option>
                </select>
            </div>
        </form>
        <input class="btn" type="submit" value="Agregar" @click.prevent="addAlbum()"> 
    </div>
</template>

<script>
export default {
    name: 'newAlbum-comp',
    // props: {},
    data: function(){
        return {
            album:{
                artist:"",
                category:"",
                album:"",
                image:"",
            }
        }
    },
    // computed: {},
    methods: {
        addAlbum(){
            //validar
            if(this.album.artist == "" || this.album.category == "" || this.album.album == "" || this.album.image == ""){
                alert("Datos incompletos")
                return
            }
            
            let newAlbum = {...this.album}
            this.$store.commit('ADD_ALBUM',newAlbum)
            this.redirectTo(newAlbum.category)
            this.clean()
        },
        hasArtist(){
            
        },
        redirectTo(genre){
            this.$router.push(`/${genre}`)
        },
        clean(){
            this.album.artist = ""
            this.album.category = ""
            this.album.album = ""
            this.album.image = ""
        },
        
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.container{
    margin-top: 50px;
    display: grid;
    grid-template-rows: max-content max-content;
    grid-template-columns: 100%;
    justify-content: center;
    row-gap: 20px;
}
h1{
    text-align: center;
    font-size: 1.5rem;
}
form{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 20px;
}
.formItem{
    width: 25%;
    min-width: 300px;
    text-align: center;
}
.btn{
    width: 30%;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background-color: rgb(69, 226, 148);
    margin:0 auto;
}

    
</style>