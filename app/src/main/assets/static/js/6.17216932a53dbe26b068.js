webpackJsonp([6],{"9rul":function(t,e){},DRzB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("d4/4"),i=a("NYxO"),n=a("Au9i"),o={data:function(){return{topbar:{isShow:!0,title:"昵称"},isShow:!1,inputVal:this.$store.state.myInfo.useNickName}},components:{BaseTopbar:s.a},computed:Object(i.b)({isupdate:function(t){return t.isupdate}}),created:function(){console.log("update nick name:::****",this.$store.state.myInfo),this.$store.dispatch("updateStatus",!1)},destroyed:function(){this.$store.dispatch("updateStatus",!1)},watch:{isupdate:function(t,e){t&&this.$router.go(-1)}},methods:{handleChage:function(t){var e=t.target.value;this.inputVal=e.substr(0,20),this.isShow=!!e},handleDel:function(){this.inputVal="",this.isShow=!1},submit:function(){if(!this.inputVal)return Object(n.Toast)({message:"请输入昵称",position:"bottom"});if(!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(this.inputVal))return Object(n.Toast)({message:"昵称仅支持中文、字母、下划线、数字组成",position:"bottom"});this.$store.dispatch("updateUserinfo",{useNickName:this.inputVal})}}},u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"update-nickname"},[s("BaseTopbar",{attrs:{topbar:t.topbar}},[s("label",{on:{click:t.submit}},[t._v("完成")])]),t._v(" "),s("div",{staticClass:"cont"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],attrs:{type:"text"},domProps:{value:t.inputVal},on:{input:[function(e){e.target.composing||(t.inputVal=e.target.value)},t.handleChage]}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{src:a("WoSV")},on:{click:t.handleDel}})])],1)},staticRenderFns:[]};var r=a("VU/8")(o,u,!1,function(t){a("9rul")},"data-v-8058e1f0",null);e.default=r.exports}});