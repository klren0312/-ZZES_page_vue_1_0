<style>
 
    #logo{
            height: 100%;
            width: 70px;
    }
 
</style>
<template> 
<div>
    <Menu mode="horizontal" :theme="light" active-key="1">
        <Menu-item key="0">
            <img id="logo" src="../images/zzes.png" alt="zzes">
        </Menu-item>
        <Menu-item key="1" v-link="'/test'">
            <Icon type="home" ></Icon>
            首页
        </Menu-item>
        <Menu-item key="2" v-link="'/map'">
            <Icon type="map"></Icon>
            基地所在
        </Menu-item>
        <Menu-item key="3" v-link="'/subject'">
            <Icon type="ios-paper-outline"></Icon>
            相关项目
        </Menu-item>
        <Menu-item key="4" v-link="'/aboutus'">
            <Icon type="flag" ></Icon>
            关于我们
        </Menu-item>
    </Menu>
    <router-view></router-view>
</div>        
    
    
</template>
<script>
    module.exports = {
        data: function() {
            return {
            }
        },
        ready: function() {
        },
        beforeDestroy: function() {
        },
        methods: {
        }
    }
</script>
