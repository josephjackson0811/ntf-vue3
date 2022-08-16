(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c9e6ade"],{"0160":function(t,e,i){},"6ca7":function(t,e,i){},"6ea7":function(t,e,i){"use strict";i.r(e);var a=i("8212"),s=i("8336"),n=i("b0af"),r=i("99d9"),l=i("15fd"),o=i("5530"),c=(i("d3b7"),i("25f0"),i("6ca7"),i("ec29"),i("9d26")),u=i("c37a"),h=(i("4de4"),i("5607")),d=i("2b0e"),p=d["a"].extend({name:"rippleable",directives:{ripple:h["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),m=i("8547"),f=i("58df");function g(t){t.preventDefault()}var v=Object(f["a"])(u["a"],p,m["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return t.valueComparator(i,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var t=u["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:g},t):t},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:g},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var a=i.length;i=i.filter((function(i){return!t.valueComparator(i,e)})),i.length===a&&i.push(e)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(i,e)?null:e:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),b=["title"],y=v.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return Object(o["a"])(Object(o["a"])({},u["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(l["a"])(t,b));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",Object(o["a"])(Object(o["a"])({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),x=i("62ad"),C=i("a523"),k=i("ce7e"),_=i("0789"),w=i("132d"),S=i("8860"),D=i("da13"),$=i("1800"),B=i("5d23"),I=i("1baa"),V=i("490a"),O=i("0fd9"),L=i("2fa4"),E=i("53ca"),A=(i("a9e3"),i("caad"),i("d81d"),i("cb29"),i("99af"),i("fb6a"),i("a9ad")),j=i("2909");function M(t,e){var i=e.minX,a=e.maxX,s=e.minY,n=e.maxY,r=t.length,l=Math.max.apply(Math,Object(j["a"])(t)),o=Math.min.apply(Math,Object(j["a"])(t)),c=(a-i)/(r-1),u=(n-s)/(l-o||1);return t.map((function(t,e){return{x:i+e*c,y:n-(t-o)*u,value:t}}))}function T(t,e){var i=e.minX,a=e.maxX,s=e.minY,n=e.maxY,r=t.length,l=Math.max.apply(Math,Object(j["a"])(t)),o=Math.min.apply(Math,Object(j["a"])(t));o>0&&(o=0),l<0&&(l=0);var c=a/r,u=(n-s)/(l-o||1),h=n-Math.abs(o*u);return t.map((function(t,e){var a=Math.abs(u*t);return{x:i+e*c,y:h-a+ +(t<0)*a,height:a,value:t}}))}i("a15b");function W(t){return parseInt(t,10)}function z(t,e,i){return W(t.x+i.x)===W(2*e.x)&&W(t.y+i.y)===W(2*e.y)}function P(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function H(t,e,i){var a={x:t.x-e.x,y:t.y-e.y},s=Math.sqrt(a.x*a.x+a.y*a.y),n={x:a.x/s,y:a.y/s};return{x:e.x+n.x*i,y:e.y+n.y*i}}function N(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,s=t.shift(),n=t[t.length-1];return(i?"M".concat(s.x," ").concat(a-s.x+2," L").concat(s.x," ").concat(s.y):"M".concat(s.x," ").concat(s.y))+t.map((function(i,a){var n=t[a+1],r=t[a-1]||s,l=n&&z(n,i,r);if(!n||l)return"L".concat(i.x," ").concat(i.y);var o=Math.min(P(r,i),P(n,i)),c=o/2<e,u=c?o/2:e,h=H(r,i,u),d=H(n,i,u);return"L".concat(h.x," ").concat(h.y,"S").concat(i.x," ").concat(i.y," ").concat(d.x," ").concat(d.y)})).join("")+(i?"L".concat(n.x," ").concat(a-s.x+2," Z"):"")}var Y=Object(f["a"])(A["a"]).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,i=e.length,a=0;t.length<i;a++){var s=e[a],n=this.labels[a];n||(n="object"===Object(E["a"])(s)?s.value:s),t.push({x:s.x,value:String(n)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"===typeof t?t:t.value}))},_values:function(){return"trend"===this.type?M(this.normalizedValues,this.boundary):T(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var e=t.$refs.path,i=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=i+" "+i,e.style.strokeDashoffset=Math.abs(i-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.strokeDashoffset="0"),t.lastLength=i}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,i=this.gradient.slice();i.length||i.push("");var a=Math.max(i.length-1,1),s=i.reverse().map((function(e,i){return t.$createElement("stop",{attrs:{offset:i/a,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},s)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=M(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:N(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,i=this.parsedLabels.map((function(i,a){return e.$createElement("text",{attrs:{x:i.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(i,a)])}));return this.genG(i)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=T(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,i,a){var s=this,n="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(a,"-clip")}},t.map((function(t){return s.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:i,height:t.height,rx:n,ry:n}},[s.autoDraw?s.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(s.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:Object(o["a"])(Object(o["a"])({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),F=i("8654"),G=(i("0160"),i("7560")),X=Object(f["a"])(G["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(o["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),R=(i("c96a"),Object(f["a"])(A["a"],G["a"])),q=R.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(c["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(o["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(o["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),J=function(){var t=this,e=t._self._c;return e(C["a"],{staticClass:"down-top-padding",attrs:{fluid:""}},[e(O["a"],[e(x["a"],{attrs:{cols:"12",lg:"8"}},[e(n["a"],[e(r["b"],{staticClass:"pa-5"},[e("div",{staticClass:"d-sm-flex align-center"},[e("div",[e("h3",{staticClass:"title blue-grey--text text--darken-2 font-weight-regular"},[t._v("Sales Overview")]),e("h6",{staticClass:"subtitle-2 font-weight-light"},[t._v("Ample Admin Vs Pixel Admin")])]),e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"d-flex align-center"},[e("div",{staticClass:"d-flex align-center px-2"},[e("span",{staticClass:"success--text"},[e("span",{staticClass:"overline"},[e("i",{staticClass:"mdi mdi-brightness-1 mr-2"})]),e("span",{staticClass:"font-weight-regular"},[t._v("Ample")])])]),e("div",{staticClass:"d-flex align-center px-2"},[e("span",{staticClass:"info--text"},[e("span",{staticClass:"overline"},[e("i",{staticClass:"mdi mdi-brightness-1 mr-2"})]),e("span",{staticClass:"font-weight-regular"},[t._v("Pixel")])])])])])]),e("div",{staticClass:"mt-9"},[e(Y,{attrs:{type:"bar",fill:t.fill2,height:"80px",gradient:t.gradient2,"line-width":t.width2,padding:t.padding2,smooth:t.radius2||!1,value:t.value2,"auto-draw":""}})],1)])],1)],1),e(x["a"],{attrs:{cols:"12",lg:"4"}},[e(n["a"],[e(r["b"],{staticClass:"pa-5"},[e("h3",{staticClass:"title blue-grey--text text--darken-2 font-weight-regular"},[t._v("Our Visitors")]),e("h6",{staticClass:"subtitle-2 font-weight-light"},[t._v("Different Devices Used to Visit")]),e("div",{staticClass:"pb-6"},[e(Y,{attrs:{fill:t.fill,height:"145px",gradient:t.gradient,"line-width":t.width,padding:t.padding,smooth:t.radius||!1,value:t.value,"auto-draw":""}})],1),e("div",{staticClass:"d-flex align-center justify-center border-top pt-4 pb-2"},[e("div",{staticClass:"d-flex align-center px-3"},[e("span",{staticClass:"info--text"},[e("span",{staticClass:"overline"},[e("i",{staticClass:"mdi mdi-brightness-1 mr-2"})]),e("span",{staticClass:"font-weight-regular"},[t._v("Mobile")])])]),e("div",{staticClass:"d-flex align-center px-3"},[e("span",{staticClass:"deep-purple--text text--lighten-1"},[e("span",{staticClass:"overline"},[e("i",{staticClass:"mdi mdi-brightness-1 mr-2"})]),e("span",{staticClass:"font-weight-regular"},[t._v("Desktop")])])]),e("div",{staticClass:"d-flex align-center px-3"},[e("span",{staticClass:"success--text"},[e("span",{staticClass:"overline"},[e("i",{staticClass:"mdi mdi-brightness-1 mr-2"})]),e("span",{staticClass:"font-weight-regular"},[t._v("Tablet")])])])])])],1)],1),e(x["a"],{attrs:{cols:"12",lg:"4"}},[e(n["a"],{staticClass:"position-relative profile-card mb-7"},[e(r["b"],{staticClass:"pa-5"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"rounded-circle",attrs:{src:"https://randomuser.me/api/portraits/men/81.jpg",alt:"user",width:"100"}}),e("h2",{staticClass:"font-weight-regular"},[t._v("Angela Dominic")]),e("h6",{staticClass:"op-5 font-weight-regular"},[t._v("Web Designer & Developer")]),e(s["a"],{staticClass:"text-capitalize white--text mt-7",attrs:{color:"deep-purple accent-2","x-large":"",rounded:""}},[t._v("Follow")]),e(O["a"],{staticClass:"mt-6"},[e(x["a"],{attrs:{cols:"4"}},[e("h3",{staticClass:"mb-0 font-weight-light blue-grey--text text--darken-2"},[t._v("1099")]),e("small",{staticClass:"blue-grey--text text--darken-2"},[t._v("Articles")])]),e(x["a"],{attrs:{cols:"4"}},[e("h3",{staticClass:"mb-0 font-weight-light blue-grey--text text--darken-2"},[t._v("23,469")]),e("small",{staticClass:"blue-grey--text text--darken-2"},[t._v("Followers")])]),e(x["a"],{attrs:{cols:"4"}},[e("h3",{staticClass:"mb-0 font-weight-light blue-grey--text text--darken-2"},[t._v("6035")]),e("small",{staticClass:"blue-grey--text text--darken-2"},[t._v("Following")])])],1)],1)])],1),e(n["a"],{staticClass:"mb-7"},[e(r["b"],{staticClass:"pa-5"},[e("h3",{staticClass:"title blue-grey--text text--darken-2 font-weight-regular mb-4"},[t._v("Task")]),e(F["a"],{attrs:{label:"What are you working on?",filled:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.create.apply(null,arguments)}},model:{value:t.task,callback:function(e){t.task=e},expression:"task"}},[e(_["c"],{scopedSlots:t._u([{key:"append",fn:function(){return[t.task?e(w["a"],{on:{click:t.create}},[t._v("add_circle")]):t._e()]},proxy:!0}])})],1),e("h2",{staticClass:"font-weight-medium success--text text-center"},[t._v(" Tasks:  "),e(_["c"],{attrs:{"leave-absolute":""}},[e("span",{key:"tasks-".concat(t.tasks.length)},[t._v(t._s(t.tasks.length))])])],1),e(k["a"],{staticClass:"mt-4"}),e(O["a"],{staticClass:"my-1",attrs:{align:"center"}},[e("span",{staticClass:"mx-4 info--text"},[t._v("Remaining: "+t._s(t.remainingTasks))]),e(k["a"],{attrs:{vertical:""}}),e("span",{staticClass:"mx-4 success--text"},[t._v("Completed: "+t._s(t.completedTasks))]),e(L["a"]),e(V["a"],{staticClass:"mr-2",attrs:{value:t.progress}})],1),e(k["a"],{staticClass:"mb-4"}),t.tasks.length>0?e(n["a"],[e(_["f"],{staticClass:"py-0",attrs:{group:""}},[t._l(t.tasks,(function(i,a){return[0!==a?e(k["a"],{key:"".concat(a,"-divider")}):t._e(),e(D["a"],{key:"".concat(a,"-").concat(i.text)},[e($["a"],[e(y,{attrs:{color:i.done?"grey":"primary"},scopedSlots:t._u([{key:"label",fn:function(){return[e("div",{staticClass:"ml-4 text-truncate",class:i.done?"grey--text":"blue-grey--text text--darken-2",domProps:{textContent:t._s(i.text)}})]},proxy:!0}],null,!0),model:{value:i.done,callback:function(e){t.$set(i,"done",e)},expression:"task.done"}})],1),e(L["a"]),e(_["d"],[i.done?e(w["a"],{attrs:{color:"success"}},[t._v("mdi-check")]):t._e()],1)],1)]}))],2)],1):t._e()],1)],1),e(n["a"],[e(r["b"],[e("h3",{staticClass:"title blue-grey--text text--darken-2 font-weight-regular"},[t._v("Inbox")]),e(S["a"],{attrs:{"two-line":""}},[e(I["a"],{attrs:{multiple:"","active-class":"info--text"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(t.items,(function(i,a){return[e(D["a"],{key:i.title,scopedSlots:t._u([{key:"default",fn:function(a){var s=a.active;return[e(B["b"],[e(B["d"],{domProps:{textContent:t._s(i.title)}}),e(B["c"],{staticClass:"text--primary",domProps:{textContent:t._s(i.headline)}}),e(B["c"],{domProps:{textContent:t._s(i.subtitle)}})],1),e($["a"],[e(B["a"],{domProps:{textContent:t._s(i.action)}}),s?e(w["a"],{attrs:{color:"yellow"}},[t._v("mdi-star")]):e(w["a"],{attrs:{color:"grey lighten-1"}},[t._v("mdi-star-outline")])],1)]}}],null,!0)}),a+1<t.items.length?e(k["a"],{key:a}):t._e()]}))],2)],1)],1)],1)],1),e(x["a"],{attrs:{cols:"12",lg:"8"}},[e(n["a"],[e(r["b"],{staticClass:"pa-5"},[e("h3",{staticClass:"title blue-grey--text text--darken-2 font-weight-regular mb-4"},[t._v("Activity Timeline")]),e(X,t._l(4,(function(i){return e(q,{key:i,attrs:{large:""},scopedSlots:t._u([{key:"icon",fn:function(){return[e(a["a"],[e("img",{attrs:{src:"http://i.pravatar.cc/64"}})])]},proxy:!0},{key:"opposite",fn:function(){return[e("span",[t._v("Tus eu perfecto")])]},proxy:!0}],null,!0)},[e(n["a"],{staticClass:"elevation-2"},[e(r["c"],{staticClass:"headline"},[t._v("Lorem ipsum")]),e(r["b"],[t._v("Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.")])],1)],1)})),1)],1)],1)],1)],1)],1)},U=[],K=[["#6c757d"],["#6c757d"],["#6c757d","#6c757d","#6c757d"],["#21c1d6","21c1d6"],["#21c1d6","#21c1d6","#21c1d6"],["#21c1d6","#21c1d6","#21c1d6"]],Q=[["#1e88e5"],["#1e88e5"],["#1e88e5","#1e88e5","#1e88e5"],["#1e88e5","#1e88e5"],["#1e88e5","#1e88e5","#1e88e5"],["#1e88e5","#1e88e5","#1e88e5"]],Z={name:"BasicDashboard",data:function(){return{fill:!0,gradient:K[4],gradients:K,padding:8,radius:50,value:[0,2,5,9,5,10,3,5,1,8,2,9,0],width:1,fill2:!0,gradient2:Q[4],gradients2:Q,radius2:0,padding2:0,value2:[1,2,5,9,5,10,3,5,1,8,2,9,4],width2:4,tasks:[{done:!1,text:"Check emails of Mr.Shah"},{done:!1,text:"Give salary to employee"}],task:null,selected:[2],items:[{action:"15 min",headline:"Brunch this weekend?",title:"Ali Connors",subtitle:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{action:"2 hr",headline:"Summer BBQ",title:"me, Scrott, Jennifer",subtitle:"Wish I could come, but I'm out of town this weekend."},{action:"6 hr",headline:"Oui oui",title:"Sandra Adams",subtitle:"Do you have Paris recommendations? Have you ever been?"},{action:"12 hr",headline:"Birthday gift",title:"Trevor Hansen",subtitle:"Have any ideas about what we should get Heidi for her birthday?"},{action:"18hr",headline:"Recipe to try",title:"Britta Holt",subtitle:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}]}},computed:{completedTasks:function(){return this.tasks.filter((function(t){return t.done})).length},progress:function(){return this.completedTasks/this.tasks.length*100},remainingTasks:function(){return this.tasks.length-this.completedTasks}},methods:{create:function(){this.tasks.push({done:!1,text:this.task}),this.task=null}}},tt=Z,et=i("2877"),it=Object(et["a"])(tt,J,U,!1,null,null,null);e["default"]=it.exports},ec29:function(t,e,i){}}]);
//# sourceMappingURL=chunk-7c9e6ade.f9258f97.js.map