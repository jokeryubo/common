webpackJsonp([111],{"4ErB":function(e,s){},"o/EQ":function(e,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var t=a("bOdI"),i=a.n(t),c=(a("MY4N"),a("0zAV")),r=a("Au9i"),o=a("d4/4"),p=a("B1Az"),n=a("cKc3"),u=a("LBze"),m={data:function(){return{topbar:{isShow:!0,title:"上传案例"},currentCaseType:"",caseType:"",caseTypeName:"",caseName:"",describe:"",dataImgArr:[],popupVisible:!1,dataList:[{flex:1,values:["装修设计服务商","广告设计服务商","宣传推广服务商","税务代办服务商","厨房设备供应商","桌椅橱柜供应商","食材供应商","收银系统供应商","服务用品供应商"],className:"slot1",textAlign:"center"}],runFlag:!1}},components:i()({BaseTopbar:o.a,Cell:p.a,Toast:r.Toast,SlickList:u.SlickList,SlickItem:u.SlickItem},c.a.name,c.a),computed:{describeNumber:function(){return this.describe.length||0},canSubmit:function(){return""!==this.caseType&&""!==this.caseName&&""!==this.describe&&this.dataImgArr.length>0},sortStart:function(e){console.log(e)}},created:function(){console.log("接收参数",this.$route.params),this.$route.params.shopId&&this.$route.params.shopTypeId&&this.$route.params.shopTypeName&&(this.caseType=this.$route.params.shopTypeId,this.caseTypeName=this.$route.params.shopTypeName)},mounted:function(){if(this.$route.query.resourceName)switch(this.caseName=this.$route.query.resourceName,this.describe=this.$route.query.resourceDescribe,this.dataImgArr=this.$route.query.imageList,this.$refs.pickCom.setSlotValue(0,this.$route.query.typeName),this.$route.query.typeName){case"装修设计服务商":this.caseType=2,this.caseTypeName="装修设计服务商1";break;case"广告设计服务商":this.caseType=3,this.caseTypeName="广告设计服务商";break;case"宣传推广服务商":this.caseType=4,this.caseTypeName="宣传推广服务商";break;case"税务代办服务商":this.caseType=10,this.caseTypeName="税务代办服务商";break;case"厨房设备供应商":this.caseType=5,this.caseTypeName="厨房设备供应商";break;case"桌椅橱柜供应商":this.caseType=6,this.caseTypeName="桌椅橱柜供应商";break;case"食材供应商":this.caseType=7,this.caseTypeName="食材供应商";break;case"收银系统供应商":this.caseType=9,this.caseTypeName="收银系统供应商";break;case"服务用品供应商":this.caseType=8,this.caseTypeName="服务用品供应商"}},updated:function(){},watch:{},methods:{chooseCaseType:function(){this.popupVisible=!0},onDateChange:function(e,s){this.currentCaseType=s[0]},cancel:function(){this.popupVisible=!1},sureCasetype:function(){switch(this.currentCaseType){case"装修设计服务商":this.caseType=2,this.caseTypeName="装修设计服务商";break;case"广告设计服务商":this.caseType=3,this.caseTypeName="广告设计服务商";break;case"宣传推广服务商":this.caseType=4,this.caseTypeName="宣传推广服务商";break;case"税务代办服务商":this.caseType=10,this.caseTypeName="税务代办服务商";break;case"厨房设备供应商":this.caseType=5,this.caseTypeName="厨房设备供应商";break;case"桌椅橱柜供应商":this.caseType=6,this.caseTypeName="桌椅橱柜供应商";break;case"食材供应商":this.caseType=7,this.caseTypeName="食材供应商";break;case"收银系统供应商":this.caseType=9,this.caseTypeName="收银系统供应商";break;case"服务用品供应商":this.caseType=8,this.caseTypeName="服务用品供应商"}this.popupVisible=!1},checkcaseName:function(){this.caseName=this.caseName.replace(/[^A-Za-z0-9\u4e00-\u9fa5]/g,""),this.caseName.length>=21&&(this.caseName=this.caseName.substr(0,20))},checkFrom:function(){var e="";""===this.caseType?e="请选择资源类型":""===this.caseName?e="请填写资源名称":""===this.describe?e="请填写资源描述信息":this.dataImgArr.length<=0&&(e="请最少选择一张图片"),""!==e&&Object(r.Toast)({message:e,position:"bottom"})},uploadImg:function(){var e=this;$Hybrid.appToNative("updateImg","caseImg",10,!1),$Hybrid.$eventHub.$off("caseImg").$on("caseImg",function(s){e.dataImgArr.length<10?e.dataImgArr.push(s.url):Object(r.Toast)({message:"最多选择10张图片",position:"bottom"})})},deleteImgItem:function(e){this.dataImgArr.splice(e,1)},submit:function(){var e=this;this.canSubmit?this.runFlag||(this.runFlag=!0,this.$route.query.resourceName?(console.log("资源类型",this.caseType,"资源名称",this.caseName,"资源描述",this.资源描述,"图片数组",this.dataImgArr),n.a.put({url:"app/case/put",data:{params:{resourceType:this.caseType,resourceName:this.caseName,resourceDescribe:this.describe,id:this.$route.query.id,image:this.dataImgArr}}}).then(function(s){0==s.code&&($Hybrid.routerList.pop(),$Hybrid.routerList.pop(),e.$router.go(-2))})):n.a.post({url:"app/case/add",data:{params:{resourceType:this.caseType,resourceName:this.caseName,resourceDescribe:this.describe,shopId:this.$route.params.shopId,image:this.dataImgArr}}}).then(function(s){0==s.code&&($Hybrid.routerList.pop(),e.$router.back())})):this.checkFrom()}}},h={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"uploadCase"}},[t("BaseTopbar",{attrs:{topbar:e.topbar}}),e._v(" "),t("div",{staticClass:"main"},[t("Cell",{attrs:{title:"资源类型",isShow:"false"}},[""==e.caseTypeName?t("span",{staticClass:"Casetype"},[e._v("选择资源类型")]):e._e(),e._v(" "),""!==e.caseTypeName?t("span",{staticClass:"Casetype"},[e._v(e._s(e.caseTypeName))]):e._e()]),e._v(" "),t("Cell",{attrs:{title:"资源名称",isShow:"false"}},[t("van-field",{staticClass:"caseName",attrs:{"input-align":"right",placeholder:"请输入上传资源名称",clearable:""},on:{input:function(s){return e.checkcaseName()}},model:{value:e.caseName,callback:function(s){e.caseName=s},expression:"caseName"}})],1),e._v(" "),t("div",{staticClass:"describeBox"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.describe,expression:"describe"}],staticClass:"describe",attrs:{placeholder:"请简要描述你的资源类型、具体内容、优势等"},domProps:{value:e.describe},on:{input:function(s){s.target.composing||(e.describe=s.target.value)}}}),e._v(" "),t("span",{staticClass:"textNum"},[t("span",{staticClass:"green"},[e._v(e._s(e.describeNumber))]),e._v("/500")])]),e._v(" "),t("div",{staticClass:"imgBox"},[t("span",{staticClass:"imgtag"},[e._v("上传资源宣传页（最多10张，长按可拖拽排序）")]),e._v(" "),t("div",{staticClass:"imgContent"},[t("SlickList",{staticClass:"slicklist",attrs:{axis:"xy",lockAxis:"xy",pressDelay:500},model:{value:e.dataImgArr,callback:function(s){e.dataImgArr=s},expression:"dataImgArr"}},[e._l(e.dataImgArr,function(s,i){return t("SlickItem",{key:i,staticClass:"imgItem",attrs:{index:i}},[t("img",{staticClass:"imgs",attrs:{src:s}}),e._v(" "),t("img",{staticClass:"deleteBtn",attrs:{src:a("fX1h"),index:i},on:{click:function(s){return e.deleteImgItem(i)}}})])}),e._v(" "),t("div",{staticClass:"imgAddBox"},[t("img",{staticClass:"imgAdd",attrs:{src:a("I0c5")},on:{click:function(s){return e.uploadImg()}}})]),e._v(" "),t("div",{staticClass:"placeholderBox"})],2)],1)])],1),e._v(" "),t("mt-popup",{staticClass:"mint-popup",attrs:{position:"bottom"},model:{value:e.popupVisible,callback:function(s){e.popupVisible=s},expression:"popupVisible"}},[t("div",{staticClass:"clR"},[t("p",{staticClass:"cancel",on:{click:e.cancel}},[e._v("取消")]),e._v(" "),t("p",{staticClass:"save",on:{click:e.sureCasetype}},[e._v("确定")])]),e._v(" "),t("mt-picker",{ref:"pickCom",attrs:{slots:e.dataList,"visible-item-count":5,"show-toolbar":!1,"value-key":"cName"},on:{change:e.onDateChange}})],1),e._v(" "),t("div",{class:e.canSubmit?"submitBtn on":"submitBtn",on:{click:function(s){return e.submit()}}},[e._v("提交并审核")])],1)},staticRenderFns:[]};var l=a("VU/8")(m,h,!1,function(e){a("4ErB")},"data-v-17d0a5ad",null);s.default=l.exports}});