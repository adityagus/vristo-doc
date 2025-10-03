import{a as W,r,o as X,e as i,f as J,g as e,u as s,h as f,aB as B,D as p,w as u,y as m,t as l,s as b,R as S,aC as P,B as ee,F as te,x as oe,z as a,i as _}from"./vendor.14f711c1.js";import{c as se,_ as h}from"./codePreview.07904b8d.js";import{u as re,a as le}from"./main.e1d3eec4.js";const ie=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Forms")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Date and Range Picker")])],-1),ae={class:"pt-5 space-y-8"},ne=a('<div class="bg-[#009688]/[.26] text-[#009688] py-1 px-2 rounded inline-block text-base">Date and Time Picker</div><div class="panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"><div class="ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5"><path d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div><span class="ltr:mr-3 rtl:ml-3">Documentation: </span><a href="https://www.npmjs.com/package/vue-flatpickr-component" target="_blank" class="block hover:underline">https://www.npmjs.com/package/vue-flatpickr-component</a></div>',2),de={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},ce={class:"panel"},pe={class:"flex items-center justify-between mb-5"},ue=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic",-1),me=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),he=[me],ve={class:"mb-5"},fe=e("pre",null,`<!-- basic -->
<flat-pickr v-model="date1" class="form-input" :config="basic"></flat-pickr>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useAppStore } from '@/stores/index';

  //flatpickr
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  const store = useAppStore();

  const date1 = ref('2022-07-05');
  const basic: any = ref({
    dateFormat: 'Y-m-d',
    position: store.rtlClass === 'rtl' ? 'auto right' : 'auto left',
  });
<\/script>
`,-1),ke={class:"panel"},ge={class:"flex items-center justify-between mb-5"},xe=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Date Time",-1),we=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),be=[we],_e=e("div",{class:"mb-2.5"},[_("Use "),e("code",{class:"text-danger"},"{enableTime: true, dateFormat: 'Y-m-d H:i'}"),_(" option to enable time support")],-1),ye={class:"mb-5"},Ce=e("pre",null,`<!-- date & time -->
<flat-pickr v-model="date2" class="form-input" :config="dateTime"></flat-pickr>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useAppStore } from '@/stores/index';

  //flatpickr
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  const store = useAppStore();

  const date2 = ref('2022-07-05 12:00');
  const dateTime: any = ref({
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    position: store.rtlClass === 'rtl' ? 'auto right' : 'auto left',
  });
<\/script>
`,-1),Me={class:"panel"},Se={class:"flex items-center justify-between mb-5"},Le=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Range Calendar",-1),Ve=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Ue=[Ve],je=e("div",{class:"mb-2.5"},[_("Use "),e("code",{class:"text-danger"},"{mode: 'range'}"),_(" select the date with range.")],-1),Fe={class:"mb-5"},Be=e("pre",null,`<!-- range calendar -->
<flat-pickr v-model="date3" class="form-input" :config="rangeCalendar"></flat-pickr>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useAppStore } from '@/stores/index';

  //flatpickr
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  const store = useAppStore();

  const date3 = ref('2022-07-05 to 2022-07-10');
  const rangeCalendar: any = ref({
    dateFormat: 'Y-m-d',
    mode: 'range',
    position: store.rtlClass === 'rtl' ? 'auto right' : 'auto left',
  });
<\/script>
`,-1),Pe={class:"panel"},Te={class:"flex items-center justify-between mb-5"},De=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Preloading Time",-1),Re=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),$e=[Re],Ae=e("div",{class:"mb-2.5"},[_(" Use "),e("code",{class:"text-danger"},"{noCalendar: true, enableTime: true, dateFormat: 'H:i'}"),_(" with Date Time options to disable calendar and show time picker only. ")],-1),Ne={class:"mb-5"},He=e("pre",null,`<!-- preloading time -->
<flat-pickr v-model="date4" class="form-input" :config="preloadingTime"></flat-pickr>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useAppStore } from '@/stores/index';

  //flatpickr
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  const store = useAppStore();

  const date4 = ref('13:45');
  const preloadingTime: any = ref({
    noCalendar: true,
    enableTime: true,
    dateFormat: 'H:i',
    position: store.rtlClass === 'rtl' ? 'auto right' : 'auto left',
  });
<\/script>
`,-1),Ye=e("div",{class:"bg-[#009688]/[.26] text-[#009688] py-1 px-2 rounded inline-block text-base"},"Javascript Range Slider",-1),Ie={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},Je={class:"panel"},Oe={class:"flex items-center justify-between mb-5"},Ze=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Postion : Top-Left",-1),ze=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Ee=[ze],qe={class:"mb-5 pt-5"},Ge={class:"font-bold"},Ke={class:"inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark"},Qe=e("span",null,"%",-1),We={class:"panel"},Xe={class:"flex items-center justify-between mb-5"},et=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Postion : Top-right",-1),tt=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),ot=[tt],st={class:"mb-5"},rt={class:"font-bold ltr:text-right rtl:text-left"},lt={class:"inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark"},it=e("span",null,"%",-1),at={class:"panel"},nt={class:"flex items-center justify-between mb-5"},dt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Postion : Bottom-Left",-1),ct=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),pt=[ct],ut={class:"mb-5"},mt={class:"font-bold"},ht={class:"inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark"},vt=e("span",null,"%",-1),ft={class:"panel"},kt={class:"flex items-center justify-between mb-5"},gt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Postion : Bottom-right",-1),xt=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),wt=[xt],bt={class:"mb-5"},_t={class:"font-bold ltr:text-right rtl:text-left"},yt={class:"inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark"},Ct=e("span",null,"%",-1),Mt=a('<div class="bg-[#009688]/[.26] text-[#009688] py-1 px-2 rounded inline-block text-base">noUI Slider</div><div class="panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"><div class="ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5"><path d="M19.0001 9.7041V9C19.0001 5.13401 15.8661 2 12.0001 2C8.13407 2 5.00006 5.13401 5.00006 9V9.7041C5.00006 10.5491 4.74995 11.3752 4.28123 12.0783L3.13263 13.8012C2.08349 15.3749 2.88442 17.5139 4.70913 18.0116C9.48258 19.3134 14.5175 19.3134 19.291 18.0116C21.1157 17.5139 21.9166 15.3749 20.8675 13.8012L19.7189 12.0783C19.2502 11.3752 19.0001 10.5491 19.0001 9.7041Z" stroke="currentColor" stroke-width="1.5"></path><path opacity="0.5" d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C14.0775 22 15.845 20.7478 16.5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></div><span class="ltr:mr-3 rtl:ml-3">Documentation: </span><a href="https://www.npmjs.com/package/vue-simple-range-slider" target="_blank" class="block hover:underline">https://www.npmjs.com/package/vue-simple-range-slider</a></div>',2),St={class:"grid grid-cols-1 lg:grid-cols-2 gap-6 range-slider"},Lt={class:"panel"},Vt={class:"flex items-center justify-between mb-5"},Ut=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Using HTML5 input elements",-1),jt=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Ft=[jt],Bt={class:"mb-5 pt-5"},Pt={class:"grid grid-cols-1 lg:grid-cols-2 gap-8 my-4"},Tt={class:"mb-3"},Dt=e("pre",null,`<!-- using HTML5 input elements -->
<VueSimpleRangeSlider
  style="width: 100%"
  :min="0"
  :max="100"
  v-model="nouiSlider1"
  :update="slider1Update(nouiSlider1)"
  :bar-color="store.theme === 'dark' || store.isDarkMode ? '#1b2e4b' : '#ffffff'"
  active-bar-color="#4361ee"
></VueSimpleRangeSlider>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-4">
  <div class="mb-3">
    <select v-model="nouiMin1" class="form-select w-full" id="select" @change="selectUpdateValue()">
      <template v-for="(i, index) in 61" :key="i">
        <option>{{ index }}</option>
      </template>
    </select>
  </div>
  <div>
    <input type="number" v-model="nouiMax1" class="form-input" :min="-20" :max="100" step="1" @blur="selectUpdateValue()" />
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  // range slider
  import VueSimpleRangeSlider from 'vue-simple-range-slider';
  import 'vue-simple-range-slider/css';

  const nouiMin1 = ref(20);
  const nouiMax1 = ref(40);
  const nouiSlider1: any = ref([nouiMin1.value, nouiMax1.value]);

  const slider1Update = (range) => {
    if (range) {
      nouiMin1.value = range[0];
      nouiMax1.value = JSON.parse(JSON.stringify(range[1]));
    }
  };
  const selectUpdateValue = () => {
    nouiSlider1.value = [nouiMin1.value, nouiMax1.value];
  };
<\/script>
`,-1),Rt={class:"panel"},$t={class:"flex items-center justify-between mb-5"},At=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Non linear slider",-1),Nt=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Ht=[Nt],Yt={class:"mb-5 pt-5"},It={class:"grid grid-cols-1 lg:grid-cols-2 gap-8 my-5 font-bold"},Jt={class:"text-primary mr-2",id:"nouiMin2"},Ot={class:"border border-white-light dark:border-dark py-1 px-2 text-dark dark:text-white-dark rounded",id:"nouiMin2Perc"},Zt={class:"ltr:text-right rtl:text-left"},zt={class:"text-primary mr-2",id:"nouiMax2"},Et={class:"border border-white-light dark:border-dark py-1 px-2 text-dark dark:text-white-dark rounded",id:"nouiMax2Perc"},qt={class:"panel lg:col-span-2"},Gt={class:"flex items-center justify-between mb-5"},Kt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Locking sliders together",-1),Qt=a('<span class="flex items-center"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ltr:mr-2 rtl:ml-2"><path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M13.9868 5L10.0132 19.8297" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path><path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg> Code </span>',1),Wt=[Qt],Xt={class:"mb-5 pt-5"},eo=e("div",{class:"text-primary font-bold mb-10",id:"locking_slider1_value"},null,-1),to=e("div",{class:"text-primary font-bold mb-10",id:"locking_slider2_value"},null,-1),oo={class:"ltr:text-right rtl:text-left"},ao=W({__name:"date-picker",setup(so){re({title:"Date & Range Picker"});const n=le(),{codeArr:d,toggleCode:c}=se(),$=r("2022-07-05"),O=r({dateFormat:"Y-m-d",position:n.rtlClass==="rtl"?"auto right":"auto left"}),A=r("2022-07-05 12:00"),Z=r({enableTime:!0,dateFormat:"Y-m-d H:i",position:n.rtlClass==="rtl"?"auto right":"auto left"}),N=r("2022-07-05 to 2022-07-10"),z=r({dateFormat:"Y-m-d",mode:"range",position:n.rtlClass==="rtl"?"auto right":"auto left"}),H=r("13:45"),E=r({noCalendar:!0,enableTime:!0,dateFormat:"H:i",position:n.rtlClass==="rtl"?"auto right":"auto left"}),L=r(0),V=r(0),U=r(0),j=r(0),y=r(20),C=r(40),F=r([y.value,C.value]),k=r([500,4e3]),T=r(0),D=r(0);X(()=>{I()});const q=v=>{v&&(y.value=v[0],C.value=JSON.parse(JSON.stringify(v[1])))},G=v=>{v&&(T.value=parseFloat((v[0]*.01).toFixed(2)),D.value=parseFloat((v[1]*.01).toFixed(2)))},Y=()=>{F.value=[y.value,C.value]},g=r(5),x=r(10),w=r(!1),M=r(0),R=r(0),I=()=>{w.value=!w.value,w.value&&(M.value=g.value,R.value=x.value)},K=()=>{if(!w.value)return!1;M.value>R.value?x.value=g.value-M.value:M.value<R.value?x.value=M.value+g.value:x.value=g.value};return(v,t)=>(i(),J("div",null,[ie,e("div",ae,[ne,e("div",de,[e("div",ce,[e("div",pe,[ue,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=o=>s(c)("code1"))},he)]),e("div",ve,[f(s(B),{modelValue:$.value,"onUpdate:modelValue":t[1]||(t[1]=o=>$.value=o),class:"form-input",config:O.value},null,8,["modelValue","config"])]),s(d).includes("code1")?(i(),p(h,{key:0},{default:u(()=>[fe]),_:1})):m("",!0)]),e("div",ke,[e("div",ge,[xe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=o=>s(c)("code2"))},be)]),_e,e("div",ye,[f(s(B),{modelValue:A.value,"onUpdate:modelValue":t[3]||(t[3]=o=>A.value=o),class:"form-input",config:Z.value},null,8,["modelValue","config"])]),s(d).includes("code2")?(i(),p(h,{key:0},{default:u(()=>[Ce]),_:1})):m("",!0)]),e("div",Me,[e("div",Se,[Le,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=o=>s(c)("code3"))},Ue)]),je,e("div",Fe,[f(s(B),{modelValue:N.value,"onUpdate:modelValue":t[5]||(t[5]=o=>N.value=o),class:"form-input",config:z.value},null,8,["modelValue","config"])]),s(d).includes("code3")?(i(),p(h,{key:0},{default:u(()=>[Be]),_:1})):m("",!0)]),e("div",Pe,[e("div",Te,[De,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[6]||(t[6]=o=>s(c)("code4"))},$e)]),Ae,e("div",Ne,[f(s(B),{modelValue:H.value,"onUpdate:modelValue":t[7]||(t[7]=o=>H.value=o),class:"form-input",config:E.value},null,8,["modelValue","config"])]),s(d).includes("code4")?(i(),p(h,{key:0},{default:u(()=>[He]),_:1})):m("",!0)])]),Ye,e("div",Ie,[e("div",Je,[e("div",Oe,[Ze,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[8]||(t[8]=o=>s(c)("code5"))},Ee)]),e("div",qe,[e("div",Ge,[e("span",Ke,l(L.value),1),Qe]),b(e("input",{type:"range",class:"w-full py-2.5",min:"0",max:"100","onUpdate:modelValue":t[9]||(t[9]=o=>L.value=o)},null,512),[[S,L.value]])]),s(d).includes("code5")?(i(),p(h,{key:0},{default:u(()=>[e("pre",null,`<!-- top left -->
<div>
  <div class="font-bold">
    <span class="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">`+l(L.value)+`</span>
    <span>%</span>
  </div>
  <input type="range" class="w-full py-2.5" min="0" max="100" v-model="slider1" />
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  const slider1 = ref(0);
<\/script>
`,1)]),_:1})):m("",!0)]),e("div",We,[e("div",Xe,[et,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[10]||(t[10]=o=>s(c)("code6"))},ot)]),e("div",st,[e("div",rt,[e("span",lt,l(V.value),1),it]),b(e("input",{type:"range",class:"w-full py-2.5",min:"0",max:"100","onUpdate:modelValue":t[11]||(t[11]=o=>V.value=o)},null,512),[[S,V.value]])]),s(d).includes("code6")?(i(),p(h,{key:0},{default:u(()=>[e("pre",null,`<!-- top right -->
<div>
  <div class="font-bold ltr:text-right rtl:text-left">
    <span class="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">`+l(V.value)+`</span> <span>%</span>
  </div>
  <input type="range" class="w-full py-2.5" min="0" max="100" v-model="slider2" />
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  const slider2 = ref(0);
<\/script>
`,1)]),_:1})):m("",!0)]),e("div",at,[e("div",nt,[dt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[12]||(t[12]=o=>s(c)("code7"))},pt)]),e("div",ut,[b(e("input",{type:"range",class:"w-full py-2.5",min:"0",max:"100","onUpdate:modelValue":t[13]||(t[13]=o=>U.value=o)},null,512),[[S,U.value]]),e("div",mt,[e("span",ht,l(U.value),1),vt])]),s(d).includes("code7")?(i(),p(h,{key:0},{default:u(()=>[e("pre",null,`<!-- bottom left -->
<div>
  <input type="range" class="w-full py-2.5" min="0" max="100" v-model="slider3" />
  <div class="font-bold">
    <span class="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">`+l(U.value)+`</span> <span>%</span>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  const slider3 = ref(0);
<\/script>
`,1)]),_:1})):m("",!0)]),e("div",ft,[e("div",kt,[gt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[14]||(t[14]=o=>s(c)("code8"))},wt)]),e("div",bt,[b(e("input",{type:"range",class:"w-full py-2.5",min:"0",max:"100","onUpdate:modelValue":t[15]||(t[15]=o=>j.value=o)},null,512),[[S,j.value]]),e("div",_t,[e("span",yt,l(j.value),1),Ct])]),s(d).includes("code8")?(i(),p(h,{key:0},{default:u(()=>[e("pre",null,`<!-- bottom right -->
<div>
  <input type="range" class="w-full py-2.5" min="0" max="100" v-model="slider4" />
  <div class="font-bold ltr:text-right rtl:text-left">
    <span class="inline-block py-1 px-2 rounded text-primary border border-white-light dark:border-dark">`+l(j.value)+`</span> <span>%</span>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  const slider4 = ref(0);
<\/script>
`,1)]),_:1})):m("",!0)])]),Mt,e("div",St,[e("div",Lt,[e("div",Vt,[Ut,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[16]||(t[16]=o=>s(c)("code10"))},Ft)]),e("div",Bt,[f(s(P),{style:{width:"100%"},min:0,max:100,modelValue:F.value,"onUpdate:modelValue":t[17]||(t[17]=o=>F.value=o),update:q(F.value),"bar-color":s(n).theme==="dark"||s(n).isDarkMode?"#1b2e4b":"#ffffff","active-bar-color":"#4361ee"},null,8,["modelValue","update","bar-color"]),e("div",Pt,[e("div",Tt,[b(e("select",{"onUpdate:modelValue":t[18]||(t[18]=o=>y.value=o),class:"form-select w-full",id:"select",onChange:t[19]||(t[19]=o=>Y())},[(i(),J(te,null,oe(100,(o,Q)=>e("option",{key:o},l(Q),1)),64))],544),[[ee,y.value]])]),e("div",null,[b(e("input",{type:"number","onUpdate:modelValue":t[20]||(t[20]=o=>C.value=o),class:"form-input",min:-20,max:100,step:"1",onBlur:t[21]||(t[21]=o=>Y())},null,544),[[S,C.value]])])])]),s(d).includes("code10")?(i(),p(h,{key:0},{default:u(()=>[Dt]),_:1})):m("",!0)]),e("div",Rt,[e("div",$t,[At,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[22]||(t[22]=o=>s(c)("code11"))},Ht)]),e("div",Yt,[f(s(P),{style:{width:"100%"},min:0,max:1e4,modelValue:k.value,"onUpdate:modelValue":t[23]||(t[23]=o=>k.value=o),"bar-color":s(n).theme==="dark"||s(n).isDarkMode?"#1b2e4b":"#ffffff","active-bar-color":"#4361ee",update:G(k.value)},null,8,["modelValue","bar-color","update"]),e("div",It,[e("div",null,[e("span",Jt,l(parseInt(k.value[0]).toFixed(2)),1),e("span",Ot,l(T.value)+"%",1)]),e("div",Zt,[e("span",zt,l(parseInt(k.value[1]).toFixed(2)),1),e("span",Et,l(D.value)+"%",1)])])]),s(d).includes("code11")?(i(),p(h,{key:0},{default:u(()=>[e("pre",null,`<!-- non linear slider -->
<VueSimpleRangeSlider
  style="width: 100%"
  :min="0"
  :max="10000"
  v-model="nouiSlider2"
  :bar-color="store.theme === 'dark' || store.isDarkMode ? '#1b2e4b' : '#ffffff'"
  active-bar-color="#4361ee"
  :update="slider2Update(nouiSlider2)"
>
</VueSimpleRangeSlider>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 my-5 font-bold">
  <div>
    <span class="text-primary mr-2" id="nouiMin2">`+l(parseInt(k.value[0]).toFixed(2))+`</span
    ><span class="border border-white-light dark:border-dark py-1 px-2 text-dark dark:text-white-dark rounded" id="nouiMin2Perc">`+l(T.value)+`%</span>
  </div>
  <div class="ltr:text-right rtl:text-left">
    <span class="text-primary mr-2" id="nouiMax2">`+l(parseInt(k.value[1]).toFixed(2))+`</span
    ><span class="border border-white-light dark:border-dark py-1 px-2 text-dark dark:text-white-dark rounded" id="nouiMax2Perc">`+l(D.value)+`%</span>
  </div>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  // range slider
  import VueSimpleRangeSlider from 'vue-simple-range-slider';
  import 'vue-simple-range-slider/css';

  const nouiSlider2: any = ref([500, 4000]);
  const nouiMin2Perc = ref(0);
  const nouiMax2Perc = ref(0);

  const slider2Update = (range) => {
    if (range) {
      nouiMin2Perc.value = parseFloat((range[0] * 0.01).toFixed(2));
      nouiMax2Perc.value = parseFloat((range[1] * 0.01).toFixed(2));
    }
  };
<\/script>
`,1)]),_:1})):m("",!0)]),e("div",qt,[e("div",Gt,[Kt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[24]||(t[24]=o=>s(c)("code12"))},Wt)]),e("div",Xt,[f(s(P),{style:{width:"100%"},min:0,max:100,modelValue:g.value,"onUpdate:modelValue":t[25]||(t[25]=o=>g.value=o),"bar-color":s(n).theme==="dark"||s(n).isDarkMode?"#1b2e4b":"#ffffff","active-bar-color":"#4361ee",update:K()},null,8,["modelValue","bar-color","update"]),eo,f(s(P),{style:{width:"100%"},min:0,modelValue:x.value,"onUpdate:modelValue":t[26]||(t[26]=o=>x.value=o),"bar-color":s(n).theme==="dark"||s(n).isDarkMode?"#1b2e4b":"#ffffff","active-bar-color":"#4361ee"},null,8,["modelValue","bar-color"]),to,e("div",oo,[e("button",{type:"button",class:"btn btn-primary",id:"lockbutton",onClick:I},l(w.value?"Unlock":"Lock"),1)])]),s(d).includes("code12")?(i(),p(h,{key:0},{default:u(()=>[e("pre",null,`<!-- locking sliders together -->
<VueSimpleRangeSlider
  style="width: 100%"
  :min="0"
  :max="100"
  v-model="nouiSlider3"
  :bar-color="store.theme === 'dark' || store.isDarkMode || store.isDarkMode ? '#1b2e4b' : '#ffffff'"
  active-bar-color="#4361ee"
  :update="setLockSlider1()"
>
</VueSimpleRangeSlider>
<div class="text-primary font-bold mb-10" id="locking_slider1_value"></div>
<VueSimpleRangeSlider style="width: 100%" :min="0" v-model="nouiSlider4" :bar-color="store.theme === 'dark' || store.isDarkMode ? '#1b2e4b' : '#ffffff'" active-bar-color="#4361ee"> </VueSimpleRangeSlider>
<div class="text-primary font-bold mb-10" id="locking_slider2_value"></div>
<div class="ltr:text-right rtl:text-left">
  <button type="button" class="btn btn-primary" id="lockbutton" @click="setLock">`+l(w.value?"Unlock":"Lock")+`</button>
</div>

<!-- script -->
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  // range slider
  import VueSimpleRangeSlider from 'vue-simple-range-slider';
  import 'vue-simple-range-slider/css';

  onMounted(() => {
    setLock();
  });

  const nouiSlider3: any = ref(5);
  const nouiSlider4: any = ref(10);
  const lockedState = ref(false);
  const lockingSlider1 = ref(0);
  const lockingSlider2 = ref(0);

  const setLock = () => {
    lockedState.value = !lockedState.value;
    if (lockedState.value) {
      lockingSlider1.value = nouiSlider3.value;
      lockingSlider2.value = nouiSlider4.value;
    }
  };

  const setLockSlider1 = () => {
    if (!lockedState.value) {
      return false;
    }

    if (lockingSlider1.value > lockingSlider2.value) {
      nouiSlider4.value = nouiSlider3.value - lockingSlider1.value;
    } else if (lockingSlider1.value < lockingSlider2.value) {
      nouiSlider4.value = lockingSlider1.value + nouiSlider3.value;
    } else {
      nouiSlider4.value = nouiSlider3.value;
    }
  };
<\/script>
`,1)]),_:1})):m("",!0)])])])]))}});export{ao as default};
