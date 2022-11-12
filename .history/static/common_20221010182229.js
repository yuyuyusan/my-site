window.addEventListener("scroll", function (e) {
  console.log(
    "スクロールイベントが呼ばれました。スクロール量" + e.pageY + "px"
  );
});

const boxes = document.querySelectorAll(".listItem");
const boxesArray = Array.prototype.slice.call(boxes, 0);
const options = {
  root: null,
  rootMargin: "0px 0px -150px",
  threshold: 0
};
const observer = new IntersectionObserver(doWhenIntersect, options);
boxesArray.forEach(function (box) {
  observer.observe(box);
});

/**
 * 交差したときに呼び出す関数
 * @param entries
 */
function doWhenIntersect(entries) {
  const entriesArray = Array.prototype.slice.call(entries, 0);
  entriesArray.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}




// ロード画面

// URLの取得
const url = location.href;
// topの場合js発火
if (url == "http://localhost:3000/") {
  // loading
  const first = () => {
    const loadFirst = document.querySelector('.loadFirst');
    loadFirst.classList.add('active');
  }
  const load = () => {
    const loading = document.querySelector('.loading');
    loading.classList.add('loaded');
    const loadingText = document.querySelector('.loadingAfter__text');
    loadingText.classList.add('loadedText');
    const loadingHidden = document.querySelector('.loading');
    loadingHidden.classList.add('loadingBgHidden');
  }

  window.addEventListener('load', function () {
    setTimeout(load, 1000);
    // loadingのテキストが終わったあとのイベント
    const loadAfter1 = document.querySelector('.loadingAfter__text');
    const loadAfter2 = document.querySelector('.loadingAfter');

    loadAfter1.addEventListener('animationend', () => {
      loadAfter2.classList.add('loadingAfter__hidden');
    });
  });
};
