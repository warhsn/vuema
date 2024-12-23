"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),t=e.defineComponent({props:{message:{type:String,required:!0},type:{type:String,default:!1}},template:`
    <div class="user-profile">
      <h2>{{ props.message }}</h2>
      <slot />
    </div>
  `});exports.default=t;
