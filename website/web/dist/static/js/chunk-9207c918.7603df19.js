(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9207c918","chunk-60ac196e"],{"0d7d":function(e,t,n){},"39a6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"comment"},[n("div",{staticClass:"comment-header"},[e._v(" 评论列表 ")]),e.comment&&e.comment.length>0?n("ul",{staticClass:"comment-box"},e._l(e.comment,(function(t){return n("li",{key:t.id,staticClass:"comment-item"},[n("div",{staticClass:"comment-avatar"},[n("Avatar",{staticStyle:{"background-color":"#2d8cf0"},attrs:{size:"small",icon:"ios-person"}})],1),n("div",{staticClass:"comment-info"},[n("h1",{staticClass:"comment-username"},[e._v(e._s(t.nickname))]),n("p",{staticClass:"comment-content"},[e._v(" "+e._s(t.content)+" ")]),t.reply&&t.reply.length>0?n("div",{staticClass:"comment-reply"},[n("ul",{staticClass:"comment-box"},e._l(t.reply,(function(t){return n("li",{key:t.id,staticClass:"comment-item"},[n("div",{staticClass:"comment-avatar"},[n("Avatar",{staticStyle:{"background-color":"#2d8cf0"},attrs:{size:"small",icon:"ios-chatbubbles"}})],1),n("div",{staticClass:"comment-info"},[n("h1",{staticClass:"comment-username"},[e._v("来自「"+e._s(t.nickname)+"」的回复 "+e._s(t.reply_username))]),n("p",{staticClass:"comment-content"},[e._v(" "+e._s(t.content)+" ")])])])})),0)]):e._e(),n("p",{staticClass:"comment-reply-btn",on:{click:function(n){return e.reply(t.id,t.nickname)}}},[e._v("点击回复")])])])})),0):e._e(),e.page&&e.page.current_page<e.page.total_pages?n("ul",{staticClass:"load-more-comment",on:{click:e.loadMoreComment}},[n("Icon",{staticStyle:{color:"#f00"},attrs:{type:"md-ionic"}}),e._v(" 点击加载更多 ")],1):e._e(),n("Modal",{attrs:{"z-index":e.zIndex,title:e.replyNickname},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[n("v-comment-create",{attrs:{comment_type:e.commentType,comment_id:e.comment_id},on:{updateComment:e.updateComment}})],1)],1)},r=[],c=(n("a4d3"),n("99af"),n("4de4"),n("4160"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("d3b7"),n("284c")),s=(n("96cf"),n("2fa7")),o=n("2f62"),m=n("d2b3");function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={props:{target_id:{type:Number||String,default:function(){return-1}},target_type:{type:String,default:function(){return"article"}}},components:{VCommentCreate:m["default"]},computed:l({},Object(o["d"])({comment:function(e){return e.comment.commentList},page:function(e){return e.comment.commentPage}})),data:function(){return{show:!1,comment_id:0,replyNickname:"",zIndex:9999,replyArr:[],commentType:"reply",currentPage:2}},methods:l({},Object(o["b"])({getCommentList:"comment/getCommentList"}),{reply:function(e,t){this.comment_id=e,this.replyNickname="回复 「".concat(t,"」："),this.show=!this.show},updateComment:function(e,t){this.show=!this.show,this.$emit("updateComment",e,t)},loadMoreComment:function(){var e,t;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.page||this.page.current_page===this.page.total_pages){n.next=7;break}return n.next=3,regeneratorRuntime.awrap(this.getCommentList({target_id:this.target_id,target_type:this.target_type,page:this.currentPage}));case 3:e=n.sent,t=[].concat(Object(c["a"])(this.comment),Object(c["a"])(e.data.data.data)),this.$store.commit("comment/SET_COMMENT_LIST",t),this.$store.commit("comment/SET_COMMENT_PAGE",e.data.data.meta);case 7:case"end":return n.stop()}}),null,this)}})},p=u,d=(n("8087"),n("2877")),f=Object(d["a"])(p,a,r,!1,null,"76bfa0ac",null);t["default"]=f.exports},6201:function(e,t,n){"use strict";var a=n("0d7d"),r=n.n(a);r.a},8087:function(e,t,n){"use strict";var a=n("bc07"),r=n.n(a);r.a},bc07:function(e,t,n){},d2b3:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"comment-create"},[n("Form",{ref:"params",attrs:{model:e.params,rules:e.ruleValidate,"label-position":"left","label-width":80}},[n("FormItem",{attrs:{label:"昵称",prop:"nickname"}},[n("Input",{attrs:{placeholder:"请输入您的昵称"},model:{value:e.params.nickname,callback:function(t){e.$set(e.params,"nickname",t)},expression:"params.nickname"}})],1),n("FormItem",{attrs:{label:"邮箱",prop:"email"}},[n("Input",{attrs:{placeholder:"请输入您的邮箱（不会被公开）"},model:{value:e.params.email,callback:function(t){e.$set(e.params,"email",t)},expression:"params.email"}})],1),n("FormItem",{attrs:{label:"评论",prop:"content"}},[n("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入您的评论内容..."},model:{value:e.params.content,callback:function(t){e.$set(e.params,"content",t)},expression:"params.content"}})],1),n("FormItem",[n("Button",{on:{click:function(t){return e.resetCommentInput("params")}}},[e._v("清空")]),n("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.submit("params")}}},[e._v(" "+e._s("comment"===e.comment_type?"评论":"回复")+" ")])],1)],1)],1)},r=[],c=(n("a4d3"),n("4de4"),n("4160"),n("a9e3"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("d3b7"),n("96cf"),n("2fa7")),s=n("2f62");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(c["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i={props:{target_id:{type:Number,default:function(){return 0}},target_type:{type:String,default:function(){return"article"}},comment_type:{type:String,default:function(){return"comment"}},comment_id:{type:Number,default:function(){return 0}}},data:function(){return{params:{nickname:"",email:"",content:""},ruleValidate:{nickname:[{required:!0,message:"请输入您的昵称",trigger:"blur"}],email:[{required:!0,message:"请输入您的邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱",trigger:"blur"}],content:[{required:!0,message:"请输入评论",trigger:"blur"},{type:"string",min:2,message:"评论不能少于2个字",trigger:"blur"}]}}},methods:m({},Object(s["b"])({createComment:"comment/createComment",createReply:"reply/createReply"}),{submit:function(e){var t=this;this.$refs[e].validate((function(e){var n,a;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(!e){r.next=27;break}if(r.prev=1,"comment"!==t.comment_type){r.next=12;break}return t.params.target_id=t.target_id,t.params.target_type=t.target_type,r.next=7,regeneratorRuntime.awrap(t.createComment(t.params));case 7:n=r.sent,t.$emit("updateComment",n.data.data,"comment"),t.$Message.success("评论成功！"),r.next=19;break;case 12:if("reply"!==t.comment_type){r.next=19;break}return t.params.comment_id=t.comment_id,r.next=16,regeneratorRuntime.awrap(t.createReply(t.params));case 16:a=r.sent,t.$emit("updateComment",a.data.data,"reply"),t.$Message.success("回复成功！");case 19:t.resetCommentInput("params"),r.next=25;break;case 22:r.prev=22,r.t0=r["catch"](1),console.log(r.t0);case 25:r.next=28;break;case 27:t.$Message.error("表单验证失败!");case 28:case"end":return r.stop()}}),null,null,[[1,22]])}))},resetCommentInput:function(e){this.$refs[e].resetFields()}})},l=i,u=(n("6201"),n("2877")),p=Object(u["a"])(l,a,r,!1,null,"35ac3820",null);t["default"]=p.exports}}]);