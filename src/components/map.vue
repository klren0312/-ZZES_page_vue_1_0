
<template>

	<Row>
	    <i-col span="18" push="6">
	    	<div id="map-container"></div>
	    </i-col>
	    <i-col span="6" pull="18">
			<div style="background:#eee;padding: 20px">
			    <Card :bordered="false">
			            <p slot="title">治电科技基地介绍</p>
			            <p>治电科技基地位于安徽省铜陵市，隐藏于当地的西湖湿地中，极为神秘</p>
			    </Card>
			</div>
	    	<center><i-button type="primary" @click="test(false)">Do not click it!</i-button></center>
	    </i-col>
	</Row>	


</template>
 
<style>
#map-container {
    height: 500px;
    width:90%;
}
</style>
 

<script type="text/javascript">
import AMap from 'AMap'
 
export default{

 ready () {
    const map = new AMap.Map('map-container', {
      zoom: 15,
      center: [117.859552,30.971061],
      dragEnable: false,
      resizeEnable: false
    })

    console.log(map)
  },        
  methods: {
    test (nodesc) {
    	this.$Notice.warning({
    	    title: '警告',
    	    desc: nodesc ? '' : '别乱点按钮，放着好玩的！'
    	});
    }
  }	
}
</script> 