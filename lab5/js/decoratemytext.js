
        window.onload = function() {
            var inputText = document.getElementById("inputText");
            var btnBigger = document.getElementById("btnBigger");
            var chkBling = document.getElementById("chkBling");
            var btnStop = document.getElementById("btnStop");
            var btnPigLatin = document.getElementById("btnPigLatin");
            var btnMalkovitch = document.getElementById("btnMalkovitch");
            var timerId;

            btnBigger.onclick = function() {
                var currentSize = parseInt(inputText.style.fontSize) || 12;
                timerId = setInterval(function() {
                    currentSize += 2;
                    inputText.style.fontSize = currentSize + "pt";
                }, 500);
            };

            btnStop.onclick = function() {
                clearInterval(timerId);
            };

            chkBling.onchange = function() {
                if (chkBling.checked) {
                    inputText.style.fontWeight = "bold";
                    inputText.style.color = "green";
                    inputText.style.textDecoration = "underline";
                    // document.body.style.backgroundImage = url("../images/hundred.png");
                    document.body.style.backgroundImage = "url('../images/hundred.png')";

            
                } else {
                    inputText.style.fontWeight = "normal";
                    inputText.style.color = "black";
                    inputText.style.textDecoration = "none";
                    document.body.style.backgroundImage = "none";
                }
            };

            btnPigLatin.onclick = function() {
                var text = inputText.value;
                var words = text.split(/\s+/);
                for (var i = 0; i < words.length; i++) {
                    var word = words[i];
                    var firstLetter = word.charAt(0).toLowerCase();
                    var restOfWord = word.slice(1);
                    if (/[aeiou]/.test(firstLetter)) {
                        words[i] = word + "ay";
                    } else {
                        words[i] = restOfWord + firstLetter + "ay";
                    }
                }
                inputText.value = words.join(" ");
            };

            btnMalkovitch.onclick = function() {
    var text = inputText.value;
    var words = text.split(/\s+/);
    for (var i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            words[i] = "Malkovich";
        }
    }
    inputText.value = words.join(" ");
};
};