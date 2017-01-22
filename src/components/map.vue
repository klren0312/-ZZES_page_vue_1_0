
<template>
<center>
<div id="map-container"></div></center>
</template>
 
<style>
#map-container {
    height: 600px;
    width:80%;
}
</style>
 

<script type="text/javascript">
import AMap from 'AMap'

export default{
 ready () {
    const map = new AMap.Map('map-container', {
      zoom: 15,
      center: [117.84032,30.964879]
    })
   
    console.log(map)
  }	
}
</script> 