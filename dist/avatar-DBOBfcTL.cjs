"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("vue");function a(e){const n=e.trim();if(!n)return"";const i=n.split(/\s+/),l=i[0].charAt(0);if(i.length===1)return l;const r=i[i.length-1].charAt(0);return l+r}const o=["width","height","src"],c=t.defineComponent({__name:"avatar",props:{name:{},size:{default:48},radius:{},isRound:{type:Boolean,default:!0},backgroundColour:{default:"grey"},textColor:{default:"white"},imageUrl:{}},setup(e){return(n,i)=>(t.openBlock(),t.createElementBlock("figure",{class:"image is-clickable",style:t.normalizeStyle(`width: ${e.size}px; height: ${e.size}px;`)},[e.imageUrl?(t.openBlock(),t.createElementBlock("img",{key:0,width:`${e.size}px`,height:`${e.size}px`,src:e.imageUrl,class:t.normalizeClass({"is-rounded":e.isRound})},null,10,o)):(t.openBlock(),t.createElementBlock("div",{key:1,style:t.normalizeStyle(`
                width: ${e.size}px; 
                height: ${e.size}px; 
                border-radius: ${e.isRound?"50%":"0"};
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${e.backgroundColour};
                color: ${e.textColor};`)},t.toDisplayString(t.unref(a)(e.name??"")),5))],4))}});exports.default=c;
