/* ---------- Daglig historie og leksjon: ny hver dag, laget av AI fra Bibelen og en emneliste ---------- */
const DN={
 no:{ai:"AI-laget",wait:"Lager dagens …",storyHero:"Dagens historie",lessonHero:"Dagens nye leksjon",storyKick:"Ny hver dag",
     busy:"Det er mye trafikk akkurat nå. Prøv igjen om litt.",fail:"Kunne ikke lage dagens innhold. Sjekk nettet og prøv igjen.",
     lessons:"Daglige leksjoner",lessonsSub:"Ny hver dag · AI-laget",back:"‹ Hjem",past:"Tidligere",listen:"Lytt",ask:"Spør Catholic Faith om dette",
     mark:"Marker som fullført",done:"✓ Fullført",disc:"Laget av AI ut fra Bibelen og kirkens lære. Kan inneholde feil, sjekk viktige ting.",none:"Ingen enda. Trykk på dagens leksjon over.",today:"I dag",
     askp:"Forklar mer om dette temaet, enkelt: "},
 en:{ai:"AI-made",wait:"Making today's …",storyHero:"Today's story",lessonHero:"Today's new lesson",storyKick:"New every day",
     busy:"It's busy right now. Try again in a moment.",fail:"Could not make today's content. Check your connection and try again.",
     lessons:"Daily lessons",lessonsSub:"New every day · AI-made",back:"‹ Home",past:"Earlier",listen:"Listen",ask:"Ask Catholic Faith about this",
     mark:"Mark as completed",done:"✓ Completed",disc:"Made by AI from the Bible and Church teaching. May contain mistakes, check important things.",none:"None yet. Tap today's lesson above.",today:"Today",
     askp:"Explain more about this topic, simply: "}
};
const dayN=()=>Math.floor((Date.UTC(today.getFullYear(),today.getMonth(),today.getDate())-Date.UTC(2026,0,1))/864e5);
const dateLocal=()=>today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
const genStore=()=>jget('cf_gen',{});
function genSave(o){
  const ks=Object.keys(o).sort(); while(ks.length>120){delete o[ks.shift()]}
  store.set('cf_gen',JSON.stringify(o));
}
const genDoneList=()=>jget('cf_gen_done',[]);
async function getDaily(type){
  const date=dateLocal(), key=type+'|'+date+'|'+lang, st=genStore();
  if(st[key])return {ok:true,e:st[key]};
  const n=dayN(); const payload={daily:type,lang,date};
  if(type==='story'){const ref=STORY_REFS[((n%STORY_REFS.length)+STORY_REFS.length)%STORY_REFS.length];payload.ref=ref;payload.passage=(await refText(ref,true)).join(' ')}
  else payload.topic=LESSON_TOPICS[((n%LESSON_TOPICS.length)+LESSON_TOPICS.length)%LESSON_TOPICS.length];
  try{
    const r=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    if(r.status===429)return {ok:false,err:'busy'}; if(!r.ok)return {ok:false,err:'fail'};
    const j=await r.json(); if(!j.title||!Array.isArray(j.body))return {ok:false,err:'fail'};
    const e={title:j.title,body:j.body,type,date,lang,ref:j.ref||'',topic:j.topic||''}; const s2=genStore(); s2[key]=e; genSave(s2); return {ok:true,e};
  }catch(e){return {ok:false,err:'fail'}}
}
function genItem(e){
  const t=DN[lang]; const id='gen-'+e.type+'-'+e.date+'-'+e.lang;
  return {id,kind:e.type==='story'?'stories':'guides',title:e.title,sub:t.ai+' · '+e.date+(e.ref?' · '+e.ref:''),lang:'app',text:()=>Promise.resolve([e.type==='story'?storyIntro(e.title,e.ref,e.lang||lang,'story'):e.title,...e.body]),gen:e};
}
function genArchive(type){return Object.values(genStore()).filter(e=>e.type===type&&e.lang===lang).sort((a,b)=>b.date.localeCompare(a.date))}
function genHero(type,alt){
  const t=DN[lang]; const b=mk('button','hero'+(alt?' alt':'')); const x=mk('div'); x.appendChild(mk('small','',type==='story'?t.storyKick:t.lessonsSub)); x.appendChild(mk('b','',type==='story'?t.storyHero:t.lessonHero)); b.appendChild(x); const pl=mk('div','pl','▶'); b.appendChild(pl);
  b.onclick=async()=>{
    if(b.dataset.busy)return; b.dataset.busy='1'; pl.textContent='…'; x.querySelector('small').textContent=t.wait;
    const r=await getDaily(type); delete b.dataset.busy;
    if(!r.ok){pl.textContent='▶';x.querySelector('small').textContent=type==='story'?t.storyKick:t.lessonsSub;toast(t[r.err]||t.fail);return}
    const it=genItem(r.e); const list=genArchive(type).map(genItem); startItem(it,list,0);
  };
  return b;
}
function genRows(type,rowFn){
  const arch=genArchive(type); const w=document.createDocumentFragment(); if(!arch.length)return w;
  w.appendChild(mk('div','gh',DN[lang].past)); const list=arch.map(genItem); list.forEach(it=>w.appendChild(rowFn(it,list))); return w;
}

/* ----- Daglige leksjoner (AI): egen visning i Guider ----- */
let aiView={e:null};
function openAiLessons(){aiView={e:null};showGuideView();renderAi()}
function openAiToday(){openAiLessons();setTimeout(async()=>{const r=await getDaily('lesson');if(r.ok){aiView={e:r.e};renderAi()}else toast(DN[lang][r.err]||DN[lang].fail)},50)}
async function renderAi(){
  const root=$('#guideRoot'), t=DN[lang]; root.innerHTML=''; const w=mk('div','gv rd'); root.appendChild(w);
  if(!aiView.e){
    const b=mk('button','back',t.back); b.onclick=closeGuide; w.appendChild(b);
    w.appendChild(mk('div','kick',t.ai)); w.appendChild(mk('h1','',t.lessons)); w.appendChild(mk('div','lead',t.lessonsSub));
    const h=mk('button','hero'); const x=mk('div'); x.appendChild(mk('small','',t.lessonsSub)); x.appendChild(mk('b','',t.lessonHero)); h.appendChild(x); const pl=mk('div','pl','›'); h.appendChild(pl);
    h.onclick=async()=>{pl.textContent='…';x.querySelector('small').textContent=t.wait;const r=await getDaily('lesson');if(r.ok){aiView={e:r.e};renderAi()}else{pl.textContent='›';x.querySelector('small').textContent=t.lessonsSub;toast(t[r.err]||t.fail)}};
    w.appendChild(h);
    const arch=genArchive('lesson'); if(!arch.length)w.appendChild(mk('div','empty2',t.none)); else{w.appendChild(mk('div','gh',t.past));const dn=genDoneList();arch.forEach(e=>{const id=genItem(e).id;const d=dn.includes(id);const r=mk('button','les'+(d?' done':''));r.appendChild(mk('div','n',d?'✓':'•'));const tx=mk('div');tx.appendChild(mk('b','',e.title));tx.appendChild(mk('small','',e.date));r.appendChild(tx);r.onclick=()=>{aiView={e};renderAi()};w.appendChild(r)})}
  } else {
    const e=aiView.e, it=genItem(e);
    const b=mk('button','back','‹ '+t.lessons); b.onclick=()=>{aiView={e:null};renderAi()}; w.appendChild(b);
    w.appendChild(mk('div','kick',t.ai+' · '+e.date)); w.appendChild(mk('h1','',e.title));
    const body=mk('div','lbody'); e.body.forEach(p=>body.appendChild(mk('p','',p))); w.appendChild(body);
    w.appendChild(mk('div','src',t.disc));
    const acts=mk('div','acts'); w.appendChild(acts);
    const ls=mk('button','',t.listen+' ▶'); ls.onclick=()=>startItem(it,[it],0); acts.appendChild(ls);
    const ask=mk('button','',t.ask); ask.onclick=()=>openChat(t.askp+e.title); acts.appendChild(ask);
    const dn=genDoneList().includes(it.id); const m=mk('button',dn?'done':'gold',dn?t.done:t.mark);
    m.onclick=()=>{if(genDoneList().includes(it.id))return;const l=genDoneList();l.push(it.id);store.set('cf_gen_done',JSON.stringify(l));markToday();renderAi()}; acts.appendChild(m);
  }
}
/* Ferdig: tegn Lytt og hjem på nytt */
renderListen(); try{renderGuideList()}catch(e){}
