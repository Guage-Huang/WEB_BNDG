<template>
    <div class="eaudit">
        <keep-alive>
            <eaudit-list></eaudit-list>
        </keep-alive>
        <eaudit-tabbar @change="getTabbarActive"></eaudit-tabbar>
    </div>
</template>

<script>
    import EauditTabbar from './components/Tabbar'
    import EauditList from './components/List'
    export default {
        name:"eaudit",
        components: {
            EauditTabbar,
            EauditList,
        },
        data(){
            return { 
                tabbarActive: sessionStorage.eaduditId || 0
            }
        },
        methods: {
            getTabbarActive(index){
                this.tabbarActive = index
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .eaudit
        padding-bottom: 53px;
</style>
