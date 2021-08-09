console.log("test");
const progBar = document.querySelector(".progress-bar");
const body = document.body;
const html = document.documentElement;
progBar.style.width = "80%";

var winheight =
  window.innerHeight ||
  (document.documentElement || document.body).clientHeight;
var scrollTop =
  window.pageYOffset ||
  (document.documentElement || document.body.parentNode || document.body)
    .scrollTop;

function getDocHeight() {
  var D = document;
  return Math.max(
    D.body.scrollHeight,
    D.documentElement.scrollHeight,
    D.body.offsetHeight,
    D.documentElement.offsetHeight,
    D.body.clientHeight,
    D.documentElement.clientHeight
  );
}

var docheight = getDocHeight();

function amountscrolled() {
  var winheight =
    window.innerHeight ||
    (document.documentElement || document.body).clientHeight;
  var docheight = getDocHeight();
  var scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;
  var trackLength = docheight - winheight;
  var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
  //   console.log(pctScrolled + "% scrolled");
  return pctScrolled;
}

window.addEventListener(
  "scroll",
  function () {
    let scrolled = amountscrolled();
    progBar.style.width = scrolled + "%";
  },
  false
);
