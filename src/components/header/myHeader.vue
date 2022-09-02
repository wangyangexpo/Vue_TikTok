<template>
  <div class="user-header">
    <div class="back" v-if="hasLeft" @click="goback">
      <span class="">⬅</span>
    </div>
    <div><span>{{title}}</span></div>
    <div class="right" v-if="hasRight">
      <span class="">{{rightTx}}</span>
    </div>
  </div>
</template>

<script>
export default {
  //接收父组件传来的值
  props:{
    title:{
      type:String,
      required:true
    },
    rightTx:{
      type:String,
      required:true
    },
    hasRight:{
      type:Boolean,
      required:false
    },
    hasLeft:{
      type:Boolean,
      required:false
    }
  },
  methods:{
    goback(){
      this.$emit('changeBack');
    }
  }

}
</script>

<style>
  .user-header{
    height:48px;
    width:100%;
    line-height: 48px;
    display: flex;
    justify-content: center;
    border-bottom: 1px #292831 solid;
    background-color: #101821;
    color:#eeeeee;
    position:relative;
  }
  .back{
    position:absolute;
    left:10px;
  }
  .right{
    position:absolute;
    right:10px;
  }
</style>