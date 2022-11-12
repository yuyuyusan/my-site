
const fadeTargets = document.querySelectorAll(".fadeIn");

const fadeOption = {
  root: null,
  rootMargin: "10% 0px",
  threshold: [0]
};

const targets = (entries, observer) => {
  entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    }
  )
  alert("呼び出しています！"); //実行時の処理

}
const fadeObserver = new IntersectionObserver(targets, fadeOption);


fadeTargets.forEach((target) => {
  fadeObserver.observe(target);
});



// ロード画面

// URLの取得
const url = location.href;
// topの場合js発火
if (url == "http://localhost:3000/") {
  // loading
  const load = () => {
    const loadFirst = document.querySelector('.loadFirst');
    loadFirst.classList.add('active');
    const loading = document.querySelector('.loading');
    loading.classList.add('loaded');
    const loadingText = document.querySelector('.loadingAfter__text');
    loadingText.classList.add('loadedText');
    const loadingHidden = document.querySelector('.loading');
    loadingHidden.classList.add('loadingBgHidden');
  }
  
  window.addEventListener('load', function () {
    setTimeout(load, 2000);
    // loadingのテキストが終わったあとのイベント
    const loadAfter1 = document.querySelector('.loadingAfter__text');
    const loadAfter2 = document.querySelector('.loadingAfter');

    loadAfter1.addEventListener('animationend', () => {
      loadAfter2.classList.add('loadingAfter__hidden');
    });
  });
};
