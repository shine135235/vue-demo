(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"16c0":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"home"},[n("div",{on:{click:t.onClickGoItem}},[t._v("手写板")])])},s=[],a={name:"home",methods:{onClickGoItem:function(){this.$router.push("/hand-writing")}}},h=a,o=n("2877"),c=Object(o["a"])(h,e,s,!1,null,null,null);i["default"]=c.exports},"534e":function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"hand-writing"},[t.filePath?n("img",{attrs:{src:t.filePath,alt:""}}):n("canvas",{ref:"writingCanvas",staticClass:"writing-box",attrs:{width:t.canvasWidth,height:t.canvasHeight},on:{touchstart:t.onStart,touchmove:t.onMove,touchend:t.onEnd}}),n("div",{staticClass:"btn-box"},[n("div",{staticClass:"btn btn-clear",on:{click:t.onClear}},[t._v("清屏")]),n("div",{staticClass:"btn btn-generate",on:{click:t.onGenerate}},[t._v("生成")])])])},s=[],a={name:"HandWriting",props:{path:{type:String,default:""}},data:function(){return{offsetWidth:0,offsetHeight:0,canvasWidth:500,canvasHeight:500,lineWidth:20,lineColor:"#000",filePath:""}},mounted:function(){this.init()},methods:{init:function(){var t=this.$refs.writingCanvas;this.canvasWidth=t.offsetWidth,this.canvasHeight=t.offsetHeight,this.ctx=t.getContext("2d"),""!==this.path&&(this.filePath=this.path)},handleDraw:function(t){var i=t.touches[0].clientX-this.offsetLeft,n=t.touches[0].clientY-this.offsetTop;this.ctx.lineTo(i,n),this.ctx.stroke()},onStart:function(t){this.offsetLeft=t.target.offsetLeft,this.offsetTop=t.target.offsetTop,this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.strokeStyle=this.lineColor,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.handleDraw(t)},onMove:function(t){this.handleDraw(t)},onEnd:function(){this.ctx.closePath()},onClear:function(){var t=this;this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.filePath="",this.$emit("onClear"),this.$nextTick(function(){t.init()})},onGenerate:function(){this.filePath?this.filePath=this.filePath:(this.filePath=this.$refs.writingCanvas.toDataURL(),this.$emit("onComplete",this.filePath))}}},h=a,o=(n("c00c"),n("2877")),c=Object(o["a"])(h,e,s,!1,null,"5f8daeac",null);i["default"]=c.exports},c00c:function(t,i,n){"use strict";var e=n("d226"),s=n.n(e);s.a},d226:function(t,i,n){}}]);
//# sourceMappingURL=about.0ffe247c.js.map