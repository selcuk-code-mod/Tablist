function BtnColors() {
  let element = document.getElementById("tabContentFirst");
  element.classList.remove("hidden");
  let elementTwo = document.getElementById("tabContentSecond");
  elementTwo.classList.add("hidden");
  let elementThree = document.getElementById("tabContentThree");
  elementThree.classList.add("hidden");
  let colorOne = document.getElementById("btnFirst");
  colorOne.classList.add("active");
  let colorTwo = document.getElementById("btnSecond");
  colorTwo.classList.remove("active");
  let colorThree = document.getElementById("btnThree");
  colorThree.classList.remove("active");
}

function BtnColors2() {
  let element = document.getElementById("tabContentSecond");
  element.classList.remove("hidden");
  let elementFirst = document.getElementById("tabContentFirst");
  elementFirst.classList.add("hidden");
  let elementThree = document.getElementById("tabContentThree");
  elementThree.classList.add("hidden");
  let colorTwo = document.getElementById("btnSecond");
  colorTwo.classList.add("active");
  let colorOne = document.getElementById("btnFirst");
  colorOne.classList.remove("active");
  let colorThree = document.getElementById("btnThree");
  colorThree.classList.remove("active");
}

function BtnColors3() {
  let element = document.getElementById("tabContentThree");
  element.classList.remove("hidden");
  let elementTwo = document.getElementById("tabContentSecond");
  elementTwo.classList.add("hidden");
  let elementFirst = document.getElementById("tabContentFirst");
  elementFirst.classList.add("hidden");
  let colorThree = document.getElementById("btnThree");
  colorThree.classList.add("active");
  let colorTwo = document.getElementById("btnSecond");
  colorTwo.classList.remove("active");
  let colorOne = document.getElementById("btnFirst");
  colorOne.classList.remove("active");
}
