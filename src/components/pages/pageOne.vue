<style>

</style>
<template>
  <div>
  <h3>page1</h3>
    <button class="btn" id="btn">btn001</button>
  </div>
</template>
<script>
export default {
   data(){
    return{}
  },
  mounted(){
   this.test()
  },
  methods:{
    test:function(){
      let btn = document.getElementById('btn');
      const handler = function(event){
        switch(event.type){
          case 'click':
          console.log('clicked');
          break;
          case 'mouseover':
          console.log('mouseovered');
          break;
          case 'mouseout':
          console.log('mouseouted');
          break;
        }
      }
      btn.addEventListener('click',handler,false);
      btn.addEventListener('mouseover',handler,false);
      btn.addEventListener('mouseout',handler,false);  
      console.log('是否支持DOMFocusOut: ' + document.implementation.hasFeature("FocusEvent",'3.0') )  
    }
  }
}
</script>


