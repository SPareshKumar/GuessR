export const WORD_BANK = [
  // NATURE
  "mountain","forest","ocean","desert","island","river","valley","canyon",
  "waterfall","jungle","meadow","rainbow","thunder","lightning","storm",
  "sun","moon","star","sky","cloud","rain","snow","beach","wave",
  "lake","hill","tree","flower","grass","leaf","stone","sand","wind",

  // ANIMALS
  "dog","cat","lion","tiger","elephant","horse","monkey","bear",
  "zebra","giraffe","dolphin","shark","whale","fish","bird",
  "snake","frog","rabbit","deer","fox","wolf","panda",
  "butterfly","spider","turtle","goat","cow","sheep","pig","hen",

  // FOOD
  "pizza","burger","sandwich","pasta","noodles","rice","bread",
  "cake","cookie","chocolate","icecream","milk","coffee","tea",
  "juice","apple","banana","mango","grapes","orange",
  "cheese","egg","fries","popcorn","soup","salad","butter",
  "jam","honey","chips","biscuit","paneer","corn","carrot",

  // OBJECTS
  "table","chair","bed","sofa","door","window","mirror",
  "lamp","fan","clock","phone","laptop","keyboard","mouse",
  "television","camera","bag","bottle","glass","plate",
  "spoon","fork","knife","bucket","box","pen","pencil",
  "eraser","notebook","book","brush","comb","rope",

  // CLOTHING
  "shirt","tshirt","jeans","pants","shorts","jacket",
  "coat","dress","skirt","shoes","socks","cap",
  "hat","scarf","gloves","belt","tie","uniform",

  // TRANSPORT
  "car","bus","train","bicycle","bike","truck",
  "airplane","boat","ship","helicopter","metro",
  "taxi","scooter","van","auto","rickshaw",

  // PLACES
  "school","college","hospital","market","mall",
  "park","zoo","restaurant","hotel","airport",
  "station","temple","office","bank","library",
  "cinema","gym","stadium","playground",

  // TECHNOLOGY
  "computer","mobile","internet","wifi","app",
  "game","screen","battery","charger",
  "robot","drone","speaker","headphone",
  "remote","printer","tablet","watch",

  // SPORTS & HOBBIES
  "cricket","football","basketball","tennis",
  "badminton","hockey","golf","chess",
  "guitar","piano","drum","dance","singing",
  "drawing","painting","skating","swimming",
  "running","cycling","yoga",

  // ABSTRACT
  "love","friend","family","music","movie",
  "story","dream","idea","plan","goal",
  "job","money","time","day","night",
  "morning","evening","weekend","holiday",
  "luck","power","energy","focus","hope",

  // FUN / GAME WORDS
  "ghost","pirate","ninja","wizard","alien",
  "monster","superhero","king","queen",
  "soldier","detective","thief","police",
  "dragon","robot","fairy","giant",
  "zombie","vampire","knight","clown",

  // EXTRA COMMON WORDS (to reach ~300)
  "key","lock","chain","ring","coin","wallet",
  "card","ticket","map","flag","signal",
  "bridge","road","path","circle","square",
  "line","corner","edge","shadow","light",
  "fire","smoke","dust","noise","sound",
  "voice","picture","photo","image","video",
  "color","shape","design","pattern",
  "speed","force","weight","height","width"
];

export const getRandomWord = () => {
  return WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
};