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
        padding: 1.25rem;
    }
    div{
        background-color: gray;
        text-align: center;
        padding: 40px 100px;
        
    }
    .link{
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        color: #2c3e50;
    }
</style>