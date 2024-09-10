(function(){var e={5885:function(e){e.exports={apiKey:"AIzaSyDap-HKdYEixb8w4ZXZd8izJqSTmKthvIU",authDomain:"mailblox.firebaseapp.com",projectId:"mailblox",storageBucket:"mailblox.appspot.com",messagingSenderId:"12664572144",appId:"1:12664572144:web:e80b93bb73c3e7b9a2da35",measurementId:"G-7QZSQFT6KP"}},4767:function(e,s,t){"use strict";var i=t(3751),r=t(641),n=t(33),d=t.p+"img/mailblox-logo.10f937a6.svg",a=t.p+"img/mailblox-logo-text.ff3b8377.svg";const l={class:"min-h-screen bg-white"},o={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},u={class:"flex justify-between h-16"},c={class:"flex"},g=(0,r.Lk)("div",{class:"flex-shrink-0 flex items-center"},[(0,r.Lk)("img",{class:"block lg:hidden h-8 w-auto",src:d,alt:"Mailblox"}),(0,r.Lk)("img",{class:"hidden lg:block h-8 w-auto",src:a,alt:"Mailblox"})],-1),m={class:"flex -my-px ml-6 space-x-8"},p=["href","aria-current","onClick"],h=["href","aria-current","onClick"];function b(e,s,t,i,d,a){const b=(0,r.g2)("router-link"),f=(0,r.g2)("Disclosure"),y=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)("div",l,[(0,r.bF)(f,{as:"nav",class:"bg-white border-b border-gray-200"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",o,[(0,r.Lk)("div",u,[(0,r.Lk)("div",c,[g,(0,r.Lk)("div",m,[(0,r.bF)(b,{to:{name:"Map"},custom:""},{default:(0,r.k6)((({href:e,navigate:s,isActive:t})=>[(0,r.Lk)("a",{href:e,class:(0,n.C4)([t?"border-indigo-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"]),"aria-current":t?"page":void 0,onClick:s}," Karte ",10,p)])),_:1}),(0,r.bF)(b,{to:{name:"Addresses"},custom:""},{default:(0,r.k6)((({href:e,navigate:s,isActive:t})=>[(0,r.Lk)("a",{href:e,class:(0,n.C4)([t?"border-indigo-500 text-gray-900":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"]),"aria-current":t?"page":void 0,onClick:s}," Adressen ",10,h)])),_:1})])]),(0,r.Lk)("button",{class:"relative flex items-center justify-items-end",onClick:s[0]||(s[0]=(...e)=>a.updateData&&a.updateData(...e))},"Update")])])])),_:1}),(0,r.bF)(y,null,{default:(0,r.k6)((({Component:e})=>[((0,r.uX)(),(0,r.Wv)(r.PR,{include:"Map"},[((0,r.uX)(),(0,r.Wv)((0,r.$y)(e)))],1024))])),_:1})])}var f=t(1149),y={components:{Disclosure:f.EN},methods:{updateData(){localStorage.clear(),this.addressesStore.addressItems=[],this.addressesStore.addressesLoaded=!1,this.buildingsStore.buildingItems=[],this.buildingsStore.buildingsLoaded=!1,this.addressesStore.fetchAddresses(),this.buildingsStore.fetchBuildings(),setTimeout((()=>{location.href=location.href}),1e3)}}},v=t(6262);const x=(0,v.A)(y,[["render",b]]);var k=x,S=t(5220);function L(e,s,t,i,n,d){const a=(0,r.g2)("mapbox");return(0,r.uX)(),(0,r.Wv)(a)}const _=e=>((0,r.Qi)("data-v-3d4f7f42"),e=e(),(0,r.jt)(),e),w=_((()=>(0,r.Lk)("div",{id:"map"},null,-1)));function A(e,s,t,i,n,d){const a=(0,r.g2)("Modal");return(0,r.uX)(),(0,r.CE)(r.FK,null,[w,(0,r.bF)(a,{ref:"modal",onClose:d.onModalClose,onSave:d.updateFilter},null,8,["onClose","onSave"])],64)}t(4114);var I=t(842),C=t.n(I);const B={class:"flex items-end justify-center min-h-screen pt-2 px-2 pb-2 text-center"},F={class:"inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-lg w-full sm:p-6"},M={class:"block absolute top-0 right-0 pt-4 pr-4"},O=(0,r.Lk)("span",{class:"sr-only"},"Schliessen",-1),j={class:"sm:mt-0 sm:text-left"},E={class:"mt-2"},X=["onClick"],P={key:0},T=["for"],D={class:"mt-5 sm:mt-4"};function q(e,s,t,i,d,a){const l=(0,r.g2)("XIcon"),o=(0,r.g2)("DialogTitle"),u=(0,r.g2)("vue-number-input"),c=(0,r.g2)("TransitionChild"),g=(0,r.g2)("Dialog"),m=(0,r.g2)("TransitionRoot");return(0,r.uX)(),(0,r.Wv)(m,{as:"template",show:e.open},{default:(0,r.k6)((()=>[(0,r.bF)(g,{as:"div",class:"fixed z-10 inset-0 overflow-y-auto",onClose:e.closeModal},{default:(0,r.k6)((()=>[(0,r.Lk)("div",B,[(0,r.bF)(c,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:(0,r.k6)((()=>[(0,r.Lk)("div",F,[(0,r.Lk)("div",M,[(0,r.Lk)("button",{type:"button",class:"bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:s[0]||(s[0]=(...s)=>e.closeModal&&e.closeModal(...s))},[O,(0,r.bF)(l,{class:"h-6 w-6","aria-hidden":"true"})])]),(0,r.Lk)("div",j,[(0,r.bF)(o,{as:"h3",class:"text-lg leading-6 font-medium text-gray-900"},{default:(0,r.k6)((()=>[(0,r.eW)(" Adressen ")])),_:1}),(0,r.Lk)("div",E,[(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.addressesStore.selectedAddresses,((s,t)=>((0,r.uX)(),(0,r.CE)("li",{key:t,class:"cursor-pointer py-2",onClick:s=>e.selectAddress(t)},[(0,r.Lk)("p",null,(0,n.v_)(e.getAddressText(s)),1),e.selectedIndex===t||1===e.addressesStore.selectedAddresses.length?((0,r.uX)(),(0,r.CE)("div",P,[(0,r.Lk)("label",{for:"form-number-parties-"+t,class:"w-full text-gray-700 text-sm font-semibold"},"Anzahl Parteien",8,T),(0,r.bF)(u,{modelValue:s.party_quantity,"onUpdate:modelValue":e=>s.party_quantity=e,attrs:{id:"form-number-parties-"+t},min:0,center:"",controls:""},null,8,["modelValue","onUpdate:modelValue","attrs"])])):(0,r.Q3)("",!0)],8,X)))),128))])])]),(0,r.Lk)("div",D,[(0,r.Lk)("button",{type:"button",class:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",onClick:s[1]||(s[1]=(...s)=>e.saveModal&&e.saveModal(...s))}," Speichern ")])])])),_:1})])])),_:1},8,["onClose"])])),_:1},8,["show"])}var W=t(953),K=t(491),$=t(4232),Z=t(8353),z=t(3049),G=t(810),N=t(223),U=t(1884),H=t(5885),R=t.n(H);const J=(0,N.Wp)(R()),V=(0,U.aU)(J);var Q=V,Y={async fetch(){return await(0,U.GG)((0,U.rJ)(Q,"addresses"))},async update(e){return await(0,U.mZ)((0,U.H9)(Q,"addresses",e.id),{party_quantity:e.party_quantity})}},ee=t(3513);const se=(0,G.nY)("addresses",{state:()=>({addressItems:(0,ee.Mjh)("addresses",[]),addressesLoaded:(0,ee.Mjh)("addressesLoaded",!1),selectedAddresses:null}),getters:{getAddresses:e=>e.addressItems,getAddressesById:e=>s=>e.addressItems.find((e=>e.id===s)),getSortedAddresses:e=>e.addressItems.sort(((e,s)=>e.street<s.street?-1:e.street>s.street?1:0)),isAddressesLoaded:e=>e.addressesLoaded},actions:{fetchAddresses(){return new Promise(((e,s)=>{this.addressesLoaded?(e(this.addressItems),console.log("Addresses already loaded")):Y.fetch().then((s=>{const t=s.docs.map((e=>({id:e.id,...e.data()})));console.log("Addresses already loaded"),this.addressItems=t,this.addressesLoaded=!0,e(t)})).catch((e=>{s(e)}))}))},saveAddress(e){for(const s of e)Y.update(s)}}});var te={async fetch(){return console.log("firestore",Q),await(0,U.GG)((0,U.rJ)(Q,"buildings"))},async update(e,s){return await(0,U.mZ)((0,U.H9)(Q,"buildings",e.id),{record_status:s})}};const ie=(0,G.nY)("buildings",{state:()=>({buildingItems:(0,ee.Mjh)("buildings",[]),buildingsLoaded:(0,ee.Mjh)("buildingsLoaded",!1),selectedBuilding:null}),getters:{getBuildings:e=>e.buildingItems,getBuildingsByOsmId:e=>s=>e.buildingItems.find((e=>e.osm_id===s)),isBuildingsLoaded:e=>e.buildingsLoaded},actions:{fetchBuildings(){return new Promise(((e,s)=>{this.buildingsLoaded?e(this.buildingItems):(console.log("Fetching buildings"),te.fetch().then((s=>{const t=s.docs.map((e=>({id:e.id,...e.data()})));this.buildingItems=t,this.buildingsLoaded=!0,e(t)})).catch((e=>{s(e)})))}))},saveBuilding(e,s){te.update(e,s)}}});var re=(0,r.pM)({components:{Dialog:K.lG,DialogTitle:K.L3,TransitionChild:$._,TransitionRoot:$.O,XIcon:Z.A,VueNumberInput:z.A},setup(){const e=se(),s=ie(),t=(0,W.KR)(!1),i=(0,W.KR)(null);return{open:t,addressesStore:e,buildingsStore:s,selectedIndex:i,setIsOpen(e){t.value=e},selectAddress(e){i.value=e}}},methods:{closeModal(){this.setIsOpen(!1),this.$emit("close"),this.addressesStore.selectedAddresses=null,this.buildingsStore.selectedBuilding=null,this.selectedIndex=null},saveModal(){let e=0;for(const s of this.addressesStore.selectedAddresses){const t=this.addressesStore.addressItems.find((e=>e.id===s.id)),i=this.addressesStore.addressItems.indexOf(t);this.addressesStore.addressItems[i].party_quantity=s.party_quantity,s.party_quantity>0&&e++}e===this.addressesStore.selectedAddresses.length?(this.buildingsStore.saveBuilding(this.buildingsStore.selectedBuilding,"complete"),this.$emit("save","complete")):e>0?(this.buildingsStore.saveBuilding(this.buildingsStore.selectedBuilding,"partial"),this.$emit("save","partial")):(this.buildingsStore.saveBuilding(this.buildingsStore.selectedBuilding,"empty"),this.$emit("save","empty")),this.addressesStore.saveAddress(this.addressesStore.selectedAddresses),this.closeModal()},getAddressText(e){return e.street||e.housenumber?`${e.street} ${e.housenumber||""}`:"Keine eindeutige Adresse"}}});const ne=(0,v.A)(re,[["render",q]]);var de=ne,ae={name:"Mapbox",components:{Modal:de},setup(){const e=se(),s=ie(),t=[],i=[],r=[];return s.getBuildings.forEach((e=>{0===e.addresses.length&&t.push(e.osm_id.toString()),"complete"===e.record_status&&i.push(e.osm_id.toString()),"partial"===e.record_status&&r.push(e.osm_id.toString())})),{buildingNoAddress:t,buildingComplete:i,buildingPartial:r,addressesStore:e,buildingsStore:s}},data(){return{modalAddresses:[],building:Object}},beforeMount(){this.addressesStore.fetchAddresses(),this.buildingsStore.fetchBuildings()},mounted(){C().accessToken="pk.eyJ1Ijoid3Zpc2lvbiIsImEiOiJjbTBkaXNmNjcwYWZjMmlxdGljdTR5MzlxIn0.tZax7GukcL3-dETMcNA2vw",this.map=new(C().Map)({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[8.109,47.174],zoom:14}),this.map.on("load",(()=>{this.map.addSource("buildings",{type:"vector",url:"mapbox://wvision.bd5gcv6m"}),this.map.addLayer({id:"buildings",type:"fill",source:"buildings","source-layer":"buildings-sursee-bthp8h",paint:{"fill-outline-color":"rgba(0, 0, 0, 0.1)","fill-color":"rgba(0, 0, 0, 0.1)"}},"settlement-label"),this.map.addLayer({id:"buildings-no-address",type:"fill",source:"buildings","source-layer":"buildings-sursee-bthp8h",paint:{"fill-outline-color":"rgba(0, 0, 0, 0.1)","fill-color":"rgba(255,0,0,0.1)"},filter:["in","osm_id",""]},"settlement-label"),this.map.addLayer({id:"buildings-complete",type:"fill",source:"buildings","source-layer":"buildings-sursee-bthp8h",paint:{"fill-outline-color":"rgba(0, 0, 0, 0.1)","fill-color":"rgba(0,255,0,0.1)"},filter:["in","osm_id",""]},"settlement-label"),this.map.addLayer({id:"buildings-partial",type:"fill",source:"buildings","source-layer":"buildings-sursee-bthp8h",paint:{"fill-outline-color":"rgba(0, 0, 0, 0.1)","fill-color":"rgba(255,255,0,0.1)"},filter:["in","osm_id",""]},"settlement-label"),this.map.addLayer({id:"buildings-highlighted",type:"fill",source:"buildings","source-layer":"buildings-sursee-bthp8h",paint:{"fill-outline-color":"#484896","fill-color":"#6e599f","fill-opacity":.75},filter:["in","osm_id",""]},"settlement-label"),this.map.on("click","buildings",(({point:e})=>{const s=[[e.x,e.y],[e.x,e.y]],t=this.map.queryRenderedFeatures(s,{layers:["buildings"]})[0],i=this.buildingsStore.getBuildingsByOsmId(parseInt(t.properties.osm_id));if(0!==i.addresses.length){this.fitCoordinates(t.geometry.coordinates[0]),this.map.setFilter("buildings-highlighted",["in","osm_id",t.properties.osm_id]);const e=[];for(const s of i.addresses){const t=this.addressesStore.getAddressesById(s._key.path.segments[6]);e.push({id:t.id,street:t.street,housenumber:t.housenumber,postcode:t.postcode,city:t.city,party_quantity:t.party_quantity,osm_id:t.osm_id})}this.addressesStore.selectedAddresses=e,this.buildingsStore.selectedBuilding=i,this.$refs.modal.setIsOpen(!0)}})),this.map.on("mouseenter","buildings",(()=>{this.map.getCanvas().style.cursor="pointer"})),this.map.on("mouseleave","buildings",(()=>{this.map.getCanvas().style.cursor=""})),this.updateFilter()})),this.map.addControl(new(C().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},fitBoundsOptions:{maxZoom:16},trackUserLocation:!0,showUserHeading:!0,showAccuracyCircle:!1}))},methods:{onModalClose(){this.map.setFilter("buildings-highlighted",["in","osm_id",""])},buildingNotDone(){const e=this.buildingsStore.buildingItems.indexOf(this.buildingsStore.selectedBuilding);this.buildingPartial.push(this.buildingsStore.selectedBuilding.osm_id.toString()),this.buildingComplete=this.buildingComplete.filter((e=>e!==this.buildingsStore.selectedBuilding.osm_id.toString())),this.buildingsStore.buildingItems[e].record_status="partial",this.updateFilter()},buildingDone(){const e=this.buildingsStore.buildingItems.indexOf(this.buildingsStore.selectedBuilding);this.buildingComplete.push(this.buildingsStore.selectedBuilding.osm_id.toString()),this.buildingPartial=this.buildingPartial.filter((e=>e!==this.buildingsStore.selectedBuilding.osm_id.toString())),this.buildingsStore.buildingItems[e].record_status="complete",this.updateFilter()},reset(){const e=this.buildingsStore.buildingItems.indexOf(this.buildingsStore.selectedBuilding);this.buildingComplete=this.buildingComplete.filter((e=>e!==this.buildingsStore.selectedBuilding.osm_id.toString())),this.buildingPartial=this.buildingPartial.filter((e=>e!==this.buildingsStore.selectedBuilding.osm_id.toString())),this.buildingsStore.buildingItems[e].record_status="empty",this.updateFilter()},updateFilter(e){switch(e){case"complete":this.buildingDone();break;case"partial":this.buildingNotDone();break;case"empty":this.reset();break}this.map.setFilter("buildings-no-address",["in","osm_id",...this.buildingNoAddress]),this.map.setFilter("buildings-complete",["in","osm_id",...this.buildingComplete]),this.map.setFilter("buildings-partial",["in","osm_id",...this.buildingPartial])},fitCoordinates(e){const s=new(C().LngLatBounds)(e[0],e[0]);for(const t of e)s.extend(t);this.map.fitBounds(s,{zoom:17.5,offset:[0,-60]})}}};const le=(0,v.A)(ae,[["render",A],["__scopeId","data-v-3d4f7f42"]]);var oe=le,ue={name:"Map",components:{Mapbox:oe}};const ce=(0,v.A)(ue,[["render",L]]);var ge=ce;function me(e,s,t,i,n,d){const a=(0,r.g2)("address-list");return(0,r.uX)(),(0,r.Wv)(a)}const pe={class:"max-w-7xl mx-auto"},he={class:"flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8"},be={class:"flex-1 min-w-0"},fe=(0,r.Lk)("h2",{class:"text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"}," Erfasste Adressen ",-1),ye={class:"flex flex-row sm:flex-wrap mt-0 space-x-6"},ve={class:"mt-2 flex items-center text-sm text-gray-500"},xe={class:"mt-2 flex items-center text-sm text-gray-500"},ke={class:"xl:px-8","aria-label":"Adressen"},Se={class:"z-10 sticky top-0 border-t border-b border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"},Le={role:"list",class:"relative z-0 divide-y divide-gray-200"},_e={class:"relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"},we={class:"flex-shrink-0"},Ae={class:"flex h-10 w-10 bg-gray-100 rounded-full items-center justify-center"},Ie={class:"flex-1 min-w-0"},Ce={href:"#",class:"focus:outline-none"},Be=(0,r.Lk)("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),Fe={class:"text-sm font-medium text-gray-900"},Me={class:"text-sm text-gray-500 truncate"};function Oe(e,s,t,i,d,a){const l=(0,r.g2)("HomeIcon"),o=(0,r.g2)("UsersIcon");return(0,r.uX)(),(0,r.CE)("div",pe,[(0,r.Lk)("div",he,[(0,r.Lk)("div",be,[fe,(0,r.Lk)("div",ye,[(0,r.Lk)("div",ve,[(0,r.bF)(l,{class:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,r.eW)(" "+(0,n.v_)(e.addressCount)+" Adressen ",1)]),(0,r.Lk)("div",xe,[(0,r.bF)(o,{class:"flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400","aria-hidden":"true"}),(0,r.eW)(" "+(0,n.v_)(e.partyCount)+" Parteien ",1)])])])]),(0,r.Lk)("nav",ke,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(Object.keys(e.addresses),(s=>((0,r.uX)(),(0,r.CE)("div",{key:s,class:"relative"},[(0,r.Lk)("div",Se,[(0,r.Lk)("h3",null,(0,n.v_)(s),1)]),(0,r.Lk)("ul",Le,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.addresses[s],(s=>((0,r.uX)(),(0,r.CE)("li",{key:s.id,class:"bg-white"},[(0,r.Lk)("div",_e,[(0,r.Lk)("div",we,[(0,r.Lk)("div",Ae,[(0,r.bF)(l,{class:"h-6 w-6 text-gray-500"})])]),(0,r.Lk)("div",Ie,[(0,r.Lk)("a",Ce,[Be,(0,r.Lk)("p",Fe,(0,n.v_)(e.fullAddress(s)),1),(0,r.Lk)("p",Me,(0,n.v_)(s.party_quantity)+" "+(0,n.v_)(1===s.party_quantity?"Partei":"Parteien"),1)])])])])))),128))])])))),128))])])}var je=t(5847),Ee=t(8252),Xe=(0,r.pM)({name:"AddressList",components:{HomeIcon:je.A,UsersIcon:Ee.A},setup(){const e=se(),s=(0,r.EW)((()=>e.getSortedAddresses)),t=(0,r.EW)((()=>{if(!s.value)return{};const e={};return s.value.forEach((s=>{const t=s.street.charAt(0);t in e||(e[t]=[]),e[t].push(s)})),e})),i=(0,r.EW)((()=>Object.values(t.value).reduce(((e,s)=>e+s.length),0))),n=(0,r.EW)((()=>Object.values(t.value).reduce(((e,s)=>e+s.reduce(((e,{party_quantity:s})=>e+s),0)),0))),d=e=>`${e.street||"{Strasse}"} ${e.housenumber||"{Hausnummer}"}, ${e.postcode||"{PLZ}"} ${e.city||"{Ortschaft}"}`;return{addresses:t,addressCount:i,partyCount:n,fullAddress:d}}});const Pe=(0,v.A)(Xe,[["render",Oe]]);var Te=Pe,De={name:"Addresses",components:{AddressList:Te}};const qe=(0,v.A)(De,[["render",me]]);var We=qe;const Ke=[{path:"/",name:"Map",component:ge},{path:"/adressen",name:"Addresses",component:We}],$e=(0,S.aE)({history:(0,S.LA)("/mailblox-app/"),routes:Ke});var Ze=$e;(0,i.Ef)(k).use(Ze).use((0,G.Ey)()).mount("#app")}},s={};function t(i){var r=s[i];if(void 0!==r)return r.exports;var n=s[i]={exports:{}};return e[i].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(s,i,r,n){if(!i){var d=1/0;for(u=0;u<e.length;u++){i=e[u][0],r=e[u][1],n=e[u][2];for(var a=!0,l=0;l<i.length;l++)(!1&n||d>=n)&&Object.keys(t.O).every((function(e){return t.O[e](i[l])}))?i.splice(l--,1):(a=!1,n<d&&(d=n));if(a){e.splice(u--,1);var o=r();void 0!==o&&(s=o)}}return s}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[i,r,n]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/mailblox-app/"}(),function(){var e={524:0};t.O.j=function(s){return 0===e[s]};var s=function(s,i){var r,n,d=i[0],a=i[1],l=i[2],o=0;if(d.some((function(s){return 0!==e[s]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(l)var u=l(t)}for(s&&s(i);o<d.length;o++)n=d[o],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(u)},i=self["webpackChunkmailblox_app"]=self["webpackChunkmailblox_app"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=t.O(void 0,[504],(function(){return t(4767)}));i=t.O(i)})();
//# sourceMappingURL=app.d786e56e.js.map