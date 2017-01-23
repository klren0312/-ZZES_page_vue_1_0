<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
<center><h1>组织历史与项目历史</h1></center>
<Row>
<i-col span="8">
    <Timeline>
        <Timeline-item>
            <p class="time">2009年</p>
            <p class="content">CIID成立</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2011年6月</p>
            <p class="content">CIID更名为CII</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2012年</p>
            <p class="content">成立分支SAG，Special Action Group</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2014年5月</p>
            <p class="content">成立联合行动小组CAS</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2015年1月</p>
            <p class="content">治中电科成立</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2016年1月</p>
            <p class="content">治中电科和望创CCW合作</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2016年11月</p>
            <p class="content">治电科技成立</p>
        </Timeline-item>
        <Timeline-item>
            <p class="time">2017年1月22日</p>
            <p class="content">CII解散，CAS解散，SAG解散</p>
        </Timeline-item>
    </Timeline>
</i-col>

<i-col span="8">
    <Timeline>
        <Timeline-item color="green">2015-5-29发布1.0版本</Timeline-item>
        <Timeline-item color="green">2016-02-10发布5.0版本</Timeline-item>
        <Timeline-item color="blue">2016-11-26发布5.x版本大改</Timeline-item>
        <Timeline-item color="red">2017-01-22发布6.0版本</Timeline-item>
    </Timeline>
</i-col>

<i-col span="8">
    <Card style="width:100%">
        <div style="text-align:center">
            <img src="../images/t1.png" style="width:100%">
            <h3>治电官网1.x系列</h3>
        </div>
    </Card>
    <br>
    <Card style="width:100%">
        <div style="text-align:center">
            <img src="../images/t2.png" style="width:100%">
            <h3>治电官网5.x系列</h3>
        </div>
    </Card>
    <br>
</i-col>
</Row>
</template>
<script>
    export default {
        
    }
</script>