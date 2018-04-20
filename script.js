//data from refreshing https://github.com/new an unhealthy amount of times
//some data was just made up

var firstlevel = [
    "refactored", "potential",
    "urban", "sturdy", "literate",
    "laughing", "supreme", "legendary",
    "verbose", "curly", "automatic",
    "upgraded", "bookish", "no", "null",
    "game", "website", "old", "shiny", "super",
    "effective", "novice", "css", "html", "csharp",
    "obj-c", "expert", "c", "rust", "cpp", "node-js",
    "tcp", "udp", "minecraft", "java", "lua", "excessive",
    "sad", "happy", "unity", "gamemaker", "interactive", "sleepy",
    "murderous", "grumpy", "keymash", "random","swift","applescript","ios"
    "awesome", "php", "sql", "mysql"
];

var secondlevel = [
    "potato", "fortnight",
    "train", "carnival",
    "happiness", "lamp",
    "umbrella", "octo",
    "disco", "robot",
    "bot", "relay", "mod",
    "code", "repo", "framework",
    "library", "api", "website",
    "memory", "tool", "garbanzo",
    "management", "giggle", "story",
    "journey", "royale", "exploit", "guide",
    "ebook", "tutorial", "plugin", "extension",
    "archive", "script", "secret", "program", "source",
    "discovery", "solver", "lint", "beautifier"
];

function generate() {
    var generated_con = firstlevel[Math.floor(Math.random() * firstlevel.length)] + "-" + secondlevel[Math.floor(Math.random() * secondlevel.length)];

    document.getElementById("generated").innerHTML = generated_con;

    if (generated_con == "potential-potato") {
        document.getElementById("old").innerHTML += "<span style='background-color: yellow; color: black;'>" + generated_con + "</span>, ";
    } else {
        document.getElementById("old").innerHTML += generated_con + ", ";
    }
}

function generate_spam(amt) {
    var i = 0;
    do {
        generate();
        i++;
    } while (i != amt)
}

function firstload() {
    document.getElementById("amount-can").innerHTML = "(" + (firstlevel.length * secondlevel.length) + " possibilites)";
}
