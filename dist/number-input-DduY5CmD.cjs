"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),h=require("./errors-BSvFB-p5.cjs"),g=require("./field-error.vue_vue_type_script_setup_true_lang-DddrtrU-.cjs"),v=()=>{let i="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=r.length;for(let s=0;s<10;s++)i+=r.charAt(Math.floor(Math.random()*n));return i},N={key:0,class:"control"},I=["id","placeholder","autocomplete","disabled","value"],k={key:1,class:"control"},V="update:modelValue",b=e.defineComponent({__name:"number-input",props:{modelValue:{},min:{},max:{},decimals:{},classes:{},disabled:{type:Boolean},forLabel:{},placeholder:{},required:{type:Boolean},isLoading:{type:Boolean},isRounded:{type:Boolean},isExpanded:{type:Boolean},autocomplete:{type:Boolean},icon:{},iconType:{},iconPack:{},textIcon:{type:Boolean},leftIcon:{},iconClasses:{},leftIconType:{},rightIcon:{},error:{},hasAddons:{type:Boolean},isSmall:{type:Boolean},isMedium:{type:Boolean},isLarge:{type:Boolean},is1:{type:Boolean},is2:{type:Boolean},is3:{type:Boolean},is4:{type:Boolean},is5:{type:Boolean},is6:{type:Boolean},is7:{type:Boolean},is8:{type:Boolean},is9:{type:Boolean},is10:{type:Boolean},is11:{type:Boolean},is12:{type:Boolean},isNarrow:{type:Boolean}},setup(i,{emit:r}){const n=i,s=v(),u=r,m=o=>new Promise(d=>{const l=document.getElementById(s);l&&(l.value=o),setTimeout(()=>{d(!0)},100)});function f(o){const l=o.target.value;let t=l.replace(/[^0-9.-]/g,"");n.min!==void 0&&Number(n.min)>=0&&(t=l.replace(/[^0-9.]/g,"")),n.decimals||(t=t.replaceAll(".",""));const p=t.split(".").length-1;if(p>1){const a=t.split(".");t=a[0]+"."+a.slice(1).join("")}if(p){const a=t.split(".");let B=a[1]||"";t=a[0]+"."+B.slice(0,n.decimals)}const c=Number(t);n.min!==void 0&&!isNaN(c)&&c<n.min&&(t=n.min.toString()),n.max!==void 0&&!isNaN(c)&&c>n.max&&(t=n.max.toString()),m(t).then(()=>{u(V,t)})}const y=h._hasErrors(n);return(o,d)=>{const l=e.resolveComponent("field-label"),t=e.resolveComponent("b-icon");return e.openBlock(),e.createElementBlock("div",null,[e.createVNode(l,{required:o.required},{default:e.withCtx(()=>[e.renderSlot(o.$slots,"default"),e.renderSlot(o.$slots,"description")]),_:3},8,["required"]),e.createElementVNode("div",{class:e.normalizeClass(["field",{"has-addons":o.hasAddons}])},[o.$slots.left?(e.openBlock(),e.createElementBlock("div",N,[e.renderSlot(o.$slots,"left")])):e.createCommentVNode("",!0),e.createElementVNode("div",{class:e.normalizeClass(["control",{"has-icons-left":o.leftIcon,"has-icons-right":o.rightIcon,"is-expanded":o.isExpanded}])},[e.createElementVNode("input",{id:e.unref(s),type:"text",class:e.normalizeClass(["input",{"is-danger":e.unref(y)}]),placeholder:o.placeholder,autocomplete:o.autocomplete?"on":"off",disabled:o.disabled,value:o.modelValue,onInput:f},null,42,I),o.leftIcon?(e.openBlock(),e.createBlock(t,{key:0,class:"icon is-small is-left",icon:o.leftIcon},null,8,["icon"])):e.createCommentVNode("",!0),o.rightIcon?(e.openBlock(),e.createBlock(t,{key:1,class:"icon is-small is-right",icon:o.rightIcon},null,8,["icon"])):e.createCommentVNode("",!0)],2),o.$slots.right?(e.openBlock(),e.createElementBlock("div",k,[e.renderSlot(o.$slots,"right")])):e.createCommentVNode("",!0),e.createVNode(g._sfc_main,{error:o.error},null,8,["error"])],2)])}}});exports.default=b;
