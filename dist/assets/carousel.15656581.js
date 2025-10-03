import{c as C,_ as w}from"./codePreview.07904b8d.js";import{a as j,r as L,e as r,f as d,g as t,u as e,D as o,w as s,al as b,am as y,an as g,y as v,ao as _,h as k,z as c,F as x,x as f,ak as p}from"./vendor.14f711c1.js";import{a as z,u as B}from"./main.e1d3eec4.js";const M=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Carousel")])],-1),S={class:"pt-5 space-y-8"},P=c('<div class="panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"><div class="ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5"><path d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div><span class="ltr:mr-3 rtl:ml-3">Documentation: </span><a href="https://www.npmjs.com/package/swiper" target="_blank" class="block hover:underline">https://www.npmjs.com/package/swiper</a></div>',1),E={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},$={class:"panel"},V={class:"flex items-center justify-between mb-5"},I=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),N=c('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),A=[N],D=["src"],F=t("a",{href:"javascript:;",class:"swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 rtl:rotate-180"},[t("path",{d:"M15 5L9 12L15 19",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),T=t("a",{href:"javascript:;",class:"swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 ltr:rotate-180"},[t("path",{d:"M15 5L9 12L15 19",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),Z=t("pre",null,`<!-- basic -->
<swiper
  :modules="[Navigation, Pagination]"
  :navigation="{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }"
  :pagination="{ clickable: true }"
  class="max-w-3xl mx-auto mb-5"
  id="slider1"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full max-h-80 object-cover" alt="" />
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex1
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex1
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),q={class:"panel"},G={class:"flex items-center justify-between mb-5"},H=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Autopaly",-1),J=c('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),K=[J],O=["src"],Q=t("div",{class:"absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12"},[t("div",{class:"sm:text-3xl text-base font-bold"},"This is blog Image"),t("div",{class:"sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium"}," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard. "),t("button",{type:"button",class:"mt-4 btn btn-primary"},"Learn more")],-1),R=t("a",{href:"javascript:;",class:"swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 rtl:rotate-180"},[t("path",{d:"M15 5L9 12L15 19",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),U=t("a",{href:"javascript:;",class:"swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 ltr:rotate-180"},[t("path",{d:"M15 5L9 12L15 19",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),W=t("pre",null,`<!-- autopaly -->
<swiper
  :modules="[Navigation, Autoplay]"
  :navigation="{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }"
  :autoplay="{ delay: 2000 }"
  class="max-w-3xl mx-auto mb-5"
  id="slider2"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full max-h-80 object-cover" alt="" />
      <div class="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
        <div class="sm:text-3xl text-base font-bold">This is blog Image</div>
        <div class="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
        </div>
        <button type="button" class="mt-4 btn btn-primary">Learn more</button>
      </div>
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex2
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex2
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),X={class:"panel"},Y={class:"flex items-center justify-between mb-5"},tt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical",-1),et=c('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),rt=[et],st=["src"],it=t("div",{class:"absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center"},[t("div",{class:"sm:text-xl text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1),ot=t("pre",null,`<!-- vertical -->
<swiper :modules="[Pagination, Autoplay]" :direction="'vertical'" :pagination="{ clickable: true }" :autoplay="{ delay: 2000 }" class="max-w-3xl mx-auto mb-5" id="slider3">
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
      <div class="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
        <div class="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
      </div>
    </swiper-slide>
  </template>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),at={class:"panel"},lt={class:"flex items-center justify-between mb-5"},nt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Loop",-1),pt=c('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),dt=[pt],ct=t("img",{src:"/assets/images/carousel1.jpeg",class:"w-full",alt:""},null,-1),mt=t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 1"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1),ut=t("img",{src:"/assets/images/carousel2.jpeg",class:"w-full",alt:""},null,-1),ht=t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 2"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1),wt=t("img",{src:"/assets/images/carousel3.jpeg",class:"w-full",alt:""},null,-1),gt=t("div",{class:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11"},[t("div",{class:"text-3xl font-bold"},"Slide 3"),t("div",{class:"mb-4 sm:text-base font-medium"},"Lorem Ipsum is simply dummy text of the printing.")],-1),vt=t("a",{href:"javascript:;",class:"swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 rtl:rotate-180"},[t("path",{d:"M15 5L9 12L15 19",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),xt=t("a",{href:"javascript:;",class:"swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 ltr:rotate-180"},[t("path",{d:"M15 5L9 12L15 19",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),ft=t("pre",null,`<!-- loop -->
<swiper
  :modules="[Navigation, Pagination]"
  slidesPerView="auto"
  :spaceBetween="30"
  :loop="true"
  :navigation="{ nextEl: '.swiper-button-next-ex4', prevEl: '.swiper-button-prev-ex4' }"
  :pagination="{ clickable: true, type: 'fraction' }"
  class="max-w-3xl mx-auto mb-5"
  id="slider4"
>
  <swiper-slide>
    <img src="/assets/images/carousel1.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 1</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <img src="/assets/images/carousel2.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 2</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <swiper-slide>
    <img src="/assets/images/carousel3.jpeg" class="w-full" alt="" />
    <div class="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
      <div class="text-3xl font-bold">Slide 3</div>
      <div class="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
    </div>
  </swiper-slide>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex4
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex4
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-1/2
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),bt={class:"panel lg:col-span-2"},yt={class:"flex items-center justify-between mb-5"},kt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Multiple Slides",-1),_t=c('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Ct=[_t],jt=["src"],Lt=["src"],zt=t("a",{href:"javascript:;",class:"swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 rtl:rotate-180"},[t("path",{d:"M15 5L9 12L15 19",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),Bt=t("a",{href:"javascript:;",class:"swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2"},[t("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 ltr:rotate-180"},[t("path",{d:"M15 5L9 12L15 19",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})])],-1),Mt=t("pre",null,`<!-- multiple -->
<swiper
  :modules="[Navigation, Pagination]"
  :navigation="{ nextEl: '.swiper-button-next-ex5', prevEl: '.swiper-button-prev-ex5' }"
  :pagination="{ clickable: true }"
  :breakpoints="{ 1024: { slidesPerView: 3, spaceBetween: 30 }, 768: { slidesPerView: 2, spaceBetween: 40 }, 320: { slidesPerView: 1, spaceBetween: 20 } }"
  id="slider5"
>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
    </swiper-slide>
  </template>
  <template v-for="(item, i) in items" :key="i">
    <swiper-slide>
      <img :src="\`/assets/images/\${item}\`" class="w-full" alt="" />
    </swiper-slide>
  </template>
  <a
    href="javascript:;"
    class="
      swiper-button-prev-ex5
      grid
      place-content-center
      ltr:left-2
      rtl:right-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-[44%]
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
  <a
    href="javascript:;"
    class="
      swiper-button-next-ex5
      grid
      place-content-center
      ltr:right-2
      rtl:left-2
      p-1
      transition
      text-primary
      hover:text-white
      border border-primary
      hover:border-primary hover:bg-primary
      rounded-full
      absolute
      z-[999]
      top-[44%]
      -translate-y-1/2
    "
  >
    <svg> ... </svg>
  </a>
</swiper>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const items = ref(['carousel1.jpeg', 'carousel2.jpeg', 'carousel3.jpeg']);
<\/script>
`,-1),It=j({__name:"carousel",setup(St){const n=z();B({title:"Carousel"});const{codeArr:m,toggleCode:u}=C(),h=L(["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"]);return(Pt,a)=>(r(),d("div",null,[M,t("div",S,[P,t("div",E,[t("div",$,[t("div",V,[I,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:a[0]||(a[0]=i=>e(u)("code1"))},A)]),(r(),o(e(g),{modules:[e(b),e(y)],navigation:{nextEl:".swiper-button-next-ex1",prevEl:".swiper-button-prev-ex1"},pagination:{clickable:!0},class:"max-w-3xl mx-auto mb-5",id:"slider1",dir:e(n).rtlClass,key:e(n).rtlClass==="rtl"?"true":"false"},{default:s(()=>[(r(!0),d(x,null,f(h.value,(i,l)=>(r(),o(e(p),{key:l},{default:s(()=>[t("img",{src:`/assets/images/${i}`,class:"w-full max-h-80 object-cover",alt:""},null,8,D)]),_:2},1024))),128)),F,T]),_:1},8,["modules","navigation","dir"])),e(m).includes("code1")?(r(),o(w,{key:0},{default:s(()=>[Z]),_:1})):v("",!0)]),t("div",q,[t("div",G,[H,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:a[1]||(a[1]=i=>e(u)("code2"))},K)]),(r(),o(e(g),{modules:[e(b),e(_)],navigation:{nextEl:".swiper-button-next-ex2",prevEl:".swiper-button-prev-ex2"},autoplay:{delay:2e3},class:"max-w-3xl mx-auto mb-5",id:"slider2",dir:e(n).rtlClass,key:e(n).rtlClass==="rtl"?"true":"false"},{default:s(()=>[(r(!0),d(x,null,f(h.value,(i,l)=>(r(),o(e(p),{key:l},{default:s(()=>[t("img",{src:`/assets/images/${i}`,class:"w-full max-h-80 object-cover",alt:""},null,8,O),Q]),_:2},1024))),128)),R,U]),_:1},8,["modules","navigation","dir"])),e(m).includes("code2")?(r(),o(w,{key:0},{default:s(()=>[W]),_:1})):v("",!0)]),t("div",X,[t("div",Y,[tt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:a[2]||(a[2]=i=>e(u)("code3"))},rt)]),k(e(g),{modules:[e(y),e(_)],direction:"vertical",pagination:{clickable:!0},autoplay:{delay:2e3},class:"max-w-3xl mx-auto mb-5",id:"slider3"},{default:s(()=>[(r(!0),d(x,null,f(h.value,(i,l)=>(r(),o(e(p),{key:l},{default:s(()=>[t("img",{src:`/assets/images/${i}`,class:"w-full",alt:""},null,8,st),it]),_:2},1024))),128))]),_:1},8,["modules"]),e(m).includes("code3")?(r(),o(w,{key:0},{default:s(()=>[ot]),_:1})):v("",!0)]),t("div",at,[t("div",lt,[nt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:a[3]||(a[3]=i=>e(u)("code4"))},dt)]),(r(),o(e(g),{modules:[e(b),e(y)],slidesPerView:"auto",spaceBetween:30,loop:!0,navigation:{nextEl:".swiper-button-next-ex4",prevEl:".swiper-button-prev-ex4"},pagination:{clickable:!0,type:"fraction"},class:"max-w-3xl mx-auto mb-5",id:"slider4",dir:e(n).rtlClass,key:e(n).rtlClass==="rtl"?"true":"false"},{default:s(()=>[k(e(p),null,{default:s(()=>[ct,mt]),_:1}),k(e(p),null,{default:s(()=>[ut,ht]),_:1}),k(e(p),null,{default:s(()=>[wt,gt]),_:1}),vt,xt]),_:1},8,["modules","navigation","dir"])),e(m).includes("code4")?(r(),o(w,{key:0},{default:s(()=>[ft]),_:1})):v("",!0)]),t("div",bt,[t("div",yt,[kt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:a[4]||(a[4]=i=>e(u)("code5"))},Ct)]),(r(),o(e(g),{modules:[e(b),e(y)],navigation:{nextEl:".swiper-button-next-ex5",prevEl:".swiper-button-prev-ex5"},pagination:{clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:40},320:{slidesPerView:1,spaceBetween:20}},id:"slider5",dir:e(n).rtlClass,key:e(n).rtlClass==="rtl"?"true":"false"},{default:s(()=>[(r(!0),d(x,null,f(h.value,(i,l)=>(r(),o(e(p),{key:l},{default:s(()=>[t("img",{src:`/assets/images/${i}`,class:"w-full",alt:""},null,8,jt)]),_:2},1024))),128)),(r(!0),d(x,null,f(h.value,(i,l)=>(r(),o(e(p),{key:l},{default:s(()=>[t("img",{src:`/assets/images/${i}`,class:"w-full",alt:""},null,8,Lt)]),_:2},1024))),128)),zt,Bt]),_:1},8,["modules","navigation","dir"])),e(m).includes("code5")?(r(),o(w,{key:0},{default:s(()=>[Mt]),_:1})):v("",!0)])])])]))}});export{It as default};
