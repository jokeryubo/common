webpackJsonp([86],{"I+km":function(t,e){},vWxS:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("d4/4"),n=s("B1Az"),i=s("Au9i"),o=s("cKc3"),r=(s("NYxO"),{data:function(){return{topbar:{isShow:!0,title:"输入新号码"},PhoneNumber:"",PhoneNumberText:"",yzmMessage:"获取验证码",miao:"",yzm:""}},components:{BaseTopbar:a.a,Cell:n.a,Toast:i.Toast},created:function(){},mounted:function(){this.PhoneNumberText=sessionStorage.getItem("PhoneNumber")},methods:{handClick:function(t){var e=this;if("验证码"==t){for(var s=["手机号"],a=[this.PhoneNumber],n=0;n<a.length;n++)if(""==a[n])return Object(i.Toast)({message:s[n]+"不能为空",position:"bottom",duration:2e3}),!1;if(!this.CheckPhone(this.PhoneNumber))return Object(i.Toast)({message:"手机号码错误",position:"bottom",duration:2e3}),!1;if("获取验证码"!=this.yzmMessage)return!1;this.miao="s",this.yzmMessage=59;var r=setInterval(function(){e.yzmMessage-=1,e.yzmMessage<1&&(e.yzmMessage="获取验证码",e.miao="",clearInterval(r))},1e3);return o.a.get({url:"app/client/sms/code",data:{params:{tel:this.PhoneNumberText,type:4}}}).then(function(t){console.log(t)}),!1}if("完成"==t){for(var c=["手机号","验证码"],l=[this.PhoneNumber,this.yzm],m=0;m<l.length;m++)if(""==l[m])return Object(i.Toast)({message:c[m]+"不能为空",position:"bottom",duration:2e3}),!1;return this.CheckPhone(this.PhoneNumber)?(o.a.put({url:"app/client/replace/tel",data:{params:{tel:this.PhoneNumber,verifyCode:this.yzm}}}).then(function(t){$Hybrid.appToNative("LogOut"),console.log("手机号更换成功",t)}),console.log(this.PhoneNumber,this.yzm),!1):(Object(i.Toast)({message:"新手机号码错误",position:"bottom",duration:2e3}),!1)}console.log(88)},CheckPhone:function(t){return!1!==/^1[345789]\d{9}$/.test(t)}}}),c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"SureReplacePhone"}},[s("BaseTopbar",{attrs:{topbar:t.topbar}}),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"desc",staticStyle:{"margin-top":"0"}},[t._v("\n                更换手机号后，下次可使用新手机号登录\n            ")]),t._v(" "),s("div",{staticClass:"desc",staticStyle:{"margin-top":"0"}},[t._v("\n                当前电话:"+t._s(t.PhoneNumberText)+"\n            ")]),t._v(" "),s("div",{staticClass:"margin"},[s("div",{staticClass:"list"},[t._m(0),t._v(" "),s("div",[s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.PhoneNumber,expression:"PhoneNumber"}],staticClass:"input-text-right",attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.PhoneNumber},on:{input:function(e){e.target.composing||(t.PhoneNumber=e.target.value)}}})])])]),t._v(" "),s("div",{staticClass:"list",staticStyle:{border:"none"}},[t._m(1),t._v(" "),s("div",[s("div",{staticClass:"flex"},[s("span",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.yzm,expression:"yzm"}],staticClass:"input-text-right",attrs:{type:"text",placeholder:"请输入验证码",maxlength:"6"},domProps:{value:t.yzm},on:{input:function(e){e.target.composing||(t.yzm=e.target.value)}}})]),t._v(" "),s("span",{staticClass:"yzm-btn",class:""!=t.miao?"no":"",on:{click:function(e){return t.handClick("验证码")}}},[t._v("\n                                "+t._s(t.yzmMessage)+t._s(t.miao)+"\n                               \n                            ")])])])])]),t._v(" "),s("div",{staticClass:"btn-box"},[s("div",{staticClass:"btn",on:{click:function(e){return t.handClick("完成")}}},[t._v("完成")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title"},[e("span",{staticClass:"icon"}),this._v("手机号")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title"},[e("span",{staticClass:"icon"}),this._v("验证码")])}]};var l=s("VU/8")(r,c,!1,function(t){s("I+km")},"data-v-4470231c",null);e.default=l.exports}});