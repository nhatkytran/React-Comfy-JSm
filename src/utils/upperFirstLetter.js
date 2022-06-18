// "1-2".split("-")
// => ["1", "2"];

// "12".split("-")
// => ["12"];

// Function is used:
// 'about' => 'About'
// 'about-product' => 'About Product'

function upperFirstLetter(text) {
  if (!text) return;

  let newText;

  if (text.includes("-")) newText = text.split("-");
  else newText = text.split(" ");

  return newText
    .map((letter) => letter[0].toUpperCase() + letter.slice(1))
    .join(" ");
}

export default upperFirstLetter;
