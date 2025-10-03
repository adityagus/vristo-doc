import{a as x,r as v,m as k,e as o,f as p,g as e,u as r,s as C,R as L,F as j,x as B,D as h,w as m,y as f,n as d,z as i,t as g}from"./vendor.14f711c1.js";import{c as M,_ as w}from"./codePreview.07904b8d.js";import{u as A}from"./main.e1d3eec4.js";const S=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Elements")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Search")])],-1),$={class:"pt-5 grid grid-cols-1 lg:grid-cols-2 gap-6"},N={class:"panel lg:row-span-2"},q={class:"flex items-center justify-between mb-5"},J=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Live Search",-1),R=i('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),V=[R],D={class:"mb-5 space-y-5"},P={class:"mx-auto w-full sm:w-1/2 mb-5"},z={class:"relative"},E=e("button",{type:"button",class:"btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center"},[e("svg",{class:"mx-auto",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor","stroke-width":"1.5",opacity:"0.5"}),e("path",{d:"M18.5 18.5L22 22",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})])],-1),F={class:"p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block"},G={class:"user-profile"},K=["src"],O=i('<div class="cursor-pointer"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 opacity-70"><circle cx="5" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle><circle opacity="0.5" cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle><circle cx="19" cy="12" r="2" stroke="currentColor" stroke-width="1.5"></circle></svg></div>',1),T=e("pre",null,`<!-- live search -->
<div>
  <!-- searchbar -->
  <form class="mx-auto w-full sm:w-1/2 mb-5">
    <div class="relative">
      <input
        type="text"
        placeholder="Search Attendees..."
        class="form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11"
        v-model="search"
      />
      <button type="button" class="btn btn-primary absolute ltr:right-1 rtl:left-1 inset-y-0 m-auto rounded-full w-9 h-9 p-0 flex items-center justify-center">
        <svg> ... </svg>
      </button>
    </div>
  </form>

  <!-- result -->
  <div class="p-4 border border-white-dark/20 rounded-lg space-y-4 overflow-x-auto w-full block">
    <template v-for="(item, i) in searchResults" :key="i">
      <div
        class="
          bg-white
          dark:bg-[#1b2e4b]
          rounded-xl
          shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)]
          p-3
          flex
          items-center
          justify-between
          text-gray-500
          font-semibold
          min-w-[625px]
          hover:text-primary
          transition-all
          duration-300
          hover:scale-[1.01]
        "
      >
        <div class="user-profile">
          <img :src="\`/assets/images/\${item.thumb}\`" alt="" class="w-8 h-8 rounded-md object-cover" />
        </div>
        <div>{{ item.name }}</div>
        <div>{{ item.email }}</div>
        <div class="badge border-2 border-dashed" :class="item.statusClass">
          {{ item.status }}
        </div>
        <div class="cursor-pointer">
          <svg> ... </svg>
        </div>
      </div>
    </template>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
const search = ref('');
const items: any = [
  {
    thumb: 'profile-5.jpeg',
    name: 'Alan Green',
    email: 'alan@mail.com',
    status: 'Active',
    statusClass: 'badge badge-outline-primary',
  },
  {
    thumb: 'profile-11.jpeg',
    name: 'Linda Nelson',
    email: 'Linda@mail.com',
    status: 'Busy',
    statusClass: 'badge badge-outline-danger',
  },
  {
    thumb: 'profile-12.jpeg',
    name: 'Lila Perry',
    email: 'Lila@mail.com',
    status: 'Closed',
    statusClass: 'badge badge-outline-warning',
  },
  {
    thumb: 'profile-3.jpeg',
    name: 'Andy King',
    email: 'Andy@mail.com',
    status: 'Active',
    statusClass: 'badge badge-outline-primary',
  },
  {
    thumb: 'profile-15.jpeg',
    name: 'Jesse Cory',
    email: 'Jesse@mail.com',
    status: 'Busy',
    statusClass: 'badge badge-outline-danger',
  },
];
const searchResults = computed(() => {
  return items.filter((item: any) => {
    return (
      item.name.toLowerCase().includes(search.value.toLowerCase()) || item.email.toLowerCase().includes(search.value.toLowerCase()) || item.status.toLowerCase().includes(search.value.toLowerCase())
    );
  });
});
<\/script>
`,-1),U={class:"panel"},H={class:"flex items-center justify-between mb-5"},I=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Overlay",-1),Q=i('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),W=[Q],X={class:"mb-5 space-y-5"},Y=e("svg",{class:"mx-auto",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("circle",{cx:"11.5",cy:"11.5",r:"9.5",stroke:"currentColor","stroke-width":"1.5",opacity:"0.5"}),e("path",{d:"M18.5 18.5L22 22",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round"})],-1),Z=[Y],ee=e("pre",null,`<!-- overlay -->
<form>
  <div class="search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full" @click="focus = true" :class="focus && 'input-focused'">
    <input
      type="text"
      placeholder="Search..."
      class="form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer"
      :class="{ '!block': focus }"
      @blur="focus = false"
    />
    <button
      type="submit"
      class="text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary"
      :class="{ 'ltr:!right-auto ltr:left-1 rtl:right-1': focus }"
    >
      <svg> ... </svg>
    </button>
  </div>
</form>

<!-- script -->
<script lang="ts" setup>
  import { ref } from 'vue';
  const focus = ref(false);
<\/script>
`,-1),te={class:"panel"},se={class:"flex items-center justify-between mb-5"},re=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Search Box",-1),oe=i('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),ae=[oe],le=i('<div class="mb-5 space-y-5"><form><div class="relative border border-white-dark/20 w-full flex"><button type="submit" placeholder="Let&#39;s find your question in fast way" class="text-primary m-auto p-3 flex items-center justify-center"><svg class="mx-auto" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11.5" cy="11.5" r="9.5" stroke="currentColor" stroke-width="1.5" opacity="0.5"></circle><path d="M18.5 18.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></button><input type="text" placeholder="Let&#39;s find your question in fast way" class="form-input border-0 border-l rounded-none bg-white focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"></div></form></div>',1),ie=e("pre",null,`<!-- boxed -->
<form>
    <div class="relative border border-white-dark/20  w-full flex">
        <button type="submit" placeholder="Let's find your question in fast way" class="text-primary m-auto p-3 flex items-center justify-center">
          <svg> ... </svg>
        </button>
        <input type="text" placeholder="Let's find your question in fast way" class="form-input border-0 border-l rounded-none bg-white  focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3" />
    </div>
</form>
`,-1),pe=x({__name:"search",setup(ne){A({title:"Search"});const{codeArr:c,toggleCode:u}=M(),a=v(""),b=[{thumb:"profile-5.jpeg",name:"Alan Green",email:"alan@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-11.jpeg",name:"Linda Nelson",email:"Linda@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"},{thumb:"profile-12.jpeg",name:"Lila Perry",email:"Lila@mail.com",status:"Closed",statusClass:"badge badge-outline-warning"},{thumb:"profile-3.jpeg",name:"Andy King",email:"Andy@mail.com",status:"Active",statusClass:"badge badge-outline-primary"},{thumb:"profile-15.jpeg",name:"Jesse Cory",email:"Jesse@mail.com",status:"Busy",statusClass:"badge badge-outline-danger"}],l=v(!1),_=k(()=>b.filter(n=>n.name.toLowerCase().includes(a.value.toLowerCase())||n.email.toLowerCase().includes(a.value.toLowerCase())||n.status.toLowerCase().includes(a.value.toLowerCase())));return(n,t)=>(o(),p("div",null,[S,e("div",$,[e("div",N,[e("div",q,[J,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=s=>r(u)("code1"))},V)]),e("div",D,[e("div",null,[e("form",P,[e("div",z,[C(e("input",{type:"text",placeholder:"Search Attendees...",class:"form-input shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] bg-white rounded-full h-11 placeholder:tracking-wider ltr:pr-11 rtl:pl-11","onUpdate:modelValue":t[1]||(t[1]=s=>a.value=s)},null,512),[[L,a.value]]),E])]),e("div",F,[(o(!0),p(j,null,B(r(_),(s,y)=>(o(),p("div",{key:y,class:"bg-white dark:bg-[#1b2e4b] rounded-xl shadow-[0_0_4px_2px_rgb(31_45_61_/_10%)] p-3 flex items-center justify-between text-gray-500 font-semibold min-w-[625px] hover:text-primary transition-all duration-300 hover:scale-[1.01]"},[e("div",G,[e("img",{src:`/assets/images/${s.thumb}`,alt:"",class:"w-8 h-8 rounded-md object-cover"},null,8,K)]),e("div",null,g(s.name),1),e("div",null,g(s.email),1),e("div",{class:d(["badge border-2 border-dashed",s.statusClass])},g(s.status),3),O]))),128))])])]),r(c).includes("code1")?(o(),h(w,{key:0},{default:m(()=>[T]),_:1})):f("",!0)]),e("div",U,[e("div",H,[I,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=s=>r(u)("code2"))},W)]),e("div",X,[e("form",null,[e("div",{class:d(["search-form-overlay relative border border-white-dark/20 rounded-md h-12 w-full",l.value&&"input-focused"]),onClick:t[4]||(t[4]=s=>l.value=!0)},[e("input",{type:"text",placeholder:"Search...",class:d(["form-input bg-white h-full placeholder:tracking-wider hidden ltr:pl-12 rtl:pr-12 peer",{"!block":l.value}]),onBlur:t[3]||(t[3]=s=>l.value=!1)},null,34),e("button",{type:"submit",class:d(["text-dark/70 absolute ltr:right-1 rtl:left-1 inset-y-0 my-auto w-9 h-9 p-0 flex items-center justify-center peer-focus:text-primary",{"ltr:!right-auto ltr:left-1 rtl:right-1":l.value}])},Z,2)],2)])]),r(c).includes("code2")?(o(),h(w,{key:0},{default:m(()=>[ee]),_:1})):f("",!0)]),e("div",te,[e("div",se,[re,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[5]||(t[5]=s=>r(u)("code3"))},ae)]),le,r(c).includes("code3")?(o(),h(w,{key:0},{default:m(()=>[ie]),_:1})):f("",!0)])])]))}});export{pe as default};
