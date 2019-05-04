<template>
    <div class="Header">
        <div class="navigation">
            <multiselect
                :value="currentLocale"
                :options="availableLocales"
                select-label
                deselect-label
                :searchable="false"
                @select="selectLocale"
            />
        </div>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import T9n from '../t9n.js'

export default {
    components: { Multiselect },
    computed: {
        currentLocale() {
            return this.$store.state.currentLocale
        },
        availableLocales() {
            return this.$store.state.locales
        }
    },
    methods: {
        selectLocale(locale) {
            this.$store.commit('setLocale', locale)
            T9n.setLanguage(locale)
        }
    }
}
</script>

<style scoped>
.Header {
    display: flex;
    justify-content: space-between;
}
</style>
