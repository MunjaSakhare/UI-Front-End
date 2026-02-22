function wish(message, name) {
  switch (message) {
    case "gm": {
      console.log("Good morning,", name);
      break;
    }

    case "ga": {
      console.log("Good afternoon,", name);
      break;
    }
    case "ge": {
      console.log("Good evening,", name);
      break;
    }
    case "gn": {
      console.log("Good night,", name);
      break;
    }
  }
}

wish("gn", "ganesh");
