function wish(message, name) {
  if (message == "gm") {
    console.log("Good morning,", name);
  } else if (message == "ge") {
    console.log("Good evening,", name);
  } else if (message == "ga") {
    console.log("Good afternoon,", name);
  } else if (message == "gn") {
    console.log("Good night,", name);
  } else {
    console.log("Nothing to wish...");
  }
}
wish("gm", "raj");
