import{_ as S}from"./nuxt-link.9e5b3349.js";import{_ as k,a as A}from"./BoxArtors.73836996.js";import{a as x,b as L,r as w,e as y,w as R,f as T,S as p,s as j,h as B,i as _,j as E,k as e,l as U,o as C,p as z,m as I,q as N}from"./entry.22e9dcea.js";import{s as V,u as o,m as v,a as g,o as $,_ as O}from"./slider.f92411d8.js";const H=""+globalThis.__publicAssetsURL("images/emilia-clarke.jpg"),M=""+globalThis.__publicAssetsURL("images/img-1000/emilia-clarke(1000).jpg"),W=""+globalThis.__publicAssetsURL("emilia-clarke-movies/Above-Suspicion.jpg"),D=""+globalThis.__publicAssetsURL("emilia-clarke-movies/Voice-from-the-stone.jpg"),F=""+globalThis.__publicAssetsURL("emilia-clarke-movies/Last-Christmas.jpg"),P=""+globalThis.__publicAssetsURL("emilia-clarke-movies/Me-Before-You.jpg"),Y=""+globalThis.__publicAssetsURL("emilia-clarke-movies/solo.jpg"),G=""+globalThis.__publicAssetsURL("emilia-clarke-movies/Spike-Island.jpg"),J=""+globalThis.__publicAssetsURL("emilia-clarke-movies/Dom-Hemingway.jpg");const m=s=>(z("data-v-ee67de1e"),s=s(),I(),s),K=H,h=A+"#arrow",Q={class:"emilia-smooth-wrapper actors-wrap"},X=m(()=>e("picture",{class:"actors-container"},[e("source",{media:"screen and (min-width: 992px)",srcset:K}),e("img",{src:M,class:"actors-img",alt:""})],-1)),Z=m(()=>e("img",{src:O,alt:""},null,-1)),ee={class:"emilia-smooth-content actors-section"},se=U('<div class="emilia-blog actors-blog" data-v-ee67de1e><h1 class="actors-h1" data-v-ee67de1e>Emilia<br data-v-ee67de1e>Clarke</h1><div class="actors-wrapper" data-v-ee67de1e><div class="actors-text" data-v-ee67de1e>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias excepturi iusto perspiciatis sunt ullam! Beatae dolore est iste numquam optio perspiciatis porro sequi unde velit. Ad adipisci animi asperiores cumque distinctio eaque earum explicabo illum impedit ipsam ipsum iure labore minima nam necessitatibus nesciunt officiis porro provident quae quas quibusdam, quisquam reiciendis repellat repellendus sapiente sed tenetur veritatis vero vitae voluptas! Ab amet animi aspernatur commodi consectetur corporis, cupiditate dolores eos est excepturi facere itaque labore magnam maiores minima molestiae molestias mollitia natus nemo nihil non nulla officiis pariatur perspiciatis, porro quasi quibusdam quo recusandae rerum totam, unde velit! </div><div class="actors-text" data-v-ee67de1e>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias excepturi iusto perspiciatis sunt ullam! Beatae dolore est iste numquam optio perspiciatis porro sequi unde velit. Ad adipisci animi asperiores cumque distinctio eaque earum explicabo illum impedit ipsam ipsum iure labore minima nam necessitatibus nesciunt officiis porro provident quae quas quibusdam, quisquam reiciendis repellat repellendus sapiente sed tenetur veritatis vero vitae voluptas! Ab amet animi aspernatur commodi consectetur corporis, cupiditate dolores eos est excepturi facere itaque labore magnam maiores minima molestiae molestias mollitia natus nemo nihil non nulla officiis pariatur perspiciatis, porro quasi quibusdam quo recusandae rerum totam, unde velit! </div></div></div>',1),ie=m(()=>e("div",{class:"emilia-slider actors-slider"},[e("h2",{class:"slider-h2"},"Filmography"),e("button",{class:"button-slider sb-left"},[e("svg",null,[e("use",{"xlink:href":h})])]),e("button",{class:"button-slider sb-right"},[e("svg",null,[e("use",{"xlink:href":h})])]),e("div",{class:"slider-wrap"},[e("div",{class:"slider-item actors"},[e("img",{src:W,alt:"",class:"slider-img"})]),e("div",{class:"slider-item"},[e("img",{src:D,alt:"",class:"slider-img"})]),e("div",{class:"slider-item"},[e("img",{src:F,alt:"",class:"slider-img"})]),e("div",{class:"slider-item"},[e("img",{src:P,alt:"",class:"slider-img"})]),e("div",{class:"slider-item"},[e("img",{src:Y,alt:"",class:"slider-img"})]),e("div",{class:"slider-item"},[e("img",{src:G,alt:"",class:"slider-img"})]),e("div",{class:"slider-item"},[e("img",{src:J,alt:"",class:"slider-img last"})]),e("div",{class:"slider-spacer"})])],-1)),te={__name:"emilia-clarke",setup(s){L({title:"Emilia Clarke"});let r=w(!0);const b=()=>{r.value=!r.value};return y(()=>{R(r,()=>u()),T.registerPlugin(p);const n=document.querySelector(".emilia-smooth-wrapper"),d=document.querySelector(".emilia-smooth-content"),l=document.querySelector(".emilia-blog"),i=document.querySelector(".emilia-slider");function u(){let f=[...document.querySelectorAll(".slider-item")];V(f);const t=[...document.querySelectorAll(".button-slider")];new ResizeObserver(a=>{for(let q of a)q.contentBoxSize[0].inlineSize>=768?t.forEach(c=>c.classList.add("active-button-slider")):t.forEach(c=>c.classList.remove("active-button-slider"))}).observe(i),t[0].addEventListener("click",()=>{o.check&&v()}),t[1].addEventListener("click",()=>{o.check&&g()}),p.isTouch===1&&$(i),document.addEventListener("keydown",a=>{o.check&&a.code==="ArrowLeft"&&v(),o.check&&a.code==="ArrowRight"&&g()})}N.path===null&&u(),j(n,d,l)}),(n,d)=>{const l=S,i=k;return C(),B("div",Q,[X,_(l,{to:"/",class:"actors-link"},{default:E(()=>[Z]),_:1}),e("div",ee,[se,ie,_(i,{onEventSlider:b})])])}}},ne=x(te,[["__scopeId","data-v-ee67de1e"]]);export{ne as default};