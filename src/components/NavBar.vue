<template>
    <nav>
        <div>
            <RouterLink class="link" to="/">Open Music</RouterLink>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'nav-comp',
    // props: {},
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
    nav{
        border: 2px solid gray;
        background-image: url("../assets/vinilos.jfif");
        background-color: rgba(255,255,255,0.6);
        background-blend-mode: lighten;

    }
    div{
        
        text-align: center;
        padding: 40px 100px;
        
    }
    .link{
        font-size: 3rem;
        font-weight: 600;
        text-decoration: none;
        color: #000000;
        padding: 10px;
        border-radius: 5px;
    }
</style>