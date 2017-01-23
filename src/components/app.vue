<style>
     @import '../styles/common.css';
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
        <Menu-item key="5" >
            <Icon type="nuclear"></Icon>
            <a style="color:green;" href="http://klren.oschina.io/zzesbate5.0 ">老版官网入口</a>
        </Menu-item>
    </Menu>
    <router-view></router-view>

    <hr>
    <hr>
    <center>
        <a href="http://v1-cn.vuejs.org/guide/">Vue1.0官方文档&nbsp;&nbsp;</a>
        <a href="http://router.vuejs.org/zh-cn/index.html">Vue-router&nbsp;&nbsp;</a>
        <a href="http://zzesxiao.leanote.com">治电小白菜博客&nbsp;&nbsp;</a>    
        <br>
        Copyright © 2009-2017 治电科技
    </center>
</div>        
    
    
</template>
<script>
    export default {
        data () {
            return {}
        },
        ready () {

        },
        beforeDestroy () {

        },
        methods: {
            
        }
    }
</script>
