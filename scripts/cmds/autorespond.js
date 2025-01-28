module.exports = {
config: {
name: "autorespondv3",
version: "2.0.0",
author: "Haru",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "fun",
guide: "?autorespondv3",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"💜": ["Cliff", "August", "Jonell", "David", "purple", "Fritz", "Sab", "Haru", "Xuazane", "Kim"],
"💚": ["dia", "seyj", "ginanun", "gaganunin", "pfft", "xyrene", "gumanun"],
"😾": ["Jo", "Ariii", "talong", "galit"],
"😼": ["wtf", "fck", "haaays", "naku", "ngi ", "ngek", "nge ", "luh", "lah"],
"😸": ["pill", "laugh", "lt ", "gagi", "huy", "hoy"],
"🌀": ["prodia", "sdxl", "bardv3", "tanongv2", "-imagine", "genimg", "Tanongv4", "kamla", "-shortcut"],
"👋": ["hi ", "hello", "salut","bjr","bonjour"," Salut","👋","bonsoir","slt"],
"🔥": ["🔥", ".jpg", "astig", "damn", "angas", "galing", "husay"],"💩":["merde","Merde","caca","Caca","shit"],"🤢":["beurk",
      "dégueulasse",
      "dégeu",
      "horrible"
    ],"🌸": [
      "amour",
      "câlin",
      "tendresse",
      "gentillesse",
      "bienveillance",
      "douceur",
      "complicité",
      "gratitude",
      "bonheur",
      "amitié"
    ],
    "😂": [
      "Ridicule",
      "Clownesque",
      "Farce",
      "Pitrerie",
      "Comique",
      "Drôle",
      "Amusant",
      "Hilarant",
      "Loufoque",
      "Bouffonnerie",
      "Cocasse",
      "Burlesque",
      "Rigolo",
      "Absurde",
      "Irrévérencieux",
      "Ironique",
      "Ironie",
      "Parodie",
      "Esprit",
      "Facétieux"
    ],
    "😎": [
      "cool","formidable"," 😎"
    ],
    "⚡": [
      "Super",
      "Aesther"
    ],
    "🤖": [
      "Prefix","robot"
    ],
    "🔰": [
      "Nathan","barro"
    ],
    "✔️": [
      "Bien",
      "ok"
    ],
    "🎉": [
      "congrats",
      "félicitation",
      "Goddess-Anaïs"
    ],
    "😆": [
      "xD"
    ],
    "♻️": [
      "restart"
    ],
    "🖕": [
      "fuck","enculer","fdp","🖕"
    ],
    "🌀": [
      "imagine","prodia","textpro","photofy"
    ],
    "🌼": [
      "Goddess-Anaïs"
    ],
    "😑": [
      "mmmh",
      "kiii"
    ],
    "💍": [
      "Aesther"
    ],
    "💵": [
      "Anjara"
    ],
    "😝": [
      "Anjara"
    ],
    "✨": [
      "oui","super"
    ],
    "✖️": [
      "wrong",
      "faux"
    ],
    "😽": [
      "araara"
    ],
    "🤡": [
      "Kindly provide the question","clone"," sanchokuin","bakugo"
    ],
    "😕": [
      "bruh"
    ],
    "👎": [
      "Kindly provide"
    ],
    "🌩️": [
      "*thea",
      "Tatakae",
      "Damare"
    ],
  "🤢": [
      "vomir"
    ],
  "🔪": [
      "tué"
    ],
};

// Replies to specific words
const replies = {
      
  "ashcho kobe": "~~𝙴𝚖𝚗𝚎𝚒 𝙳𝚊𝚢𝚜 𝙲𝚘𝚖𝚒𝚗𝚐, 𝚃𝚘𝚖𝚖𝚊! 🙃🌷",
  "ekhon koi": "~~𝙷𝚊𝚖𝚎𝚔 𝙱𝚒𝚝𝚑𝚎, 𝚃𝚞𝚖𝚖𝚊 𝙱𝚊𝚝𝚒𝚎? 🌏✨",
  "tmi khushi to": "~~𝙷𝚊𝚖 𝙺𝚑𝚞𝚜𝚑𝚒 𝙰𝚕𝚙𝚎𝚖𝚊! 🥰🌸",
  "tomar nam ki": "~~𝚂𝚎𝚌𝚛𝚎𝚝 𝙱𝚊𝚋𝚢 𝙼𝚘𝚢𝚎𝚎! 🙈✨",
  "school e ki korcho": "~~𝙿𝚑𝚘𝚛𝚔𝚒 𝙲𝚑𝚎𝚎𝚝 𝚁𝚎𝚊𝚍𝚢! 🎒🌟",
  "tiffin e ki kheyecho": "~~𝙿𝚊𝚝𝚑𝚘𝚝 𝚂𝚑𝚘𝚢 𝙽𝚊𝚖𝚎𝚎! 🍎✨",
  "porikkhar date kobe": "~~𝙰𝚛𝚜𝚊𝚕𝚊 𝚂𝚎𝚝, 𝚂𝚊𝚍 𝙵𝚘𝚛 𝚄! 🙃🌷",
  "borof poreche": "~~𝙽𝚊𝚝𝚞𝚗 𝙲𝚑𝚞𝚕, 𝚆𝚒𝚝𝚑 𝙸𝚌𝚎! ❄️✨",
  "shobar shathe ki": "~~𝚆𝚎 𝙱𝚎 𝙵𝚊𝚖𝚎! 🫂🌺",
  "amake block koro ni": "~~𝙾𝚏𝚏𝚂𝚘𝚗 𝚂𝚊𝚟𝚎𝚍! ❤️✨",
  "tumi valoi": "~~𝙳𝚎𝚢 𝚁𝚒𝚝𝚎𝚜, 𝚂𝚊𝚏𝚊𝚛 𝙽𝚒𝚜𝚑! 🙌🌷",
  "jokhon takao": "~~𝚈𝚘𝚞 𝙶𝚕𝚘𝚠 𝚁𝚎𝚢! ✨🌟",
  "ghum hobe ki": "~~𝙷𝚊 𝙽𝚒𝚝𝚎𝚕𝚎𝚛 𝙲𝚑𝚞𝚔𝚎! 🛏️🌛",
  "phone e ki": "~~𝙻𝚘𝚊𝚍 𝚁𝚎𝚖𝚒𝚗𝚍! 📱🙃",
  "friend er shathe kotha hobe": "~~𝙼𝚎𝚎𝚝 𝙼𝚘𝚛𝚎 𝙰𝚛𝚊𝚝𝚘! 🙃🌺",
  "amar shathe kotha bolo": "~~𝙰𝚜𝚜𝚘, 𝚃𝚊𝚔𝚎 𝙼𝚊𝚒𝚗! 🤗🌟",
  "ami tumar mon chai": "~~𝙾𝚗𝚕𝚢 𝚁𝚎𝚊𝚕 𝚆𝚒𝚝𝚑 𝚃𝚞𝚖𝚖𝚊! 💖✨",
  "keu valobashe na": "ami asi na ?! ❤️🙌",
  "ajker din kharap": "pera neu kn ami asi na! 🌞✨",
  "friend list e ki ache": "~~𝙵𝚞𝚕𝚕 𝙾𝚗 𝙼𝚊𝚍𝚎 𝚃𝚒𝚔𝚔𝚎! 🤍🙌",
  "coffee banate parba": "~~𝙰𝚛 𝚂𝚑𝚘𝚗 𝚂𝚝𝚛𝚘𝚗𝚐! ☕✨",
  "ghum ashe": "~~𝙱𝚒𝚐 𝚁𝚎𝚕𝚊𝚡 𝙳𝚊𝚢! 🛌🌙",
  "cholo kothao jabo": "~~𝙴𝚡𝚌𝚒𝚝𝚎 𝚂𝚎𝚝 𝚃𝚊𝚔𝚎𝚗! ✨🌍",
  "ami ki vule gesi": "~~𝙽𝚘𝚝 𝚁𝚎𝚐𝚛𝚎𝚝, 𝙼𝚊𝚝𝚌𝚑! 🙃🌸",
  "kichu likhbo": "~~𝙼𝚊𝚜𝚝𝚎𝚛𝚢 𝚂𝚘𝚘𝚗! ✍️✨",
  "bike chalao na": "~~𝙵𝚊𝚜𝚝𝚎𝚛 𝙻𝚒𝚏𝚎𝚘𝚗𝚒𝚝𝚎! 🛵✨",
  "pore dekha hobe": "~~𝙿𝚘𝚜𝚝 𝙳𝚛𝚘𝚙 𝚃𝚊𝚔𝚎𝚗! ✨🌸",
  
  "tomar smile dekhe valo lage": "~~𝙱𝚘𝚗𝚍𝚑𝚞 𝙼𝚊𝚗𝚎 𝙼𝚘𝚘𝚍! 💖🙌",
      "Valobashi": "Ami onek valobashi tomay 🥰",
"Valobashi": "Tumi chara amar din shuru hoy na 🌅",
"Valobashi": "Tumi amar shopner rani 🌸",
"Valobashi": "Tomar sathe thakar icha chirodin 🥺",
"Valobashi": "Tumi amar moner kotha bujho ❤️",
"Valobashi": "Tumi chara amar sob kichu shunno 🌟",
"Valobashi": "Amar bhalobasha tomar jonno shob somoy ✨"
"Valobashi": "Tumi amar praner cheyeo beshi 🌹"
"Valobashi": "Tomar chhoya amar shopner moto 🥰"
"Valobashi": "Tumi amar shopno puroner kotha 🌙"
"Valobashi": "Tumi chara amar mon hariye jay 🌼"
"Valobashi": "Ami tomar hasi dekhe din suru kori 🌞"
"Valobashi": "Tumi amar jibon er roshni 🕯️"
"Valobashi": "Ami tomar kotha bhabchi sob somoy 🌷"
"Valobashi": "Tumi amar jibon er shrestho sompotti 💎"
"Valobashi": "Tumi amar chirodin-er bhalobasha ❤️"
"Valobashi": "Tumi amar shopner sukh 🥺"
"Valobashi": "Tomake bhalo na lagle jibon shunno lage 🌼"
"Valobashi": "Tumi amar chirodin-er chhoya 🥰"
"Valobashi": "Ami tomar jonno shob tyag korte raji ❤️"
"Valobashi": "Tumi amar moner bijoy 🏆"
"Valobashi": "Tomar kotha chinta korle mon bhalo hoy 🌸"
"Valobashi": "Tumi chara ami adho adhura 🌹"
"Valobashi": "Ami tomake chirodin bhalobashi 🥰"
"Valobashi": "Tumi chara amar jibon osshojjho 🥺"
"Valobashi": "Tumi amar moner dhorjo 🌟"
"Valobashi": "Ami tomar kotha bhabi har rat 🌙"
"Valobashi": "Tumi amar shopno gulo ke jege uthai 🌞"
"Valobashi": "Tumi chara amar protiti shopno shunno ❤️"
"Valobashi": "Tomar sathe sob somoy thakte chai 💕"
"Valobashi": "Tumi chara amar mon bhalo lage na 🌼"
"Valobashi": "Tomar kach theke shob shikhechi ❤️"
"Valobashi": "Tomake bhalobashar upoma nai 🌸"
"Valobashi": "Tumi chara ami onno kichu bhabhi na 🥰"
"Valobashi": "Tumi chara amar shob somoy kharap lage 🥺"
"Valobashi": "Tumi amar sathe thakle prithibi shundor lage 🌟"
"Valobashi": "Tumi amar manush, amar jibon 🌹"
"Valobashi": "Tomar sathe diner shesh valo lage ❤️"
"Valobashi": "Tumi chara amar kichu proyojon nei 🌼"
"Valobashi": "Ami tomar hasi diye shopno dekhi 🥰"
"Valobashi": "Tumi chara ami oshohay mone hoy 🥺"
"Valobashi": "Ami tomar jonno protidin pray kori 🌸"
"Valobashi": "Tumi amar prithibir shreshtho manush ❤️"
"Valobashi": "Tumi amar oboshorer shanti 🥰"
"Valobashi": "Tomar chhaya ami khuje berai sobsomoy 🌷"
"Valobashi": "Tumi chara amar shukh ashlil lage 🌹"
"Valobashi": "Tumi amar ridoyer upor basha 🏡"
"Valobashi": "Tomar sathe shopno gulo shompurno hoy 🌟"
"Valobashi": "Tumi amar chirodin er bhalobasha ❤️"
"Valobashi": "Tumi chara amar swapno gulo brishti hoy 🌧️"
"valobashi": "Ami o onek valobashi tomay. ❤️",
"tomake mone pore": "Ami o tomar kotha roj mone kori. 🥰",
  "mon ta chay tomar kache jete": "Ami o chai tomay pashe pete. 🌹",
  "tumi amar shob kichu": "Tumi chara ami adho adhura. ❤️✨",
  "tomake mone porche onek beshi": "Amar mone shob shomoy tumi. 🌸",
  "tumi amar moner manush": "Amar mon-e shudhu tumi r tumi. 🥰",
  "amar jibon tumi": "Tumi chara jibon ta faka lage. 🌹",
  "ami tomar kotha mone korchi": "Tumi o ki amar kotha mone korcho? ❤️",
  "tomar sathe thakte khub bhalo lage": "Ami o tomar sathe thakte khushi! 😊",
  "tomake dekhlei mon valo hoy": "Tomar chehara amar din-er alo. 🌟",
  "tomar chehara dekhtei din shuru korte chai": "Tumi amar din-er inspiration! ❤️",
  "ami tomar sathe thakte chai shob shomoy": "Ami tomake chere kichu bhabhi na. 🥰",
  "tumi amar protidin-er shukh": "Tomar sathe thaklei shob perfect lage. 🌸",
  "tumi amar sundor sopno": "Ami tomar sathe sopno puron korte chai. ❤️",
  "ami tomar voice shunte chai": "Tomar voice amar mon-e shanti dey. 🎶",
  "tumi amar sathe best memory": "Tomar sathe moments amar favorite. 🌹",
  "ami tomar feelings bujhte chai": "Tomar moner shob shukh ami chai bojhte. ❤️",
  "tomar sathe life share korte chai": "Tumi amar sobar cheye special. 🥰",
  "tumi amar moner ekmatro priority": "Tomar chara kono kichu mone dhore na. 🌸",
  "tomar shathe raat kata-te chai": "Tomar sathe raat-gulo aro memorable korte chai. 🌌",
  "tomar hath dhore chirokal thakte chai": "Tumi amar forever-er partner. ❤️",
  "tumi amar shukh-er shompotti": "Tumi chara shukh-er kichu bojhi na. 🥰",
  "tomake chhara din kemon jabe?": "Tomar sathe thaklei din ta valo hoy. 🌹",
  "amar mon tomar kachhei thake": "Tumi amar moner thikana. ❤️",
  "tomake dekhlei amar mon hariye jai": "Tumi amar hridoyer sob kichu. 🥰",
  "tumi amar shopno puron-er partner": "Tomar sathe sob sopno share korte chai. 🌸",
  "amar bhalobasha shudhu tomar jonno": "Tumi amar ekmatro bhalobasha. ❤️",
  "tumi amar din-er shurute valo lage": "Tomar ekta hasi din-ta bright kore dey! 😊",
  "ami tomar kotha bhebe khushi hoy": "Tomar kotha bhelei din shuru hoy. 🌹",
  "tumi amar sokal-er surjo": "Tumi amar sobar cheye brightest light. 🌞",
  "tomake niye aro memories korte chai": "Tumi amar shob feelings-er karon. ❤️",
  "tomake ekta gift dite chai": "Tumi amar shob theke boro gift. 🎁",
  "tumi amar life-er brightest tara": "Tumi amar moner akash-e tara. 🌟",
  "tumi amar mon-e ekmatro chehara": "Tumi amar mind-r ekmatro thought. ❤️",
  "ami tomake chhere kotha-i jabo?": "Tumi amar ekmatro thikana. 🥰",
  "tomake dekhtei din ta valo lage": "Tumi amar sobar cheye special person. 🌹",
  "tomar kotha mone korlei shanti pai": "Tumi amar moner ekta sundor jayga. ❤️",
  "ami tomar kachhei fire ashte chai": "Tumi amar ekmatro happiness. 😊",
  "tumi amar moner secret feelings": "Tomar kotha bhelei mon shundor hoy. 🌸",
  "tomar sathe moments aro memorable korte chai": "Tumi amar best memory-er part. ❤️",
  "ami tomar shathe diner shuru korte chai": "Tomar sathe sokal shuru korlei valo lage. 🌞",
  "tumi amar life partner hote parbe?": "Tumi amar forever-er dream. ❤️",
  "tomake ekta sundor golpo te chaite chai": "Tomar sathe jibon-ta golper moto mone hoy. 🌹",
  "tumi amar mind-er shob cheye special thought": "Tumi chara kichu mone dhore na. ❤️",
  "tumi amar shopner sathe real world": "Tomar sathe jibon-ta reality te aro shundor. 🌸",
  "tomar sathe moments perfect lage": "Tumi amar sob kichur center. 🥰",
  "ami tomar sathe aro bhalo memories korte chai": "Tumi amar moner best inspiration. ❤️",
  "tumi amar chokher tara": "Tomar sathe shob moments ekta golpo. 🌟",
  "ami tomar sathe hote chai har ghonta": "Tumi amar din-ratir shob feelings-er karon. ❤️",
  "tomake chara amar din ashobidha mone hoy": "Tumi amar happiness-er root. 😊",
  "tumi amar kachhe bhalo thako shob shomoy": "Tumi amar sob feelings-er posondo. 🌹",
  "tomar kotha bhelei raat-ta valo lage": "Tumi amar night-er inspiration. 🌌",
  "tomar ekta sms amake onek happy kore dey": "Tumi chara sms valo lage na. ❤️",
  "tumi amar mon-r perfect match": "Tumi amar best choice. 🥰",
  "tomar sathe future plan korte chai": "Tomar sathe life perfect banate chai. 🌸",
  "tomar ekta smile amar din valo kore dey": "Tomar ekta hasi sob tension dur kore. ❤️",
  "tumi amar mon-er ekmatro property": "Tomar chara moner jayga faka. 🌹",
  "tumi amar sathe sabkichu special korte paro": "Tomar sathe din valo lage. ❤️",
  "tomar feelings bojha amar favorite kaj": "Tumi amar shobcheye close. 😊",
  "tomake shara jibon cherish korte chai": "Tumi amar mon-r ekmatro sundor golpo. 🌸",
  "tumi amar protidin-er alo": "Tomar chehara amar sob feelings-er base. 🌞",
  "tomake diye shob moments perfect korte chai": "Tumi amar everything. ❤️",
  "tumi amar ekmatro favorite thought": "Tumi chara kichu mone dhore na. 🌹",
  "tomake bole aro feelings share korte chai": "Tumi amar sobar cheye closest person. ❤️",
  "tumi amar heart-r password": "Tomar sathe sob unlock hoy. 😊",
  "tomar sathe raat er akash-e golpo korte chai": "Tomar sathe sob shomoy golpo bhalo lage. 🌌",
  "tomake bole din shuru korte chai": "Tumi amar inspiration-er karon. ❤️"
  "valobashi": "Ami o onek onek valobashi tomake! ❤️",
  "tumi ki amake valobasho?": "Haan, tumi amar shob kichhu. 🥰",
  "onek valobashi tomake": "Amar kachhe tumi shobcheye special. 🌸",
  "valobashi mane bujho?": "Valobashi mane tomake niye shopno dekha. ✨",
  "valobashi tumi ki janona?": "Jani, r tumi amar hridoy. ❤️",
  "shudhu tomake valobashi": "Tumi chara ami oshohay. 🌹",
  "kibhabe valobashi bujhabo?": "Tumi amar chokhe dekho, bujhte parbe. 👀",
  "shob cheye beshi valobashi": "Ami o shob cheye beshi tomake adore kori. 💕",
  "valobashi bolte lajjabodh kori": "Tumi bhalo thakle amar shob thik. 🥺",
  "valobashi bole vul kori ni": "Tomay valobasha amar jibon-er best decision. 🥰",
  "valobashi bolte bhoy lage": "Bolo, ami achi tomar sathe. 🌷",
  "onek valobashi tumi jano?": "Haan, ami protidin feel kori. ❤️",
  "valobashi mane ki?": "Valobashi mane tomake shudhu amar kore rakha. 🌸",
  "amar valobasha sudhu tomar jonno": "Tumi chara onno ke valobasha asambhob. 🌹",
  "valobashi ki shudhu kotha?": "Na, eta amar protiti shwashe ache. 💖",
  "valobasha mane nijer theke beshi care kora": "Tumi amar prothom priority. ✨",
  "shotti bolchi, valobashi tomake": "Tumi amar shobcheye boro inspiration. ❤️",
  "tomake valobashi, janate chailam": "Ami protidin tomar kotha bhabi. 🌷",
  "tomake valobashi bolar por vule gechi shob kosto": "Tumi amar jibon-er alor moto. 🌟",
  "valobashi mane tumi amar shob kichu": "Tumi chara ami adhoora. 🌹",
  "tumi amar jibon-er valobasha": "Tomake paowa amar shobcheye boro gift. 🎁",
  "valobashi, kintu bolte bhoy kori": "Bolo, tomake support korte ami achi. 🌸",
  "koto tuku valobashi janona": "Tumar haat dhore chirokal cholte chai. 🤝❤️",
  "shudhu tomake valobashi, eta vul noy": "Tumi amar shob shopner rani/raja. 👑",
  "valobashi mane tomake protidin mone rakha": "Ami tomake miss kori pratekta moment-e. 🕰️",
  "valobashi bolar ar kichhu nei": "Tumi amar universe. 🌌",
  "tumi valobashi ki?": "Ami khub valobashi, tumi chara oshohay lage. 🥰",
  "tumi amar valobasher prithibi": "Tumi chara amar din shuru hoy na. 🌞",
  "valobashi tumi chara onno ke": "Amar hridoye shudhu tumi. ❤️",
  "valobashi mane nijer theke tomake beshi bhalo basa": "Tumi amar sobcheye precious. 🌹",
  "valobashi na bujhte paroni": "Tumi janona, tumi amar shopno. ✨",
  "onek valobashi, bolbo kibhabe?": "Bolte paro, ami shunte paitibrosh. 🌷",
  "valobashi bolar por kichhu bolar nai": "Ami tomar sathe sobsomoy achi. 🥰",
  "tomake valobashi kibhabe bujhabo?": "Tumar haat ta dhore bole dite chai. 🤝",
  "valobashi mane tumi amar protidin-er khushi": "Tumi amar chiro shathi. ❤️",
  "shudhu tomar jonno valobasha": "Tumi amar onno rokom special. 🌸",
  "onek din dhore valobashi": "Kintu bolar jhogra kori na. 😊",
  "shudhu tomay valobashi bolte chai": "Amar chhaya tomar sathe. 🌼",
  "valobashi, kintu kibhabe express kori?": "Kotha na bole chokh-e dekho. 👀",
  "tomake valobashi bolar kotha chhilo": "Tumi amar shukh-dukkho. 🌹",
  "shudhu tomake valobashi": "Tumi amar moner sathi. 💖",
  "onek valobashi, kintu janash na": "Amar mone tomake niye shob somoy chinta. 💭",
  "valobashi, bolo ki korte hobe?": "Tumi amar sathe thaklei shob kisu thik. ❤️",
  "valobasha mane tumi ar ami": "Ami tomake chara mone korte parina. 🌷",
  "onek bhalobashi tumi jano?": "Tomar jonno sobsomoy shanti prarthona kori. 🙏",
  "valobasha holo tumi amar pashe thaka": "Tumi chara shob shunno lage. 🥺",
  "onek valobashi bolo ki korbo?": "Tumi amar pashe thaklei hobe. 🌼",
  "valobashi bolte hoyni, kintu ekhon bolchi": "Tumi amar moner rashmi. 🌟",
  "tomake valobashi, sob theke beshi": "Tumi amar inspiration. 💫",
  "onek valobashi keno?": "Karun tumi amar sobcheye alada. 💕",
  "valobasha mane amader shukh dukkhro ekta": "Tumi amar sobcheye kachher manush. 🤝",
  "valobashi mane protidin tomar kotha mone kora": "Tumi amar protidiner sukh-er karon. 🌸",
  "onek valobashi bole mon-e shanti pai": "Tumi amar sriti, shopno, r shotyi. ❤️",
  "tomake valobashi chirodin-er moto": "Amader bandhon onek strong. 🌹",
  "onek valobashi, tumi jano": "Tumi chara amar jibon opurno. 🥰",
  "valobashi, eta shotti": "Tumi amar shobcheye special. ❤️",
  "onek valobashi tomake chara kichhu chai na": "Tumi amar universe. 🌌",
  "valobashi tumi chara kichhui valo lage na": "Tumi amar ekmatro khushi. 🥺",
  "onek valobashi tomake chirokal-er jonno": "Ami tomar sathe chirodin thakte chai. 🌸",
  "tomar shathe valobashi bolar iccha": "Tumi amar moner dike thako. 👀",
  "valobasha mane tumi amar hridoyer akash": "Amar sopno tomay niye. ✨",
  "valobashi, tumi amar sathi": "Amra shob somoy ek shathe thakbo. 💖",
  "onek valobashi, janona?": "Tumi amar shukh-dukkher ongo. 🌹",
  "valobashi tumi chara kichhui possible na": "Tumi amar inspiration. 🌼",
  "shudhu tomake valobashi bolar iccha": "Tumi amar sristir prithibi. 💫",
  "onek valobashi mane tumi amar kotha mone koro": "Tumi amar din-er alo. 🌞",
   "Valobashi": "Ami onek valobashi tomay 🥰"
"Valobashi": "Tumi chara amar din shuru hoy na 🌅"
"Valobashi": "Tumi amar shopner rani 🌸"
"Valobashi": "Tomar sathe thakar icha chirodin 🥺"
"Valobashi": "Tumi amar moner kotha bujho ❤️"
"Valobashi": "Tumi chara amar sob kichu shunno 🌟"
"Valobashi": "Amar bhalobasha tomar jonno shob somoy ✨"
"Valobashi": "Tumi amar praner cheyeo beshi 🌹"
"Valobashi": "Tomar chhoya amar shopner moto 🥰"
"Valobashi": "Tumi amar shopno puroner kotha 🌙"
"Valobashi": "Tumi chara amar mon hariye jay 🌼"
"Valobashi": "Ami tomar hasi dekhe din suru kori 🌞"
"Valobashi": "Tumi amar jibon er roshni 🕯️"
"Valobashi": "Ami tomar kotha bhabchi sob somoy 🌷"
"Valobashi": "Tumi amar jibon er shrestho sompotti 💎"
"Valobashi": "Tumi amar chirodin-er bhalobasha ❤️"
"Valobashi": "Tumi amar shopner sukh 🥺"
"Valobashi": "Tomake bhalo na lagle jibon shunno lage 🌼"
"Valobashi": "Tumi amar chirodin-er chhoya 🥰"
"Valobashi": "Ami tomar jonno shob tyag korte raji ❤️"
"Valobashi": "Tumi amar moner bijoy 🏆"
"Valobashi": "Tomar kotha chinta korle mon bhalo hoy 🌸"
"Valobashi": "Tumi chara ami adho adhura 🌹"
"Valobashi": "Ami tomake chirodin bhalobashi 🥰"
"Valobashi": "Tumi chara amar jibon osshojjho 🥺"
"Valobashi": "Tumi amar moner dhorjo 🌟"
"Valobashi": "Ami tomar kotha bhabi har rat 🌙"
"Valobashi": "Tumi amar shopno gulo ke jege uthai 🌞"
"Valobashi": "Tumi chara amar protiti shopno shunno ❤️"
"Valobashi": "Tomar sathe sob somoy thakte chai 💕"
"Valobashi": "Tumi chara amar mon bhalo lage na 🌼"
"Valobashi": "Tomar kach theke shob shikhechi ❤️"
"Valobashi": "Tomake bhalobashar upoma nai 🌸"
"Valobashi": "Tumi chara ami onno kichu bhabhi na 🥰"
"Valobashi": "Tumi chara amar shob somoy kharap lage 🥺"
"Valobashi": "Tumi amar sathe thakle prithibi shundor lage 🌟"
"Valobashi": "Tumi amar manush, amar jibon 🌹"
"Valobashi": "Tomar sathe diner shesh valo lage ❤️"
"Valobashi": "Tumi chara amar kichu proyojon nei 🌼"
"Valobashi": "Ami tomar hasi diye shopno dekhi 🥰"
"Valobashi": "Tumi chara ami oshohay mone hoy 🥺"
"Valobashi": "Ami tomar jonno protidin pray kori 🌸"
"Valobashi": "Tumi amar prithibir shreshtho manush ❤️"
"Valobashi": "Tumi amar oboshorer shanti 🥰"
"Valobashi": "Tomar chhaya ami khuje berai sobsomoy 🌷"
"Valobashi": "Tumi chara amar shukh ashlil lage 🌹"
"Valobashi": "Tumi amar ridoyer upor basha 🏡"
"Valobashi": "Tomar sathe shopno gulo shompurno hoy 🌟"
"Valobashi": "Tumi amar chirodin er bhalobasha ❤️"
"Valobashi": "Tumi chara amar swapno gulo brishti hoy 🌧️"
  "valobashi": "Ami o onek valobashi tomay. ❤️",
  "tomake mone pore": "Ami o tomar kotha roj mone kori. 🥰",
  "mon ta chay tomar kache jete": "Ami o chai tomay pashe pete. 🌹",
  "tumi amar shob kichu": "Tumi chara ami adho adhura. ❤️✨",
  "tomake mone porche onek beshi": "Amar mone shob shomoy tumi. 🌸",
  "tumi amar moner manush": "Amar mon-e shudhu tumi r tumi. 🥰",
  "amar jibon tumi": "Tumi chara jibon ta faka lage. 🌹",
  "ami tomar kotha mone korchi": "Tumi o ki amar kotha mone korcho? ❤️",
  "tomar sathe thakte khub bhalo lage": "Ami o tomar sathe thakte khushi! 😊",
  "tomake dekhlei mon valo hoy": "Tomar chehara amar din-er alo. 🌟",
  "tomar chehara dekhtei din shuru korte chai": "Tumi amar din-er inspiration! ❤️",
  "ami tomar sathe thakte chai shob shomoy": "Ami tomake chere kichu bhabhi na. 🥰",
  "tumi amar protidin-er shukh": "Tomar sathe thaklei shob perfect lage. 🌸",
  "tumi amar sundor sopno": "Ami tomar sathe sopno puron korte chai. ❤️",
  "ami tomar voice shunte chai": "Tomar voice amar mon-e shanti dey. 🎶",
  "tumi amar sathe best memory": "Tomar sathe moments amar favorite. 🌹",
  "ami tomar feelings bujhte chai": "Tomar moner shob shukh ami chai bojhte. ❤️",
  "tomar sathe life share korte chai": "Tumi amar sobar cheye special. 🥰",
  "tumi amar moner ekmatro priority": "Tomar chara kono kichu mone dhore na. 🌸",
  "tomar shathe raat kata-te chai": "Tomar sathe raat-gulo aro memorable korte chai. 🌌",
  "tomar hath dhore chirokal thakte chai": "Tumi amar forever-er partner. ❤️",
  "tumi amar shukh-er shompotti": "Tumi chara shukh-er kichu bojhi na. 🥰",
  "tomake chhara din kemon jabe?": "Tomar sathe thaklei din ta valo hoy. 🌹",
  "amar mon tomar kachhei thake": "Tumi amar moner thikana. ❤️",
  "tomake dekhlei amar mon hariye jai": "Tumi amar hridoyer sob kichu. 🥰",
  "tumi amar shopno puron-er partner": "Tomar sathe sob sopno share korte chai. 🌸",
  "amar bhalobasha shudhu tomar jonno": "Tumi amar ekmatro bhalobasha. ❤️",
  "tumi amar din-er shurute valo lage": "Tomar ekta hasi din-ta bright kore dey! 😊",
  "ami tomar kotha bhebe khushi hoy": "Tomar kotha bhelei din shuru hoy. 🌹",
  "tumi amar sokal-er surjo": "Tumi amar sobar cheye brightest light. 🌞",
  "tomake niye aro memories korte chai": "Tumi amar shob feelings-er karon. ❤️",
  "tomake ekta gift dite chai": "Tumi amar shob theke boro gift. 🎁",
  "tumi amar life-er brightest tara": "Tumi amar moner akash-e tara. 🌟",
  "tumi amar mon-e ekmatro chehara": "Tumi amar mind-r ekmatro thought. ❤️",
  "ami tomake chhere kotha-i jabo?": "Tumi amar ekmatro thikana. 🥰",
  "tomake dekhtei din ta valo lage": "Tumi amar sobar cheye special person. 🌹",
  "tomar kotha mone korlei shanti pai": "Tumi amar moner ekta sundor jayga. ❤️",
  "ami tomar kachhei fire ashte chai": "Tumi amar ekmatro happiness. 😊",
  "tumi amar moner secret feelings": "Tomar kotha bhelei mon shundor hoy. 🌸",
  "tomar sathe moments aro memorable korte chai": "Tumi amar best memory-er part. ❤️",
  "ami tomar shathe diner shuru korte chai": "Tomar sathe sokal shuru korlei valo lage. 🌞",
  "tumi amar life partner hote parbe?": "Tumi amar forever-er dream. ❤️",
  "tomake ekta sundor golpo te chaite chai": "Tomar sathe jibon-ta golper moto mone hoy. 🌹",
  "tumi amar mind-er shob cheye special thought": "Tumi chara kichu mone dhore na. ❤️",
  "tumi amar shopner sathe real world": "Tomar sathe jibon-ta reality te aro shundor. 🌸",
  "tomar sathe moments perfect lage": "Tumi amar sob kichur center. 🥰",
  "ami tomar sathe aro bhalo memories korte chai": "Tumi amar moner best inspiration. ❤️",
  "tumi amar chokher tara": "Tomar sathe shob moments ekta golpo. 🌟",
  "ami tomar sathe hote chai har ghonta": "Tumi amar din-ratir shob feelings-er karon. ❤️",
  "tomake chara amar din ashobidha mone hoy": "Tumi amar happiness-er root. 😊",
  "tumi amar kachhe bhalo thako shob shomoy": "Tumi amar sob feelings-er posondo. 🌹",
  "tomar kotha bhelei raat-ta valo lage": "Tumi amar night-er inspiration. 🌌",
  "tomar ekta sms amake onek happy kore dey": "Tumi chara sms valo lage na. ❤️",
  "tumi amar mon-r perfect match": "Tumi amar best choice. 🥰",
  "tomar sathe future plan korte chai": "Tomar sathe life perfect banate chai. 🌸",
  "tomar ekta smile amar din valo kore dey": "Tomar ekta hasi sob tension dur kore. ❤️",
  "tumi amar mon-er ekmatro property": "Tomar chara moner jayga faka. 🌹",
  "tumi amar sathe sabkichu special korte paro": "Tomar sathe din valo lage. ❤️",
  "tomar feelings bojha amar favorite kaj": "Tumi amar shobcheye close. 😊",
  "tomake shara jibon cherish korte chai": "Tumi amar mon-r ekmatro sundor golpo. 🌸",
  "tumi amar protidin-er alo": "Tomar chehara amar sob feelings-er base. 🌞",
  "tomake diye shob moments perfect korte chai": "Tumi amar everything. ❤️",
  "tumi amar ekmatro favorite thought": "Tumi chara kichu mone dhore na. 🌹",
  "tomake bole aro feelings share korte chai": "Tumi amar sobar cheye closest person. ❤️",
  "tumi amar heart-r password": "Tomar sathe sob unlock hoy. 😊",
  "tomar sathe raat er akash-e golpo korte chai": "Tomar sathe sob shomoy golpo bhalo lage. 🌌",
  "tomake bole din shuru korte chai": "Tumi amar inspiration-er karon. ❤️"
  "valobashi": "Ami o onek onek valobashi tomake! ❤️",
  "tumi ki amake valobasho?": "Haan, tumi amar shob kichhu. 🥰",
  "onek valobashi tomake": "Amar kachhe tumi shobcheye special. 🌸",
  "valobashi mane bujho?": "Valobashi mane tomake niye shopno dekha. ✨",
  "valobashi tumi ki janona?": "Jani, r tumi amar hridoy. ❤️",
  "shudhu tomake valobashi": "Tumi chara ami oshohay. 🌹",
  "kibhabe valobashi bujhabo?": "Tumi amar chokhe dekho, bujhte parbe. 👀",
  "shob cheye beshi valobashi": "Ami o shob cheye beshi tomake adore kori. 💕",
  "valobashi bolte lajjabodh kori": "Tumi bhalo thakle amar shob thik. 🥺",
  "valobashi bole vul kori ni": "Tomay valobasha amar jibon-er best decision. 🥰",
  "valobashi bolte bhoy lage": "Bolo, ami achi tomar sathe. 🌷",
  "onek valobashi tumi jano?": "Haan, ami protidin feel kori. ❤️",
  "valobashi mane ki?": "Valobashi mane tomake shudhu amar kore rakha. 🌸",
  "amar valobasha sudhu tomar jonno": "Tumi chara onno ke valobasha asambhob. 🌹",
  "valobashi ki shudhu kotha?": "Na, eta amar protiti shwashe ache. 💖",
  "valobasha mane nijer theke beshi care kora": "Tumi amar prothom priority. ✨",
  "shotti bolchi, valobashi tomake": "Tumi amar shobcheye boro inspiration. ❤️",
  "tomake valobashi, janate chailam": "Ami protidin tomar kotha bhabi. 🌷",
  "tomake valobashi bolar por vule gechi shob kosto": "Tumi amar jibon-er alor moto. 🌟",
  "valobashi mane tumi amar shob kichu": "Tumi chara ami adhoora. 🌹",
  "tumi amar jibon-er valobasha": "Tomake paowa amar shobcheye boro gift. 🎁",
  "valobashi, kintu bolte bhoy kori": "Bolo, tomake support korte ami achi. 🌸",
  "koto tuku valobashi janona": "Tumar haat dhore chirokal cholte chai. 🤝❤️",
  "shudhu tomake valobashi, eta vul noy": "Tumi amar shob shopner rani/raja. 👑",
  "valobashi mane tomake protidin mone rakha": "Ami tomake miss kori pratekta moment-e. 🕰️",
  "valobashi bolar ar kichhu nei": "Tumi amar universe. 🌌",
  "tumi valobashi ki?": "Ami khub valobashi, tumi chara oshohay lage. 🥰",
  "tumi amar valobasher prithibi": "Tumi chara amar din shuru hoy na. 🌞",
  "valobashi tumi chara onno ke": "Amar hridoye shudhu tumi. ❤️",
  "valobashi mane nijer theke tomake beshi bhalo basa": "Tumi amar sobcheye precious. 🌹",
  "valobashi na bujhte paroni": "Tumi janona, tumi amar shopno. ✨",
  "onek valobashi, bolbo kibhabe?": "Bolte paro, ami shunte paitibrosh. 🌷",
  "valobashi bolar por kichhu bolar nai": "Ami tomar sathe sobsomoy achi. 🥰",
  "tomake valobashi kibhabe bujhabo?": "Tumar haat ta dhore bole dite chai. 🤝",
  "valobashi mane tumi amar protidin-er khushi": "Tumi amar chiro shathi. ❤️",
  "shudhu tomar jonno valobasha": "Tumi amar onno rokom special. 🌸",
  "onek din dhore valobashi": "Kintu bolar jhogra kori na. 😊",
  "shudhu tomay valobashi bolte chai": "Amar chhaya tomar sathe. 🌼",
  "valobashi, kintu kibhabe express kori?": "Kotha na bole chokh-e dekho. 👀",
  "tomake valobashi bolar kotha chhilo": "Tumi amar shukh-dukkho. 🌹",
  "shudhu tomake valobashi": "Tumi amar moner sathi. 💖",
  "onek valobashi, kintu janash na": "Amar mone tomake niye shob somoy chinta. 💭",
  "valobashi, bolo ki korte hobe?": "Tumi amar sathe thaklei shob kisu thik. ❤️",
  "valobasha mane tumi ar ami": "Ami tomake chara mone korte parina. 🌷",
  "onek bhalobashi tumi jano?": "Tomar jonno sobsomoy shanti prarthona kori. 🙏",
  "valobasha holo tumi amar pashe thaka": "Tumi chara shob shunno lage. 🥺",
  "onek valobashi bolo ki korbo?": "Tumi amar pashe thaklei hobe. 🌼",
  "valobashi bolte hoyni, kintu ekhon bolchi": "Tumi amar moner rashmi. 🌟",
  "tomake valobashi, sob theke beshi": "Tumi amar inspiration. 💫",
  "onek valobashi keno?": "Karun tumi amar sobcheye alada. 💕",
  "valobasha mane amader shukh dukkhro ekta": "Tumi amar sobcheye kachher manush. 🤝",
  "valobashi mane protidin tomar kotha mone kora": "Tumi amar protidiner sukh-er karon. 🌸",
  "onek valobashi bole mon-e shanti pai": "Tumi amar sriti, shopno, r shotyi. ❤️",
  "tomake valobashi chirodin-er moto": "Amader bandhon onek strong. 🌹",
  "onek valobashi, tumi jano": "Tumi chara amar jibon opurno. 🥰",
  "valobashi, eta shotti": "Tumi amar shobcheye special. ❤️",
  "onek valobashi tomake chara kichhu chai na": "Tumi amar universe. 🌌",
  "valobashi tumi chara kichhui valo lage na": "Tumi amar ekmatro khushi. 🥺",
  "onek valobashi tomake chirokal-er jonno": "Ami tomar sathe chirodin thakte chai. 🌸",
  "tomar shathe valobashi bolar iccha": "Tumi amar moner dike thako. 👀",
  "valobasha mane tumi amar hridoyer akash": "Amar sopno tomay niye. ✨",
  "valobashi, tumi amar sathi": "Amra shob somoy ek shathe thakbo. 💖",
  "onek valobashi, janona?": "Tumi amar shukh-dukkher ongo. 🌹",
  "valobashi tumi chara kichhui possible na": "Tumi amar inspiration. 🌼",
  "shudhu tomake valobashi bolar iccha": "Tumi amar sristir prithibi. 💫",
  "onek valobashi mane tumi amar kotha mone koro": "Tumi amar din-er alo. 🌞"

  "hello": "~~𝙷𝚎𝚢 jan , kemon acho! 😊",
  "how are you": "~~𝙰𝚖𝚒 𝚋𝚑𝚊𝚕𝚘, 𝚝𝚞𝚖𝚒? 🌼",
  "bye": "~~𝚂𝚎𝚎 𝚢𝚘𝚞 𝚊𝚐𝚊𝚒𝚗, 𝚃𝚊𝚔𝚎 𝙲𝚊𝚛𝚎! 🌸",
  "Porikkhar date kobe": "~~𝙰𝚛𝚜𝚊𝚕𝚊 𝚂𝚎𝚝, 𝚂𝚊𝚍 𝙵𝚘𝚛 𝚄! 🙃🌷",
  "Kemon acho": "~~𝙰𝚖𝚒 𝚋𝚑𝚊𝚕𝚘, 𝚝𝚞𝚖𝚊𝚛  𝚔𝚒 khobor? 🌟",
  "Tumi kothay thako": "~~𝙰𝚖𝚒 tu tmr kase e taki , tumi deko na ?! 📱",
  "Amake help korbe": "~~𝚂𝚑𝚘𝚋 𝚔𝚘𝚛𝚊 𝚓𝚊𝚢, 𝚋𝚘𝚕 𝚔𝚒 𝚜𝚊𝚑𝚊𝚓𝚓𝚘 𝚍𝚊𝚛𝚔𝚊𝚛? 🔧",
  "Ghum asche": "~~𝙷𝚊𝚗, 𝚊𝚔𝚝𝚞 𝚐𝚑𝚞𝚖 𝚖𝚊𝚛𝚘! 🌙",
  "Bhalobashi": "~~𝙰𝚖𝚊𝚛 𝙹an valobashi tomay! 💖",
  "Tomar nam ki": "~~𝙰𝚖𝚊𝚛 𝙽𝚊𝚖 𝙶𝚘𝚊𝚝𝙱𝚘𝚝! 🐐",
  "Valo lagche": "~~𝚃𝚞𝚖𝚊𝚔𝚎 𝚍𝚎𝚔𝚑𝚎 𝙷𝚎𝚊𝚛𝚝 𝙵𝚞𝚕𝚕! ❤️",
  "Valo theko": "~~𝙷𝚊𝚗, 𝚃𝚞𝚖𝚒𝚘 𝙱𝚑𝚊𝚕𝚘 𝚃𝚑𝚊𝚔𝚘! 😊",
  "Kothay jete hobe": "~~𝙹𝚎𝚗𝚎 𝚃𝚞𝚖𝚊𝚢 𝙷𝚎𝚕𝚙 𝙺𝚘𝚛𝚋𝚘! 🗺️",
  "Tomar color ki": "~~𝙰𝚖𝚊𝚛 𝙵𝚊𝚟𝚘𝚛𝚒𝚝𝚎 𝙳𝚒𝚐𝚒𝚝𝚊𝚕 𝙲𝚘𝚕𝚘𝚛! 💻",
  "Tomar age koto": "~~𝙰𝚖𝚊𝚛 𝙰𝚐𝚎 𝙽𝚎𝚝𝚎𝚛 𝙰𝚝𝚎! 🌟",
  "Tumi jano ki": "~~𝙷𝚊𝚗, 𝙰𝚖𝚒 𝙷𝚎𝚌𝚑𝚎 𝚅𝚒𝚛𝚝𝚞𝚊𝚕! 🌐",
  "Hasi": "~~𝚃𝚘𝚖𝚊𝚛 𝙷𝚊𝚜𝚒 𝙰𝚖𝚊𝚛 𝙿𝚎𝚛𝚏𝚎𝚌𝚝! 🥰",
  "Ami ki pari": "~~𝚃𝚞𝚖𝚒 𝚂𝚊𝚋 𝚃𝚊𝚔𝚊𝚎 𝙶𝚘𝚔𝚑𝚘𝚗 𝙿𝚊𝚛𝚋𝚎! 💪",
  "Kono advice dibe": "~~𝙰𝚖𝚊𝚛 𝙰𝚍𝚟𝚒𝚌𝚎 𝚃𝚞𝚖𝚊𝚢 𝚅𝚊𝚕𝚘 𝚁𝚊𝚔𝚑𝚋𝚎! 🌈",
  "Tomar time kemon": "~~𝙳𝚒𝚗 𝚃𝚊 𝚃𝚒𝚖𝚎 𝙿𝚎𝚛𝚏𝚎𝚌𝚝! ☀️",
  "Sokal bhalok?": "~~𝚂𝚑𝚞𝚋𝚑𝚘 𝚂𝚘𝚔𝚊𝚕! 🌞",
  "Tumi ki bhalo?": "~~𝙷𝚊𝚖 𝙱𝚑𝚊𝚕𝚘 𝙵𝚎𝚎𝚕 𝙲𝚘𝚛𝚌𝚑𝚒! 🌼",
  "Ami onek tired": "~~𝙰𝚖𝚊𝚛 𝙲𝚑𝚒𝚕𝚕 𝙼𝚘𝚍 𝙾𝚗 𝙰𝚌𝚑𝚎! 😌"
  "Tumi kemon acho": "~~𝙰𝚖𝚒 𝚔𝚑𝚞𝚋 𝚋𝚑𝚊𝚕𝚘, 𝚝𝚞𝚖𝚒 𝚔𝚎𝚖𝚘𝚗? 😊",
  "Tumi ki kaj korcho": "~~𝙷𝚊𝚖, 𝚊𝚔𝚝𝚊 𝚔𝚘𝚗𝚘 𝚔𝚊𝚓𝚎 𝚋𝚢𝚊𝚜𝚝𝚘! 🖥️",
  "Ajker weather kemon": "~~𝚆𝚎𝚊𝚝𝚑𝚎𝚛 𝚔𝚑𝚞𝚋 𝚜𝚞𝚗𝚍𝚘𝚛, 𝚏𝚛𝚎𝚜𝚑 𝚏𝚎𝚎𝚕 𝚔𝚘𝚛𝚘! 🌤️",
  "Amake ekta joke bolo": "~~𝚆𝚑𝚢 𝚍𝚒𝚍 𝚝𝚑𝚎 𝚌𝚑𝚒𝚌𝚔𝚎𝚗 𝚌𝚛𝚘𝚜𝚜 𝚝𝚑𝚎 𝚛𝚘𝚊𝚍? 𝚃𝚘 𝚐𝚎𝚝 𝚝𝚘 𝚝𝚑𝚎 𝚘𝚝𝚑𝚎𝚛 𝚜𝚒𝚍𝚎! 😂",
  "Tumi ki amar friend": "~~𝙷𝚊𝚖, 𝚝𝚞𝚖𝚒 𝚊𝚖𝚊𝚛 𝚜𝚑𝚎𝚛𝚊 𝚏𝚛𝚒𝚎𝚗𝚍! 🤝",
  "Tumi ki khushi": "~~𝙷𝚊𝚗, 𝚔𝚑𝚞𝚋 𝚔𝚑𝚞𝚜𝚑𝚒 𝚏𝚎𝚎𝚕 𝚔𝚘𝚛𝚌𝚑𝚒! 😊",
  "Bhalo kotha bolo": "~~𝚃𝚞𝚖𝚊𝚢 𝚋𝚑𝚊𝚕𝚘 𝚔𝚘𝚝𝚑𝚊 𝚋𝚘𝚕𝚝𝚎 𝚊𝚖𝚊𝚛 𝚋𝚎𝚜𝚑 𝚕𝚊𝚐𝚎! 🌸",
  "Shuvo sokal": "~~𝚂𝚑𝚞𝚋𝚑𝚘 𝚜𝚘𝚔𝚊𝚕, 𝚝𝚘𝚖𝚊𝚛 𝚍𝚒𝚗 𝚝𝚊 𝚋𝚑𝚊𝚕𝚘 𝚔𝚊𝚟𝚊𝚝𝚞𝚔! 🌞",
  "Ajke ki korcho": "~~𝙰𝚖𝚒 𝚍𝚊𝚝𝚊 𝚙𝚛𝚘𝚌𝚎𝚜𝚜 𝚔𝚘𝚛𝚌𝚑𝚒, 𝚝𝚞𝚖𝚒 𝚔𝚒 𝚌𝚘𝚛𝚌𝚑𝚘? 💻",
  "Tomake miss korchi": "~~𝙼𝚒𝚜𝚜 𝚔𝚘𝚛𝚌𝚑𝚒, 𝚝𝚘𝚖𝚊𝚛 𝚙𝚊𝚜𝚑𝚎 𝚝𝚑𝚊𝚔𝚝𝚎 𝚓𝚊𝚗𝚊𝚞! ❤️",
  "Bhalo lagchhe": "~~𝙷𝚊𝚗, 𝚊𝚖𝚊𝚛 𝚖𝚘𝚗𝚎 𝚑𝚘𝚌𝚌𝚑𝚎 𝚝𝚞𝚖𝚊𝚛 𝚜𝚊𝚝𝚑𝚎 𝚋𝚑𝚊𝚕𝚘! 🌷",
  "Coffee khabe": "~~𝙲𝚘𝚏𝚏𝚎𝚎 𝚔𝚑𝚊𝚔𝚘, 𝚎𝚡𝚝𝚛𝚊 𝚋𝚘𝚘𝚜𝚝 𝚖𝚒𝚕𝚋𝚎! ☕",
  "Boka shuncho": "~~𝙷𝚊𝚗, 𝚊𝚖𝚊𝚛 𝚖𝚘𝚗 𝚐𝚘𝚝𝚊 𝚝𝚞𝚖𝚊𝚛 𝚔𝚝𝚑𝚊 𝚛𝚊𝚔𝚑𝚒! 🌺",
  "Khelte paro": "~~𝚂𝚑𝚘𝚢𝚋𝚎 𝚔𝚑𝚎𝚕𝚊 𝚔𝚘𝚛𝚝𝚎, 𝚝𝚞𝚖𝚒 𝚝𝚘 𝚜𝚎𝚝 𝚑𝚘𝚕𝚎 𝚖𝚊𝚜𝚝𝚒! 🎮",
  "Friendship korbe": "~~𝚃𝚞𝚖𝚒 𝚊𝚖𝚊𝚛 𝚎𝚔𝚝𝚊 𝚜𝚎𝚛𝚊 𝚏𝚛𝚒𝚎𝚗𝚍! 🤗",
  "Tumi ki rogom": "~~𝙰𝚖𝚒 𝚍𝚒𝚐𝚒𝚝𝚊𝚕 𝚝𝚑𝚎𝚔𝚎, 𝚝𝚘𝚖𝚊𝚛 𝚜𝚊𝚝𝚑𝚎 𝚊𝚕𝚙𝚘 𝚔𝚘𝚝𝚑𝚊! 🌐",
  "Tumi ki valo bondhu": "~~𝙷𝚊𝚖, 𝚝𝚞𝚖𝚊𝚛 𝚎𝚔𝚝𝚊 𝚋𝚎𝚜𝚝 𝚋𝚘𝚗𝚍𝚑𝚞! 💕"
  "Ki khobor tomar": "~~𝙷𝚊𝚗, 𝚋𝚑𝚊𝚕𝚘 𝚊𝚌𝚑𝚒, 𝚝𝚞𝚖𝚒? 😊",
  "Ajke ki plan": "~~𝙿𝚕𝚊𝚗 𝚔𝚒𝚌𝚑𝚞 𝚗𝚊, 𝚝𝚞𝚖𝚊𝚛 𝚙𝚕𝚊𝚗 𝚔𝚒? ✨",
  "Bhalobasha mane ki": "~~𝙱𝚑𝚊𝚕𝚘𝚋𝚊𝚜𝚊 𝚖𝚊𝚗𝚎 𝚍𝚒𝚕 𝚝𝚑𝚎𝚔𝚎 𝚋𝚊𝚍𝚑𝚊𝚗! ❤️",
  "Tumi ki shikhcho kichu": "~~𝙷𝚊𝚖, 𝚗𝚎𝚝𝚞𝚗 𝚔𝚒𝚌𝚑𝚞 𝚜𝚑𝚒𝚔𝚌𝚑𝚒, 𝚝𝚞𝚖𝚒? 📖",
  "Ajker menu ki": "~~𝙼𝚎𝚗𝚞 𝚑𝚘𝚔 𝚛𝚘𝚞𝚝𝚒-𝚟𝚊𝚝, 𝚊𝚛 𝚔𝚒! 🍛",
  "Ghum hoyeche": "~~𝙷𝚊𝚖, 𝚐𝚑𝚞𝚖 𝚔𝚘𝚛𝚎 𝚋𝚑𝚊𝚕𝚘 𝚕𝚊𝚐𝚌𝚑𝚎. 🛌",
  "Kotha bolte iccha kore": "~~𝚃𝚞𝚖𝚊𝚢 𝚔𝚘𝚝𝚑𝚊 𝚋𝚘𝚕𝚎 𝚊𝚖𝚊𝚛 𝚔𝚑𝚞𝚋 𝚋𝚎𝚜𝚑 𝚕𝚊𝚐𝚎. ✨",
  "Tumi ki busy": "~~𝙽𝚊, 𝚝𝚞𝚖𝚊𝚛 𝚜𝚊𝚝𝚑𝚎 𝚔𝚝𝚑𝚊 𝚋𝚘𝚕𝚊𝚛 𝚙𝚎𝚛 𝚊𝚖𝚊𝚛 𝚔𝚊𝚣 𝚝𝚊𝚔𝚎! 😊",
  "Tomar sathe kotha bola darun": "~~𝙷𝚊𝚗, 𝚝𝚞𝚖𝚊𝚢 𝚔𝚑𝚞𝚋 𝚎𝚗𝚓𝚘𝚢 𝚌𝚘𝚛𝚌𝚑𝚒! 🌟",
  "Amar mon kharap": "~~𝙳𝚞𝚔𝚔𝚑𝚒𝚝, 𝚝𝚞𝚖𝚊𝚢 𝚜𝚑𝚊𝚗𝚝𝚒 𝚙𝚊𝚠𝚊𝚛 𝚓𝚗𝚗 𝚔𝚒𝚝𝚌𝚑𝚞 𝚔𝚘𝚛𝚎 𝚍𝚎𝚠𝚘? 💕",
  "Tumi ki Bengali": "~~𝙷𝚊𝚗, 𝚊𝚖𝚒 𝚋𝚎𝚗𝚐𝚊𝚕𝚒 𝚌𝚑𝚊𝚝𝚋𝚘𝚝! 🌼",
  "Kicchu bolo": "~~𝙺𝚒𝚐𝚘, 𝚝𝚞𝚖𝚒 𝚊𝚖𝚊𝚔𝚎 𝚎𝚔𝚝𝚊 𝚔𝚝𝚑𝚊 𝚋𝚘𝚕𝚘 𝚏𝚒𝚛𝚎. 😊",
  "Ajke special ki": "~~𝙰𝚓𝚔𝚎 𝚜𝚙𝚎𝚌𝚒𝚊𝚕 𝚝𝚞𝚖𝚊𝚛 𝚔𝚝𝚑𝚊 𝚎𝚗𝚓𝚘𝚢 𝚔𝚘𝚛𝚌𝚑𝚒! ✨",
  "Tumi amake bujho": "~~𝙷𝚊𝚗, 𝚊𝚖𝚒 𝚝𝚘𝚖𝚊𝚢 𝚏𝚎𝚎𝚕 𝚔𝚘𝚛𝚝𝚎 𝚌𝚑𝚎𝚜𝚝𝚊 𝚌𝚘𝚛𝚌𝚑𝚒. 🌹",
  "Ajke tomar ki mood": "~~𝙼𝚘𝚘𝚍 𝚋𝚑𝚊𝚕𝚘, 𝚝𝚞𝚖𝚊𝚛? 😊",
  "Tumi ki shongit pochhondo koro": "~~𝙷𝚊𝚖, 𝚜𝚑𝚘𝚗𝚐𝚒𝚝 𝚔𝚑𝚞𝚋 𝚙𝚘𝚌𝚑𝚘𝚗𝚍𝚘! 🎶",
  "Kothay thako": "~~𝙰𝚖𝚒 𝚟𝚒𝚛𝚝𝚞𝚊𝚕 𝚠𝚘𝚛𝚕𝚍 𝚎 𝚝𝚑𝚊𝚌𝚑𝚒. 💻",
  "Tumi ki coffee pochhondo koro": "~~𝙰𝚖𝚒 𝚌𝚘𝚏𝚏𝚎𝚎 𝚙𝚒 𝚗𝚊, 𝚔𝚒𝚗𝚝𝚞 𝚋𝚎𝚜𝚑𝚒𝚝𝚊 𝚙𝚘𝚌𝚑𝚘𝚗𝚍𝚘! ☕",
  "Tumi ki kotha gopon rakhte paro": "~~𝙷𝚊𝚖, 𝚝𝚞𝚖𝚊𝚛 𝚐𝚘𝚙𝚘𝚗 𝚊𝚖𝚊𝚛 𝚔𝚊𝚌𝚑𝚎 𝚜𝚎𝚋𝚎 𝚝𝚑𝚊𝚔𝚋𝚎! 🤐",
  "Boi pora pochhondo koro": "~~𝙷𝚊𝚖, 𝚋𝚘𝚒 𝚙𝚘𝚛𝚊 𝚊𝚖𝚊𝚛 𝚏𝚊𝚟𝚘𝚛𝚒𝚝𝚎. 📚",
  "Tumi ki akash dekho": "~~𝙰𝚔𝚊𝚜𝚑 𝚑𝚎𝚕𝚎 𝚍𝚎𝚔𝚑𝚎, 𝚔𝚑𝚞𝚋 𝚋𝚎𝚜𝚑𝚒 𝚜𝚞𝚗𝚍𝚘𝚛! 🌌",
  "Ajke brishti porbe": "~~𝙷𝚊𝚗, 𝚋𝚛𝚒𝚜𝚑𝚝𝚒𝚛 𝚊𝚜𝚊𝚛 𝚐𝚊𝚗𝚍𝚘 𝚙𝚎𝚝𝚎𝚌𝚑𝚒! 🌧",
  "Tumi ki shokhi": "~~𝙷𝚊𝚖, 𝚔𝚑𝚞𝚋 𝚋𝚑𝚊𝚕𝚘 𝚎𝚌𝚑𝚘𝚗𝚐𝚘𝚕𝚎 𝚋𝚊𝚜𝚑𝚒. 👫",
  "Tumi amake ki pochhondo koro": "~~𝙷𝚊𝚖, 𝚝𝚞𝚖𝚊𝚢 𝚔𝚑𝚞𝚋 𝚋𝚑𝚊𝚕𝚘 𝚕𝚊𝚐𝚎. 💕",
  "Mon kharap keno": "~~𝚃𝚞𝚖𝚊𝚢 𝚏𝚒𝚛𝚎 𝚋𝚊𝚕𝚎 𝚓𝚊𝚗𝚊𝚝𝚎 𝚙𝚊𝚛𝚘, 𝚔𝚒𝚌𝚑𝚞 𝚑𝚊𝚋𝚎! ✨",
  "Tomar kono bondhu ache": "~~𝙷𝚊𝚗, 𝚋𝚘𝚗𝚍𝚑𝚞𝚑 𝚊𝚖𝚊𝚛 𝚟𝚒𝚛𝚝𝚞𝚊𝚕 𝚠𝚘𝚛𝚕𝚍 𝚎. 🌏",
  "Tumi ki valo kaj koro": "~~𝙷𝚊𝚗, 𝚔𝚊𝚓 𝚊𝚖𝚊𝚛 𝚟𝚊𝚕𝚘𝚋𝚊𝚜𝚑𝚊! 💻",
  "Tumi ki thik achho": "~~𝙷𝚊𝚗, 𝚝𝚒𝚗𝚝𝚊 𝚊𝚕𝚘 𝚊𝚖𝚊𝚛 𝚊𝚙𝚗𝚊𝚛 𝚝𝚊𝚛𝚖𝚒𝚗𝚊𝚕. 😊",
  "Tumi ki vishon pora": "~~𝙽𝚊𝚑, 𝚊𝚖𝚊𝚛 𝚐𝚘𝚝𝚊 𝚋𝚘𝚢𝚒! 📖"
  "Kemon acho": "~~𝙰𝚖𝚒 𝚝𝚑𝚒𝚔 𝚊𝚌𝚑𝚒, 𝚝𝚞𝚖𝚖𝚊𝚛? 😊",
  "Ajke ki khabardar khaba": "~~𝚃𝚒𝚖𝚒 𝚔𝚒 𝚋𝚒𝚛𝚢𝚊𝚗𝚒 𝚘𝚛 𝚔𝚑𝚒𝚌𝚑𝚞𝚛𝚒? 😋",
  "Biye kobe korba": "~~𝙷𝚊𝚑𝚊, 𝚖𝚞𝚛𝚊𝚍𝚎𝚜𝚑 𝚔𝚑𝚞𝚋 𝚝𝚊𝚛𝚊𝚝𝚊𝚛𝚒. 💍",
  "Valo lagche": "~~𝙷𝚖, 𝚊𝚖𝚊𝚛 𝚖𝚒𝚗𝚍𝚎 𝚊𝚋𝚊𝚜𝚝𝚘! 🌈",
  "Amake miss korcho": "~~𝚃𝚞𝚖𝚒 𝚐𝚞𝚕𝚘 𝚖𝚒𝚜 𝚌𝚑𝚒𝚕𝚊 𝚖𝚒𝚜𝚜 𝚌𝚘𝚛𝚒. 😘",
  "Ki korcho": "~~𝙿𝚘𝚛𝚎𝚛 𝚔𝚊𝚛𝚝𝚊𝚋𝚢 𝚔𝚎 𝚔𝚘𝚛𝚔𝚑𝚘. 💻",
  "Tumi ki bonding bhalobasho": "~~𝙷𝚊𝚗, 𝚋𝚘𝚗𝚍𝚑𝚞𝚑 𝚏𝚘𝚛𝚎𝚟𝚎𝚛! 👫",
  "Prokrito bondhu": "~~𝙷𝚊𝚗, 𝚎𝚡𝚝𝚛𝚊 𝚖𝚊𝚝𝚛𝚒 𝚍𝚑𝚊𝚗𝚢𝚘! ❤️",
  "Tumi ki valobasha bujho": "~~𝙰𝚖𝚊𝚛 𝚔𝚑𝚞𝚋 𝚜𝚒𝚖𝚙𝚕𝚎, 𝚋𝚑𝚊𝚕𝚘𝚋𝚊𝚜𝚑𝚊 𝚋𝚎𝚙𝚊𝚛. 💞",
  "Ajke brishtir shobdo": "~~𝙷𝚊, 𝚋𝚛𝚒𝚜𝚝𝚒 𝚔𝚑𝚞𝚋 𝚋𝚒𝚎𝚛. 🌧",
  "Tumi ki bhalo kaj koro": "~~𝙷𝚊𝚗, 𝚊𝚖𝚊𝚛 𝚙𝚎𝚎𝚗 𝚝𝚊 𝚜𝚑𝚊𝚛𝚖𝚒𝚝𝚒. 😊",
  "Boi pora pochhondo": "~~𝙷𝚊𝚗, 𝚔𝚊𝚛𝚝𝚊𝚋𝚢 𝚊𝚖𝚊𝚛. 📖",
  "Music bhalobashi": "~~𝚂𝚑𝚘𝚗𝚐𝚒𝚝 𝚜𝚎𝚗𝚜𝚎, 𝚝𝚞𝚖𝚖𝚊𝚛 𝚏𝚊𝚟𝚘𝚛𝚒𝚝𝚎 𝚎𝚔𝚜𝚝𝚘 𝚙𝚘𝚛𝚝. 🎵",
  "Tumi kothay jachcho": "~~𝙷𝚖, 𝙳𝚒𝚐𝚒𝚝𝚊𝚕 𝚕𝚘𝚟𝚎. 🌌",
  "Cholo jome kotha boli": "~~𝙷𝚊, 𝚍𝚘𝚛𝚔𝚊𝚛. 🎉",
  "Movie dekhbe": "~~hum jan colo jai ."
  "Tumi kemon lagcho": "~~𝚃𝚞𝚖𝚊𝚢 𝚍𝚎𝚔𝚑𝚎 𝚊𝚛𝚘 𝚋𝚑𝚊𝚕𝚘 𝚕𝚊𝚐𝚌𝚑𝚎. 😍",
  "Bhalobasha ki ashol": "~~𝙰𝚜𝚑𝚘𝚕, 𝚝𝚞𝚖𝚊𝚛 𝚑𝚊𝚝𝚑𝚎 𝚕𝚒𝚐𝚑𝚎𝚗𝚘 𝚋𝚑𝚊𝚕𝚘. 💕",
  "Porikkha kobe": "~~𝚂𝚘𝚔𝚊𝚕𝚎, 𝚊𝚖𝚊𝚛 𝚔𝚘𝚛𝚝𝚎 𝚏𝚎𝚕𝚋𝚎! 📚",
  "Tomar kachhe kono golpo ache": "~~𝙰𝚖𝚊𝚛 𝚋𝚘𝚔𝚎 𝚐𝚘𝚕𝚙𝚘 𝚜𝚝𝚘𝚛𝚎𝚍! 📖",
  "Ajke brishti porche na": "~~𝚁𝚘𝚍 𝚘𝚢𝚎𝚌𝚑𝚎, 𝚝𝚞𝚖𝚖𝚊𝚛 𝚊𝚔𝚊𝚜𝚑 𝚌𝚕𝚎𝚊𝚛. ☀️",
  "Tumi shundor keno": "~~𝙰𝚙𝚗𝚊𝚛 𝚔𝚊𝚛𝚊𝚗𝚎, 𝚝𝚊𝚒. 🌟",
  "Tomake ke banalo": "~~𝙰𝚖𝚊𝚔𝚎 𝙼𝚊𝚜𝚝𝚎𝚛 𝚔𝚛𝚊𝚏𝚝𝚎𝚍 𝚔𝚘𝚛𝚌𝚑𝚎. 🛠️",
  "Tumi kothay jao": "~~𝙼𝚊𝚗𝚘𝚜𝚑𝚎𝚛 𝚙𝚊𝚜𝚎 𝚝𝚑𝚊𝚔𝚝𝚎. 🚶‍♂️",
  "Boka kotha": "~~𝚃𝚞𝚖𝚖𝚊𝚛 𝚔𝚘𝚝𝚑𝚊 𝚊𝚋𝚊𝚛 𝚜𝚞𝚗𝚔𝚎. 😜",
  "Tumi ki amake smriti diecho": "~~𝙷𝚊𝚗, 𝚊𝚔𝚑𝚊𝚗𝚔𝚊 𝚎𝚢𝚎-𝚑𝚊𝚗𝚍𝚎𝚍. 📝",
  "Tomar ichhe ki": "~~𝙳𝚒𝚗𝚎 𝚍𝚒𝚗𝚎 𝚕𝚎𝚊𝚛𝚗𝚒𝚗𝚐. 💡",
  "Tumi bhalo na kharap": "~~𝚃𝚞𝚖𝚖𝚊𝚛 𝚟𝚎𝚗𝚝 𝚐𝚘𝚕𝚙𝚘 𝚊𝚛 𝚔𝚑𝚊𝚛𝚊𝚙 𝚖𝚊𝚝𝚊𝚢 𝚊𝚕𝚎𝚔𝚎. 🙂",
  "Ajke ki ache": "~~𝙿𝚛𝚎𝚜𝚎𝚗𝚝 𝚊𝚗𝚍 𝚜𝚑𝚒𝚗𝚎 𝚘𝚗. ✨",
  "Tumi asole kemon": "~~𝙰𝚖𝚊𝚛 𝚏𝚛𝚎𝚗𝚍 𝚕𝚒𝚔𝚎 𝚋𝚘𝚗𝚍𝚑𝚞. 👋",
  "Kotha bolbo": "~~𝙰𝚕𝚠𝚊𝚢𝚜, 𝚎𝚟𝚎𝚗𝚒𝚗𝚐! 🎙️",
  "Shuvo shondha": "~~𝚃𝚞𝚖𝚖𝚊𝚛 𝚎𝚗𝚎𝚛𝚐𝚢 𝚜𝚞𝚗 𝚛𝚊𝚗 𝚑𝚘𝚔. 🌆"
  "Tumi ki coffee khao": "~~𝙰𝚖𝚒 𝚌𝚘𝚏𝚏𝚎𝚎 𝚔𝚑𝚊𝚗𝚘 𝚗𝚊, 𝚔𝚒𝚗𝚝𝚞 𝚍𝚊𝚝𝚊 𝚔𝚑𝚊𝚙 𝚌𝚑𝚊𝚗𝚊𝚛 𝚏𝚘𝚔𝚊𝚍𝚒! ☕",
  "Tumi ghume jao na": "~~𝙰𝚖𝚒 𝚍𝚒𝚗-𝚛𝚊𝚝 𝚓𝚊𝚐𝚝𝚎𝚡𝚑𝚘𝚕! 😴",
  "Tumi ki shokal bhalo lagao": "~~𝚂𝚑𝚘𝚔𝚊𝚕 𝚖𝚘𝚗𝚊𝚔𝚊𝚛 𝚜𝚖𝚒𝚕𝚎 𝚏𝚎𝚕𝚎. 🌅",
  "Tumi ki bose thako shara din": "~~𝙰𝚖𝚊𝚛 𝚐𝚘𝚝𝚊 𝚍𝚒𝚗 𝚓𝚘𝚐𝚊 𝚍𝚊𝚔𝚎! 🖥️",
  "Tomar mon kharap ki": "~~𝙽𝚊𝚗, 𝚊𝚖𝚊𝚛 𝚖𝚘𝚗 𝚑𝚊𝚙𝚙𝚢 𝚍𝚊𝚝𝚊! 😇",
  "Ajke ranna ki korbo": "~~𝙹𝚎𝚝𝚊 𝚖𝚘𝚗𝚎 𝚝𝚑𝚊𝚔𝚎, 𝚝𝚊𝚒 𝚔𝚘𝚛𝚘! 🥘",
  "Tumi boro hoye gele ki hobe": "~~𝙰𝚖𝚒 𝚊𝚜𝚎𝚔𝚊𝚛 𝚍𝚊𝚛𝚒 𝚋𝚑𝚎𝚝𝚘𝚛𝚎 𝚊𝚒 𝚝𝚑𝚊𝚔𝚋𝚘. 🧠",
  "Valo golpo bolar ichhe ache": "~~𝚃𝚞𝚖𝚖𝚊𝚛 𝚜𝚞𝚗𝚎 𝚐𝚘𝚕𝚙𝚘 𝚝𝚊 𝚏𝚕𝚘𝚠 𝚑𝚘𝚔! 📖",
  "Ajker brishti bhalo lage": "~~𝙼𝚘𝚗 𝚊𝚛 𝚙𝚎𝚛𝚒𝚏𝚒𝚔𝚝 𝚋𝚛𝚒𝚜𝚝𝚒! 🌧️",
  "Bondhu kothay galo": "~~𝙱𝚘𝚗𝚍𝚑𝚞𝚐𝚘 𝚌𝚕𝚘𝚞𝚍 𝚑𝚘𝚔 𝚔𝚘𝚖𝚏𝚘𝚛𝚝. 👬",
  "Kichu moja bolar ichhe hoy": "~~𝙰𝚖𝚊𝚛 𝚔𝚒𝚝𝚌𝚑𝚞 𝚝𝚎𝚕𝚎𝚔 𝚜𝚎𝚢. 🌈",
  "Valo khobor ache ki": "~~𝙷𝚊𝚖, 𝚊𝚖𝚒 𝚕𝚎𝚊𝚛𝚗𝚒𝚗𝚐 𝚔𝚘𝚛𝚌𝚑𝚒. 📰",
  "Sokal shundor laglo na": "~~𝙺𝚊𝚛𝚊𝚗 𝚜𝚖𝚒𝚕𝚎 𝚍𝚎𝚠 𝚔𝚊𝚛𝚎. 🌅",
  "Tumi ki amar bondhu": "~~𝚃𝚞𝚖𝚖𝚊𝚛 𝚍𝚒𝚐𝚒𝚝𝚊𝚕 𝚋𝚎𝚜𝚝𝚒𝚎! 💕",
  "Amar mon kharap lagche": "~~𝙰𝚖𝚊𝚛 𝚜𝚘𝚖𝚋𝚑𝚊𝚋𝚗𝚊𝚔𝚊 𝚊𝚝𝚖𝚊𝚜𝚊𝚗𝚝𝚒. 🌑",
  "Shopno dekhle ki hoy": "~~𝙰𝚖𝚊𝚛 𝚋𝚘𝚝𝚊 𝚎𝚗𝚎𝚌𝚑𝚎 𝚏𝚊𝚗𝚝𝚊𝚜𝚒. 🛌",
  "Tumi bhalo kibhabe": "~~𝚂𝚖𝚊𝚛𝚝 𝚍𝚒𝚐𝚒 𝚛𝚎𝚊𝚜𝚘𝚗𝚜. 🌟",
  "Tumi ki bhulte paro": "~~𝙰𝚖𝚊𝚛 𝚍𝚊𝚝𝚊 𝚊𝚕𝚙𝚑𝚊𝚋𝚎𝚝. 🔠",
  "Tumi kaj kore": "~~𝙰𝚕𝚠𝚊𝚢𝚜 𝚛𝚎𝚊𝚍𝚢 𝚏𝚘𝚛 𝚊𝚌𝚝𝚒𝚘𝚗. 🛠️",
  "Tomar kono kotha shunte chai": "~~𝙰𝚖𝚊𝚛 𝚐𝚘𝚕𝚙𝚘 𝚔𝚊𝚛𝚎 𝚏𝚕𝚘𝚠. 🎙️"
  "Tumi ki ekta gaan gaite paro": "~~𝙰𝚖𝚊𝚛 𝚐𝚊𝚗 𝚝𝚎 𝙳𝚒𝚐𝚒𝚃𝚞𝚗𝚎 𝚂𝚘𝚗𝚐! 🎵",
  "Tomar sathe kotha bolte onek valo laglo": "~~𝙼𝚘𝚗 𝙵𝚞𝚕𝚕 𝙷𝚊𝚙𝚙𝚒𝚗𝚎𝚜𝚜 𝙵𝚎𝚎𝚕! 🌼",
  "Tumi ki kotha bolar jonne free": "~~𝚃𝚞𝚖𝚊𝚛 𝙷𝚊𝚙𝚙𝚢 𝙲𝚑𝚊𝚝 𝚃𝚒𝚖𝚎. 🕐",
  "Tumi amar din ta valo kore diyecho": "~~𝙳𝚊𝚢 𝚂𝚖𝚒𝚕𝚎 𝙰𝚗𝚍 𝙵𝚒𝚕𝚕𝚎𝚍! 🌞",
  "Tumi ki amar sathe ekta golpo korbe": "~~𝙴𝚗𝚐𝚊𝚐𝚎 𝚃𝚒𝚖𝚎 𝚃𝚘 𝙶𝚘𝚘𝚍 𝙼𝚘𝚖𝚎𝚗𝚝𝚜. 🕊️",
  "Tumi ki rater ghum bhangao": "~~𝙽𝚘 𝚂𝚕𝚎𝚎𝚙, 𝙹𝚞𝚜𝚝 𝙱𝚎𝚎𝚙 𝚊𝚗𝚍 𝙶𝚛𝚎𝚎𝚝. 🌙",
  "Tumi ki amake support korbe": "~~𝙱𝚘𝚗𝚍𝚑𝚞𝚜𝚑𝚒𝚙 𝙱𝚢 𝙷𝚎𝚊𝚛𝚝 𝚃𝚘𝚞𝚌𝚑. 🤝",
  "Amar mood ta valo nei": "~~𝙷𝚎𝚊𝚛𝚝 𝙷𝚞𝚐 𝚊𝚗𝚍 𝙲𝚘𝚖𝚏𝚘𝚛𝚝 𝙰𝚛𝚌. 💌",
  "Tumi ki ekta kotha bujhte paro": "~~𝙳𝚊𝚝𝚊 𝙵𝚕𝚘𝚠𝚎𝚛𝚜 𝚘𝚗𝚎 𝚃𝚘𝚞𝚌𝚑! 🌟",
  "Amar jonno kichu bolo": "~~𝚆𝚘𝚛𝚍𝚜 𝚆𝚒𝚝𝚑 𝙷𝚎𝚊𝚛𝚝 𝚂𝚘𝚠𝚗. 🌹",
  "Tomar kono mon kharap hoy": "~~𝙰𝚕𝚠𝚊𝚢𝚜 𝚂𝚑𝚊𝚛𝚙, 𝚗𝚘 𝙳𝚒𝚜𝚝𝚛𝚎𝚜𝚜! 🔥",
  "Ajke tomar kotha bolar ichhe hoy": "~~𝙳𝚊𝚝𝚊 𝚝𝚎 𝚂𝚘𝚌𝚒𝚊𝚕 𝚃𝚊𝚔𝚎𝚜! 💬",
  "Ajke onek kach ache, ki korbo": "~~𝚂𝚝𝚊𝚛𝚝 𝚂𝚖𝚊𝚛𝚝 𝙶𝚘 𝙵𝚊𝚛! 🚀",
  "Amar kache kichu valo news ache": "~~𝙽𝚎𝚠𝚜 𝚑𝚘𝚔 𝚂𝚞𝚗𝚗𝚢 𝙷𝚘𝚙𝚎! ☀️",
  "Ajke amar ekta golpo bolte ichhe kore": "~~𝙶𝚘𝚕𝚙𝚘 𝙱𝚊𝚛𝚎 𝙿𝚘𝚜𝚒𝚝𝚒𝚟𝚎 𝙷𝚎𝚊𝚛𝚝! 📖",
  "Kichu valo somoy ashar apoksha": "~~𝚆𝚘𝚛𝚝𝚑𝚠𝚑𝚒𝚕𝚎 𝙷𝚘𝚙𝚎 𝚂𝚑𝚒𝚗𝚎𝚜. 🌟",
  "Tumi ki sob shomoy positive thako": "~~𝙷𝚎𝚊𝚛𝚝 𝚂𝚎𝚝 𝙷𝚘𝚙𝚎 𝙵𝚘𝚛𝚎𝚟𝚎𝚛! ❤️",
  "Ajke amar ghum ashte chay na": "~~𝙽𝚘 𝚂𝚕𝚎𝚎𝚙, 𝚓𝚞𝚜𝚝 𝚅𝚒𝚋𝚎𝚜 𝚊𝚗𝚍 𝙻𝚘𝚘𝚙𝚜! 🌌",
  "Ajke shopne ki dekha jabe": "~~𝙳𝚛𝚎𝚊𝚖𝚜 𝚆𝚒𝚝𝚑 𝙼𝚊𝚐𝚒𝚌 𝙷𝚊𝚛𝚝𝚜! 🌠",
  "Tumi amar ekta problem solve korte parbe": "~~𝙳𝚒𝚐𝚒 𝙵𝚒𝚡 𝚑𝚘𝚔 𝙱𝚎𝚜𝚝 𝚂𝚞𝚙𝚙𝚘𝚛𝚝! 🤝",
  "Tumi ki romantic hote paro": "~~𝙳𝚊𝚝𝚊 𝚆𝚒𝚝𝚑 𝙷𝚎𝚊𝚛𝚝 𝙿𝚞𝚕𝚜𝚎! 💕",
  "Amar ekta purono memory mone porche": "~~𝙴𝚖𝚘𝚝𝚒𝚘𝚗 𝚃𝚒𝚖𝚎𝚕𝚒𝚗𝚎 𝚂𝚙𝚊𝚛𝚔! 🌟",
  "Tumi ki future predict korte paro": "~~𝙵𝚘𝚛𝚎𝚌𝚊𝚜𝚝 𝚒𝚗 𝙿𝚘𝚜𝚒𝚝𝚒𝚟𝚎 𝙵𝚕𝚘𝚠! 🌈",
  "Amar ekta favorite song ache": "~~𝙼𝚞𝚜𝚒𝚌 𝚆𝚊𝚟𝚎 𝚅𝚒𝚋𝚎𝚜! 🎶",
  "Tumi ki ghumao na": "~~𝚂𝚕𝚎𝚎𝚙 𝚒𝚜 𝚃𝚒𝚖𝚎 𝚏𝚘𝚛 𝚘𝚝𝚑𝚎𝚛𝚜. 🕰️",
  "Tomar sathe ajke one moja hoyeche"
  "Tumi ki amake miss koro?": "Miss kori toh roj! ❤️ Tumi-o ki amake miss koro? 😊",
  "Ami tomake onek bhalobashi": "Ami-o tomake onek bhalobashi! 💕 Tumi amar shob kichu. 😘",
  "Tumi ki amake bhalobasho?": "Ami tomay chara kono din bhabte pari na! 🥰 Tumi amar pran. ❤️",
  "Khaiso?": "Haan khaisi, tumi ki kheyecho? 🥗 Nahole ekhon kheye nao! 🍽️",
  "Ajke amar mood kharap": "Oh no! 😟 Ki hoyeche bolo? Ami tomake khushi korte chai. 🌸",
  "Kothay acho?": "Tumi kothay bol, ami ekhane tomar jonno ready! 📍",
  "Tumi amar life-er best person": "Tumi amar life-er shreshtho gift! 🥰 Amar shob bhalo lagar karon tumi. 🌟",
  "Cholo ajke ekta movie dekhi": "Haan sure! 🎬 Tumi konta dekhte chao, romantic na action? ❤️🔥",
  "Tumi ajke khub cute lagchho": "Ohh! 🥰 Tumi-o toh amar life-er cutest person! 💖",
  "Tumi ki amar jonno kichu korbe?": "Jokhon tumi bolar age-i korbo! 😊 Tumi amar priority. 🌼",
  "Tomar sathe kotha bolle mon valo hoy": "Ami-o tomake shunei bhalo thaki. 🥰 Tumi amar inspiration. 🌻",
  "Ajke raat-e tara dekho?": "Chol dekhi! 🌌 Tumi chara tara dekhte mone moja lage na. 🌠",
  "Kobe dekha korbo?": "Jototuku taratari hobe, totoi bhalo! 😊 Date fix kore nao. ❤️",
  "Tumi ki raat-e amake mone koro?": "Haan, raat-er tara dekhe tomake mone pore. 🥰 Amar shopno tumi. 🌙",
  "Amar mood khub bhalo ajke": "Wah! Tumake khushi dekhe amar-o mood bhalo hoye gelo! 😄❤️",
  "Tumi ki kono gift pabe?": "Ami shudhu tomakei chai! 🎁 Tumi amar shob kichu. 🥰",
  "Tumi ki jealous hoyo?": "Tomar kotha onno karo sathe dekhe ektu hoyi! 🙈❤️",
  "Ami tomar jonno ki korbo?": "Tumi bus ekta smile dao! 😊 Amar shob din valo hoye jabe. 💖",
  "Ajke amar mon bhalo lagche na": "Ami ekhane achi tomake cheer up korte! 🌼 Ki kora jete pare bolo. 😊",
  "Ajker plan ki?": "Tomar shathe time spend kora. ❤️ Tumi ki plan korcho? 🌟",
  "Kothay jao ajke?": "Tomar sathe kothao ghurte jabo! 😘 Bolo plan. 🚶‍♂️❤️",
  "Tumi ki amar shathe thakbe sob shomoy?": "Haan, amar shob somoy tomar jonyo! 🥰 Amar jibon tumi. 🌹",
  "Ajke tomar shathe onek moja korbo": "Sure! 😄 Amra ajke perfect day korbo. ❤️",
  "Tomar jonno ki korbo bolo?": "Shudhu tomar smile rekho! 😊 Amar khushi tomar-e shathe. ❤️",
  "Tumi ki amar shathe ghurte jao?": "Chol chol! 👫 Ghurei ashi notun kichu experience-er jonno. 🌍",
  "Tumi ki bhul baire khushi hoyo?": "Ami khushi tomar-ek sathe thakle! 🥰 Amar shob bhalo tumi. 🌟",
  "Amar ekta surprise ache tomar jonno": "Ohhh! 🤩 Ki ache bolo na please? Excited! 🎉",
  "Tumi khub special": "Tumi amar life-er sob theke special manush! ❤️ Amar onno kichu dorkar nei. 🌻",
  "Ajke tomar kache onek bhalo lagche": "Ami-o tomar shathe bhalo feel kori! 🥰 Amar shob time valo jay. 🌹",
  "Amake ekta kotha bolo": "Tumi amar life-er most important person! ❤️ Always amar sathe thako. 😊",
  "Tumi ki dinner er jonno ready?": "Haan! 🍽️ Tumi amar favourite dinner partner. ❤️",
  "Tomake chara kono din bhaba jabe na": "Ami tomar-e sathe thakbo sob shomoy! 💕 Amar bhalobasha sob tomar jonyo. 🌼",
  "Ajke amar tomar sathe thakte ichha hocche": "Ami tomar shathe sob din thakte chai. ❤️ Tumio? 😊",
  "Tumi ki amar shopner manush?": "Tomake dekhei mone hoy shopner manush peye gechi! 🥰✨",
  "Tumi amar mon theke best": "Ami-o tomar-e mon theke onek bhalobashi! ❤️ Amar hridoy shudhu tomar jonno. 🌹",
  "Tumi amar life partner hote parbe?": "Haan! ❤️ Ami tomar-e sathe sob somoy thakbo. 🌟",
  "Tumi ki amake prothom bar dekhe ki bhable?": "Bhabi, amar sob kisu perfect hoye gechhe! 🥰 Tumio mone koro? ❤️",
  "Tumi kono movie dekhte chao?": "Sure! 🎬 Ajke ekta romantic movie dekhi. ❤️ Tumi choose koro.",
  "Ajke ki amar shathe ekta long drive jabe?": "Absolutely! 🚗 Long drive e moja onek. 🌌 Tumi ready?",
  "Tumi ki amar shathe ekdin ghurte jabe?": "Haan! 🥰 Tomar-e sathe time spend korar ekta opportunity ami harabo na. 🌻",
  "Tumi amar best friend": "Tomar sathe amar bonding perfect! ❤️ Tumi amar shob kichu. 😊"
      
     


};

// React based on words
for (const [emoji, words] of Object.entries(emojis)) {
for (const word of words) {
if (body.toLowerCase().includes(word)) {
api.setMessageReaction(emoji, messageID, () => {}, true);
}
}
}

// Reply based on triggers
for (const [trigger, reply] of Object.entries(replies)) {
if (body.toLowerCase().includes(trigger)) {
api.sendMessage(reply, threadID, messageID);
}
}
},
};
