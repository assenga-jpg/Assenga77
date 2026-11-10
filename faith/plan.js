/* Dagsplan: bibelavsnitt til daglige historier og emner til daglige leksjoner. Nye kan legges til nederst. */
const STORY_REFS=[
"1Mos 3:1-13","1Mos 4:1-16","1Mos 6:9-22","1Mos 8:1-22","1Mos 11:1-9","1Mos 12:1-9","1Mos 15:1-6","1Mos 18:1-15","1Mos 22:1-19","1Mos 25:19-34",
"1Mos 28:10-22","1Mos 32:22-32","1Mos 37:1-28","1Mos 39:1-23","1Mos 41:1-36","1Mos 45:1-15","2Mos 2:1-10","2Mos 3:1-15","2Mos 14:10-31","2Mos 16:1-18",
"2Mos 17:1-7","2Mos 32:1-20","4Mos 21:4-9","Jos 3:1-17","Jos 6:1-20","Dom 7:1-22","Rut 1:1-22","Rut 2:1-23","1Sam 1:1-20","1Sam 3:1-21",
"1Sam 16:1-13","1Sam 17:32-51","2Sam 12:1-15","1Kong 3:3-28","1Kong 17:1-16","1Kong 18:20-39","1Kong 19:1-13","2Kong 5:1-14","Job 1:6-22","Jona 1:1-16",
"Jona 3:1-10","2Makk 7:1-23","Matt 2:1-12","Matt 4:1-11","Matt 8:23-27","Matt 14:22-33","Matt 17:1-9","Matt 18:21-35","Matt 25:1-13","Matt 25:14-30",
"Matt 28:1-10","Mark 2:1-12","Mark 4:34-40","Mark 5:21-43","Mark 6:30-44","Mark 10:46-52","Luk 1:26-38","Luk 1:39-56","Luk 2:41-52","Luk 5:1-11",
"Luk 7:11-17","Luk 8:4-15","Luk 10:38-42","Luk 15:1-10","Luk 15:11-32","Luk 16:19-31","Luk 18:9-14","Luk 19:1-10","Luk 22:54-62","Luk 23:33-46",
"Luk 24:13-35","Joh 2:1-11","Joh 3:1-17","Joh 4:1-30","Joh 5:1-9","Joh 8:1-11","Joh 11:1-44","Joh 13:1-17","Joh 20:1-18","Joh 20:24-29",
"Joh 21:1-14","ApG 1:6-14","ApG 3:1-10","ApG 8:26-40","ApG 10:1-33","ApG 12:1-17","ApG 16:16-34"
];
const LESSON_TOPICS=[
"Apostelen Peter","Apostelen Paulus og hans reiser","Jomfru Maria","Josef, Jesu nærmeste voktere","Johannes døperen","Stefanus, den første martyren","Perpetua og Felicitas","Polykarp av Smyrna","Justin Martyr","Antonius den store og ørkenfedrene",
"Athanasius av Alexandria","Monika og Augustin","Ambrosius av Milano","Hieronymus og Bibelen på latin","Basil den store","Gregor den store","Benedikt og Skolastika","Frans av Assisi","Klara av Assisi","Dominikus og ordenen hans",
"Bonaventura","Katarina av Siena","Birgitta av Sverige","Teresa av Ávila","Johannes av Korset","Ignatius av Loyola","Frans Xavier","Vincent de Paul","Thérèse av Lisieux","Maximilian Kolbe",
"Edith Stein","Josephine Bakhita","Mor Teresa","Johannes Paul II","Carlo Acutis","Sunniva og Hallvard i Norge","Martin av Tours","Nikolaus av Myra","Lucia av Syrakus","Georg og Sebastian",
"Dåpen","Konfirmasjonen (fermingen)","Eukaristien","Skriftemålet","Sykesalvingen","Ekteskapet som sakrament","Prestevigselen","Hva er et sakrament?","Fader vår, linje for linje","Ave Maria",
"Rosenkransen","Den apostoliske trosbekjennelsen","De ti bud","Saligprisningene","De fire kardinaldydene","Tro, håp og kjærlighet","Den hellige ånds gaver","Åndens frukter","Barmhjertighetens gjerninger","Kirkeåret",
"Advent","Julen","Fastetiden","Den hellige uke","Påsken","Pinse","Allehelgensdag og allesjelersdag","Messens oppbygning","Ordets liturgi","Gloria, Sanctus og Agnus Dei",
"Hva skjer ved konsekrasjonen?","Eukaristisk tilbedelse","Marias dogmer","Hva gjør paven?","Kardinaler og biskoper","Prester og diakoner","Klosterliv og ordener","Katekismen: hva er den?","Pavens ufeilbarlighet, forklart rolig","Det andre Vatikankonsil",
"Skismaet mellom øst og vest i 1054","Reformasjonen og Trent","De ortodokse kirkene","Hva er forskjellen på katolikker og protestanter?","Å be med stillhet","Lectio divina: å be med Bibelen","Å be Salmene","Hvorfor finnes det ondskap?","Tro og fornuft","Tro og vitenskap",
"Det gamle testamente i korte trekk","Hvorfor fire evangelier?","Å lese Åpenbaringen","Profetene","Moses og loven","Kong David","Salomos visdom","Abraham, trosfedrenes far","Jesu lignelser","Jesu undergjerninger",
"Hvorfor døde Jesus?","Oppstandelsen","Himmelfarten","Treenigheten","Hva er nåde?","Hva er synd?","Å tilgi andre","Samvittigheten","Lidelse og håp","Døden og evig liv",
"Skjærsilden, forklart enkelt","Engler","Skytsengelen","Fødselsdagen din: helgenfest og dåp","Å faste","Almisse og å gi","Pilegrimsferd","Santiago de Compostela","Nidaros og St. Olavsveien","Katolsk kirke i Norge i dag",
"Den hellige familie","Å leve som ung katolikk","Å velge livskall","Hvorfor gå til messe?","Søndagen som hviledag","Katolsk sosiallære","Skaperverket og omsorg for jorden","Ordener som hjelper de fattige","Kirkens musikk og gregoriansk sang","Kirkekunst og ikoner"
];
