"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),d=require("./errors-BSvFB-p5.cjs"),c=require("./field-error.vue_vue_type_script_setup_true_lang-DddrtrU-.cjs"),u={class:"field"},y=["placeholder","disabled","value"],B="update:modelValue",m=e.defineComponent({__name:"text-area",props:{modelValue:{},withToggle:{type:Boolean},classes:{},disabled:{type:Boolean},forLabel:{},placeholder:{},required:{type:Boolean},isLoading:{type:Boolean},isRounded:{type:Boolean},autocomplete:{type:Boolean},icon:{},iconType:{},iconPack:{},textIcon:{type:Boolean},leftIcon:{},iconClasses:{},leftIconType:{},rightIcon:{},error:{},hasAddons:{type:Boolean},isNormal:{type:Boolean},isSmall:{type:Boolean},isMedium:{type:Boolean},isLarge:{type:Boolean},isResponsive:{type:Boolean},isExpanded:{type:Boolean},isFullwidth:{type:Boolean},is0:{type:Boolean},is1:{type:Boolean},is2:{type:Boolean},is3:{type:Boolean},is4:{type:Boolean},is5:{type:Boolean},is6:{type:Boolean},is7:{type:Boolean},is8:{type:Boolean},is9:{type:Boolean},is10:{type:Boolean},is11:{type:Boolean},is12:{type:Boolean}},setup(l,{emit:a}){const n=l,s=d._hasErrors(n),r=a;function i(o){const t=o.target;r(B,t.value)}return(o,t)=>{const p=e.resolveComponent("field-label");return e.openBlock(),e.createElementBlock("div",null,[e.createVNode(p,{required:o.required},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default"),e.renderSlot(o.$slots,"description")]),_:3},8,["required"]),e.createElementVNode("div",u,[e.createElementVNode("div",{class:e.normalizeClass(["control",{"has-icons-left":o.leftIcon,"has-icons-right":o.rightIcon}])},[e.createElementVNode("textarea",{class:e.normalizeClass(["textarea",{"is-danger":e.unref(s)}]),type:"text",placeholder:o.placeholder,disabled:o.disabled,value:o.modelValue,onInput:i},"                ",42,y)],2),e.createVNode(c._sfc_main,{error:o.error},null,8,["error"])])])}}});exports.default=m;
