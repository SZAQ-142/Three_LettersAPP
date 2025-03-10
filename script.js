class ThreeWordsGame {
    constructor() {
        this.dictionary = [
            "aah", "aal", "aar", "aba", "abb", "abe", "abs", "aby", "ace", "act",
            "add", "ado", "ads", "age", "ago", "aha", "ahh", "aia", "ail", "aim",
            "air", "ais", "ait", "ala", "alb", "ale", "all", "alp", "als", "alt",
            "ama", "ami", "amp", "ana", "and", "ane", "ant", "any", "ape", "apt",
            "arc", "are", "ark", "arm", "art", "ash", "ask", "asp", "ate", "awe",
            "awn", "axe", "aye", "bad", "bag", "bah", "bal", "bam", "ban", "bar",
            "bat", "bay", "bed", "bee", "beg", "bet", "bid", "big", "bin", "bit",
            "bob", "boo", "bop", "bow", "box", "boy", "bra", "bub", "bud", "bug",
            "bum", "bun", "bus", "but", "buy", "bye", "cab", "cad", "can", "cap",
            "car", "cat", "caw", "cob", "cod", "con", "coo", "cop", "cot", "cow",
            "cry", "cub", "cue", "cup", "cut", "dab", "dad", "dam", "dan", "day",
            "dee", "def", "del", "den", "dew", "did", "die", "dig", "dim", "din",
            "dip", "doe", "dog", "dot", "dry", "dub", "due", "dug", "dun", "ear",
            "eat", "ebb", "eco", "egg", "ego", "eld", "elf", "elk", "ell", "emu",
            "end", "era", "ere", "err", "eve", "eye", "fad", "fan", "far", "fat",
            "fax", "fay", "fed", "fee", "few", "fib", "fig", "fin", "fit", "fix",
            "fly", "foe", "fog", "for", "fox", "fry", "fun", "fur", "gag", "gal",
            "gap", "gas", "gel", "get", "gig", "gin", "gip", "git", "glo",
            "god", "got", "gum", "gun", "gut", "guy", "had", "hag", "ham", "has",
            "hat", "hay", "hem", "hen", "hey", "hid", "him", "hip", "hit", "hog",
            "hop", "hot", "how", "hub", "hug", "hum", "hut", "ice", "icy", "ilk",
            "ill", "imp", "ink", "inn", "ion", "ire", "irk", "jam", "jar", "jaw",
            "jay", "jet", "jig", "job", "jow", "joy", "jug", "jut", "kay", "key",
            "kid", "kin", "kit", "lab", "lad", "lag", "lam", "lap", "law", "lay",
            "led", "lee", "leg", "let", "lid", "lie", "lip", "log", "lot", "low",
            "lox", "mad", "man", "map", "mat", "may", "med", "men", "met", "mew",
            "mix", "mob", "mod", "moo", "mop", "mot", "mud", "mug", "nap", "net",
            "new", "nod", "nor", "not", "now", "nut", "oak", "oar", "oat", "odd",
            "off", "oil", "old", "one", "opt", "ore", "our", "out", "owl", "own",
            "pad", "pal", "pan", "pat", "paw", "pay", "pea", "peg", "pen", "pet",
            "pie", "pig", "pin", "pit", "ply", "pop", "pot", "pro", "pub", "pug",
            "pun", "put", "rag", "ram", "ran", "rap", "rat", "raw", "red", "ref",
            "reg", "rem", "rep", "rib", "rid", "rig", "rim", "rip", "rob", "rod",
            "roe", "rot", "row", "rub", "rug", "run", "rye", "sag", "sal", "sap",
            "sat", "saw", "say", "sea", "see", "set", "sew", "she", "sip", "sit",
            "six", "sky", "sly", "sob", "sod", "son", "sow", "spy", "sub", "sue",
            "sum", "sun", "tab", "tag", "tap", "tar", "tea", "tee", "ten", "the",
            "thy", "tie", "tin", "tip", "toe", "ton", "top", "toy", "try", "tub",
            "tug", "two", "use", "van", "vat", "vow", "war", "was", "way", "web",
            "wed", "wet", "who", "wig", "win", "wit", "woe", "won", "wry", "yak",
            "yam", "yap", "yaw", "yea", "yes", "yet", "yew", "zip", "zoo"
        ];

        this.grid = [
            ['e', 'w', 't', 'h'],
            ['r', 'd', 'v', 'x'],
            ['q', 'p', 'a', 'w'],
            ['z', 'y', 'b', 'm']
        ];

        this.foundWords = new Set();
    }

    init() {
        console.log("Game Initialized!");
        this.displayGrid();
        this.setupEventListeners();
    }

    displayGrid() {
        let gridContainer = document.getElementById("grid");
        gridContainer.innerHTML = "";
        this.grid.forEach(row => {
            let rowDiv = document.createElement("div");
            rowDiv.classList.add("grid-row");
            row.forEach(letter => {
                let cell = document.createElement("span");
                cell.classList.add("grid-cell");
                cell.textContent = letter;
                rowDiv.appendChild(cell);
            });
            gridContainer.appendChild(rowDiv);
        });
    }

    setupEventListeners() {
        let submitButton = document.getElementById("submitWord");
        if (submitButton) {
            submitButton.addEventListener("click", () => this.checkWord());
        } else {
            console.error("Submit button not found!");
        }
    }

    isValidWord(word) {
        return this.dictionary.includes(word);
    }

    checkWord() {
        console.log("Submit button clicked!");
        let wordInput = document.getElementById("wordInput");
        let word = wordInput.value.toLowerCase().trim();
        let message = document.getElementById("message");
        let foundWordsList = document.getElementById("foundWords");

        if (word.length !== 3) {
            message.textContent = "❌ Please enter a three-letter word!";
            return;
        }

        if (this.foundWords.has(word)) {
            message.textContent = "⚠️ You already found this word!";
            return;
        }

        if (!this.isValidWord(word)) {
            message.textContent = "❌ Not a valid word!";
            return;
        }

        this.foundWords.add(word);
        let listItem = document.createElement("li");
        listItem.textContent = word;
        foundWordsList.appendChild(listItem);
        message.textContent = "✅ Good job! Keep going!";
        wordInput.value = "";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const game = new ThreeWordsGame();
    game.init();
});
