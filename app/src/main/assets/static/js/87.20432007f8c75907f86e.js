webpackJsonp([87],{"+1Az":function(t,e){},"4JCg":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),a=s.n(i),r=s("bOdI"),n=s.n(r),o=(s("MY4N"),s("0zAV")),l=s("d4/4"),c=s("B1Az"),m=s("cKc3"),p=(s("oFuF"),s("1C0p")),h=s("kqsk"),u=s("lTvI"),d=(s("NYxO"),s("Au9i")),v={data:function(){return{topbar:{isShow:!0,title:"工作经历",callBack:this.goBack,message:{title:"提示信息",message:"现在退出，将失去编辑的内容，是否确认退出？"},sureBack:this.sureBack},sheetVisible:!1,params:{year:this.currentYear()},startTimeType:!1,endTimeType:!1,startTime:"请选择",endTime:"请选择",specificDateCallBack:this.specificDate,PopupPriceCallBack:this.PopupPrice,EnterpriseName:"",JobTitle:"",Responsibilities:"请填写",salary:"请选择",userResumeId:"",workId:""}},components:n()({BaseTopbar:l.a,Cell:c.a,PopupSpecificDate:p.a,PopupPrice:h.a,Toast:d.Toast,PopupSure:u.a},o.a.name,o.a),created:function(){},mounted:function(){if(this.Data=this.$route.params.data,this.userResumeId=this.$route.params.ID,console.log("data",this.Data,this.$route.params.ID),this.Data&&(this.EnterpriseName=this.Data.companyName,this.JobTitle=this.Data.jobName,this.startTime=this.Data.startTime,this.endTime=this.Data.endTime,this.Responsibilities=this.Data.jobResponsibilities,this.Data.id&&(this.workId=this.Data.id),this.salaryData={minprice:this.Data.preTaxSalLeft,maxprice:this.Data.preTaxSalRight},this.salary=this.Data.preTaxSalLeft+"-"+this.Data.preTaxSalRight+"元/月",sessionStorage.setItem("OldData",a()({EnterpriseName:this.Data.companyName,JobTitle:this.Data.jobName,startTime:this.Data.startTime,endTime:this.Data.endTime,salary:this.Data.preTaxSalLeft+"-"+this.Data.preTaxSalRight+"元/月",salaryData:{minprice:this.Data.preTaxSalLeft,maxprice:this.Data.preTaxSalRight},Responsibilities:this.Data.jobResponsibilities,userResumeId:this.userResumeId,workId:this.workId}))),sessionStorage.getItem("WorKData")){var t=JSON.parse(sessionStorage.getItem("WorKData"));this.EnterpriseName=t.EnterpriseName,this.JobTitle=t.JobTitle,this.startTime=t.startTime,this.endTime=t.endTime,this.salary=t.salary,this.salaryData=t.salaryData,this.userResumeId=t.userResumeId,this.workId=t.workId,this.Responsibilities=t.Responsibilities}else this.Data||sessionStorage.setItem("OldData",a()({EnterpriseName:"",JobTitle:"",startTime:"请选择",endTime:"请选择",salary:"请选择",Responsibilities:"请填写",userResumeId:this.userResumeId,workId:""}));var e=this;$Hybrid.$eventHub.$off("nativeBack").$on("nativeBack",function(t){e.GotoDuty("check");var s=sessionStorage.getItem("WorKData"),i=$Hybrid.routerList;if(sessionStorage.getItem("OldData")==s)return 1===i.length?$Hybrid.appToNative("close"):($Hybrid.routerList.pop(),e.$router.go(-1)),!1;d.MessageBox.confirm("",{title:"提示信息",message:"现在退出，将失去编辑的内容，是否确认退出？",showCancelButton:!0,confirmButtonClass:"msg-sure",cancelButtonClass:"msg-canel"}).then(function(t){"confirm"===t&&(sessionStorage.removeItem("WorKData"),sessionStorage.removeItem("OldData"),1===i.length?$Hybrid.appToNative("close"):($Hybrid.routerList.pop(),e.$router.go(-1)))})})},methods:{sureBack:function(){sessionStorage.removeItem("WorKData"),sessionStorage.removeItem("OldData")},goBack:function(){var t=!0;this.GotoDuty("check");var e=sessionStorage.getItem("WorKData");return console.log(sessionStorage.getItem("OldData")+"!!!!!!!!!!!!!!!!!!!!!!!!",e),sessionStorage.getItem("OldData")!=e&&(t=!1),sessionStorage.removeItem("WorKData"),t},CheckName:function(t){if("JobTitle"==t)return this.JobTitle=this.JobTitle.replace(/[^A-Za-z0-9\u4e00-\u9fa5]/g,""),!1;this.EnterpriseName=this.EnterpriseName.replace(/[^A-Za-z0-9\u4e00-\u9fa5]/g,"")},PopupPrice:function(t){this.salary=t.minprice+"-"+t.maxprice+"元/月",this.salaryData=t},currentYear:function(){return(new Date).getFullYear()},specificDate:function(t){this.startTimeType&&(this.startTime=t.year+"-"+t.month+"-"+t.day),this.endTimeType&&(this.endTime=t.year+"-"+t.month+"-"+t.day)},handelClick:function(t){return"税前月薪"==t?(this.$refs.PopupPrice.$emit("handleClick"),!1):"开始时间"==t?(this.startTimeType=!0,this.endTimeType=!1,this.$refs.specificDate.$emit("handleClick"),!1):"结束时间"==t?(this.startTimeType=!1,this.endTimeType=!0,this.$refs.specificDate.$emit("handleClick"),!1):void 0},GotoDuty:function(t){var e={};if(e.EnterpriseName=this.EnterpriseName,e.JobTitle=this.JobTitle,e.startTime=this.startTime,e.endTime=this.endTime,e.salary=this.salary,e.salaryData=this.salaryData,e.Responsibilities=this.Responsibilities,e.userResumeId=this.userResumeId,e.workId=this.workId,sessionStorage.setItem("WorKData",a()(e)),"check"==t)return!1;this.$router.push({name:"Responsibilities"})},Save:function(){for(var t=this,e=[{value:this.EnterpriseName,message:"请填写企业名称"},{value:this.JobTitle,message:"请填写职位名称"},{value:this.startTime,message:"请选择开始工作时间"},{value:this.endTime,message:"请选择结束工作时间"},{value:this.salary,message:"请选择税前月薪"},{value:this.Responsibilities,message:"请填写岗位职责"}],s=0;s<e.length;s++)if(""==e[s].value||"请选择"==e[s].value||"请填写"==e[s].value)return Object(d.Toast)({message:e[s].message,position:"bottom",duration:2e3}),!1;this.OccupationType,this.OccupationType,this.OccupationType,m.a.post({url:"app/resume/work",data:{params:{id:this.workId,userResumeId:this.userResumeId,companyName:this.EnterpriseName,jobName:this.JobTitle,startTime:this.startTime,endTime:this.endTime,jobResponsibilities:this.Responsibilities,preTaxSalLeft:this.salaryData.minprice,preTaxSalRight:this.salaryData.maxprice}}}).then(function(e){sessionStorage.removeItem("WorKData"),$Hybrid.routerList.pop(),t.$router.go(-1),console.log(e)})},Removes:function(){var t=this;m.a.delete({url:"app/resume/job",data:{params:{id:this.workId}}}).then(function(e){t.sheetVisible=!1,$Hybrid.routerList.pop(),t.$router.go(-1),console.log(e)})}}},T={render:function(){var t=this,e=this,i=e.$createElement,a=e._self._c||i;return a("div",{attrs:{id:"WorkExperience"}},[a("BaseTopbar",{attrs:{topbar:e.topbar}},[a("span",{on:{click:e.Save}},[e._v("保存")])]),e._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"margin"},[a("div",{staticClass:"list"},[e._m(0),e._v(" "),a("div",[a("span",[a("van-field",{staticClass:"input-text-right input-width",attrs:{"input-align":"right",clearable:"",placeholder:"请填写",maxlength:"50"},on:{input:function(t){return e.CheckName()}},model:{value:e.EnterpriseName,callback:function(t){e.EnterpriseName=t},expression:"EnterpriseName"}})],1)])]),e._v(" "),a("div",{staticClass:"list"},[e._m(1),e._v(" "),a("div",[a("span",[a("van-field",{staticClass:"input-text-right input-width",attrs:{type:"text","input-align":"right",clearable:"",placeholder:"请填写",maxlength:"50"},on:{input:function(t){return e.CheckName("JobTitle")}},model:{value:e.JobTitle,callback:function(t){e.JobTitle=t},expression:"JobTitle"}})],1)])]),e._v(" "),a("div",{staticClass:"list"},[e._m(2),e._v(" "),a("div",{on:{click:function(t){return e.handelClick("开始时间","startTime")}}},[a("span",[e._v(e._s(e.startTime))]),e._v(" "),a("img",{staticClass:"img-icon",attrs:{src:s("uty8"),alt:""}})])]),e._v(" "),a("div",{staticClass:"list"},[e._m(3),e._v(" "),a("div",{on:{click:function(t){return e.handelClick("结束时间","endTime")}}},[a("span",[e._v(e._s(e.endTime))]),e._v(" "),a("img",{staticClass:"img-icon",attrs:{src:s("uty8"),alt:""}})])]),e._v(" "),a("div",{staticClass:"list"},[e._m(4),e._v(" "),a("div",{on:{click:function(t){return e.handelClick("税前月薪")}}},[a("span",[e._v(e._s(e.salary))]),e._v(" "),a("img",{staticClass:"img-icon",attrs:{src:s("uty8"),alt:""}})])]),e._v(" "),a("div",{staticClass:"list"},[e._m(5),e._v(" "),a("div",{staticClass:"text-hidden",on:{click:e.GotoDuty}},[a("span",[e._v("\n                        "+e._s(e.Responsibilities)+"\n                    ")]),e._v(" "),a("img",{staticClass:"img-icon",attrs:{src:s("uty8"),alt:""}})])])])]),e._v(" "),a("PopupSpecificDate",{ref:"specificDate",attrs:{params:e.params,emit:e.specificDateCallBack}}),e._v(" "),a("PopupPrice",{ref:"PopupPrice",attrs:{emit:e.PopupPriceCallBack}}),e._v(" "),a("PopupSure",{attrs:{Data:{sheetVisible:e.sheetVisible,message:"确定删除这条工作经历吗？",sureText:"确定",surePop:this.Removes,removePop:function(){t.sheetVisible=!1}}}}),e._v(" "),this.workId?a("div",{staticClass:"btn",on:{click:function(){t.sheetVisible=!0}}},[e._v("\n        删除此工作经历\n    ")]):e._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title"},[e("span",{staticClass:"icon"}),this._v("企业名称")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title"},[e("span",{staticClass:"icon"}),this._v("职位名称")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title"},[e("span",{staticClass:"icon"}),this._v("开始时间")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title"},[e("span",{staticClass:"icon"}),this._v("结束时间")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title"},[e("span",{staticClass:"icon"}),this._v("税前月薪")])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"title"},[e("span",{staticClass:"icon"}),this._v("岗位职责")])}]};var f=s("VU/8")(v,T,!1,function(t){s("+1Az")},"data-v-4457b94a",null);e.default=f.exports}});