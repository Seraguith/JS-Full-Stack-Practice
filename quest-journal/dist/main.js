(()=>{"use strict";const e=e=>String(e),t=e=>e,s=e=>(e>3?e=3:e<1&&(e=1),e),o=e=>String(e),i=(()=>{let i=[];const l=e=>i[e],r=(e,t)=>i[e].getTask(t);return{quests:i,addQuest:e=>{let t=(e=>{let t=[],s=[];return{getTitle:()=>e,getTasks:()=>t,getTaskAmount:()=>t.length,getTask:e=>t[e],addTask:e=>{t.push(e)},removeTask:e=>{t.splice(e,1)},processSwap:e=>{s.length<2&&(e=>{s.push(e)})(e),s.length>=2&&(()=>{const e=s.shift(),o=s.shift();let i=t[e];t[e]=t[o],t[o]=i})()}}})(e=o(e));i.push(t)},removeQuest:e=>{i.splice(e,1)},getQuest:l,resetQuests:()=>{i=[]},addTask:(o,i,r,n,a)=>{let g=((e,t,s,o)=>({getTitle:()=>e,getDescription:()=>t,getDueDate:()=>s,getPriority:()=>o,setTitle:t=>{e=t},setDescription:e=>{t=e},setDueDate:e=>{s=e},setPriority:e=>{o=e}}))(o=e(o),i=e(i),r=t(r),n=s(n));l(a).addTask(g)},removeTask:(e,t)=>{l(e).removeTask(t)},renameTitle:(t,s,o)=>{o=e(o),r(t,s).setTitle(o)},changeDescription:(t,s,o)=>{o=e(o),r(t,s).setDescription(o)},changeDate:(e,s,o)=>{o=t(o),r(e,s).setDueDate(o)},changePriority:(e,t,o)=>{o=s(o),r(e,t).setPriority(o)}}})(),l=(()=>{const e=(t,s,o,i)=>{if(-1===o)return s;switch(i){case"title":s.unshift(t[o].getTitle());break;case"description":s.unshift(t[o].getDescription())}return e(t,s,o-=1,i)};return{transformToUIReadable:e}})();(()=>{let e=0,t=0;const s=t=>{e++,!0===t?console.log(`Test ${e} passed.`):console.log(`Test ${e} F-A-I-L-E-D.`)},o=(e,o)=>{((e,t)=>{console.log(`---${e} ~OUTPUT~ vs.`),console.log(`---${t} ~EXP.~`)})(e,o),e===o?s(!0):(t++,s(!1))},r=()=>i.quests.length-1,n=()=>i.quests[r()].getTaskAmount()-1,a=()=>i.quests[r()].getTaskAmount(),g=e=>{i.addQuest(e);let t=r(),s=i.quests[t].getTitle();o(s,e)},u=(e,t,s,l)=>{let a=r();i.addTask(e,t,s,l,a);let g=i.quests[a].getTask(n()),u=g.getTitle(),T=g.getDescription(),c=g.getDueDate(),h=g.getPriority();o(u,e),o(T,t),o(c,s),o(h,l)},T=e=>{i.removeTask(r(),n());let t=a();o(t,e)};return{testProcess:()=>{let e="Bandits Amassing",s="Vedivoll's Troubles",c="Go to Mindwolf Forest";g(e),u(c,"You must kill the bandits.",Date.now(),3),u("Talk to the Sorceress Elina","She lives in a hut somewhere in the mountains.",Date.now(),2),((e,t,s)=>{let l=i.quests[r()];l.processSwap(0),l.processSwap(1);let a=l.getTask(n()).getTitle();o(a,"Go to Mindwolf Forest")})(),(e=>{let t=i.quests.length;o(t,1)})(),(e=>{let t=a();o(t,2)})(),T(1),T(0),g(s),(e=>{let t=i.quests,s=t.length-1,r=l.transformToUIReadable(t,[],s,"title");r=String(r),e=String(e),o(r,e)})([e,s]),(e=>{i.removeQuest(r());let t=i.quests.length;o(t,1)})(),console.log(`Number of failed tests: ${t}`),i.resetQuests()}}})().testProcess()})();