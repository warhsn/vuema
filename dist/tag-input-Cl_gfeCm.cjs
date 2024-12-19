"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),B={class:"tag-input"},m={class:"tags is-marginless"},f=["onClick"],v={class:"tag-input-control"},g="update:modelValue",V=e.defineComponent({__name:"tag-input",props:{tags:{},classes:{},disabled:{type:Boolean},forLabel:{},modelValue:{type:[Boolean,Number,String,Array,Date]},placeholder:{},required:{type:Boolean},isLoading:{type:Boolean},isRounded:{type:Boolean},autocomplete:{type:Boolean},icon:{},iconType:{},iconPack:{},textIcon:{type:Boolean},leftIcon:{},iconClasses:{},leftIconType:{},rightIcon:{},error:{},hasAddons:{type:Boolean},isNormal:{type:Boolean},isSmall:{type:Boolean},isMedium:{type:Boolean},isLarge:{type:Boolean},isResponsive:{type:Boolean},isExpanded:{type:Boolean},isFullwidth:{type:Boolean},is0:{type:Boolean},is1:{type:Boolean},is2:{type:Boolean},is3:{type:Boolean},is4:{type:Boolean},is5:{type:Boolean},is6:{type:Boolean},is7:{type:Boolean},is8:{type:Boolean},is9:{type:Boolean},is10:{type:Boolean},is11:{type:Boolean},is12:{type:Boolean}},setup(r,{emit:p}){const i=r,a=e.ref(""),d=p;function s(n){d(g,n)}function c(n){const l=n.target.value;let o=i.modelValue;o!=null&&o.includes(l)||o==null||o.push(l),s(o),a.value=""}function u(n){let t=i.modelValue;const l=t==null?void 0:t.indexOf(n);t==null||t.splice(l,1),s(t)}return(n,t)=>{const l=e.resolveComponent("field-label");return e.openBlock(),e.createElementBlock("div",null,[e.createVNode(l,{required:n.required},{default:e.withCtx(()=>[e.renderSlot(n.$slots,"default"),e.renderSlot(n.$slots,"description")]),_:3},8,["required"]),e.createElementVNode("div",B,[e.createElementVNode("div",m,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.modelValue,(o,y)=>(e.openBlock(),e.createElementBlock("span",{class:"tag",key:y},[e.createTextVNode(e.toDisplayString(o)+" ",1),e.createElementVNode("button",{class:"delete is-small",onClick:_=>u(o)},null,8,f)]))),128))]),e.createElementVNode("div",v,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o),type:"text",onKeyup:e.withKeys(c,["enter"])},null,544),[[e.vModelText,a.value]])])])])}}});exports.default=V;
