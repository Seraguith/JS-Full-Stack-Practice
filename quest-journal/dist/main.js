(()=>{"use strict";const e=e=>String(e),t=e=>e,s=e=>(e>3?e=3:e<1&&(e=1),e),o=e=>String(e),l=(()=>{let l=[];const i=e=>l[e],r=(e,t)=>l[e].getTask(t);return{quests:l,addQuest:e=>{let t=(e=>{let t=[],s=[];return{getTitle:()=>e,getTasks:()=>t,getTaskAmount:()=>t.length,getTask:e=>t[e],addTask:e=>{console.log(`CHECK ${e.getTitle()}`),t.push(e),console.log(`CHECK ${t[0].getTitle()}`)},removeTask:e=>{t.splice(e,1)},processSwap:e=>{s.length<2&&(e=>{s.push(e)})(e),s.length>=2&&(()=>{const e=s.shift(),o=s.shift();let l=t[e];t[e]=t[o],t[o]=l})()}}})(e=o(e));l.push(t)},removeQuest:e=>{l.splice(e,1)},getQuest:i,resetQuests:()=>{l=[]},addTask:(o,l,r,n,a)=>{let g=((e,t,s,o)=>({getTitle:()=>e,getDescription:()=>t,getDueDate:()=>s,getPriority:()=>o,setTitle:t=>{e=t},setDescription:e=>{t=e},setDueDate:e=>{s=e},setPriority:e=>{o=e}}))(o=e(o),l=e(l),r=t(r),n=s(n));i(a).addTask(g)},removeTask:(e,t)=>{i(e).removeTask(t)},renameTitle:(t,s,o)=>{o=e(o),r(t,s).setTitle(o)},changeDescription:(t,s,o)=>{o=e(o),r(t,s).setDescription(o)},changeDate:(e,s,o)=>{o=t(o),r(e,s).setDueDate(o)},changePriority:(e,t,o)=>{o=s(o),r(e,t).setPriority(o)}}})(),i=(()=>{const e=(t,s,o,l)=>{if(-1===o)return s;switch(l){case"title":s.unshift(t[o].getTitle());break;case"description":s.unshift(t[o].getDescription())}return e(t,s,o-=1,l)};return{transformToUIReadable:e}})();(()=>{let e=0,t=0;const s=t=>{e++,!0===t?console.log(`Test ${e} passed.`):console.log(`Test ${e} F-A-I-L-E-D.`)},o=(e,o)=>{((e,t)=>{console.log(`---${e} ~OUTPUT~ vs.`),console.log(`---${t} ~EXP.~`)})(e,o),e===o?s(!0):(t++,s(!1))},r=()=>l.quests.length-1,n=()=>l.quests[r()].getTaskAmount()-1,a=()=>l.quests[r()].getTaskAmount(),g=e=>{l.addQuest(e);let t=r(),s=l.quests[t].getTitle();o(s,e)},u=(e,t,s,i)=>{let a=r();l.addTask(e,t,s,i,a);let g=l.quests[a].getTask(n()),u=g.getTitle(),T=g.getDescription(),c=g.getDueDate(),h=g.getPriority();o(u,e),o(T,t),o(c,s),o(h,i)},T=e=>{l.removeTask(r(),n());let t=a();o(t,e)};return{testProcess:()=>{let e="Bandits Amassing",s="Vedivoll's Troubles",c="Go to Mindwolf Forest",h="Talk to the Sorceress Elina";g(e),u(c,"You must kill the bandits.",Date.now(),3),u(h,"She lives in a hut somewhere in the mountains.",Date.now(),2),((e,t,s)=>{let i=l.quests[r()];i.processSwap(0),i.processSwap(1);let a=i.getTask(n()).getTitle();o(a,"Go to Mindwolf Forest")})(),(e=>{let t=l.quests[r()].getTasks(),s=t.length-1,n=i.transformToUIReadable(t,[],s,"title");n=String(n),e=String(e),o(n,e)})([h,c]),(e=>{let t=l.quests.length;o(t,1)})(),(e=>{let t=a();o(t,2)})(),T(1),T(0),g(s),(e=>{let t=l.quests,s=t.length-1,r=i.transformToUIReadable(t,[],s,"title");r=String(r),e=String(e),o(r,e)})([e,s]),(e=>{l.removeQuest(r());let t=l.quests.length;o(t,1)})(),console.log(`Number of failed tests: ${t}`),l.resetQuests()}}})().testProcess()})();