window.addEventListener("scroll", function(e) {
  console.log(
    "スクロールイベントが呼ばれました。スクロール量" + e.pageY + "px"
  );
});

const boxes = document.querySelectorAll(".listItem");
const boxesArray = Array.prototype.slice.call(boxes, 0);
console.log(boxes);
const options = {
  root: null,
  rootMargin: "0px 0px -150px",
  threshold: 0
};
const observer = new IntersectionObserver(doWhenIntersect, options);
boxesArray.forEach(function(box) {
  observer.observe(box);
});

/**
 * 交差したときに呼び出す関数
 * @param entries
 */
function doWhenIntersect(entries) {
  const entriesArray = Array.prototype.slice.call(entries, 0);
  entriesArray.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}