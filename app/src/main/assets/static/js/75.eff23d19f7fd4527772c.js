webpackJsonp([75],{OgPD:function(e,t){},efRF:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,s=i("bOdI"),r=i.n(s),c=(i("MY4N"),i("0zAV")),n=i("d4/4"),o=i("w2+g"),l=i("cU4i"),h=i("B1Az"),d=i("cKc3"),p=i("Au9i"),m=i("LBze"),u={data:function(){return{topbar:{isShow:!0,title:"发布招商",callBack:this.goBack,message:{title:"提示信息",message:"已填的信息将丢失，确认返回？"},sureBack:this.sureBack},params:{saveEditAddressInfo:!1,changeLocalMyinfo:!1,hasAddressInfo:!1,Address:{}},projectName:"",CompanyName:"请选择店铺",placetag:"请选择",provinceId:"",cityId:"",districtId:"",shopInfoArr:[],shopId:"",shopType:"",describe:"",price:"",labelList:[],maxLength:4,currentLength:0,tagArr:[{name:"火锅",checked:!1},{name:"冷饮热饮",checked:!1},{name:"特色小吃",checked:!1},{name:"面食类",checked:!1},{name:"卤菜熟食",checked:!1},{name:"蛋糕",checked:!1},{name:"烧烤",checked:!1},{name:"干锅",checked:!1},{name:"快餐",checked:!1},{name:"中餐",checked:!1},{name:"西餐",checked:!1},{name:"粥饼店",checked:!1},{name:"地方特产",checked:!1},{name:"零售烟酒茶",checked:!1},{name:"名酒",checked:!1}],popupVisible1:!1,dataList1:[{flex:1,values:[],className:"slot1",textAlign:"center"}],dataImgArr:[],ServerJoinDetail:{},timer:null,SubmitType:!1,hasAddr:!1,defaultAddrValue:""}},components:(a={BaseTopbar:n.a,Cell:h.a,MessageBox:p.MessageBox,Toast:p.Toast,AddressSelection:o.a,AddressPopup:l.a},r()(a,c.a.name,c.a),r()(a,"SlickList",m.SlickList),r()(a,"SlickItem",m.SlickItem),a),created:function(){var e=this;this.$route.params.ServerJoinDetail&&(this.ServerJoinDetail=this.$route.params.ServerJoinDetail,this.projectName=this.ServerJoinDetail.projectName,this.placetag=this.ServerJoinDetail.addressDetail,this.provinceId=this.ServerJoinDetail.provinceId,this.cityId=this.ServerJoinDetail.cityId,this.districtId=this.ServerJoinDetail.districtId,this.price=this.ServerJoinDetail.cost,this.describe=this.ServerJoinDetail.describe,this.dataImgArr=this.ServerJoinDetail.pictureList,this.shopId=this.ServerJoinDetail.shopId,this.CompanyName=this.ServerJoinDetail.shopName,this.tagArr.forEach(function(t){e.ServerJoinDetail.labelList.forEach(function(e,i){t.name==e&&(t.checked=!0)})}),this.labelList=this.ServerJoinDetail.labelList,this.currentLength=this.ServerJoinDetail.labelList.length)},mounted:function(){var e=this;$Hybrid.$eventHub.$off("nativeBack").$on("nativeBack",function(t){var i=$Hybrid.routerList;""!=e.projectName||"请选择"!=e.placetag||"请选择店铺"!=e.CompanyName||""!=e.price||""!=e.describe||0!=e.dataImgArr.length?p.MessageBox.confirm("",{title:"提示",message:"已填的信息将丢失，确认返回？",showCancelButton:!0,confirmButtonClass:"msg-sure",cancelButtonClass:"msg-canel"}).then(function(t){"confirm"===t&&(1===i.length?$Hybrid.appToNative("close"):($Hybrid.routerList.pop(),e.$router.go(-1)))}):$Hybrid.appToNative("close")})},computed:{cannext:function(){return""!==this.projectName&&"请选择"!==this.placetag&&"请选择店铺"!==this.CompanyName&&""!==this.price&&""!==this.describe&&0!=this.dataImgArr.length},nohightLight:function(){return""===this.projectName&&"请选择"===this.placetag&&"请选择店铺"===this.CompanyName&&""===this.price&&""===this.describe&&0==this.dataImgArr.length},describeNumber:function(){return this.describe.length||0}},methods:{goBack:function(){return""===this.projectName&&"请选择"===this.placetag&&"请选择店铺"===this.CompanyName&&""===this.price&&""===this.describe&&0==this.dataImgArr.length},sureBack:function(){},checkProjectName:function(){this.projectName=this.projectName.replace(/[^A-Za-z0-9_\u4e00-\u9fa5]/g,"")},handleAddrCell:function(){this.hasAddr=!0},handleOverlay:function(){this.hasAddr=!1},handleAddrConfirm:function(e){this.placetag=e[0].name+"-"+e[1].name+"-"+e[2].name,this.provinceId=e[0].code,this.cityId=e[1].code,this.districtId=e[2].code,this.hasAddr=!1},showPopup:function(){var e=this;this.popupVisible1=!0,0==this.dataList1[0].values.length&&d.a.get({url:"app/shop/info/get/All"}).then(function(t){t.nameAndIdVos.forEach(function(t,i){e.dataList1[0].values.push(t.name),e.shopInfoArr.push(t)})})},cancel:function(){this.popupVisible1=!1},sureCasetype:function(){var e=this;this.popupVisible1=!1,this.CompanyName=this.$refs.pickCom1.getValues()[0],this.shopInfoArr.forEach(function(t,i){t.name==e.CompanyName&&(e.shopType=t.type,e.shopId=t.id)})},onDateChange1:function(e,t){},uploadImg:function(){var e=this;$Hybrid.appToNative("updateImg","caseImg",10,!1),$Hybrid.$eventHub.$off("caseImg").$on("caseImg",function(t){e.dataImgArr.length<10?e.dataImgArr.push(t.url):Object(p.Toast)({message:"最多选择10张图片",position:"bottom"})})},deleteImgItem:function(e){this.dataImgArr.splice(e,1)},methodsChoose:function(e){var t=this;this.tagArr.forEach(function(i,a){a==e&&(i.checked=!i.checked,t.labelList.includes(i.name)?t.labelList.forEach(function(e,a){i.name==e&&(t.labelList.splice(a,1),t.currentLength--)}):t.currentLength<t.maxLength?(t.labelList.push(i.name),t.currentLength++):i.checked=!i.checked)})},handleClick:function(){var e=this;if(this.cannext){var t={projectName:this.projectName,provinceId:this.provinceId,cityId:this.cityId,districtId:this.districtId,shopId:this.shopId,cost:this.price,labelList:this.labelList,describe:this.describe,pictureList:this.dataImgArr,number:this.ServerJoinDetail.number||""};if(this.timer&&clearTimeout(this.timer),this.SubmitType)return!1;this.timer=setTimeout(function(){e.SubmitType=!0,e.timer=null,d.a.post({url:"app/attractinvestment/release",data:{params:t}}).then(function(t){e.$router.push({name:"MyServerHome",params:{choose:"investment"}})})},500)}else Object(p.Toast)({message:"信息不完善，请完善",position:"bottom"})},CheckPirce:function(){this.price=this.price.replace(/[^\d.]/g,""),this.price=this.price.replace(/\.{2,}/g,"."),this.price=this.price.replace(".","$#$").replace(/\./g,"").replace("$#$","."),this.price=this.price.replace(/^(\-)*(\d+)\.(\d\d).*$/,"$1$2.$3")}}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ReleaseIdle"},[a("BaseTopbar",{attrs:{topbar:e.topbar}}),e._v(" "),a("div",{staticClass:"main"},[a("p",{staticClass:"tips"},[e._v("请填写基础资料")]),e._v(" "),a("Cell",{staticClass:"item lineHeight-normal",attrs:{title:"项目名称",isShow:"false","is-link":""}},[a("van-field",{staticClass:"projectName",attrs:{"input-align":"right",clearable:"",maxlength:"20",placeholder:"请输入招商加盟项目名称"},on:{input:function(t){return e.checkProjectName()}},model:{value:e.projectName,callback:function(t){e.projectName=t},expression:"projectName"}})],1),e._v(" "),a("Cell",{staticClass:"item",attrs:{title:"所在城市",emit:e.handleAddrCell,"is-link":""}},[a("span",{staticClass:"pacle"},[e._v(e._s(e.placetag))])]),e._v(" "),a("Cell",{staticClass:"item",attrs:{title:"公司名称","is-link":""}},[a("span",{staticClass:"companyName",on:{click:function(t){return e.showPopup()}}},[e._v(e._s(e.CompanyName))])]),e._v(" "),a("Cell",{staticClass:"item",attrs:{title:"加盟费用",isShow:"false","is-link":""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],staticClass:"price lineHeight-normal",attrs:{type:"text",maxlength:"8",placeholder:"请填写加盟费"},domProps:{value:e.price},on:{input:[function(t){t.target.composing||(e.price=t.target.value)},e.CheckPirce]}}),e._v("万元\n        ")]),e._v(" "),a("div",{staticClass:"describeBox"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.describe,expression:"describe"}],staticClass:"describe lineHeight-normal",attrs:{maxlength:"500",placeholder:"请简要描述您的招商加盟需求，如：需有创业经验等"},domProps:{value:e.describe},on:{input:function(t){t.target.composing||(e.describe=t.target.value)}}}),e._v(" "),a("p",{staticClass:"textNum"},[a("span",{staticClass:"green"},[e._v(e._s(e.describeNumber))]),e._v("/500")])]),e._v(" "),a("div",{staticClass:"tags"},[e._m(0),e._v(" "),a("div",{staticClass:"tagbox"},e._l(e.tagArr,function(t,i){return a("div",{key:i,class:t.checked?"tagItem checked":"tagItem",on:{click:function(t){return e.methodsChoose(i)}}},[e._v("\n                    "+e._s(t.name)+"\n                ")])}),0)]),e._v(" "),a("div",{staticClass:"imgBox"},[a("span",{staticClass:"imgtag"},[e._v("上传加盟专题页（最多10张，长按可拖拽排序）")]),e._v(" "),a("SlickList",{staticClass:"imgContent",attrs:{axis:"xy",lockAxis:"xy",pressDelay:500},model:{value:e.dataImgArr,callback:function(t){e.dataImgArr=t},expression:"dataImgArr"}},[e._l(e.dataImgArr,function(t,s){return a("SlickItem",{key:s,staticClass:"imgItem",attrs:{index:s}},[a("img",{staticClass:"imgs",attrs:{src:t}}),e._v(" "),a("img",{staticClass:"deleteBtn",attrs:{src:i("fX1h")},on:{click:function(t){return e.deleteImgItem(s)}}})])}),e._v(" "),a("div",{staticClass:"imgAddBox"},[a("img",{staticClass:"imgAdd",attrs:{src:i("I0c5")},on:{click:function(t){return e.uploadImg()}}})]),e._v(" "),a("div",{staticClass:"placeholderBox"})],2)],1)],1),e._v(" "),a("button",{class:e.nohightLight?"saveBtn no":"saveBtn",on:{click:function(t){return e.handleClick()}}},[e._v("\n        发布\n    ")]),e._v(" "),a("mt-popup",{staticClass:"mint-popup",attrs:{position:"bottom"},model:{value:e.popupVisible1,callback:function(t){e.popupVisible1=t},expression:"popupVisible1"}},[a("div",{staticClass:"margin"},[a("div",{staticClass:"clR"},[a("p",{staticClass:"cancel",on:{click:function(t){return e.cancel()}}},[e._v("取消")]),e._v(" "),a("p",{staticClass:"save",on:{click:function(t){return e.sureCasetype()}}},[e._v("确定")])])]),e._v(" "),a("mt-picker",{ref:"pickCom1",attrs:{slots:e.dataList1,"visible-item-count":5,"show-toolbar":!1,"value-key":"cName"},on:{change:e.onDateChange1}})],1),e._v(" "),a("address-popup",{attrs:{show:e.hasAddr,defaultValue:e.defaultAddrValue},on:{overlayState:e.handleOverlay,confirmData:e.handleAddrConfirm}})],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"title"},[this._v("项目标签"),t("span",{staticClass:"desc"},[this._v("(最多可选择4个标签)")])])}]};var g=i("VU/8")(u,v,!1,function(e){i("OgPD")},"data-v-56b88212",null);t.default=g.exports}});