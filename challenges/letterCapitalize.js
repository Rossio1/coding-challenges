// Have the function LetterCapitalize(str) take the str parameter being passed and
// capitalize the first letter of each word. Words will be separated by only one
// space.


function LetterCapitalize (str) {
  return str.replace(/\b[a-z]/gi, function (char) {
    return char.toUpperCase()
  })
}
