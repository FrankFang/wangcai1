import icon from '@/components/icon.vue';
<template>
    <div>
  <Layout>
<ol class="tags">
  <li v-for="tag in tags" :key="tag.id">
    <span>{{tag.name}}</span>
    <icon name="right"/>
</li>

</ol>
<div class="createTag-wrapper">
  <button class="createTag" @click="createTag">
    新建标签
  </button>
</div>


  </Layout>

    </div>
   
</template>

 <script lang= "ts">
import Vue from 'vue';
import { Component } from "vue-property-decorator";
import { model as tagListModel } from '@/models/tagListModel';
 
tagListModel.fetch();
@Component


 
 export default class Labels extends Vue {

tags= tagListModel.data;
createTag(){
const name = window.prompt('请输入标签名');
if(name){
  const message =tagListModel.create(name);
  if(message === 'duplicated'){
 window.alert('标签名已存在')
  }else if( message === 'success')
  {
    window.alert('添加成功');
  }
 
} 

}

};
 </script>

 <style lang= "scss" scoped>
.tags{
  background: white;
  font-size:16px;
padding-left: 16px;
>li{
min-height: 44px;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom:1px solid #e6e6e6 ;
svg{
width: 18px;
height: 18px;
color: #666;
margin-right: 16px;
}
}
}
.createTag{
background:#767676;
color: white;
border-radius: 4px;
border: none;
height: 40px;
padding: 0  16px;
&-wrapper{
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
  
}

}



 
 </style>