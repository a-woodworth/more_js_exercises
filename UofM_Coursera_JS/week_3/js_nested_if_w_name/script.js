var name = prompt("What is your name?");

if (name.length != 0) {
  if (name === "Colleen")
    document.write("What a beautiful name");
  else
    document.write("Hello " + name);
}
else
  document.write("Feeling shy?");
