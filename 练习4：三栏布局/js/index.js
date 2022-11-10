// 找到html
let html = document.documentElement;
function setRem() {
  let ui_w = 375;
  let cl_w = document.documentElement.clientWidth || document.body.clientWidth;
  html.style.fontSize = (cl_w / ui_w) * 10 + "px";
}
// 防抖
let timer = null;
window.onresize = function () {
  clearTimeout(timer);
  timer = setTimeout(setRem, 50);
};
window.onload = setRem;
