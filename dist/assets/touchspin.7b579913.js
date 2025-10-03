import{c as V,_ as p}from"./codePreview.07904b8d.js";import{a as B,r as s,e as i,f as M,g as e,u as o,h as n,ax as l,D as c,w as m,y as x,z as d}from"./vendor.14f711c1.js";import{u as $}from"./main.e1d3eec4.js";const N=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"TouchSpin")])],-1),U={class:"pt-5 space-y-8"},z=d('<div class="panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"><div class="ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5"><path d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div><span class="ltr:mr-3 rtl:ml-3">Documentation: </span><a href="https://www.npmjs.com/package/vue3-number-spinner" target="_blank" class="block hover:underline">https://www.npmjs.com/package/vue3-number-spinner</a></div>',1),T={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},F={class:"panel"},D={class:"flex items-center justify-between mb-5"},W=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Button Spin",-1),A=d('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),E=[A],I={class:"mb-5"},P={class:"relative"},Z={class:"flex"},q=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),G=[q],H=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),J=[H],K=e("pre",null,`<!-- basic -->
<div class="flex">
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
    @click="value1--"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value1" :min="0" :max="100" :step="1" :keyStep="1" class="form-input rounded-none text-center" />
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
    @click="value1++"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { NumberSpinner } from 'vue3-number-spinner';

  const value1 = ref(0);
<\/script>
`,-1),O={class:"panel"},Q={class:"flex items-center justify-between mb-5"},R=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Spin button with step of 5",-1),X=d('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Y=[X],ee={class:"mb-5"},te={class:"relative"},re={class:"flex"},oe=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),se=[oe],ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),le=[ne],ie=e("pre",null,`<!-- step of 5 -->
<div class="flex">
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
    @click="value2 -= 5"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value2" :min="0" :max="50" :step="5" :keyStep="5" class="form-input rounded-none text-center" />
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
    @click="value2 += 5"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { NumberSpinner } from 'vue3-number-spinner';

  const value2 = ref(0);
<\/script>
`,-1),de={class:"panel"},ae={class:"flex items-center justify-between mb-5"},ue=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Wrapping value spin button",-1),pe=d('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),ce=[pe],me={class:"mb-5"},xe={class:"relative"},be={class:"flex"},ve=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),he=[ve],we=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),fe=[we],ye=e("pre",null,`<!-- wrapping value -->
<div class="flex">
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
    @click="value3 -= 1"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value3" :min="0" :max="21" :step="1" :keyStep="1" :circular="true" class="form-input rounded-none text-center" />
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
    @click="value3 += 1"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { NumberSpinner } from 'vue3-number-spinner';

  const value3 = ref(0);
<\/script>
`,-1),ge={class:"panel lg:row-span-2"},ke={class:"flex items-center justify-between mb-5"},_e=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Size",-1),Ce=d('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),je=[Ce],Se={class:"mb-5"},Le={class:"mb-5"},Ve=e("label",{for:"sizeLarge"},"Large size",-1),Be={class:"flex"},Me=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),$e=[Me],Ne=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Ue=[Ne],ze={class:"mb-5"},Te=e("label",{for:"sizeDefault"},"Default size",-1),Fe={class:"flex"},De=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),We=[De],Ae=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Ee=[Ae],Ie=e("label",{for:"sizeSmall"},"Small size",-1),Pe={class:"flex"},Ze=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),qe=[Ze],Ge=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),He=[Ge],Je=e("pre",null,`<!-- large -->
<div class="flex">
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
    @click="value4--"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value4" :min="0" :max="25" :step="1" :keyStep="1" class="form-input form-input-lg rounded-none text-center" />
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
    @click="value4++"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- default -->
<div class="flex">
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
    @click="value5--"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value5" :min="0" :max="25" :step="1" :keyStep="1" class="form-input rounded-none text-center" />
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
    @click="value5++"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- small -->
<div class="flex">
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
    @click="value6--"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value6" :min="0" :max="25" :step="1" :keyStep="1" class="form-input form-input-sm rounded-none text-center" />
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
    @click="value6++"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { NumberSpinner } from 'vue3-number-spinner';

  const value4 = ref(0);
  const value5 = ref(0);
  const value6 = ref(0);
<\/script>
`,-1),Ke={class:"panel"},Oe={class:"flex items-center justify-between mb-5"},Qe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Inline spin button",-1),Re=d('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Xe=[Re],Ye={class:"mb-5"},et={class:"mb-5"},tt={class:"inline-flex"},rt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),ot=[rt],st=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),nt=[st],lt=e("pre",null,`<!-- inline buttons -->
<div class="inline-flex">
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
    @click="value7--"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value7" :min="0" :max="25" :step="1" :keyStep="1" class="form-input rounded-none text-center" />
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
    @click="value7++"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { NumberSpinner } from 'vue3-number-spinner';

  const value7 = ref(0);
<\/script>
`,-1),it={class:"panel lg:row-span-2"},dt={class:"flex items-center justify-between mb-5"},at=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical spin button",-1),ut=d('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),pt=[ut],ct={class:"mb-5"},mt={class:"mb-5"},xt={class:"inline-flex flex-col w-[50px]"},bt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),vt=[bt],ht=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),wt=[ht],ft=e("pre",null,`<!-- vertical buttons -->
<div class="inline-flex flex-col w-[50px]">
  <button type="button" class="bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary" @click="value8--">
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value8" :min="0" :max="25" :step="1" :keyStep="1" :vertical="true" class="form-input rounded-none text-center px-2" />
  <button type="button" class="bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary" @click="value8++">
    <svg> ... </svg>
  </button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { NumberSpinner } from 'vue3-number-spinner';

  const value8 = ref(0);
<\/script>
`,-1),yt={class:"panel"},gt={class:"flex items-center justify-between mb-5"},kt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Text with spin button",-1),_t=d('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Ct=[_t],jt={class:"mb-5"},St={class:"relative"},Lt={class:"flex"},Vt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Bt=[Vt],Mt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),$t=[Mt],Nt=e("pre",null,`<!-- text with spin button -->
<div class="flex">
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary"
    @click="value9--"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value9" :format="dayFormatter" :min="0" :max="6" :step="1" :keyStep="1" class="form-input rounded-none text-center" />
  <button
    type="button"
    class="bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary"
    @click="value9++"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { NumberSpinner } from 'vue3-number-spinner';

  const value9 = ref(0);
  const days = ref(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

  const dayFormatter = (value) => {
    return days.value[value];
  };
<\/script>
`,-1),Ut={class:"panel"},zt={class:"flex items-center justify-between mb-5"},Tt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Change button class",-1),Ft=d('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Dt=[Ft],Wt={class:"mb-5"},At={class:"relative"},Et={class:"flex"},It=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),Pt=[It],Zt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round",class:"w-5 h-5"},[e("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),e("line",{x1:"5",y1:"12",x2:"19",y2:"12"})],-1),qt=[Zt],Gt=e("pre",null,`<!-- basic -->
<div class="flex">
  <button
    type="button"
    class="bg-danger text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-danger"
    @click="value10--"
  >
    <svg> ... </svg>
  </button>
  <number-spinner v-model="value10" :min="0" :max="25" :step="1" :keyStep="1" class="form-input rounded-none text-center" />
  <button
    type="button"
    class="bg-warning text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-warning"
    @click="value10++"
  >
    <svg> ... </svg>
  </button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  import { NumberSpinner } from 'vue3-number-spinner';

  const value10 = ref(0);
<\/script>
`,-1),Qt=B({__name:"touchspin",setup(Ht){$({title:"Touchspin"});const{codeArr:a,toggleCode:u}=V(),b=s(0),v=s(0),h=s(0),w=s(0),f=s(0),y=s(0),g=s(0),k=s(0),_=s(0),C=s(0),S=s(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]),L=j=>S.value[j];return(j,t)=>(i(),M("div",null,[N,e("div",U,[z,e("div",T,[e("div",F,[e("div",D,[W,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=r=>o(u)("code1"))},E)]),e("div",I,[e("div",P,[e("div",Z,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:t[1]||(t[1]=r=>b.value--)},G),n(o(l.exports.NumberSpinner),{modelValue:b.value,"onUpdate:modelValue":t[2]||(t[2]=r=>b.value=r),min:0,max:100,step:1,keyStep:1,class:"form-input rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:t[3]||(t[3]=r=>b.value++)},J)])])]),o(a).includes("code1")?(i(),c(p,{key:0},{default:m(()=>[K]),_:1})):x("",!0)]),e("div",O,[e("div",Q,[R,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=r=>o(u)("code2"))},Y)]),e("div",ee,[e("div",te,[e("div",re,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:t[5]||(t[5]=r=>v.value-=5)},se),n(o(l.exports.NumberSpinner),{modelValue:v.value,"onUpdate:modelValue":t[6]||(t[6]=r=>v.value=r),min:0,max:50,step:5,keyStep:5,class:"form-input rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:t[7]||(t[7]=r=>v.value+=5)},le)])])]),o(a).includes("code2")?(i(),c(p,{key:0},{default:m(()=>[ie]),_:1})):x("",!0)]),e("div",de,[e("div",ae,[ue,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[8]||(t[8]=r=>o(u)("code3"))},ce)]),e("div",me,[e("div",xe,[e("div",be,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:t[9]||(t[9]=r=>h.value-=1)},he),n(o(l.exports.NumberSpinner),{modelValue:h.value,"onUpdate:modelValue":t[10]||(t[10]=r=>h.value=r),min:0,max:21,step:1,keyStep:1,circular:!0,class:"form-input rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:t[11]||(t[11]=r=>h.value+=1)},fe)])])]),o(a).includes("code3")?(i(),c(p,{key:0},{default:m(()=>[ye]),_:1})):x("",!0)]),e("div",ge,[e("div",ke,[_e,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[12]||(t[12]=r=>o(u)("code4"))},je)]),e("div",Se,[e("div",Le,[Ve,e("div",Be,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:t[13]||(t[13]=r=>w.value--)},$e),n(o(l.exports.NumberSpinner),{modelValue:w.value,"onUpdate:modelValue":t[14]||(t[14]=r=>w.value=r),min:0,max:25,step:1,keyStep:1,class:"form-input form-input-lg rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:t[15]||(t[15]=r=>w.value++)},Ue)])]),e("div",ze,[Te,e("div",Fe,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:t[16]||(t[16]=r=>f.value--)},We),n(o(l.exports.NumberSpinner),{modelValue:f.value,"onUpdate:modelValue":t[17]||(t[17]=r=>f.value=r),min:0,max:25,step:1,keyStep:1,class:"form-input rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:t[18]||(t[18]=r=>f.value++)},Ee)])]),e("div",null,[Ie,e("div",Pe,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:t[19]||(t[19]=r=>y.value--)},qe),n(o(l.exports.NumberSpinner),{modelValue:y.value,"onUpdate:modelValue":t[20]||(t[20]=r=>y.value=r),min:0,max:25,step:1,keyStep:1,class:"form-input form-input-sm rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:t[21]||(t[21]=r=>y.value++)},He)])])]),o(a).includes("code4")?(i(),c(p,{key:0},{default:m(()=>[Je]),_:1})):x("",!0)]),e("div",Ke,[e("div",Oe,[Qe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[22]||(t[22]=r=>o(u)("code5"))},Xe)]),e("div",Ye,[e("div",et,[e("div",tt,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:t[23]||(t[23]=r=>g.value--)},ot),n(o(l.exports.NumberSpinner),{modelValue:g.value,"onUpdate:modelValue":t[24]||(t[24]=r=>g.value=r),min:0,max:25,step:1,keyStep:1,class:"form-input rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:t[25]||(t[25]=r=>g.value++)},nt)])])]),o(a).includes("code5")?(i(),c(p,{key:0},{default:m(()=>[lt]),_:1})):x("",!0)]),e("div",it,[e("div",dt,[at,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[26]||(t[26]=r=>o(u)("code6"))},pt)]),e("div",ct,[e("div",mt,[e("div",xt,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center rounded-t-md p-3 font-semibold border border-b-0 border-primary",onClick:t[27]||(t[27]=r=>k.value--)},vt),n(o(l.exports.NumberSpinner),{modelValue:k.value,"onUpdate:modelValue":t[28]||(t[28]=r=>k.value=r),min:0,max:25,step:1,keyStep:1,vertical:!0,class:"form-input rounded-none text-center px-2"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center rounded-b-md p-3 font-semibold border border-t-0 border-primary",onClick:t[29]||(t[29]=r=>k.value++)},wt)])])]),o(a).includes("code6")?(i(),c(p,{key:0},{default:m(()=>[ft]),_:1})):x("",!0)]),e("div",yt,[e("div",gt,[kt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[30]||(t[30]=r=>o(u)("code7"))},Ct)]),e("div",jt,[e("div",St,[e("div",Lt,[e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-primary",onClick:t[31]||(t[31]=r=>_.value--)},Bt),n(o(l.exports.NumberSpinner),{modelValue:_.value,"onUpdate:modelValue":t[32]||(t[32]=r=>_.value=r),format:L,min:0,max:6,step:1,keyStep:1,class:"form-input rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-primary text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-primary",onClick:t[33]||(t[33]=r=>_.value++)},$t)])])]),o(a).includes("code7")?(i(),c(p,{key:0},{default:m(()=>[Nt]),_:1})):x("",!0)]),e("div",Ut,[e("div",zt,[Tt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[34]||(t[34]=r=>o(u)("code8"))},Dt)]),e("div",Wt,[e("div",At,[e("div",Et,[e("button",{type:"button",class:"bg-danger text-white flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border border-r-0 border-danger",onClick:t[35]||(t[35]=r=>C.value--)},Pt),n(o(l.exports.NumberSpinner),{modelValue:C.value,"onUpdate:modelValue":t[36]||(t[36]=r=>C.value=r),min:0,max:25,step:1,keyStep:1,class:"form-input rounded-none text-center"},null,8,["modelValue"]),e("button",{type:"button",class:"bg-warning text-white flex justify-center items-center ltr:rounded-r-md rtl:rounded-l-md px-3 font-semibold border border-l-0 border-warning",onClick:t[37]||(t[37]=r=>C.value++)},qt)])])]),o(a).includes("code8")?(i(),c(p,{key:0},{default:m(()=>[Gt]),_:1})):x("",!0)])])])]))}});export{Qt as default};
