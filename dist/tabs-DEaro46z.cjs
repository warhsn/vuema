"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),s=e.defineComponent({__name:"tabs",props:{isBoxed:{type:Boolean},isToggle:{type:Boolean},isToggleRounded:{type:Boolean},isNormal:{type:Boolean},isSmall:{type:Boolean},isMedium:{type:Boolean},isLarge:{type:Boolean},isResponsive:{type:Boolean},isExpanded:{type:Boolean},isFullwidth:{type:Boolean},is0:{type:Boolean},is1:{type:Boolean},is2:{type:Boolean},is3:{type:Boolean},is4:{type:Boolean},is5:{type:Boolean},is6:{type:Boolean},is7:{type:Boolean},is8:{type:Boolean},is9:{type:Boolean},is10:{type:Boolean},is11:{type:Boolean},is12:{type:Boolean}},setup(l){const o=l;return(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["tabs",{"is-boxed":o.isBoxed,"is-toggle":o.isToggle,"is-toggle-rounded":o.isToggleRounded,"is-fullwidth":o.isFullwidth}])},[e.createElementVNode("ul",null,[e.renderSlot(t.$slots,"default")])],2))}});exports.default=s;