export const WORD_BANK = [
  // NATURE & GEOGRAPHY
  "mountain", "forest", "ocean", "volcano", "desert", "island", "river", "valley", "glacier", "canyon",
  "waterfall", "jungle", "meadow", "prairie", "asteroid", "galaxy", "planet", "comet", "horizon", "thunder",
  "lightning", "rainbow", "tornado", "hurricane", "blizzard", "starlight", "sunlight", "moonlight", "eclipse", "aurora",
  
  // ANIMALS & CREATURES
  "elephant", "giraffe", "dolphin", "penguin", "kangaroo", "leopard", "octopus", "squirrel", "hamster", "butterfly",
  "scorpion", "ostrich", "peacock", "flamingo", "panther", "buffalo", "cheetah", "gorilla", "platypus", "reindeer",
  "seahorse", "starfish", "tortoise", "vulture", "walrus", "badger", "falcon", "lizard", "spider", "beetle",
  
  // FOOD & DRINK
  "chocolate", "spaghetti", "sandwich", "pineapple", "mushroom", "broccoli", "pancake", "hamburger", "burrito", "croissant",
  "espresso", "smoothie", "lemonade", "cupcake", "avocado", "pumpkin", "cinnamon", "honeycomb", "popcorn", "pretzel",
  "walnut", "coconut", "vanilla", "apricot", "lobster", "shrimp", "omelet", "pudding", "biscuit", "cheese",
  
  // HOUSEHOLD & OBJECTS
  "keyboard", "monitor", "umbrella", "backpack", "telescope", "microscope", "flashlight", "refrigerator", "microwave", "toaster",
  "blanket", "pillow", "curtain", "armchair", "bookshelf", "suitcase", "calculator", "calendar", "thimble", "compass",
  "hammer", "wrench", "screwdriver", "lantern", "candle", "mirror", "ladder", "basket", "bucket", "camera",
  
  // CLOTHING & FASHION
  "sneakers", "tuxedo", "raincoat", "sweater", "necklace", "bracelet", "earring", "handbag", "sandal", "pajamas",
  "scarf", "mittens", "helmet", "uniform", "costume", "waistcoat", "cardigan", "slippers", "bowtie", "jewelry",
  
  // TRANSPORTATION
  "airplane", "bicycle", "helicopter", "submarine", "sailboat", "spaceship", "scooter", "tractor", "ambulance", "carriage",
  "ferry", "glider", "tramway", "unicycle", "motorcycle", "hotairballoon", "rocket", "train", "truck", "kayak",
  
  // BUILDINGS & PLACES
  "castle", "library", "museum", "hospital", "stadium", "lighthouse", "skyscraper", "cottage", "factory", "aquarium",
  "cathedral", "theatre", "observatory", "temple", "pyramid", "windmill", "greenhouse", "airport", "bakery", "pharmacy",
  
  // TOOLS & TECHNOLOGY
  "computer", "battery", "satellite", "engine", "antenna", "speaker", "joystick", "headphone", "projector", "printer",
  "robotic", "compass", "magnet", "magnifyingglass", "microchip", "circuit", "thermometer", "pendulum", "dynamo", "laser",
  
  // HOBBIES & SPORTS
  "guitar", "trumpet", "saxophone", "violin", "basketball", "football", "baseball", "snowboard", "skateboard", "surfboard",
  "shuttlecock", "racket", "dumbbell", "trophy", "canvas", "easel", "paintbrush", "harmonica", "tambourine", "clarinets",
  
  // MISC NOUNS
  "diamond", "feather", "fountain", "statue", "anchor", "balloon", "bubble", "button", "crystal", "fossil",
  "garden", "hammer", "jigsaw", "kettle", "marble", "needle", "needle", "parcel", "puzzle", "quilt",
  "ribbon", "riddle", "shadow", "shell", "shield", "sledge", "stamp", "ticket", "trophy", "whistle"
];

export const getRandomWord = () => {
  return WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)];
};