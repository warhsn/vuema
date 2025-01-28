"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),y=require("./errors-BSvFB-p5.cjs"),f=require("./field-error.vue_vue_type_script_setup_true_lang-DddrtrU-.cjs"),B=["multiple","disabled","size"],v={key:0,value:""},g=["value"],u="update:modelValue",h=e.defineComponent({__name:"select-input",props:{modelValue:{default:()=>[]},items:{},valueKey:{},labelKey:{},promptLabel:{default:"- Select an Option -"},multiple:{type:Boolean,default:!1},itemCount:{},classes:{},disabled:{type:Boolean},forLabel:{},placeholder:{},required:{type:Boolean},isLoading:{type:Boolean,default:!1},isRounded:{type:Boolean,default:!1},autocomplete:{type:Boolean},icon:{},iconType:{},iconPack:{},textIcon:{type:Boolean},leftIcon:{},iconClasses:{},leftIconClass:{},leftIconType:{},rightIconClass:{},rightIcon:{},rightIconType:{},error:{},hasAddons:{type:Boolean},isNormal:{type:Boolean},isSmall:{type:Boolean,default:!1},isMedium:{type:Boolean,default:!1},isLarge:{type:Boolean,default:!1},isResponsive:{type:Boolean},isExpanded:{type:Boolean},isFullwidth:{type:Boolean},is0:{type:Boolean},is1:{type:Boolean},is2:{type:Boolean},is3:{type:Boolean},is4:{type:Boolean},is5:{type:Boolean},is6:{type:Boolean},is7:{type:Boolean},is8:{type:Boolean},is9:{type:Boolean},is10:{type:Boolean},is11:{type:Boolean},is12:{type:Boolean}},setup(d,{emit:p}){const a=d,r=p,t=e.ref(a.modelValue);e.watch(()=>a.modelValue,l=>{t.value=l});function c(l){const o=l.target;if(a.multiple){const s=Array.from(o.selectedOptions).map(i=>i.value);t.value=s,r(u,Object.values(s))}else t.value=o.value,r(u,o.value)}const m=y._hasErrors(a);return(l,o)=>{const s=e.resolveComponent("field-label"),i=e.resolveComponent("b-icon");return e.openBlock(),e.createElementBlock("div",null,[e.createVNode(s,{required:l.required},{description:e.withCtx(()=>[e.renderSlot(l.$slots,"description")]),default:e.withCtx(()=>[e.renderSlot(l.$slots,"default")]),_:3},8,["required"]),e.createElementVNode("div",null,[e.createElementVNode("div",{class:e.normalizeClass(["is-expanded control",{"has-icons-left":l.leftIcon}])},[e.createElementVNode("div",{class:e.normalizeClass(["select is-fullwidth",{"is-multiple":l.multiple,"is-danger":e.unref(m),"is-rounded":l.isRounded,"is-loading":l.isLoading,"is-small":l.isSmall,"is-medium":l.isMedium,"is-large":l.isLarge}])},[e.withDirectives(e.createElementVNode("select",{multiple:l.multiple,disabled:l.disabled,size:l.itemCount,onChange:c,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n)},[l.multiple?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("option",v,e.toDisplayString(l.promptLabel),1)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.items,n=>(e.openBlock(),e.createElementBlock("option",{value:n[l.valueKey],key:n[l.valueKey]},e.toDisplayString(n[l.labelKey]),9,g))),128))],40,B),[[e.vModelSelect,t.value]]),l.leftIcon?(e.openBlock(),e.createBlock(i,{key:0,"icon-classes":l.leftIconClass,icon:l.leftIcon},null,8,["icon-classes","icon"])):e.createCommentVNode("",!0)],2)],2)]),e.createVNode(f._sfc_main,{error:l.error},null,8,["error"])])}}});exports.default=h;