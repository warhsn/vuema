"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),c=require("./_plugin-vue_export-helper-BHFhmbuH.cjs"),i=e.defineComponent({__name:"loader",props:{loading:{type:Boolean,default:!0}},setup(o){const n=o,r=e.computed(()=>n.loading?"height: 100vh; width: 100%; display: flex; align-items: center; justify-content: center;":"");return(t,s)=>{const l=e.resolveComponent("flex");return e.openBlock(),e.createElementBlock("div",{style:e.normalizeStyle(r.value)},[t.loading?(e.openBlock(),e.createBlock(l,{key:0,width:"100%",column:"",class:"filter-container align-center is-justify-content-center"},{default:e.withCtx(()=>[(e.openBlock(),e.createElementBlock("svg",e.normalizeProps(e.guardReactiveProps({viewBox:"0 0 50 50",style:{width:"48px",height:"48px"}})),[e.createElementVNode("circle",e.mergeProps({class:"spinner"},{cx:25,cy:25,r:20},{fill:"none","stroke-width":"1"}),null,16),e.createElementVNode("circle",e.mergeProps({class:"dot"},{cx:10,cy:10,r:2}),null,16)],16))]),_:1})):e.renderSlot(t.$slots,"default",{key:1},void 0,!0)],4)}}}),a=c._export_sfc(i,[["__scopeId","data-v-baaea7dc"]]);exports.default=a;
