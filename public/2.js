webpackJsonp([2],{"/9Ay":function(e,t){var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{"padding-top":"10px"}},[r("el-card",[r("div",{staticClass:"clearfix text-center",attrs:{slot:"header"},slot:"header"},[r("span",{staticStyle:{"font-size":"16px",color:"#000"}},[e._v("新增题目")])]),e._v(" "),r("div",[r("div",{attrs:{id:"showError"}}),e._v(" "),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"150px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{staticStyle:{width:"60%"},attrs:{maxlength:30},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"时间限制",prop:"time"}},[r("el-input",{staticStyle:{width:"30%"},attrs:{maxlength:5},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}},[r("template",{attrs:{slot:"append"},slot:"append"},[e._v("MS")])],2)],1),e._v(" "),r("el-form-item",{attrs:{label:"内存限制",prop:"memory"}},[r("el-input",{staticStyle:{width:"30%"},attrs:{maxlength:6},model:{value:e.form.memory,callback:function(t){e.$set(e.form,"memory",t)},expression:"form.memory"}},[r("template",{attrs:{slot:"append"},slot:"append"},[e._v("KB")])],2),e._v(" "),r("i",[e._v("推荐最大不超过524288KB（512MB）")])],1),e._v(" "),r("el-form-item",{attrs:{label:"特殊判断"}},[r("el-radio-group",{on:{change:e.onChange},model:{value:e.form.spj,callback:function(t){e.$set(e.form,"spj",t)},expression:"form.spj"}},[r("el-radio",{attrs:{label:0}},[e._v("关闭")]),e._v(" "),r("el-radio",{attrs:{label:1}},[e._v("精度3位")]),e._v(" "),r("el-radio",{attrs:{label:2}},[e._v("精度6位")]),e._v(" "),r("el-radio",{attrs:{label:3}},[e._v("自定义")])],1),e._v(" "),e.useSpj?r("el-input",{staticStyle:{width:"60%"},attrs:{type:"textarea",autosize:{minRows:5,maxRows:10},placeholder:"请输入判断代码"},model:{value:e.form.judge,callback:function(t){e.$set(e.form,"judge",t)},expression:"form.judge"}}):e._e()],1),e._v(" "),r("editor",{ref:"contentEditor",staticStyle:{width:"80%",margin:"auto"},attrs:{value:e.content}}),e._v(" "),r("el-form-item",{attrs:{label:"来源"}},[r("el-input",{staticStyle:{width:"60%"},attrs:{maxlength:50},model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"作者"}},[r("el-input",{staticStyle:{width:"60%"},attrs:{maxlength:50},model:{value:e.form.author,callback:function(t){e.$set(e.form,"author",t)},expression:"form.author"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)],1)])],1)},o=[];e.exports={render:r,staticRenderFns:o}},"G+o0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{form:{title:"",time:"1000",memory:"32768",spj:0,judge:"",content:"",source:"",author:""},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"}],time:[{required:!0,message:"自己看着办把",trigger:"blur"}],memory:[{required:!0,message:"自己看着办把",trigger:"blur"}]},content:"### Problem Description\n\n### Input\n\n### Output\n\n### Sample Input\n\n### Sample Output\n\n### Hints\n",useSpj:!1}},mounted:function(){this.$notify({title:"提示",dangerouslyUseHTMLString:!0,message:'<a href="#" target="view_window">点击查看添加题目帮助</a>',duration:5600,type:"warning"})},methods:{onSubmit:function(){var e=this;this.$refs.form.validate(function(t){if(!t)return e.$message.error("表单填写错误，请检查"),!1;if(e.form.content=e.$refs.contentEditor.simplemde.value(),e.form.content=e.$refs.contentEditor.simplemde.markdown(e.form.content),!e.form.content)return e.$message.error("你想干嘛"),!1;var r=e.form;axios.post("/admin/addProblem",{data:r}).then(function(t){!0===t.data?e.$message({message:"提交成功",duration:1500,type:"success"}):e.$message({message:"我也不知为什么失败了。。",duration:1500,type:"success"})}).catch(function(t){422===t.response.status?e.$message.error("表单填写错误，请联系管理员"):e.$message({showClose:!0,message:"提交失败"+t,type:"error",duration:0})})})},onChange:function(e){this.useSpj=3===e}}}},ls8e:function(e,t,r){var o=r("VU/8"),a=r("G+o0"),s=r("/9Ay"),n=o(a,s,!1,null,null,null);e.exports=n.exports}});