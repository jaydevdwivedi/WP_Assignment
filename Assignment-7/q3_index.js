let sentences = ["Hello World!"];
let word = "World";
for (let sentence in sentences) {
    console.log(sentences[sentence]);
    if (sentences[sentence].indexOf(word)) {
        console.log(sentences[sentence].indexOf(word));
        break;
    }
}