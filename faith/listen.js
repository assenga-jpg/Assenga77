/* ---------- LYTT: opplesning (stemme på enheten), spiller og bakgrunnsmusikk ---------- */
const LN={
 no:{title:"Lytt",lead:"Bibelen, guider og historier. Lytt rolig, også i bilen.",today:"Dagens leksjon",resume:"Fortsett der du slapp",
     tabs:{bible:"Bibel",guides:"Guider",stories:"Historier",favs:"Favoritter"},engNote:"Engelsk tekst",aiTr:"AI-oversatt",min:"min",
     noFav:"Ingen favoritter ennå. Trykk på hjertet ved noe du vil lagre.",ep:"Del",
     speed:"Hastighet",music:"Bakgrunnsmusikk",ambient:"Rolig ambient",shuffle:"Tilfeldig",addm:"+ Legg til egen musikk",
     mnote:"Musikken du legger til lagres bare på denne enheten og lastes aldri opp. Du kan velge lydfiler eller videoer, og appen spiller bare lyden.",
     prev:"Prøv avspilling",badnote:"⚠ Telefonen klarer ikke å spille denne filen. Prøv en lydfil (mp3 eller m4a), eller en video med lyd.",mylist:"Min musikk",rename:"Gi nytt navn",save:"Lagre",cancel:"Avbryt",delq:"Slette denne lydfilen fra appen?",nameph:"Navn på lydfilen",
     frm:"Fra",chap:"kapittel",vers:"vers",to:"til",story:"Historien",reading:"Lesning",
     vol:"Volum",next:"Neste",fav:"Favoritt",nov:"Fant ingen stemme på denne enheten for dette språket. Lyden bruker enhetens standardstemme.",nowp:"Spiller nå",
     audio:"Lyd og musikk",audioSub:"Legg til din egen musikk, velg stemme",loadingAudio:"Lager lyd …",vAI:"AI-stemme",vDev:"enhetens stemme",voice:"Stemme",vEn:"Engelsk stemme",vNo:"Norsk stemme",auto:"Automatisk",try:"Prøv",
     tryEn:"The Lord is my shepherd; I shall not want.",tryNo:"Herren er min hyrde, jeg mangler ingenting.",
     vhint:"Tips: på iPhone kan du laste ned bedre stemmer under Innstillinger › Tilgjengelighet › Opplest innhold › Stemmer. Velg for eksempel engelsk (Storbritannia) og en utvidet eller premium-stemme. Den dukker opp i listen her.",
     stories:["Natten i Betlehem","Veien til Damaskus","Den barmhjertige samaritan"]},
 en:{title:"Listen",lead:"The Bible, guides and stories. Listen calmly, even in the car.",today:"Today's lesson",resume:"Continue where you left off",
     tabs:{bible:"Bible",guides:"Guides",stories:"Stories",favs:"Favorites"},engNote:"English text",aiTr:"AI-translated",min:"min",
     noFav:"No favorites yet. Tap the heart on anything you want to keep.",ep:"Part",
     speed:"Speed",music:"Background music",ambient:"Calm ambient",shuffle:"Shuffle",addm:"+ Add your own music",
     mnote:"Music you add is stored only on this device and is never uploaded. You can pick audio files or videos; the app plays just the sound.",
     prev:"Try playing it",badnote:"⚠ The phone cannot play this file. Try an audio file (mp3 or m4a), or a video with sound.",mylist:"My music",rename:"Rename",save:"Save",cancel:"Cancel",delq:"Delete this audio file from the app?",nameph:"Name of the file",
     frm:"From",chap:"chapter",vers:"verse",to:"to",story:"The story",reading:"Reading",
     vol:"Volume",next:"Next",fav:"Favorite",nov:"No voice found on this device for this language. Audio uses the device's default voice.",nowp:"Now playing",
     audio:"Audio and music",audioSub:"Add your own music, choose a voice",loadingAudio:"Preparing audio …",vAI:"AI voice",vDev:"device voice",voice:"Voice",vEn:"English voice",vNo:"Norwegian voice",auto:"Automatic",try:"Try",
     tryEn:"The Lord is my shepherd; I shall not want.",tryNo:"Herren er min hyrde, jeg mangler ingenting.",
     vhint:"Tip: on iPhone you can download better voices under Settings › Accessibility › Spoken Content › Voices. Pick for example English (UK) and an enhanced or premium voice. It will show up in the list here.",
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

/* lange versjoner (ca. 4 min) fra stories-long.js */
if(typeof STORIES_LONG!=='undefined')STORIES.forEach(S=>{const L=STORIES_LONG[S.id];if(L&&L.no&&L.en){S.no=L.no;S.en=L.en}});

/* ---------- Lagring ---------- */
const jget=(k,d)=>{try{const v=JSON.parse(store.get(k,'null'));return v==null?d:v}catch(e){return d}};
const favs=()=>jget('cf_favs',[]);
const toggleFav=id=>{let f=favs();f=f.includes(id)?f.filter(x=>x!==id):[...f,id];store.set('cf_favs',JSON.stringify(f))};

/* Opplest kilde: «Fra Lukas, kapittel 2, vers 1 til 20.» sies før hver historie og lesning */
function spokenFrom(ref,l){
  try{
    l=l==='en'?'en':'no';
    const m=String(ref||'').match(/^\s*([1-3]?[A-Za-zÆØÅæøå]+)\s+(\d+):(\d+)(?:-(\d+))?\s*$/); if(!m)return '';
    const id=findBook(m[1]); const b=id&&BIDX&&BIDX.find(x=>x.id===id); if(!b)return '';
    let nm=b[l]||''; if(!nm)return '';
    nm=l==='en'?nm.replace(/^III /,'Third ').replace(/^II /,'Second ').replace(/^I /,'First '):nm.replace(/^1\. /,'Første ').replace(/^2\. /,'Andre ').replace(/^3\. /,'Tredje ');
    const t=LN[l], v1=+m[3], v2=m[4]?+m[4]:v1, range=v2>v1;
    return t.frm+' '+nm+', '+t.chap+' '+m[2]+', '+(range&&l==='en'?'verses':t.vers)+' '+v1+(range?' '+t.to+' '+v2:'')+'.';
  }catch(e){return ''}
}
/* åpningen som leses opp først: tittel + hvor historien står i Bibelen */
function storyIntro(title,ref,l,kind){
  l=l==='en'?'en':'no'; const t=LN[l];
  return (kind==='reading'?t.reading:t.story)+': '+String(title||'').replace(/[«»]/g,'')+'. '+spokenFrom(ref,l);
}

/* ---------- Innhold ---------- */
function allItems(){
  const t=LN[lang], out={bible:[],guides:[],stories:[]};
  READINGS.forEach(r=>{
    const isNT=findBook(r.ref.split(' ')[0])>=47;
    const it={id:r.id,kind:'bible',title:r[lang],sub:lang==='no'?(isNT?r.ref:r.ref+' · '+t.aiTr):r.ref,lang:lang==='no'?'app':'en'};
    it.text=async()=>{const L=await refTextL(r.ref); const no=(L.tr==='nb'||L.tr==='ai'); it.lang=no?'app':'en'; return [storyIntro(r[no?'no':'en'],r.ref,no?'no':'en','reading'),...L.parts]};
    out.bible.push(it);
  });
  GUIDES.forEach((G,gi)=>G.L.forEach((L,li)=>out.guides.push({id:'gd-'+gi+'-'+li,kind:'guides',series:G[lang],title:L[lang][0],sub:G[lang]+' · '+t.ep+' '+(li+1),lang:'app',text:()=>Promise.resolve(L[lang])})));
  STORIES.forEach((S,i)=>out.stories.push({id:S.id,kind:'stories',title:t.stories[i],sub:S.ref,lang:'app',text:()=>Promise.resolve([storyIntro(t.stories[i],S.ref,lang,'story'),...S[lang]])}));
  return out;
}
async function refTextL(ref,forceEn){
  const m=ref.match(/^\s*([1-3]?[A-Za-zÆØÅæøå]+)\s+(\d+):(\d+)-(\d+)\s*$/); const id=findBook(m[1]);
  const P=await passage(id,+m[2],+m[3],+m[4],forceEn); return {parts:P.vs,tr:P.tr};
}
const refText=async(ref,en)=>(await refTextL(ref,en)).parts;
function resetPlayer(){try{pauseTTS()}catch(e){} try{stopVoice()}catch(e){} TTS.item=null;TTS.chunks=[];TTS.i=0;TTS.queue=[];TTS.loading=false;TTS.mixed=false;TTS.voiceBlob=null;TTS.pre=null;TTS.preFail=null;TTS.keep=false;try{MUS.stop()}catch(e){} const m=$('#mini');if(m){m.classList.remove('show');const tt=m.querySelector('.t');if(tt)tt.textContent=''}const p=$('#player');if(p)p.remove()}
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

/* ---------- Stemme: ekte lydfil fra serveren (AI-stemme), reserve = enhetens stemme ---------- */
const TTS={chunks:[],i:0,playing:false,loading:false,speed:+store.get('cf_speed','1'),item:null,queue:[],qi:0,lang:'en',tok:0,mode:'device',mixed:false,voiceBlob:null,el:null,dur:0,drag:false,lastSave:0,pre:null,preBusy:false,keep:false};
function pickVoice(l){
  const vs=speechSynthesis.getVoices(); if(!vs.length)return null;
  const saved=store.get('cf_voice_'+(l==='en'?'en':'no'),''); if(saved){const sv=vs.find(v=>v.name===saved);if(sv)return sv}
  if(l==='en'){
    const gb=vs.filter(v=>/en[-_]GB/i.test(v.lang));
    return gb.find(v=>/daniel|arthur|oliver|male|george/i.test(v.name))||gb[0]||vs.find(v=>/^en/i.test(v.lang))||null;
  }
  const no=vs.filter(v=>/^(nb|no|nn)/i.test(v.lang));
  return no.find(v=>/henrik|finn|male|mann/i.test(v.name))||no[0]||null;
}
/* tid og fremdrift (like for lydfil og enhetsstemme) */
const baseRate=()=>1;   // Azure-stemmen leser i naturlig tempo   // AI-stemmen leser fort, så vi tar den litt roligere
function wordsPerSec(){return 2.3*TTS.speed}
function secsOf(i0,i1){let w=0;for(let k=i0;k<i1&&k<TTS.chunks.length;k++)w+=TTS.chunks[k].split(/\s+/).length;return w/wordsPerSec()}
function curPos(){return TTS.keep?0:TTS.mode==='audio'&&TTS.el?(TTS.el.currentTime||0):secsOf(0,TTS.i)}
function curDur(){return TTS.keep?0:TTS.mode==='audio'&&TTS.el&&isFinite(TTS.el.duration)?TTS.el.duration:secsOf(0,TTS.chunks.length)}
function curFrac(){const d=curDur();return d>0?Math.min(1,curPos()/d):0}
function fmtT(s){s=Math.max(0,Math.round(s));return Math.floor(s/60)+':'+String(s%60).padStart(2,'0')}
function lineAt(){
  if(!TTS.chunks.length)return '';
  if(TTS.mode!=='audio')return TTS.chunks[TTS.i]||'';
  const tot=TTS.chunks.reduce((a,c)=>a+c.length,0), f=curFrac()*tot; let acc=0;
  for(const c of TTS.chunks){acc+=c.length;if(f<=acc)return c}
  return TTS.chunks[TTS.chunks.length-1];
}
function saveResume(force){
  if(!TTS.item)return; const now=Date.now(); if(!force&&now-TTS.lastSave<2000)return; TTS.lastSave=now;
  store.set('cf_resume',JSON.stringify({id:TTS.item.id,f:Math.round(curFrac()*1000)/1000}));
}
/* hent talen som lydfil (lagret på enheten etter første gang) */
async function getVoiceBlob(text,l){
  const key='tts2|'+l+'|'+fnv(text); const c=await KV.get(key); if(c&&c.size>500)return c;
  const r=await fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({tts:1,lang:l,text})});
  if(!r.ok){let e='fail';try{e=(await r.json()).error}catch(x){}throw new Error(e)}
  const b=await r.blob(); if(b.size<500)throw new Error('empty');
  await KV.set(key,b); try{qRefresh()}catch(e){}
  try{const ks=jget('cf_ttskeys',[]).filter(x=>x!==key);ks.push(key);while(ks.length>18){const old=ks.shift();await KV.set(old,undefined)}store.set('cf_ttskeys',JSON.stringify(ks))}catch(e){}
  return b;
}
function voiceEl(){
  if(TTS.el)return TTS.el;
  const a=new Audio(); a.preload='auto'; a.setAttribute('playsinline',''); a.style.display='none'; document.body.appendChild(a);
  a.addEventListener('timeupdate',()=>{if(TTS.mode!=='audio'||TTS.keep)return;saveResume();uiTick();posState();if((a.currentTime||0)>6)prefetchNext()});
  a.addEventListener('ended',()=>{if(TTS.mode==='audio'&&!TTS.keep)finishItem()});
  a.addEventListener('pause',()=>{if(TTS.mode==='audio'&&!TTS.keep&&TTS.playing&&!a.ended&&!TTS.seeking){TTS.playing=false;mPause();uiTick()}});
  a.addEventListener('play',()=>{if(TTS.mode==='audio'&&!TTS.keep&&!TTS.playing&&TTS.item){TTS.playing=true;mStart();uiTick()}});
  a.addEventListener('loadedmetadata',()=>{if(TTS.keep)return;TTS.dur=a.duration;uiTick()});
  TTS.el=a; return a;
}
/* Forhåndslaget neste del: lyd + musikk er klar før denne er ferdig, så avspillingen går rett videre (også med låst skjerm) */
const MSIG=()=>[MUS.on,MUS.sel,MUS.vol,MUS.tracks.length].join('|');
async function prefetchNext(){
  const nxt=TTS.queue[TTS.qi+1]; if(!nxt||TTS.preBusy||TTS.mode!=='audio'||TTS.preFail===nxt.id)return;
  if(TTS.pre&&TTS.pre.id===nxt.id&&TTS.pre.sig===MSIG())return;
  TTS.preBusy=true; const my=TTS.tok, sig=MSIG();
  try{
    const parts=await nxt.text(); const l=nxt.lang==='en'?'en':lang;
    const voice=await getVoiceBlob(parts.join('\n\n'),l);
    let play=voice, mixed=false; if(MUS.on){try{const m=await mixVoiceMusic(voice); if(m){play=m;mixed=true}}catch(e){}}
    if(my===TTS.tok)TTS.pre={id:nxt.id,parts,l,voice,play,mixed,sig};
  }catch(e){TTS.preFail=nxt.id}
  TTS.preBusy=false;
}
function playPrefetched(item,P){
  const a=TTS.el, old=TTS.url; TTS.tok++; try{speechSynthesis.cancel()}catch(e){}
  TTS.qi=TTS.queue.findIndex(x=>x.id===item.id); TTS.item=item; TTS.pre=null; TTS.keep=false; a.loop=false;
  TTS.chunks=chunkText(P.parts); TTS.i=0; TTS.mode='audio'; TTS.lang=P.l; TTS.dur=0; TTS.voiceBlob=P.voice; TTS.mixed=P.mixed; TTS.loading=false;
  if(P.mixed)MUS.stop();
  TTS.url=URL.createObjectURL(P.play); a.src=TTS.url; a.playbackRate=TTS.speed*baseRate();
  TTS.playing=true; mStart(); a.play().then(()=>uiTick()).catch(()=>{TTS.playing=false;mPause();uiTick()});
  if(old)URL.revokeObjectURL(old);
  setMedia(); buildPlayer(); showMini(); renderListen();
}
function stopVoice(){TTS.tok++;TTS.keep=false;try{speechSynthesis.cancel()}catch(e){} if(TTS.el){TTS.el.loop=false;TTS.el.pause();if(TTS.url){URL.revokeObjectURL(TTS.url);TTS.url=null}TTS.el.removeAttribute('src');try{TTS.el.load()}catch(e){}}}
/* enhetsstemme (reserve) */
function speakChunk(){
  if(!TTS.playing||TTS.mode!=='device')return;
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
/* ---------- Miks stemme + musikk til ÉN lydfil på enheten (da virker låst skjerm, spoling og låseskjerm-kontroller som i en podcast) ---------- */
function encodeWav(buf){
  const d=buf.getChannelData(0), n=d.length, sr=buf.sampleRate, ab=new ArrayBuffer(44+n*2), v=new DataView(ab);
  const ws=(p,s)=>[...s].forEach((c,i)=>v.setUint8(p+i,c.charCodeAt(0)));
  ws(0,'RIFF');v.setUint32(4,36+n*2,true);ws(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);ws(36,'data');v.setUint32(40,n*2,true);
  let o=44; for(let i=0;i<n;i++){const s=Math.max(-1,Math.min(1,d[i]));v.setInt16(o,s<0?s*0x8000:s*0x7fff,true);o+=2}
  return new Blob([ab],{type:'audio/wav'});
}
async function decodeBlobTmp(ctx,blob){return await ctx.decodeAudioData(await blob.arrayBuffer())}
async function mixVoiceMusic(voiceBlob){
  if(!MUS.on)return null;
  const C=window.AudioContext||window.webkitAudioContext, OC=window.OfflineAudioContext||window.webkitOfflineAudioContext; if(!C||!OC)return null;
  const tmp=new C(); const SR=44100;
  try{
    const vbuf=await decodeBlobTmp(tmp,voiceBlob); if(vbuf.duration>600)return null;   // for lange tekster: vanlig avspilling
    const frames=Math.ceil((vbuf.duration+1)*SR); const off=new OC(1,frames,SR);
    const vs=off.createBufferSource(); vs.buffer=vbuf; const vg=off.createGain(); vg.gain.value=0.85; vs.connect(vg); vg.connect(off.destination); vs.start(0);
    // musikk
    let sel=MUS.sel; const mine=MUS.tracks;
    if(sel!=='ambient'&&sel!=='shuffle'&&!mine.find(t=>t.id===sel))sel='ambient';
    if(sel==='shuffle'&&!mine.length)sel='ambient';
    const mg=off.createGain(); mg.gain.value=MUS.vol; mg.connect(off.destination);
    const total=vbuf.duration+1;
    if(sel==='ambient'){
      const lp=off.createBiquadFilter(); lp.type='lowpass'; lp.frequency.value=1100; lp.connect(mg);
      [[73.42,.5],[146.83,.45],[220,.3],[293.66,.22],[369.99,.22],[440,.14],[554.37,.1]].forEach(([f,a],k)=>{
        const o=off.createOscillator();o.type=k%2?'triangle':'sine';o.frequency.value=f;o.detune.value=(k%3-1)*4;
        const g=off.createGain();g.gain.value=a*0.5; const lfo=off.createOscillator();lfo.frequency.value=0.05+k*0.017;const lg=off.createGain();lg.gain.value=a*0.35;lfo.connect(lg);lg.connect(g.gain);
        o.connect(g);g.connect(lp);o.start(0);lfo.start(0);o.stop(total);lfo.stop(total);
      });
      mg.gain.value=MUS.vol*1.4;
    } else {
      let order=sel==='shuffle'?[...mine].sort(()=>Math.random()-.5):[mine.find(t=>t.id===sel)];
      let t0=0, guard=0, placed=0; const dcache=new Map();
      while(t0<total&&guard++<12){
        const before=placed;
        for(const tr of order){
          if(t0>=total)break;
          if(!tr)continue;
          let mb=dcache.get(tr.id);
          if(!mb){
            try{ const src0=tr.blob.type==='audio/aac'?await adtsHead(tr.blob,total+3):tr.blob; mb=await decodeBlobTmp(tmp,src0); dcache.set(tr.id,mb) }
            catch(e){ try{MUS.bad[tr.id]=1}catch(x){} continue }
          }
          placed++;
          const src=off.createBufferSource(); src.buffer=mb; const g=off.createGain(); src.connect(g); g.connect(mg);
          const dur=Math.min(mb.duration,total-t0), fade=Math.min(1.5,dur/3);
          g.gain.setValueAtTime(0,t0); g.gain.linearRampToValueAtTime(1,t0+fade); g.gain.setValueAtTime(1,Math.max(t0+fade,t0+dur-fade)); g.gain.linearRampToValueAtTime(0,t0+dur);
          src.start(t0,0,dur); t0+=Math.max(0.5,dur-0.5);
        }
        if(!order.length||placed===before)break;
      }
      if(!placed)return null;   // telefonen klarte ikke å lese sangen: spill den ved siden av stemmen i stedet (reserve)
    }
    const out=await off.startRendering();
    return encodeWav(out);
  } finally { try{tmp.close()}catch(e){} }
}

const mStart=()=>{if(!TTS.mixed)MUS.start()};   // musikk er allerede blandet inn i lydfilen når mixed=true
const mPause=()=>{if(!TTS.mixed)MUS.pause()};
let remixTimer=null;
function remixCurrent(){
  if(TTS.mode!=='audio'||!TTS.voiceBlob||!TTS.el||!TTS.item)return false;
  clearTimeout(remixTimer);
  remixTimer=setTimeout(async()=>{
    const el=TTS.el, my=TTS.tok; TTS.seeking=true;
    let playBlob=TTS.voiceBlob, mixed=false;
    if(MUS.on){try{const m=await mixVoiceMusic(TTS.voiceBlob); if(m){playBlob=m;mixed=true}}catch(e){}}
    if(my!==TTS.tok){TTS.seeking=false;return}
    const pos=el.currentTime||0, was=TTS.playing;   // posisjon i det øyeblikket filen byttes (lyden går videre mens miksen lages)
    TTS.mixed=mixed; if(mixed)MUS.stop();
    const old=TTS.url; TTS.url=URL.createObjectURL(playBlob); el.src=TTS.url; el.playbackRate=TTS.speed*baseRate();
    el.addEventListener('loadedmetadata',()=>{
      try{el.currentTime=Math.min(pos,Math.max(0,el.duration-0.2))}catch(e){}
      if(was){el.play().catch(()=>{}); if(!mixed&&MUS.on)MUS.start()}
      setTimeout(()=>{TTS.seeking=false},600); uiTick();
    },{once:true});
    if(old)URL.revokeObjectURL(old);
  },450);
  return true;
}
/* iPhone tillater bare lyd som starter i et trykk: lås opp lydelementet med et stille klipp */
let SILENT=null;
function silentUrl(){
  if(SILENT)return SILENT; const n=1600,b=new ArrayBuffer(44+n),v=new DataView(b); const ws=(p,s)=>[...s].forEach((c,i)=>v.setUint8(p+i,c.charCodeAt(0)));
  ws(0,'RIFF');v.setUint32(4,36+n,true);ws(8,'WAVEfmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,8000,true);v.setUint32(28,8000,true);v.setUint16(32,1,true);v.setUint16(34,8,true);ws(36,'data');v.setUint32(40,n,true);
  for(let i=0;i<n;i++)v.setUint8(44+i,128); return SILENT=URL.createObjectURL(new Blob([b],{type:'audio/wav'}));
}
function unlockVoice(){try{const a=voiceEl();if(!a.src||a.src===SILENT||!TTS.item){a.src=silentUrl();a.play().then(()=>{if(a.src===SILENT)a.pause()}).catch(()=>{})}}catch(e){}}
async function startItem(item,queue,at,auto){
  if(auto&&TTS.el&&TTS.mode==='audio'){
    // automatisk neste uten ferdig lyd: hold lydøkten i live med et stille klipp mens neste del lages (viktig med låst skjerm)
    TTS.tok++; try{speechSynthesis.cancel()}catch(e){} const a=TTS.el; if(TTS.url){URL.revokeObjectURL(TTS.url);TTS.url=null}
    TTS.keep=true; a.loop=true; a.src=silentUrl(); a.play().catch(()=>{});
  } else { unlockVoice(); stopVoice(); }
  try{MUS.stopPreview()}catch(e){}
  const my=TTS.tok;
  TTS.queue=queue||[item]; TTS.qi=Math.max(0,TTS.queue.findIndex(x=>x.id===item.id)); TTS.item=item; TTS.playing=false; TTS.loading=true; TTS.chunks=[]; TTS.i=0; TTS.mode='audio'; TTS.dur=0; TTS.mixed=false; TTS.voiceBlob=null;
  buildPlayer(); showMini(); renderListen(); try{MUS.pause()}catch(e){}
  let parts; try{parts=await item.text()}catch(e){TTS.loading=false;if(TTS.keep){TTS.keep=false;if(TTS.el){TTS.el.loop=false;TTS.el.pause()}}uiTick();return}
  if(my!==TTS.tok)return;
  TTS.lang=item.lang==='en'?'en':lang; TTS.chunks=chunkText(parts);
  let blob=null; try{blob=await getVoiceBlob(parts.join('\n\n'),TTS.lang)}catch(e){blob=null}
  if(my!==TTS.tok)return;
  TTS.voiceBlob=blob; let playBlob=blob;
  if(blob&&MUS.on){try{const m=await mixVoiceMusic(blob); if(m){playBlob=m;TTS.mixed=true;MUS.stop()}}catch(e){TTS.mixed=false}}
  if(my!==TTS.tok)return;
  TTS.loading=false; const f=Math.min(0.98,Math.max(0,at||0));
  if(blob){
    TTS.mode='audio'; const a=voiceEl(); TTS.keep=false; a.loop=false; TTS.url=URL.createObjectURL(playBlob); a.src=TTS.url; a.playbackRate=TTS.speed*baseRate();
    const go=()=>{ if(my!==TTS.tok)return; if(f>0&&isFinite(a.duration))a.currentTime=f*a.duration; TTS.playing=true; mStart(); a.play().then(()=>uiTick()).catch(()=>{TTS.playing=false;mPause();uiTick()}) };
    if(a.readyState>=1)go(); else a.addEventListener('loadedmetadata',go,{once:true});
  } else {
    if(TTS.keep){TTS.keep=false;if(TTS.el){TTS.el.loop=false;TTS.el.pause()}}
    TTS.mode='device'; TTS.i=Math.floor(f*TTS.chunks.length); TTS.playing=true; MUS.start(); speakChunk();
  }
  setMedia(); buildPlayer(); showMini(); renderListen();
}
function pauseTTS(){
  if(TTS.mode==='audio'&&TTS.el){TTS.playing=false;TTS.el.pause()} else {TTS.playing=false;TTS.tok++;try{speechSynthesis.cancel()}catch(e){}}
  mPause(); saveResume(true); uiTick();
}
function resumeTTS(){
  if(!TTS.item||TTS.loading)return; TTS.playing=true; mStart();
  if(TTS.mode==='audio'&&TTS.el){TTS.el.playbackRate=TTS.speed*baseRate();TTS.el.play().then(()=>uiTick()).catch(()=>{TTS.playing=false;mPause();uiTick()})} else speakChunk();
  uiTick();
}
function toggleTTS(){TTS.playing?pauseTTS():resumeTTS()}
function seekFrac(f){
  if(!TTS.item||TTS.loading)return; f=Math.min(0.999,Math.max(0,f));
  if(TTS.mode==='audio'&&TTS.el&&isFinite(TTS.el.duration)){TTS.seeking=true;TTS.el.currentTime=f*TTS.el.duration;setTimeout(()=>{TTS.seeking=false},300)}
  else{TTS.i=Math.floor(f*TTS.chunks.length);if(TTS.playing)speakChunk()}
  saveResume(true); uiTick();
}
function skip(sec){
  if(!TTS.item||TTS.loading)return;
  if(TTS.mode==='audio'&&TTS.el&&isFinite(TTS.el.duration)){seekFrac((TTS.el.currentTime+sec)/TTS.el.duration);return}
  let i=TTS.i;
  if(sec>0){let s=0;while(i<TTS.chunks.length-1&&s<sec){s+=secsOf(i,i+1);i++}}
  else{let s=0;while(i>0&&s<-sec){i--;s+=secsOf(i,i+1)}}
  TTS.i=i; saveResume(true); if(TTS.playing)speakChunk();else uiTick();
}
function finishItem(){
  TTS.playing=false; mPause(); store.set('cf_resume',JSON.stringify({id:TTS.item.id,f:0}));
  if(TTS.queue[TTS.qi+1])goNext(true); else {uiTick();renderListen()}
}
function goNext(auto){
  const nxt=TTS.queue[TTS.qi+1]; if(!nxt)return; const P=TTS.pre;
  if(P&&P.id===nxt.id&&P.sig===MSIG()&&TTS.el&&TTS.mode==='audio'&&!TTS.keep){playPrefetched(nxt,P);return}   // ferdig lyd: bytt rett over
  startItem(nxt,TTS.queue,0,auto);
}
function nextItem(){if(TTS.queue[TTS.qi+1])goNext(false)}
function setSpeed(){const ss=[0.8,1,1.15,1.3,1.5],k=(ss.indexOf(TTS.speed)+1)%ss.length;TTS.speed=ss[k];store.set('cf_speed',String(TTS.speed));if(TTS.mode==='audio'&&TTS.el)TTS.el.playbackRate=TTS.speed*baseRate();else if(TTS.playing)speakChunk();uiTick()}
function posState(){try{if(TTS.mode==='audio'&&TTS.el&&isFinite(TTS.el.duration)&&'mediaSession' in navigator)navigator.mediaSession.setPositionState({duration:TTS.el.duration,position:Math.min(TTS.el.currentTime,TTS.el.duration),playbackRate:TTS.speed*baseRate()})}catch(e){}}
function setMedia(){
  try{ if(!('mediaSession' in navigator)||!TTS.item)return;
    navigator.mediaSession.metadata=new MediaMetadata({title:TTS.item.title,artist:'Catholic Faith',album:TTS.item.sub,artwork:[{src:'assets/jesus.webp',sizes:'512x512',type:'image/webp'}]});
    const h=(a,f)=>{try{navigator.mediaSession.setActionHandler(a,f)}catch(e){}};
    h('play',resumeTTS);h('pause',pauseTTS);h('seekbackward',()=>skip(-15));h('seekforward',()=>skip(15));h('nexttrack',nextItem);
    h('seekto',d=>{if(d&&isFinite(d.seekTime)&&curDur()>0)seekFrac(d.seekTime/curDur())});
  }catch(e){}
}

/* ---------- Hent lyden ut av en video (mp4/mov) uten å laste hele filen i minnet ----------
   En video fra CapCut kan være flere hundre MB. Vi leser bare lydsporet (AAC) og lagrer det som en liten lydfil. */
async function extractAac(file){
  const rd=async(a,b)=>new Uint8Array(await file.slice(a,b).arrayBuffer());
  const u32=(d,o)=>(d[o]*16777216)+((d[o+1]<<16)|(d[o+2]<<8)|d[o+3]);
  const u64=(d,o)=>u32(d,o)*4294967296+u32(d,o+4);
  const t4=(d,o)=>String.fromCharCode(d[o],d[o+1],d[o+2],d[o+3]);
  const boxes=(d,s,e)=>{const out=[];while(s+8<=e){let sz=u32(d,s),ty=t4(d,s+4),hl=8;if(sz===1){sz=u64(d,s+8);hl=16}else if(sz===0)sz=e-s;if(sz<hl||s+sz>e)break;out.push({ty,s:s+hl,e:s+sz});s+=sz}return out};
  const sub=(d,b,ty)=>boxes(d,b.s,b.e).filter(x=>x.ty===ty);
  // 1) finn moov (kan ligge først eller sist i filen)
  let pos=0,moov=null; const size=file.size;
  while(pos+8<=size){
    const h=await rd(pos,Math.min(size,pos+16)); let sz=u32(h,0),hl=8; const ty=t4(h,4);
    if(sz===1){sz=u64(h,8);hl=16}else if(sz===0)sz=size-pos;
    if(sz<hl)break;
    if(ty==='moov'){moov=await rd(pos+hl,pos+sz);break}
    pos+=sz;
  }
  if(!moov)return null;
  const root={s:0,e:moov.length};
  // 2) finn lydsporet
  let st=null;
  for(const tr of sub(moov,root,'trak')){
    const mdia=sub(moov,tr,'mdia')[0]; if(!mdia)continue;
    const hd=sub(moov,mdia,'hdlr')[0]; if(!hd||t4(moov,hd.s+8)!=='soun')continue;
    const minf=sub(moov,mdia,'minf')[0]; const stbl=minf&&sub(moov,minf,'stbl')[0]; if(stbl){st=stbl;break}
  }
  if(!st)return null;
  const g=ty=>sub(moov,st,ty)[0];
  const stsd=g('stsd'),stsz=g('stsz'),stsc=g('stsc'),stco=g('stco')||g('co64'); if(!stsd||!stsz||!stsc||!stco)return null;
  // 3) AAC-oppsett fra esds
  let ei=-1; for(let i=stsd.s;i<stsd.e-4;i++){if(moov[i]===0x65&&moov[i+1]===0x73&&moov[i+2]===0x64&&moov[i+3]===0x73){ei=i;break}}
  if(ei<0||t4(moov,stsd.s+12)!=='mp4a')return null;
  let p=ei+8; const tagLen=()=>{let l=0;for(let i=0;i<4;i++){const b=moov[p++];l=(l<<7)|(b&0x7f);if(!(b&0x80))break}return l};
  if(moov[p]!==0x03)return null; p++; tagLen(); p+=2; const fl=moov[p++]; if(fl&0x80)p+=2; if(fl&0x40)p+=1+moov[p]; if(fl&0x20)p+=2;
  if(moov[p]!==0x04)return null; p++; tagLen(); if(moov[p]!==0x40)return null; p+=13;
  if(moov[p]!==0x05)return null; p++; const al=tagLen(); const asc=moov.subarray(p,p+al);
  const ot=asc[0]>>3, fi=((asc[0]&7)<<1)|(asc[1]>>7), ch=(asc[1]>>3)&15;
  if(ot<1||ot>4||fi>12||ch<1||ch>7)return null;
  // 4) tabellene som sier hvor lydbitene ligger
  const nS=u32(moov,stsz.s+8), cs=u32(moov,stsz.s+4); const sizes=new Array(nS);
  for(let i=0;i<nS;i++)sizes[i]=cs||u32(moov,stsz.s+12+i*4);
  const nC=u32(moov,stco.s+4), is64=t4(moov,stco.s-4)==='co64'; const offs=new Array(nC);
  for(let i=0;i<nC;i++)offs[i]=is64?u64(moov,stco.s+8+i*8):u32(moov,stco.s+8+i*4);
  const nR=u32(moov,stsc.s+4), runs=[]; for(let i=0;i<nR;i++)runs.push([u32(moov,stsc.s+8+i*12),u32(moov,stsc.s+12+i*12)]);
  if(!nS||!nC||!runs.length)return null;
  // 5) les lyd-bitene og pakk dem som ADTS (vanlig .aac-fil)
  const parts=[]; let si=0;
  for(let c=0;c<nC&&si<nS;c++){
    let per=runs[0][1]; for(const r of runs){if(r[0]<=c+1)per=r[1]}
    const n=Math.min(per,nS-si); let len=0; for(let k=0;k<n;k++)len+=sizes[si+k];
    if(!len){si+=n;continue}
    const raw=await rd(offs[c],offs[c]+len); let o=0;
    for(let k=0;k<n;k++){
      const sz=sizes[si+k], fl2=sz+7, h=new Uint8Array(7);
      h[0]=0xFF;h[1]=0xF1;h[2]=((ot-1)<<6)|(fi<<2)|((ch>>2)&1);h[3]=((ch&3)<<6)|((fl2>>11)&3);h[4]=(fl2>>3)&0xFF;h[5]=((fl2&7)<<5)|0x1F;h[6]=0xFC;
      parts.push(h,raw.subarray(o,o+sz)); o+=sz;
    }
    si+=n;
  }
  if(si<10)return null;
  return new Blob(parts,{type:'audio/aac'});
}
/* kutt en ADTS-lydfil etter et antall sekunder (så vi ikke dekoder mer enn vi trenger) */
async function adtsHead(blob,secs){
  const buf=new Uint8Array(await blob.arrayBuffer()); const SR=[96000,88200,64000,48000,44100,32000,24000,22050,16000,12000,11025,8000,7350];
  let p=0,n=0,need=Infinity;
  while(p+7<=buf.length){
    if(buf[p]!==0xFF||(buf[p+1]&0xF0)!==0xF0)break;
    const fl=((buf[p+3]&3)<<11)|(buf[p+4]<<3)|(buf[p+5]>>5); if(fl<7)break;
    if(need===Infinity)need=Math.ceil(secs*(SR[(buf[p+2]>>2)&15]||44100)/1024);
    p+=fl; n++; if(n>=need)break;
  }
  return p>0&&p<buf.length?new Blob([buf.subarray(0,p)],{type:'audio/aac'}):blob;
}

/* hjelpere for lagring */
async function storInfo(){try{const e=await navigator.storage.estimate();return Math.round(e.usage/1e6)+' MB / '+Math.round(e.quota/1e6)+' MB'}catch(x){return '?'}}
async function freeTtsCache(){   // stemmefilene kan lages på nytt, så de kan fjernes for å få plass
  const ks=jget('cf_ttskeys',[]); for(const k of ks){try{await KV.set(k,undefined)}catch(e){}} store.set('cf_ttskeys','[]');
}
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}

/* ---------- Musikk: ambient (laget i appen) + egne filer (kun på enheten) ---------- */
const IDB={
  db:null,
  open(){return this.db?Promise.resolve(this.db):new Promise((res,rej)=>{const r=indexedDB.open('cf_music',1);r.onupgradeneeded=()=>r.result.createObjectStore('tracks',{keyPath:'id'});r.onsuccess=()=>{this.db=r.result;res(r.result)};r.onerror=()=>rej(r.error)})},
  async all(){try{const d=await this.open();return await new Promise(res=>{const out=[];const q=d.transaction('tracks').objectStore('tracks').openCursor();q.onsuccess=()=>{const c=q.result;if(c){out.push(c.value);c.continue()}else res(out)};q.onerror=()=>res(out)})}catch(e){return []}},
  /* Safari kan nekte å lagre en Blob/File i IndexedDB. Da lagrer vi i stedet selve bytene (ArrayBuffer). */
  async putSafe(t){
    try{await this.put(t);return}
    catch(e1){ if(t.data||!t.blob)throw e1; const ab=await t.blob.arrayBuffer(); await this.put({id:t.id,name:t.name,type:t.blob.type||'audio/mpeg',data:ab}) }
  },
  async put(t){const d=await this.open();return new Promise((res,rej)=>{const q=d.transaction('tracks','readwrite').objectStore('tracks').put(t);q.onsuccess=()=>res();q.onerror=()=>rej(q.error)})},
  async del(id){const d=await this.open();return new Promise(res=>{const q=d.transaction('tracks','readwrite').objectStore('tracks').delete(id);q.onsuccess=()=>res();q.onerror=()=>res()})}
};
const MUS={
  on:store.get('cf_mon','1')==='1', sel:store.get('cf_msel','ambient'), vol:+store.get('cf_mvol','0.2'), tracks:[],
  ctx:null,master:null,oscs:[],audio:null,url:null,running:false,
  save(){store.set('cf_mon',this.on?'1':'0');store.set('cf_msel',this.sel);store.set('cf_mvol',String(this.vol))},
  /* gamle, store videofiler (lagt inn før) gjøres om til små lydfiler, så lagringen ikke blir full */
  async migrate(){
    if(this._mig)return; this._mig=true; let changed=0;
    for(const t of [...this.tracks]){
      const big=t.blob.size>15e6, vid=/^video\//i.test(t.blob.type);
      if(!(big||vid))continue;
      try{ const x=await extractAac(t.blob); if(x&&x.size>2000&&x.size<t.blob.size){ await IDB.del(t.id); await IDB.putSafe({id:t.id,name:t.name,blob:x}); changed++ } }catch(e){}
    }
    if(changed){await this.load();buildMusicPanel()}
  },
  editing:null,
  async rename(id,name){name=String(name||'').trim().slice(0,80); if(!name)return; const t=(await IDB.all()).find(x=>x.id===id); if(!t)return; t.name=name; await IDB.putSafe(t.blob?t:{id:t.id,name:t.name,type:t.type,data:t.data,blob:null}); await this.load()},
  async load(){this.tracks=(await IDB.all()).map(t=>({id:t.id,name:t.name,blob:t.blob||new Blob([t.data],{type:t.type||'audio/mpeg'})})).sort((a,b)=>String(a.name).localeCompare(String(b.name),undefined,{numeric:true,sensitivity:'base'})); if(this.sel==='ambient'&&this.tracks.length&&store.get('cf_msel_user','0')!=='1'){this.sel=this.tracks[0].id;this.save()}},
  start(){
    if(!this.on){this.stop();return}
    if(this.pv.id)this.stopPreview();
    this.running=true;
    let sel=this.sel; if(sel==='shuffle'){ if(!this.tracks.length)sel='ambient'; else sel=this.tracks[Math.floor(Math.random()*this.tracks.length)].id }
    if(sel!=='ambient'&&!this.tracks.find(t=>t.id===sel))sel='ambient';
    if(sel==='ambient'){this.stopFile();this.startAmbient()} else {this.stopAmbient();this.playFile(sel)}
  },
  pause(){this.running=false;this.stopAmbient();if(this.audio)this.audio.pause()},
  stop(){this.running=false;this.stopAmbient();this.stopFile()},
  setVol(v){this.vol=v;this.save();if(this.master&&this.ctx)this.master.gain.setTargetAtTime(v*0.5,this.ctx.currentTime,0.2);if(this.fileGain&&this.ctx)this.fileGain.gain.setTargetAtTime(v,this.ctx.currentTime,0.1);else if(this.audio)this.audio.volume=v},
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
    if(this.audio&&this.audio.__id===id){this.audio.play().catch(()=>{});return}
    this.stopFile(); this.url=URL.createObjectURL(t.blob); const a=new Audio(this.url); a.__id=id; a.setAttribute('playsinline',''); a.loop=(this.sel!=='shuffle'&&this.tracks.length<2);
    a.onended=()=>{if(this.running)this.start()};
    // via Web Audio: volumet kan styres (på iPhone ignoreres vanlig volum) og lyden blandes med stemmen
    try{
      const C=window.AudioContext||window.webkitAudioContext; this.ctx=this.ctx||new C(); if(this.ctx.state==='suspended')this.ctx.resume();
      const src=this.ctx.createMediaElementSource(a); const g=this.ctx.createGain(); g.gain.value=this.vol; src.connect(g); g.connect(this.ctx.destination); this.fileGain=g; a.volume=1;
    }catch(e){this.fileGain=null;a.volume=this.vol}
    this.audio=a; a.play().catch(()=>{});
  },
  stopFile(){if(this.audio){this.audio.pause();this.audio.removeAttribute('src');this.audio=null}this.fileGain=null;if(this.url){URL.revokeObjectURL(this.url);this.url=null}},
  async add(files){
    let first=null; const no=lang==='no';
    for(const f of files){
      const id='m'+Date.now()+Math.random().toString(36).slice(2,6);const name=f.name.replace(/\.[^.]+$/,'');
      let blob=f;
      // video (f.eks. fra CapCut): ta bare lyden, så filen blir liten og kan blandes med stemmen
      if(/^video\//i.test(f.type)||/\.(mp4|mov|m4v|3gp|qt)$/i.test(f.name)){
        try{toast(no?'Henter lyden ut av videoen …':'Getting the sound out of the video …')}catch(e){}
        try{const x=await extractAac(f); if(x&&x.size>2000)blob=x}catch(e){}
      }
      let saved=false, err=null;
      for(let attempt=0;attempt<2&&!saved;attempt++){
        try{await IDB.putSafe({id,name,blob});saved=true}
        catch(e){ err=e; if(attempt===0){try{await freeTtsCache()}catch(x){}} }
      }
      if(!saved){
        const info=await storInfo(); const en=err&&err.name?err.name:'error';
        try{toast((no?'Fikk ikke lagret «'+name+'» ('+en+'). Lagring: ':'Could not save “'+name+'” ('+en+'). Storage: ')+info)}catch(x){}
        continue;
      }
      if(!first)first=id;
    }
    await this.load(); if(files.length===1&&first)this.editing=first;   // én fil: be om navn med en gang
    MUS.bad={}; buildMusicPanel();
  },
  bad:{},durs:{},chk:{},pv:{id:null,a:null,url:null},
  stopPreview(){
    const p=this.pv; if(p.id==='ambient')this.stopAmbient();
    if(p.a){try{p.a.pause();p.a.removeAttribute('src')}catch(e){}}
    if(p.url)URL.revokeObjectURL(p.url); this.pv={id:null,a:null,url:null};
  },
  /* spill av én sang alene, for å sjekke at den virker */
  preview(id){
    const was=this.pv.id; this.stopPreview(); if(was===id){buildMusicPanel();return}
    if(TTS.playing){try{pauseTTS()}catch(e){}}
    try{this.stop()}catch(e){}
    this.pv.id=id;
    if(id==='ambient'){this.startAmbient()}
    else{
      const t=this.tracks.find(x=>x.id===id); if(!t){this.pv.id=null;return}
      const url=URL.createObjectURL(t.blob), a=new Audio(url); a.setAttribute('playsinline',''); a.loop=true;
      this.pv={id,a,url};
      a.onerror=()=>{if(this.pv.a===a){this.bad[id]=1;this.stopPreview();buildMusicPanel()}};
      a.play().catch(()=>{if(this.pv.a===a){this.bad[id]=1;this.stopPreview();buildMusicPanel()}});
    }
    buildMusicPanel();
  },
  /* hent lengden på en sang (og se om telefonen kan lese den) */
  checkDur(tr){
    if(this.durs[tr.id]||this.bad[tr.id]||this.chk[tr.id])return; this.chk[tr.id]=1;
    try{
      const url=URL.createObjectURL(tr.blob), a=new Audio(); a.preload='metadata';
      const fin=()=>{URL.revokeObjectURL(url);document.querySelectorAll('[data-td="'+tr.id+'"]').forEach(e=>{const d=this.durs[tr.id];e.textContent=(d?fmtT(d):'⚠')+(e.dataset.sz||'');e.classList.toggle('bad',!d)})};
      a.onloadedmetadata=()=>{this.durs[tr.id]=isFinite(a.duration)?a.duration:0;if(!this.durs[tr.id])this.bad[tr.id]=1;fin()};
      a.onerror=()=>{this.bad[tr.id]=1;fin()};
      a.src=url;
    }catch(e){}
  },
  async remove(id){await IDB.del(id);if(this.sel===id)this.sel='ambient';await this.load();this.save();if(!remixCurrent()&&this.running)this.start();buildMusicPanel()}
};
MUS.load().then(()=>MUS.migrate()).catch(()=>{});

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
  h.onclick=()=>startItem(dItem,A.guides,0); w.appendChild(h);}
  // fortsett
  const rs=jget('cf_resume',null), ri=rs&&[...ALL,...(typeof genArchive==='function'?[...genArchive('story'),...genArchive('lesson')].map(genItem):[])].find(x=>x.id===rs.id);
  if(ri&&rs.f>0.02){const r=mk('button','hero alt'); const rx=mk('div'); rx.appendChild(mk('small','',t.resume)); rx.appendChild(mk('b','',ri.title)); r.appendChild(rx); r.appendChild(mk('div','pl','▶')); r.onclick=()=>startItem(ri,A[ri.kind]||[ri],rs.f); w.appendChild(r)}
  w.appendChild(qCardEl());
  // Lyd og musikk (åpne/lukk)
  const mo=store.get('cf_musopen','0')==='1';
  const mb=mk('button','row2'); mb.appendChild(mk('div','ic','♪')); const mtx=mk('div','tx'); mtx.appendChild(mk('b','',t.audio)); mtx.appendChild(mk('small','',t.audioSub)); mb.appendChild(mtx); mb.appendChild(mk('span','fav',mo?'⌃':'⌄'));
  mb.onclick=()=>{store.set('cf_musopen',mo?'0':'1');renderListen()}; w.appendChild(mb);
  if(mo){const pn=mk('div','mus');pn.id='lytMus';w.appendChild(pn);fillMusic(pn)}
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
  else if(lt==='stories'){const sAll=[...(hasGen?genArchive('story').map(genItem):[]),...A.stories];   // alle historier i rekkefølge: spilles videre automatisk
    if(hasGen){const hg=genHero('story',true);hg.style.marginTop='12px';w.appendChild(hg);w.appendChild(genRows('story',(it)=>row(it,sAll)))}A.stories.forEach(it=>w.appendChild(row(it,sAll)))}
  else if(lt==='guides'){if(hasGen){const hg=genHero('lesson',true);hg.style.marginTop='12px';w.appendChild(hg);w.appendChild(genRows('lesson',row))}GUIDES.forEach((G,gi)=>{w.appendChild(mk('div','gh',G[lang]));const list=A.guides.filter(x=>x.id.startsWith('gd-'+gi+'-'));list.forEach(it=>w.appendChild(row(it,A.guides)))})}
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
  <div class="tl"><span id="pCur">0:00</span><input type="range" id="pSeek" min="0" max="1000" value="0" aria-label="Spol"><span id="pDur">0:00</span></div>
  <div class="ctl"><button id="pBack">−15</button><button class="big" id="pPlay"></button><button id="pFwd">+15</button></div>
  <div class="ctl2"><button id="pSpd"></button><button id="pNext">${t.next} ›</button></div>
  <div class="mus" id="pMus"></div>`;
  $('#pTitle').textContent=it.title; $('#pSub').textContent=it.sub;
  $('#pClose').onclick=closePlayer; $('#pPlay').onclick=toggleTTS; $('#pBack').onclick=()=>skip(-15); $('#pFwd').onclick=()=>skip(15); $('#pSpd').onclick=setSpeed; $('#pNext').onclick=nextItem;
  $('#pFav').onclick=()=>{toggleFav(it.id);uiTick();renderListen()};
  const sk=$('#pSeek');
  sk.addEventListener('input',()=>{TTS.drag=true;const d=curDur();$('#pCur').textContent=fmtT(sk.value/1000*d)});
  sk.addEventListener('change',()=>{seekFrac(sk.value/1000);setTimeout(()=>{TTS.drag=false},350)});
  sk.addEventListener('pointerup',()=>{setTimeout(()=>{TTS.drag=false},350)});
  buildMusicPanel();
}
function openPlayer(){if(!TTS.item)return;buildPlayer();requestAnimationFrame(()=>$('#player').classList.add('open'));uiTick()}
function closePlayer(){const p=$('#player');if(p)p.classList.remove('open')}
function uiTick(){
  const it=TTS.item; if(!it)return; const fr=curFrac(), pct=fr*100, t=LN[lang];
  try{if('mediaSession' in navigator)navigator.mediaSession.playbackState=TTS.playing?'playing':'paused'}catch(e){}
  const m=$('#mini'); if(m){m.querySelector('.t').textContent=it.title;m.querySelector('.pb').textContent=TTS.loading?'…':(TTS.playing?'❚❚':'▶');m.querySelector('.pr').style.width=pct+'%'}
  const pl=$('#pPlay'); if(pl){
    const sb=$('#pSub'); if(sb&&!TTS.loading)sb.textContent=it.sub+' · '+(TTS.mode==='audio'?t.vAI:t.vDev);
    pl.textContent=TTS.loading?'…':(TTS.playing?'❚❚':'▶'); $('#pLine').textContent=TTS.loading?t.loadingAudio:lineAt(); $('#pSpd').textContent=TTS.speed+'×'; $('#pArt').classList.toggle('pulse',TTS.playing);
    const sk=$('#pSeek'); if(sk&&!TTS.drag){sk.value=Math.round(fr*1000); sk.style.setProperty('--p',pct+'%'); $('#pCur').textContent=fmtT(curPos()); $('#pDur').textContent=(TTS.mode==='audio'?'':'≈')+fmtT(curDur())}
    const f=$('#pFav'); if(f){const on=favs().includes(it.id);f.textContent=on?'♥':'♡';f.style.color=on?'#C0392B':''}}
}
function buildMusicPanel(){const a=$('#pMus');if(a)fillMusic(a);const b=$('#lytMus');if(b)fillMusic(b)}
function voiceList(l){
  const vs=speechSynthesis.getVoices();
  const f=l==='en'?vs.filter(v=>/^en/i.test(v.lang)):vs.filter(v=>/^(nb|no|nn)/i.test(v.lang));
  const q=v=>/premium|enhanced|natural|neural|siri/i.test(v.name)?0:1; const gb=v=>/en[-_]GB/i.test(v.lang)?0:1;
  return f.sort((a,b)=>q(a)-q(b)||gb(a)-gb(b)||a.name.localeCompare(b.name));
}
function fillMusic(box){
  const t=LN[lang]; box.innerHTML='';
  // Stemme
  const vh=mk('div','h'); vh.appendChild(mk('span','',t.voice)); box.appendChild(vh);
  [['en',t.vEn,t.tryEn],['no',t.vNo,t.tryNo]].forEach(([l2,label,sample])=>{
    const row=mk('div','vol'); row.style.margin='8px 0'; row.appendChild(mk('span','',label));
    const sel=mk('select'); sel.style.cssText='flex:1;min-width:0;padding:8px;border-radius:10px;border:1px solid var(--line);background:#fff;font:inherit;font-size:13px;color:var(--ink)';
    const a=mk('option','',t.auto); a.value=''; sel.appendChild(a);
    voiceList(l2).forEach(v=>{const o=mk('option','',v.name+' ('+v.lang+')'); o.value=v.name; sel.appendChild(o)});
    const saved=store.get('cf_voice_'+l2,''); sel.value=saved; if(sel.value!==saved)sel.value='';
    sel.onchange=()=>store.set('cf_voice_'+l2,sel.value);
    const tr=mk('button','',t.try); tr.type='button'; tr.style.cssText='padding:8px 12px;border-radius:10px;border:1px solid var(--line);background:#fff;font-size:13px';
    tr.onclick=()=>{try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(sample);const v=pickVoice(l2);if(v){u.voice=v;u.lang=v.lang}else u.lang=l2==='en'?'en-GB':'nb-NO';u.rate=0.9*TTS.speed;u.pitch=l2==='en'?0.8:0.85;speechSynthesis.speak(u)}catch(e){}};
    row.appendChild(sel); row.appendChild(tr); box.appendChild(row);
  });
  box.appendChild(mk('div','mnote',t.vhint));
  // Musikk
  const h=mk('div','h'); h.style.marginTop='16px'; h.appendChild(mk('span','',t.music)); const sw=mk('div','sw'+(MUS.on?' on':'')); sw.onclick=()=>{MUS.on=!MUS.on;MUS.save();if(!remixCurrent()){if(MUS.on&&TTS.playing)MUS.start();else MUS.stop()}buildMusicPanel()}; h.appendChild(sw); box.appendChild(h);
  const pick=val=>{MUS.sel=val;store.set('cf_msel_user','1');MUS.save();if(!remixCurrent()){if(TTS.playing&&MUS.on){MUS.stop();MUS.start()}}buildMusicPanel()};
  // ÉN felles liste: innebygd ambient, dine egne sanger (med ▶ for å prøve dem), og tilfeldig
  const list=mk('div','mlist');
  const mkRow=(id,name,own)=>{
    const tr=own?MUS.tracks.find(x=>x.id===id):null;
    const row=mk('div','mrow'+(MUS.sel===id?' on':''));
    if(own&&MUS.editing===id){
      const inp=mk('input','mnm'); inp.type='text'; inp.value=tr.name; inp.placeholder=t.nameph; inp.maxLength=80;
      const ok=mk('button','mb ok',t.save); ok.type='button'; const cn=mk('button','mb',t.cancel); cn.type='button';
      const done=async()=>{const v=inp.value.trim(); MUS.editing=null; if(v&&v!==tr.name)await MUS.rename(tr.id,v); buildMusicPanel()};
      ok.onclick=done; cn.onclick=()=>{MUS.editing=null;buildMusicPanel()};
      inp.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();done()}else if(e.key==='Escape'){MUS.editing=null;buildMusicPanel()}};
      row.append(inp,ok,cn);
      setTimeout(()=>{if(inp.offsetParent){inp.focus();inp.select()}},30);
      return row;
    }
    if(id!=='shuffle'){
      const on=MUS.pv.id===id;
      const pv=mk('button','mb pv'+(on?' on':''),on?'❚❚':'▶'); pv.type='button'; pv.title=t.prev; pv.setAttribute('aria-label',t.prev); pv.onclick=e=>{e.stopPropagation();MUS.preview(id)};
      row.appendChild(pv);
    }
    const nm=mk('button','nm',name); nm.type='button'; nm.onclick=()=>pick(id); row.appendChild(nm);
    if(own){
      const td=mk('span','td'+(MUS.bad[id]?' bad':'')); td.dataset.td=id; const d=MUS.durs[id]; const mbs=tr.blob.size/1e6, sz=mbs>=8?' · '+Math.round(mbs)+' MB':''; td.dataset.sz=sz; td.textContent=MUS.bad[id]?'⚠':((d?fmtT(d):'')+sz); row.appendChild(td);
      const ed=mk('button','mb','✎'); ed.type='button'; ed.title=t.rename; ed.setAttribute('aria-label',t.rename); ed.onclick=()=>{MUS.editing=id;buildMusicPanel()};
      const dl=mk('button','mb del','✕'); dl.type='button'; dl.onclick=()=>{if(confirm(t.delq+'\n'+tr.name)){MUS.stopPreview();MUS.remove(id)}};
      row.append(ed,dl); MUS.checkDur(tr);
    }
    return row;
  };
  list.appendChild(mkRow('ambient',t.ambient,false));
  MUS.tracks.forEach(tr=>list.appendChild(mkRow(tr.id,tr.name,true)));
  if(MUS.tracks.length>1)list.appendChild(mkRow('shuffle',t.shuffle,false));
  box.appendChild(list);
  if(MUS.tracks.some(x=>MUS.bad[x.id]))box.appendChild(mk('div','mnote bad',t.badnote));
  const v=mk('div','vol'); v.style.marginTop='12px'; v.appendChild(mk('span','',t.vol)); const rg=mk('input'); rg.type='range'; rg.min='0'; rg.max='0.6'; rg.step='0.02'; rg.value=MUS.vol; rg.oninput=()=>MUS.setVol(+rg.value); rg.onchange=()=>remixCurrent(); v.appendChild(rg); box.appendChild(v);
  const add=mk('label','addm',t.addm); const fi=mk('input'); fi.type='file'; fi.accept='audio/*,video/*'; fi.multiple=true; fi.style.display='none'; fi.onchange=()=>{if(fi.files.length)MUS.add([...fi.files])}; add.appendChild(fi); box.appendChild(add);
  box.appendChild(mk('div','mnote',t.mnote));
  { const si=mk('div','mnote'); box.appendChild(si); storInfo().then(x=>{si.textContent=(lang==='no'?'Lagring brukt i appen: ':'Storage used by the app: ')+x}) }
  if(!pickVoice(TTS.lang)&&speechSynthesis.getVoices().length)box.appendChild(mk('div','mnote',t.nov));
  if(box.id==='pMus')box.appendChild(qCardEl());
}
/* Teller: hvor mye AI-stemme er brukt denne måneden (serveren teller tegn) */
const Q=Object.assign({used:null,limit:400000,azure:false},jget('cf_q',{}));
const qNum=n=>Math.round(n).toLocaleString(lang==='no'?'nb-NO':'en-GB');
function qPaint(){
  document.querySelectorAll('.qcard').forEach(c=>{
    if(Q.used==null||!Q.azure){c.style.display='none';return}
    c.style.display=''; const no=lang==='no', p=Math.min(100,Q.used/Q.limit*100), full=Q.used>=Q.limit*0.97;
    const nx=new Date(Date.UTC(new Date().getUTCFullYear(),new Date().getUTCMonth()+1,1)).toLocaleDateString(no?'nb-NO':'en-GB',{day:'numeric',month:'long',timeZone:'UTC'});
    c.className='qcard'+(p>=90?' hi':p>=70?' mid':''); c.innerHTML='';
    const top=mk('div','qtop'); top.appendChild(mk('span','',no?'AI-stemme denne måneden':'AI voice this month')); top.appendChild(mk('b','',(p<10?p.toFixed(1):Math.round(p))+' %')); c.appendChild(top);
    const bar=mk('div','qbar'); const fill=mk('i'); fill.style.width=Math.max(p,0.8)+'%'; bar.appendChild(fill); c.appendChild(bar);
    const nums=mk('div','qnum'); nums.appendChild(mk('b','',qNum(Q.used))); nums.appendChild(mk('span','',' / '+qNum(Q.limit)+(no?' tegn':' characters'))); c.appendChild(nums);
    c.appendChild(mk('div','qsub',(no?'≈ ':'≈ ')+qNum(Q.used/6)+(no?' av ca. ':' of about ')+qNum(Q.limit/6)+(no?' ord. Tellingen er i tegn (bokstaver og mellomrom), ca. 6 tegn per ord.':' words. Counted in characters (letters and spaces), about 6 per word.')));
    c.appendChild(mk('div','qsub',full
      ?(no?'Fullt for denne måneden. Appen bruker telefonens stemme til '+nx+'.':'Full for this month. The app uses the built-in phone voice until '+nx+'.')
      :(no?'Nullstilles '+nx+'. Er den full før det, bruker appen telefonens stemme.':'Resets '+nx+'. If it fills up before then, the app uses the built-in phone voice.')));
  });
}
function qRefresh(){
  fetch(WORKER_URL,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({quota:1})}).then(r=>r.json()).then(q=>{
    if(q&&typeof q.used==='number'){Q.used=q.used;Q.limit=q.limit||Q.limit;Q.azure=!!q.azure;store.set('cf_q',JSON.stringify(Q));qPaint()}
  }).catch(()=>{});
}
function qCardEl(){const c=mk('div','qcard');qPaint();setTimeout(()=>{qPaint();qRefresh()},0);return c}
/* Start */
if('speechSynthesis' in window){speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=()=>{try{buildMusicPanel()}catch(e){}}}
/* Lås opp lyd ved første trykk (iPhone krever det) */
let unlocked=false;
addEventListener('pointerdown',()=>{
  if(unlocked)return; unlocked=true;
  try{const C=window.AudioContext||window.webkitAudioContext;MUS.ctx=MUS.ctx||new C();MUS.ctx.resume()}catch(e){}
  try{const u=new SpeechSynthesisUtterance(' ');u.volume=0;speechSynthesis.speak(u)}catch(e){}
  try{unlockVoice()}catch(e){}
},{passive:true});
renderListen();
