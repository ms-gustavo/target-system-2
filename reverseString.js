function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
const originalString = "Espero que vocês gostem!";
const reversedString = reverseString(originalString);
console.group("Strings:");
console.log(`Original: ${originalString}`);
console.log(`Invertida: ${reversedString}`);
console.groupEnd();
