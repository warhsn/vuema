"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),p=require("./errors-BSvFB-p5.cjs"),c=require("./field-error.vue_vue_type_script_setup_true_lang-DddrtrU-.cjs"),u={class:"field"},y=["placeholder","disabled","value"],B="update:modelValue",m=e.defineComponent({__name:"text-area",props:{modelValue:{},withToggle:{type:Boolean},classes:{},disabled:{type:Boolean},forLabel:{},placeholder:{},required:{type:Boolean},isLoading:{type:Boolean},isRounded:{type:Boolean},isExpanded:{type:Boolean},autocomplete:{type:Boolean},icon:{},iconType:{},iconPack:{},textIcon:{type:Boolean},leftIcon:{},iconClasses:{},leftIconType:{},rightIcon:{},error:{},hasAddons:{type:Boolean},isSmall:{type:Boolean},isMedium:{type:Boolean},isLarge:{type:Boolean},is1:{type:Boolean},is2:{type:Boolean},is3:{type:Boolean},is4:{type:Boolean},is5:{type:Boolean},is6:{type:Boolean},is7:{type:Boolean},is8:{type:Boolean},is9:{type:Boolean},is10:{type:Boolean},is11:{type:Boolean},is12:{type:Boolean},isNarrow:{type:Boolean}},setup(l,{emit:a}){const n=l,r=p._hasErrors(n),s=a;function i(o){const t=o.target;s(B,t.value)}return(o,t)=>{const d=e.resolveComponent("field-label");return e.openBlock(),e.createElementBlock("div",null,[e.createVNode(d,{required:o.required},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default"),e.renderSlot(o.$slots,"description")]),_:3},8,["required"]),e.createElementVNode("div",u,[e.createElementVNode("div",{class:e.normalizeClass(["control",{"has-icons-left":o.leftIcon,"has-icons-right":o.rightIcon}])},[e.createElementVNode("textarea",{class:e.normalizeClass(["textarea",{"is-danger":e.unref(r)}]),type:"text",placeholder:o.placeholder,disabled:o.disabled,value:o.modelValue,onInput:i},"                ",42,y)],2),e.createVNode(c._sfc_main,{error:o.error},null,8,["error"])])])}}});exports.default=m;
