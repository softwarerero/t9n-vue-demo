<template>
    <div class="hello">
        <h1>{{t9n.get(msg)}}</h1>
        {{t9n.get('Current locale')}}: {{currentLocale}}
    </div>
</template>

<script>
import T9n from '../t9n.js'

export default {
    name: 'HelloT9n',
    props: {
        msg: String
    },
    computed: {
        currentLocale() {
            return this.$store.state.currentLocale
        },
        t9n() {
            return T9n
        },
    }
}
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
