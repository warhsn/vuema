"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),o={class:"icon"},c=e.defineComponent({__name:"base-icon",props:{icon:{},iconType:{},iconPack:{},textIcon:{type:Boolean},leftIcon:{},iconClasses:{},leftIconClass:{},leftIconType:{},rightIconClass:{},rightIcon:{},rightIconType:{}},setup(s){return(n,t)=>(e.openBlock(),e.createElementBlock("span",o,[e.createElementVNode("i",{class:e.normalizeClass(`${n.iconType||"fa-regular"} fa-${n.icon} ${n.iconClasses}`)},null,2)]))}});exports.default=c;
