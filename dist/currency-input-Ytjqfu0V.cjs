"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),p=require("./errors-BSvFB-p5.cjs"),c="update:modelValue",u=e.defineComponent({__name:"currency-input",props:{modelValue:{},currency:{default:"$"},options:{},min:{},max:{},decimals:{default:2},classes:{},disabled:{type:Boolean},forLabel:{},placeholder:{},required:{type:Boolean},isLoading:{type:Boolean},isRounded:{type:Boolean},autocomplete:{type:Boolean},icon:{},iconType:{},iconPack:{},textIcon:{type:Boolean},leftIcon:{},iconClasses:{},leftIconType:{},rightIcon:{},error:{},hasAddons:{type:Boolean,default:!0},isNormal:{type:Boolean},isSmall:{type:Boolean},isMedium:{type:Boolean},isLarge:{type:Boolean},isResponsive:{type:Boolean},isExpanded:{type:Boolean},isFullwidth:{type:Boolean},is0:{type:Boolean},is1:{type:Boolean},is2:{type:Boolean},is3:{type:Boolean},is4:{type:Boolean},is5:{type:Boolean},is6:{type:Boolean},is7:{type:Boolean},is8:{type:Boolean},is9:{type:Boolean},is10:{type:Boolean},is11:{type:Boolean},is12:{type:Boolean}},setup(n,{emit:t}){const a=t,l=n,s=p._hasErrors(l);function r(o){console.log("JERE"),a(c,o)}return(o,y)=>{const i=e.resolveComponent("action-button"),d=e.resolveComponent("number-input");return e.openBlock(),e.createElementBlock("div",null,[e.createVNode(d,{required:o.required,"has-addons":o.hasAddons,"left-icon":o.leftIcon,errors:o.error,"has-errors":e.unref(s),disabled:o.disabled,placeholder:o.placeholder,decimals:o.decimals,value:o.modelValue,"is-expanded":o.isExpanded,"onUpdate:modelValue":r},{left:e.withCtx(()=>[e.createVNode(i,{class:"is-static"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.currency),1)]),_:1})]),description:e.withCtx(()=>[e.renderSlot(o.$slots,"description")]),default:e.withCtx(()=>[e.renderSlot(o.$slots,"default")]),_:3},8,["required","has-addons","left-icon","errors","has-errors","disabled","placeholder","decimals","value","is-expanded"])])}}});exports.default=u;
