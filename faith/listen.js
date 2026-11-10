/* ---------- LYTT: opplesning (stemme på enheten), spiller og bakgrunnsmusikk ---------- */
const LN={
 no:{title:"Lytt",lead:"Bibelen, guider og historier. Lytt rolig, også i bilen.",today:"Dagens leksjon",resume:"Fortsett der du slapp",
     tabs:{bible:"Bibel",guides:"Guider",stories:"Historier",favs:"Favoritter"},engNote:"Engelsk tekst",min:"min",
     noFav:"Ingen favoritter ennå. Trykk på hjertet ved noe du vil lagre.",ep:"Del",
     speed:"Hastighet",music:"Bakgrunnsmusikk",ambient:"Rolig ambient",shuffle:"Tilfeldig",addm:"+ Legg til egen musikk",
     mnote:"Musikken du legger til lagres bare på denne enheten og lastes aldri opp. Du kan velge lydfiler eller videoer, og appen spiller bare lyden.",
     vol:"Volum",next:"Neste",fav:"Favoritt",nov:"Fant ingen stemme på denne enheten for dette språket. Lyden bruker enhetens standardstemme.",nowp:"Spiller nå",
     stories:["Natten i Betlehem","Veien til Damaskus","Den barmhjertige samaritan"]},
 en:{title:"Listen",lead:"The Bible, guides and stories. Listen calmly, even in the car.",today:"Today's lesson",resume:"Continue where you left off",
     tabs:{bible:"Bible",guides:"Guides",stories:"Stories",favs:"Favorites"},engNote:"English text",min:"min",
     noFav:"No favorites yet. Tap the heart on anything you want to keep.",ep:"Part",
     speed:"Speed",music:"Background music",ambient:"Calm ambient",shuffle:"Shuffle",addm:"+ Add your own music",
     mnote:"Music you add is stored only on this device and is never uploaded. You can pick audio files or videos; the app plays just the sound.",
     vol:"Volume",next:"Next",fav:"Favorite",nov:"No voice found on this device for this language. Audio uses the device's default voice.",nowp:"Now playing",
     stories:["The night in Bethlehem","The road to Damascus","The Good Samaritan"]}
};
/* Bibellesninger (engelsk Douay-Rheims fra Bibelen i appen) */
const READINGS=[
 {id:"rd-ps22",no:"Herren er min hyrde",en:"The Lord is my shepherd",ref:"Sal 22:1-6"},
 {id:"rd-joh1",no:"I begynnelsen var Ordet",en:"In the beginning was the Word",ref:"Joh 1:1-18"},
 {id:"rd-luk2",no:"Jesu fødsel",en:"The birth of Jesus",ref:"Luk 2:1-20"},
 {id:"rd-1mos1",no:"Skapelsen",en:"Creation",ref:"1Mos 1:1-31"},
 {id:"rd-matt5",no:"Saligprisningene",en:"The Beatitudes",ref:"Matt 5:1-12"},
 {id:"rd-1kor13",no:"Kjærlighetens vei",en:"The way of love",ref:"1Kor 13:1-13"},
 {id:"rd-rom8",no:"Ingenting kan skille oss",en:"Nothing can separate us",ref:"Rom 8:28-39"},
 {id:"rd-sal90",no:"Under Den høyestes ly",en:"He who dwells in the shelter",ref:"Sal 90:1-16"}
];
/* Historier: trofaste gjenfortellinger av bibelfortellinger */
const STORIES=[
 {id:"st-1",ref:"Luk 2:1-20",
  no:["Det var kaldt over markene utenfor Betlehem. Noen gjetere holdt vakt over flokkene sine om natten. Plutselig sto en Herrens engel foran dem, og himmelen lyste opp. De ble redde.","«Frykt ikke,» sa engelen. «Jeg bringer dere en stor glede som skal komme til hele folket. I dag er det født dere en frelser i Davids by. Han er Kristus, Herren. Dere skal finne et barn svøpt i bleier og liggende i en krybbe.»","Så var det mange engler, som lovpriste Gud og sa: Ære være Gud i det høyeste, og fred på jorden blant mennesker Gud har glede i.","Da englene var borte, sa gjeterne til hverandre: «La oss gå til Betlehem og se det som har hendt.» De skyndte seg dit og fant Maria og Josef, og barnet som lå i krybben. De fortalte alt de hadde hørt. Maria gjemte alle disse ordene i hjertet sitt og grunnet på dem."],
  en:["It was cold over the fields outside Bethlehem. Some shepherds were keeping watch over their flocks by night. Suddenly an angel of the Lord stood before them, and the sky shone around them. They were terrified.","«Do not be afraid,» said the angel. «I bring you news of great joy for all the people. Today in the city of David a Savior has been born to you. He is Christ the Lord. You will find a child wrapped in swaddling clothes and lying in a manger.»","Then there were many angels praising God and saying: Glory to God in the highest, and on earth peace to people of good will.","When the angels had gone, the shepherds said to one another: «Let us go to Bethlehem and see what has happened.» They hurried there and found Mary and Joseph, and the child lying in the manger. They told everything they had heard. Mary kept all these words in her heart and pondered them."]},
 {id:"st-2",ref:"ApG 9:1-19",
  no:["Saulus var en mann med brennende iver. Han mente at de som fulgte Jesus, tok feil, og han ville fange dem og føre dem til Jerusalem. Nå var han på vei til byen Damaskus med brev fra øverstepresten.","Midt på veien lyste det plutselig et lys fra himmelen rundt ham. Han falt til jorden og hørte en stemme: «Saul, Saul, hvorfor forfølger du meg?» «Hvem er du, Herre?» spurte han. «Jeg er Jesus, som du forfølger,» svarte stemmen. «Stå opp og gå inn i byen, så skal du få vite hva du skal gjøre.»","Saulus reiste seg, men han kunne ikke se. Mennene som var med ham, førte ham ved hånden inn i Damaskus. I tre dager var han blind, og han spiste og drakk ikke.","Så sendte Herren disippelen Ananias til ham. Ananias var redd, men han gikk. Han la hendene på Saulus og sa: «Bror Saul, Herren Jesus har sendt meg, så du skal få synet igjen og bli fylt av Den hellige ånd.» Det falt noe som skjell fra øynene hans, og han kunne se. Han ble døpt, og fra den dagen forkynte han Jesus."],
  en:["Saul was a man of burning zeal. He believed that those who followed Jesus were wrong, and he wanted to arrest them and bring them to Jerusalem. Now he was on his way to the city of Damascus with letters from the high priest.","In the middle of the road a light from heaven suddenly shone around him. He fell to the ground and heard a voice: «Saul, Saul, why do you persecute me?» «Who are you, Lord?» he asked. «I am Jesus, whom you are persecuting,» the voice answered. «Get up and go into the city, and you will be told what to do.»","Saul got up, but he could not see. The men with him led him by the hand into Damascus. For three days he was blind, and he neither ate nor drank.","Then the Lord sent a disciple named Ananias to him. Ananias was afraid, but he went. He laid his hands on Saul and said: «Brother Saul, the Lord Jesus has sent me, so that you may regain your sight and be filled with the Holy Spirit.» Something like scales fell from his eyes, and he could see. He was baptized, and from that day he proclaimed Jesus."]},
 {id:"st-3",ref:"Luk 10:25-37",
  no:["En lovkyndig mann spurte Jesus: «Hva skal jeg gjøre for å arve evig liv?» Jesus spurte hva som står i loven, og mannen svarte: «Du skal elske Herren din Gud av hele ditt hjerte, og din neste som deg selv.» «Du svarer riktig,» sa Jesus. «Gjør dette, så skal du leve.» Men mannen spurte: «Og hvem er min neste?»","Da fortalte Jesus: «En mann var på vei fra Jerusalem ned til Jeriko. Han falt i hendene på røvere, som slo ham og lot ham ligge halvdød. En prest kom samme vei, så ham og gikk forbi på den andre siden. En levitt kom også og gjorde det samme.","Men en samaritan, som var på reise, kom dit. Da han så ham, fikk han medfølelse. Han gikk bort, bandt om sårene hans og helte olje og vin på dem. Så løftet han ham opp på sitt eget dyr, førte ham til et herberge og tok vare på ham. Dagen etter ga han verten to denarer og sa: Ta vare på ham, og hva mer du bruker, skal jeg betale når jeg kommer tilbake.»","«Hvem av disse tre var en neste for den som falt blant røverne?» spurte Jesus. «Den som viste ham barmhjertighet,» svarte mannen. Og Jesus sa: «Gå du og gjør som han.»"],
  en:["A lawyer asked Jesus: «What must I do to inherit eternal life?» Jesus asked what is written in the Law, and the man answered: «You shall love the Lord your God with all your heart, and your neighbor as yourself.» «You have answered rightly,» said Jesus. «Do this and you will live.» But the man asked: «And who is my neighbor?»","Then Jesus told him: «A man was going down from Jerusalem to Jericho. He fell into the hands of robbers, who beat him and left him half dead. A priest came along the same road, saw him and passed by on the other side. A Levite came too and did the same.","But a Samaritan, who was traveling, came to where he was. When he saw him he was moved with compassion. He went to him, bandaged his wounds and poured oil and wine on them. Then he lifted him onto his own animal, took him to an inn and cared for him. The next day he gave the innkeeper two denarii and said: Take care of him, and whatever more you spend, I will repay you when I return.»","«Which of these three was a neighbor to the man who fell among the robbers?» asked Jesus. «The one who showed him mercy,» the man answered. And Jesus said: «Go and do likewise.»"]}
];

/* ---------- Lagring ---------- */
const jget=(k,d)=>{try{const v=JSON.parse(store.get(k,'null'));return v==null?d:v}catch(e){return d}};
const favs=()=>jget('cf_favs',[]);
const toggleFav=id=>{let f=favs();f=f.includes(id)?f.filter(x=>x!==id):[...f,id];store.set('cf_favs',JSON.stringify(f))};

/* ---------- Innhold ---------- */
function allItems(){
  const t=LN[lang], out={bible:[],guides:[],stories:[]};
  READINGS.forEach(r=>out.bible.push({id:r.id,kind:'bible',title:r[lang],sub:(lang==='no'?t.engNote+' · ':'')+r.ref,lang:'en',text:()=>refText(r.ref).then(v=>[r.en,...v])}));
  GUIDES.forEach((G,gi)=>G.L.forEach((L,li)=>out.guides.push({id:'gd-'+gi+'-'+li,kind:'guides',series:G[lang],title:L[lang][0],sub:G[lang]+' · '+t.ep+' '+(li+1),lang:'app',text:()=>Promise.resolve(L[lang])})));
  STORIES.forEach((S,i)=>out.stories.push({id:S.id,kind:'stories',title:t.stories[i],sub:S.ref,lang:'app',text:()=>Promise.resolve(S[lang])}));
  return out;
}
async function refText(ref){
  const m=ref.match(/^\s*([1-3]?[A-Za-zÆØÅæøå]+)\s+(\d+):(\d+)-(\d+)\s*$/); const id=findBook(m[1]); const d=await loadBook(id); const vs=d[+m[2]-1];
  return vs.slice(+m[3]-1,+m[4]);
}
function chunkText(parts){
  const out=[];
  parts.forEach(p=>{
    const sents=p.split(/(?<=[.!?»])\s+/);
    let buf='';
    sents.forEach(s=>{
      if(!s)return;
      if(s.length>230){const sub=s.split(/(?<=[;:,])\s+/);sub.forEach(x=>{if((buf+' '+x).length>200&&buf){out.push(buf);buf=x}else buf=(buf?buf+' ':'')+x})}
      else if((buf+' '+s).length>200&&buf){out.push(buf);buf=s}
      else buf=(buf?buf+' ':'')+s;
    });
    if(buf){out.push(buf);buf=''}
  });
  return out;
}

/* ---------- Stemme ---------- */
const TTS={chunks:[],i:0,playing:false,speed:+store.get('cf_speed','1'),item:null,queue:[],qi:0,lang:'en',tok:0,timer:null};
function pickVoice(l){
  const vs=speechSynthesis.getVoices(); if(!vs.length)return null;
  if(l==='en'){
    const gb=vs.filter(v=>/en[-_]GB/i.test(v.lang));
    return gb.find(v=>/daniel|arthur|oliver|male|george/i.test(v.name))||gb[0]||vs.find(v=>/^en/i.test(v.lang))||null;
  }
  const no=vs.filter(v=>/^(nb|no|nn)/i.test(v.lang));
  return no.find(v=>/henrik|finn|male|mann/i.test(v.name))||no[0]||null;
}
function wordsPerSec(){return 2.3*TTS.speed}
function secsOf(i0,i1){let w=0;for(let k=i0;k<i1&&k<TTS.chunks.length;k++)w+=TTS.chunks[k].split(/\s+/).length;return w/wordsPerSec()}
function speakChunk(){
  if(!TTS.playing)return;
  speechSynthesis.cancel(); const my=++TTS.tok; const text=TTS.chunks[TTS.i];
  if(text==null){finishItem();return}
  setTimeout(()=>{
    if(my!==TTS.tok||!TTS.playing)return;
    const u=new SpeechSynthesisUtterance(text); const v=pickVoice(TTS.lang);
    if(v){u.voice=v;u.lang=v.lang}else u.lang=TTS.lang==='en'?'en-GB':'nb-NO';
    u.rate=Math.min(2,0.9*TTS.speed); u.pitch=TTS.lang==='en'?0.8:0.85; u.volume=1;
    u.onend=()=>{if(my!==TTS.tok)return;TTS.i++;saveResume();uiTick();speakChunk()};
    u.onerror=e=>{if(my!==TTS.tok)return;if(e.error==='interrupted'||e.error==='canceled')return;TTS.i++;speakChunk()};
    speechSynthesis.speak(u);
  },70);
  uiTick();
}
function saveResume(){if(TTS.item)store.set('cf_resume',JSON.stringify({id:TTS.item.id,i:TTS.i}))}
async function startItem(item,queue,at){
  TTS.queue=queue||[item]; TTS.qi=Math.max(0,TTS.queue.findIndex(x=>x.id===item.id)); TTS.item=item;
  TTS.lang=item.lang==='en'?'en':lang;
  const parts=await item.text(); TTS.chunks=chunkText(parts); TTS.i=Math.min(at||0,Math.max(0,TTS.chunks.length-1));
  TTS.playing=true; MUS.start(); speakChunk(); setMedia(); buildPlayer(); showMini(); renderListen();
}
function pauseTTS(){TTS.playing=false;TTS.tok++;speechSynthesis.cancel();MUS.pause();uiTick()}
function resumeTTS(){if(!TTS.item)return;TTS.playing=true;MUS.start();speakChunk()}
function toggleTTS(){TTS.playing?pauseTTS():resumeTTS()}
function skip(sec){
  if(!TTS.item)return; let i=TTS.i;
  if(sec>0){let s=0;while(i<TTS.chunks.length-1&&s<sec){s+=secsOf(i,i+1);i++}}
  else{let s=0;while(i>0&&s<-sec){i--;s+=secsOf(i,i+1)}}
  TTS.i=i; saveResume(); if(TTS.playing)speakChunk();else uiTick();
}
function finishItem(){
  TTS.playing=false; MUS.pause(); store.set('cf_resume',JSON.stringify({id:TTS.item.id,i:0}));
  const nxt=TTS.queue[TTS.qi+1]; if(nxt){startItem(nxt,TTS.queue,0)}else{uiTick();renderListen()}
}
function nextItem(){const n=TTS.queue[TTS.qi+1];if(n){speechSynthesis.cancel();TTS.tok++;startItem(n,TTS.queue,0)}}
function setSpeed(){const ss=[0.8,1,1.15,1.3,1.5],k=(ss.indexOf(TTS.speed)+1)%ss.length;TTS.speed=ss[k];store.set('cf_speed',String(TTS.speed));if(TTS.playing)speakChunk();uiTick()}
function setMedia(){
  try{ if(!('mediaSession' in navigator)||!TTS.item)return;
    navigator.mediaSession.metadata=new MediaMetadata({title:TTS.item.title,artist:'Catholic Faith',album:TTS.item.sub,artwork:[{src:'assets/jesus.webp',sizes:'512x512',type:'image/webp'}]});
    const h=(a,f)=>{try{navigator.mediaSession.setActionHandler(a,f)}catch(e){}};
    h('play',resumeTTS);h('pause',pauseTTS);h('seekbackward',()=>skip(-15));h('seekforward',()=>skip(15));h('nexttrack',nextItem);
  }catch(e){}
}

/* ---------- Musikk: ambient (laget i appen) + egne filer (kun på enheten) ---------- */
const IDB={
  db:null,
  open(){return this.db?Promise.resolve(this.db):new Promise((res,rej)=>{const r=indexedDB.open('cf_music',1);r.onupgradeneeded=()=>r.result.createObjectStore('tracks',{keyPath:'id'});r.onsuccess=()=>{this.db=r.result;res(r.result)};r.onerror=()=>rej(r.error)})},
  async all(){try{const d=await this.open();return await new Promise(res=>{const q=d.transaction('tracks').objectStore('tracks').getAll();q.onsuccess=()=>res(q.result||[]);q.onerror=()=>res([])})}catch(e){return []}},
  async put(t){const d=await this.open();return new Promise((res,rej)=>{const q=d.transaction('tracks','readwrite').objectStore('tracks').put(t);q.onsuccess=()=>res();q.onerror=()=>rej(q.error)})},
  async del(id){const d=await this.open();return new Promise(res=>{const q=d.transaction('tracks','readwrite').objectStore('tracks').delete(id);q.onsuccess=()=>res();q.onerror=()=>res()})}
};
const MUS={
  on:store.get('cf_mon','1')==='1', sel:store.get('cf_msel','ambient'), vol:+store.get('cf_mvol','0.2'), tracks:[],
  ctx:null,master:null,oscs:[],audio:null,url:null,running:false,
  save(){store.set('cf_mon',this.on?'1':'0');store.set('cf_msel',this.sel);store.set('cf_mvol',String(this.vol))},
  async load(){this.tracks=(await IDB.all()).map(t=>({id:t.id,name:t.name,blob:t.blob}))},
  start(){
    if(!this.on){this.stop();return}
    this.running=true;
    let sel=this.sel; if(sel==='shuffle'){ if(!this.tracks.length)sel='ambient'; else sel=this.tracks[Math.floor(Math.random()*this.tracks.length)].id }
    if(sel!=='ambient'&&!this.tracks.find(t=>t.id===sel))sel='ambient';
    if(sel==='ambient'){this.stopFile();this.startAmbient()} else {this.stopAmbient();this.playFile(sel)}
  },
  pause(){this.running=false;this.stopAmbient();if(this.audio)this.audio.pause()},
  stop(){this.running=false;this.stopAmbient();this.stopFile()},
  setVol(v){this.vol=v;this.save();if(this.master&&this.ctx)this.master.gain.setTargetAtTime(v*0.5,this.ctx.currentTime,0.2);if(this.audio)this.audio.volume=v},
  startAmbient(){
    if(this.oscs.length)return;
    try{
      const C=window.AudioContext||window.webkitAudioContext; this.ctx=this.ctx||new C(); const ctx=this.ctx; if(ctx.state==='suspended')ctx.resume();
      this.master=ctx.createGain(); this.master.gain.value=0;
      const lp=ctx.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=1100;
      const conv=ctx.createConvolver(); const len=ctx.sampleRate*3.5, buf=ctx.createBuffer(2,len,ctx.sampleRate);
      for(let c=0;c<2;c++){const d=buf.getChannelData(c);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,2.4)}
      conv.buffer=buf; const wet=ctx.createGain(); wet.gain.value=0.7; const dry=ctx.createGain(); dry.gain.value=0.5;
      lp.connect(dry);lp.connect(conv);conv.connect(wet);dry.connect(this.master);wet.connect(this.master);this.master.connect(ctx.destination);
      const notes=[[73.42,.5],[146.83,.45],[220,.3],[293.66,.22],[369.99,.22],[440,.14],[554.37,.1]];
      notes.forEach(([f,a],k)=>{
        const o=ctx.createOscillator();o.type=k%2?'triangle':'sine';o.frequency.value=f;o.detune.value=(k%3-1)*4;
        const g=ctx.createGain();g.gain.value=a*0.5;
        const lfo=ctx.createOscillator();lfo.frequency.value=0.05+k*0.017;const lg=ctx.createGain();lg.gain.value=a*0.35;lfo.connect(lg);lg.connect(g.gain);
        o.connect(g);g.connect(lp);o.start();lfo.start();this.oscs.push(o,lfo);
      });
      this.master.gain.setTargetAtTime(this.vol*0.5,ctx.currentTime,1.2);
    }catch(e){}
  },
  stopAmbient(){
    if(!this.oscs.length||!this.ctx)return; const ctx=this.ctx,m=this.master,os=this.oscs; this.oscs=[];
    try{m.gain.setTargetAtTime(0,ctx.currentTime,0.25)}catch(e){}
    setTimeout(()=>{os.forEach(o=>{try{o.stop()}catch(e){}});try{m.disconnect()}catch(e){}},1200);
  },
  playFile(id){
    const t=this.tracks.find(x=>x.id===id); if(!t)return;
    if(this.audio&&this.audio.__id===id){this.audio.volume=this.vol;this.audio.play().catch(()=>{});return}
    this.stopFile(); this.url=URL.createObjectURL(t.blob); const a=new Audio(this.url); a.__id=id; a.volume=this.vol; a.loop=(this.sel!=='shuffle'&&this.tracks.length<2);
    a.onended=()=>{if(this.running)this.start()};
    this.audio=a; a.play().catch(()=>{});
  },
  stopFile(){if(this.audio){this.audio.pause();this.audio.removeAttribute('src');this.audio=null}if(this.url){URL.revokeObjectURL(this.url);this.url=null}},
  async add(files){
    for(const f of files){const id='m'+Date.now()+Math.random().toString(36).slice(2,6);const name=f.name.replace(/\.[^.]+$/,'');await IDB.put({id,name,blob:f});}
    await this.load(); buildMusicPanel();
  },
  async remove(id){await IDB.del(id);if(this.sel===id)this.sel='ambient';await this.load();this.save();if(this.running)this.start();buildMusicPanel()}
};
MUS.load();

/* ---------- Visning ---------- */
let lt='bible';
const fmtMin=n=>Math.max(1,Math.round(n/60));
function est(item){return null}
function renderListen(){
  const root=$('#listenRoot'); if(!root)return; const t=LN[lang]; root.innerHTML=''; const w=mk('div','ls rd'); root.appendChild(w);
  w.appendChild(mk('h1','',t.title)); w.appendChild(mk('div','lead',t.lead));
  const A=allItems(), ALL=[...A.bible,...A.guides,...A.stories];
  // dagens leksjon
  const g=dayOfYear%GUIDES.length; let l=GUIDES[g].L.findIndex((_,i)=>!gdone(g,i)); if(l<0)l=0;
  const dItem=A.guides.find(x=>x.id==='gd-'+g+'-'+l);
  const allDone=GUIDES.every((G,gi)=>G.L.every((_,li)=>gdone(gi,li)));
  if(allDone&&typeof genHero==='function'){w.appendChild(genHero('lesson'))}
  else{
  const h=mk('button','hero'); const hx=mk('div'); hx.appendChild(mk('small','',t.today)); hx.appendChild(mk('b','',dItem.title)); h.appendChild(hx); h.appendChild(mk('div','pl','▶'));
  h.onclick=()=>startItem(dItem,A.guides.filter(x=>x.id.startsWith('gd-'+g+'-')),0); w.appendChild(h);}
  // fortsett
  const rs=jget('cf_resume',null), ri=rs&&[...ALL,...(typeof genArchive==='function'?[...genArchive('story'),...genArchive('lesson')].map(genItem):[])].find(x=>x.id===rs.id);
  if(ri&&rs.i>0){const r=mk('button','hero alt'); const rx=mk('div'); rx.appendChild(mk('small','',t.resume)); rx.appendChild(mk('b','',ri.title)); r.appendChild(rx); r.appendChild(mk('div','pl','▶')); r.onclick=()=>startItem(ri,A[ri.kind]||[ri],rs.i); w.appendChild(r)}
  const seg=mk('div','seg'); seg.style.marginTop='16px';
  Object.entries(t.tabs).forEach(([k,lbl])=>{const b=mk('button',lt===k?'on':'',lbl);b.onclick=()=>{lt=k;renderListen()};seg.appendChild(b)}); w.appendChild(seg);
  const fv=favs();
  const row=(it,list)=>{
    const r=mk('button','row2'+(TTS.item&&TTS.item.id===it.id?' now':'')); r.appendChild(mk('div','ic',TTS.item&&TTS.item.id===it.id&&TTS.playing?'❚❚':'▶'));
    const tx=mk('div','tx'); tx.appendChild(mk('b','',it.title)); tx.appendChild(mk('small','',it.sub)); r.appendChild(tx);
    const f=mk('span','fav'+(fv.includes(it.id)?' on':''),fv.includes(it.id)?'♥':'♡'); f.onclick=e=>{e.stopPropagation();toggleFav(it.id);renderListen()}; r.appendChild(f);
    r.onclick=()=>startItem(it,list,0); return r;
  };
  const hasGen=typeof genHero==='function';
  if(lt==='bible')A.bible.forEach(it=>w.appendChild(row(it,A.bible)));
  else if(lt==='stories'){if(hasGen){const hg=genHero('story',true);hg.style.marginTop='12px';w.appendChild(hg);w.appendChild(genRows('story',row))}A.stories.forEach(it=>w.appendChild(row(it,A.stories)))}
  else if(lt==='guides'){if(hasGen){const hg=genHero('lesson',true);hg.style.marginTop='12px';w.appendChild(hg);w.appendChild(genRows('lesson',row))}GUIDES.forEach((G,gi)=>{w.appendChild(mk('div','gh',G[lang]));const list=A.guides.filter(x=>x.id.startsWith('gd-'+gi+'-'));list.forEach(it=>w.appendChild(row(it,list)))})}
  else {const list=ALL.filter(x=>fv.includes(x.id)); if(!list.length)w.appendChild(mk('div','empty2',t.noFav)); list.forEach(it=>w.appendChild(row(it,list)))}
}

/* Mini-spiller og full spiller */
function showMini(){
  let m=$('#mini'); if(!m){m=mk('div');m.id='mini';m.innerHTML='<div class="t"></div><button class="pb" aria-label="Play/Pause"></button><div class="pr" style="width:0"></div>';$('#app').appendChild(m);
    m.addEventListener('click',e=>{if(e.target.closest('.pb')){toggleTTS();return}openPlayer()})}
  m.classList.add('show'); uiTick();
}
function buildPlayer(){
  let p=$('#player'); if(!p){p=mk('div');p.id='player';$('#app').appendChild(p)}
  const t=LN[lang]; const it=TTS.item; if(!it)return;
  p.innerHTML=`<div class="top"><button class="x" id="pClose" aria-label="Lukk">⌄</button><button class="x" id="pFav" aria-label="${t.fav}"></button></div>
  <div class="art" id="pArt"></div><h2 id="pTitle"></h2><div class="sub2" id="pSub"></div><div class="line" id="pLine"></div>
  <div class="prog" id="pProg"><i id="pBar"></i></div>
  <div class="ctl"><button id="pBack">−15</button><button class="big" id="pPlay"></button><button id="pFwd">+15</button></div>
  <div class="ctl2"><button id="pSpd"></button><button id="pNext">${t.next} ›</button></div>
  <div class="mus" id="pMus"></div>`;
  $('#pTitle').textContent=it.title; $('#pSub').textContent=it.sub;
  $('#pClose').onclick=closePlayer; $('#pPlay').onclick=toggleTTS; $('#pBack').onclick=()=>skip(-15); $('#pFwd').onclick=()=>skip(15); $('#pSpd').onclick=setSpeed; $('#pNext').onclick=nextItem;
  $('#pFav').onclick=()=>{toggleFav(it.id);uiTick();renderListen()};
  $('#pProg').onclick=e=>{const r=e.currentTarget.getBoundingClientRect();TTS.i=Math.floor((e.clientX-r.left)/r.width*TTS.chunks.length);saveResume();if(TTS.playing)speakChunk();else uiTick()};
  buildMusicPanel();
}
function openPlayer(){if(!TTS.item)return;buildPlayer();requestAnimationFrame(()=>$('#player').classList.add('open'));uiTick()}
function closePlayer(){const p=$('#player');if(p)p.classList.remove('open')}
function uiTick(){
  const it=TTS.item; if(!it)return; const pct=TTS.chunks.length?Math.min(100,TTS.i/TTS.chunks.length*100):0;
  const m=$('#mini'); if(m){m.querySelector('.t').textContent=it.title;m.querySelector('.pb').textContent=TTS.playing?'❚❚':'▶';m.querySelector('.pr').style.width=pct+'%'}
  const pl=$('#pPlay'); if(pl){pl.textContent=TTS.playing?'❚❚':'▶';$('#pBar').style.width=pct+'%';$('#pLine').textContent=TTS.chunks[TTS.i]||'';$('#pSpd').textContent=TTS.speed+'×';$('#pArt').classList.toggle('pulse',TTS.playing);
    const f=$('#pFav'); if(f){const on=favs().includes(it.id);f.textContent=on?'♥':'♡';f.style.color=on?'#C0392B':''}}
}
function buildMusicPanel(){
  const box=$('#pMus'); if(!box)return; const t=LN[lang]; box.innerHTML='';
  const h=mk('div','h'); h.appendChild(mk('span','',t.music)); const sw=mk('div','sw'+(MUS.on?' on':'')); sw.onclick=()=>{MUS.on=!MUS.on;MUS.save();if(MUS.on&&TTS.playing)MUS.start();else MUS.stop();buildMusicPanel()}; h.appendChild(sw); box.appendChild(h);
  const chips=mk('div','chips');
  const chip=(label,val)=>{const b=mk('button',MUS.sel===val?'on':'',label);b.onclick=()=>{MUS.sel=val;MUS.save();if(TTS.playing&&MUS.on){MUS.stop();MUS.start()}buildMusicPanel()};return b};
  chips.appendChild(chip(t.ambient,'ambient'));
  MUS.tracks.forEach(tr=>{chips.appendChild(chip(tr.name,tr.id))});
  if(MUS.tracks.length>1)chips.appendChild(chip(t.shuffle,'shuffle'));
  box.appendChild(chips);
  const v=mk('div','vol'); v.appendChild(mk('span','',t.vol)); const rg=mk('input'); rg.type='range'; rg.min='0'; rg.max='0.6'; rg.step='0.02'; rg.value=MUS.vol; rg.oninput=()=>MUS.setVol(+rg.value); v.appendChild(rg); box.appendChild(v);
  MUS.tracks.forEach(tr=>{ if(MUS.sel===tr.id){const d=mk('button','addm','✕ '+tr.name);d.style.borderStyle='solid';d.style.borderColor='var(--line)';d.style.color='#C0392B';d.onclick=()=>MUS.remove(tr.id);box.appendChild(d)} });
  const add=mk('label','addm',t.addm); const fi=mk('input'); fi.type='file'; fi.accept='audio/*,video/*'; fi.multiple=true; fi.style.display='none'; fi.onchange=()=>{if(fi.files.length)MUS.add([...fi.files])}; add.appendChild(fi); box.appendChild(add);
  box.appendChild(mk('div','mnote',t.mnote));
  if(!pickVoice(TTS.lang)&&speechSynthesis.getVoices().length)box.appendChild(mk('div','mnote',t.nov));
}
/* Start */
if('speechSynthesis' in window){speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=()=>{}}
/* Lås opp lyd ved første trykk (iPhone krever det) */
let unlocked=false;
addEventListener('pointerdown',()=>{
  if(unlocked)return; unlocked=true;
  try{const C=window.AudioContext||window.webkitAudioContext;MUS.ctx=MUS.ctx||new C();MUS.ctx.resume()}catch(e){}
  try{const u=new SpeechSynthesisUtterance(' ');u.volume=0;speechSynthesis.speak(u)}catch(e){}
},{passive:true});
renderListen();
