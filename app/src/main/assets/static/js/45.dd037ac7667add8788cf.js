webpackJsonp([45],{X31D:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("d4/4"),i=t("B1Az"),n=t("cKc3"),o=(t("oFuF"),t("NYxO"),{data:function(){return{topbar:{isShow:!0,title:""},ResumeData:{userResumeVO:{sex:"",realName:"",resumeAvatar:""}},ResumeDataShowType:!1,listData:[{name:"工作经历"},{name:"教育经历"}],WorkData:[],EducationData:[],JobType:"",Uniquetext:"",popState:!1,slots:[{flex:1,values:["离职—随时到岗","在职—月内到岗","在职—考虑机会","在职—暂不考虑"],className:"slot1",textAlign:"center"}],ID:""}},components:{BaseTopbar:a.a,Cell:i.a},created:function(){},mounted:function(){var e=this;if(this.$route.params.data){this.topbar.title="我的简历",this.ResumeData=this.$route.params.data,this.ID=this.ResumeData.userResumeVO.id,this.WorkData=this.ResumeData.clientUserResumeJobVOS,this.EducationData=this.ResumeData.clientUserResumeEduVOS;[{name:"离职—随时到岗",code:0},{name:"在职—月内到岗",code:1},{name:"在职—考虑机会",code:2},{name:"在职—暂不考虑",code:3}].map(function(s){e.ResumeData.userResumeVO.jobHuntingStatus==s.code&&(e.JobType=s.name,console.log(e.JobType))})}else console.log(9946546464),this.$eventHub.$off("Resume").$on("Resume",function(s){e.topbar.title="简历详情",e.GetData(s.number)})},methods:{JobName:function(e){var s=[];return e.map(function(e,t){1==e.type&&s.push(e.name)}),s.join("/")},GetData:function(e){var s=this;n.a.get({url:"app/recruit/applicant_resume",data:{params:{id:e}}}).then(function(e){s.ResumeData=e,s.ID=s.ResumeData.userResumeVO.id,s.WorkData=s.ResumeData.clientUserResumeJobVOS,s.EducationData=s.ResumeData.clientUserResumeEduVOS;[{name:"离职—随时到岗",code:0},{name:"在职—月内到岗",code:1},{name:"在职—考虑机会",code:2},{name:"在职—暂不考虑",code:3}].forEach(function(e){s.ResumeData.userResumeVO.jobHuntingStatus==e.code&&(s.JobType=e.name)}),console.log("简历数据",e)})},jobTypeText:function(e){return 0==e?"全职":1==e?"兼职":2==e?"实习":void 0},TimeStyle:function(e){return e.slice(0,7).replace(/-/g,".")},EducationType:function(e){var s=void 0;return[{name:"小学",code:0},{name:"初中",code:1},{name:"高中",code:2},{name:"中专/技校",code:3},{name:"大专",code:4},{name:"本科",code:5},{name:"硕士",code:6},{name:"博士",code:7},{name:"其他",code:8}].forEach(function(t){e==t.code&&(s=t.name)}),s}},beforeDestroy:function(){this.$eventHub.$off("Resume")}}),u={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"MyResumeHome"}},[t("BaseTopbar",{attrs:{topbar:e.topbar}}),e._v(" "),t("div",{staticClass:"box"},[t("div",{staticClass:"margin"},[t("div",{staticClass:"title-box"},[t("div",{staticClass:"title"},[e._v("\n                    "+e._s(e.ResumeData.userResumeVO.realName||"快快用户")+"\n                ")]),e._v(" "),t("div",{staticClass:"desc"},[e._v("\n                    "+e._s(e.ResumeData.userResumeVO.jobYearsRight?e.ResumeData.userResumeVO.jobYearsRight+"年工作经验":"")+e._s(e.ResumeData.educationName?"/"+e.ResumeData.educationName:"")+e._s(e.ResumeData.userResumeVO.age?"/"+e.ResumeData.userResumeVO.age+"岁":"")+"\n                ")]),e._v(" "),t("span",{staticClass:"JobType"},[e._v(e._s(e.JobType))]),e._v(" "),t("div",{staticClass:"personal-text"},[e._v(e._s(e.ResumeData.userResumeVO.personalEvaluation||"您还没有填写个人评价哦"))]),e._v(" "),t("img",{staticClass:"img-head",attrs:{src:e.ResumeData.userResumeVO.resumeAvatar+"?x-oss-process=image/resize,w_150",alt:""}})]),e._v(" "),t("div",{staticClass:"show-box"},[e.ResumeData.userResumeVO.intensionCityId?t("div",{staticClass:"content-box"},[t("div",[t("div",{staticClass:"title"},[e.ResumeData.userResumeVO.intensionCityId?t("span",{staticClass:"icon"}):e._e(),e._v("\n                            求职意向\n                        ")]),e._v(" "),t("div",{staticClass:"job-content"},[t("div",{staticClass:"job-title"},[t("span",[e._v(e._s(e.JobName(e.ResumeData.userResumeVO.postLabel)))])]),e._v(" "),t("div",{staticClass:"job-desc"},[t("span",[e._v(e._s(e.ResumeData.userResumeVO.intensionSalLeft)+"-"+e._s(e.ResumeData.userResumeVO.intensionSalRight))]),e._v(" "),t("span",[e._v(e._s(e.ResumeData.userResumeVO.jobCity))]),e._v(" "),t("span",[e._v(e._s(e.jobTypeText(e.ResumeData.userResumeVO.jobType)))])])])])]):e._e(),e._v(" "),e.ResumeData.clientUserResumeJobVOS?t("div",{staticClass:"content-box"},[t("div",{staticClass:"title"},[e.ResumeData.clientUserResumeJobVOS?t("span",{staticClass:"icon"}):e._e(),e._v("工作经历")]),e._v(" "),e._l(e.WorkData,function(s,a){return t("div",{key:a},[t("div",{staticClass:"list-content"},[t("div",{staticClass:"list-title"},[t("span",{staticClass:"name"},[e._v(e._s(s.companyName))]),e._v(" "),t("span",[e._v("\n                                    "+e._s(e.TimeStyle(s.startTime))+"-"+e._s(e.TimeStyle(s.endTime))+"\n                                 \n                                ")])]),e._v(" "),t("div",{staticClass:"list-desc"},[t("span",[e._v(e._s(s.jobName))]),e._v(" "),t("span",[e._v(e._s(s.preTaxSalLeft)+"-"+e._s(s.preTaxSalRight))])]),e._v(" "),t("div",{staticClass:"list-text"},[e._v("\n                                "+e._s(s.jobResponsibilities)+"\n                            ")])])])})],2):e._e(),e._v(" "),e.ResumeData.clientUserResumeEduVOS?t("div",{staticClass:"content-box"},[t("div",{staticClass:"title"},[e.ResumeData.clientUserResumeEduVOS?t("span",{staticClass:"icon"}):e._e(),e._v("教育经历")]),e._v(" "),e._l(e.EducationData,function(s,a){return t("div",{key:a},[t("div",{staticClass:"list-content"},[t("div",{staticClass:"list-title"},[t("span",{staticClass:"name"},[e._v(e._s(s.school))]),e._v(" "),t("span",[e._v("\n                                    "+e._s(e.TimeStyle(s.startTime))+"-"+e._s(e.TimeStyle(s.endTime))+"\n                                   \n                                ")])]),e._v(" "),t("div",{staticClass:"list-desc"},[t("span",[e._v(e._s(s.major))]),e._v(" "),t("span",[e._v(e._s(e.EducationType(s.education)))])]),e._v(" "),t("div",{staticClass:"list-text"},[e._v("\n                                "+e._s(s.jobResponsibilities)+"\n                            ")])])])})],2):e._e()])])])],1)},staticRenderFns:[]};var m=t("VU/8")(o,u,!1,function(e){t("mtRl")},"data-v-f3431b30",null);s.default=m.exports},mtRl:function(e,s){}});