webpackJsonp([53],{"90CO":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("d4/4"),o=s("Au9i"),r={data:function(){return{topbar:{isShow:!0,title:"公司描述",callBack:this.goBack,message:{title:"提示信息",message:"已填的信息将丢失，确认返回？"},sureBack:this.sureBack},describe:""}},components:{BaseTopbar:i.a},created:function(){window.sessionStorage.getItem("CompanyDescription")&&(this.describe=window.sessionStorage.getItem("CompanyDescription"))},mounted:function(){var e=this;$Hybrid.$eventHub.$off("nativeBack").$on("nativeBack",function(t){var s=$Hybrid.routerList;""!=e.describe?o.MessageBox.confirm("",{title:"提示",message:"已填的信息将丢失，确认返回？",showCancelButton:!0,confirmButtonClass:"msg-sure",cancelButtonClass:"msg-canel"}).then(function(t){"confirm"===t&&(1===s.length?$Hybrid.appToNative("close"):($Hybrid.routerList.pop(),e.$router.go(-1)))}):1===s.length?$Hybrid.appToNative("close"):($Hybrid.routerList.pop(),e.$router.go(-1))})},computed:{describeNumber:function(){return this.describe.length||0}},methods:{goBack:function(){return""===this.describe},sureBack:function(){},save:function(){""!=this.describe?(window.sessionStorage.setItem("CompanyDescription",this.describe),$Hybrid.routerList.pop(),this.$router.go(-1)):Object(o.Toast)({message:"请填写公司描述",position:"bottom"})}}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"AccreditationRequirement"},[s("BaseTopbar",{attrs:{topbar:e.topbar}},[s("button",{staticClass:"saveBtn",on:{click:e.save}},[e._v("保存")])]),e._v(" "),s("div",{staticClass:"describeBox"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.describe,expression:"describe"}],staticClass:"describe",attrs:{maxlength:"500",placeholder:"简明阐述公司详情"},domProps:{value:e.describe},on:{input:function(t){t.target.composing||(e.describe=t.target.value)}}}),e._v(" "),s("p",{staticClass:"textNum"},[s("span",{staticClass:"green"},[e._v(e._s(e.describeNumber))]),e._v("/500")])])],1)},staticRenderFns:[]};var n=s("VU/8")(r,a,!1,function(e){s("mHEm")},"data-v-d127b106",null);t.default=n.exports},mHEm:function(e,t){}});