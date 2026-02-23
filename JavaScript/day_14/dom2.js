function changeContent() {
  let h2Ref = document.getElementById("title");
  let paraRef = document.getElementById("para");
  let btnRef = document.getElementById("btn");

  h2Ref.innerText = "DOM Content Manipulated using JS.";
  paraRef.innerText = "Paragraph changed by js...........";
  btnRef.innerText = "Content Changed";
}
