// "1-2".split("-")
// => ["1", "2"];

// "12".split("-")
// => ["12"];

// Function is used:
// 'about' => 'About'
// 'about-product' => 'About Product'

function upperFirstLetter(text) {
  return text
    .split("-")
    .map((letter) => letter[0].toUpperCase() + letter.slice(1))
    .join(" ");
}

export default upperFirstLetter;
