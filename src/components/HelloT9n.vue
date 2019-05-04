<template>
    <div class="hello">
        <h1>{{t9n.get(msg)}}</h1>
        {{t9n.get('Current locale')}}: {{currentLocale}}
        <div class="codingArea">
            <label>userName:</label>
            <input v-model="userName">
            <label>photoCount:</label>
            <input v-model="photoCount" type="number" min="0">
        </div>
        {{t9n.get('sharedPhotos', true, {userName, photoCount})}}
    </div>
</template>

<script>
import T9n from '../t9n.js'

export default {
    name: 'HelloT9n',
    data: () => ({
        userName: 'Anne',
        photoCount: 3,
    }),
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
.codingArea {
    /* display: flex; */
    /* justify-content: space-between; */
    /* justify-content: left; */
    
    /* height: 300px; */
    margin: 1em 0;
}
label, input {
    margin-right: 1em;
}
</style>
