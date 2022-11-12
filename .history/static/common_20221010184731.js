

// ロード画面

// URLの取得
const url = location.href;
// topの場合js発火
if (url == "https://ys-portfolio-c98fe.firebaseapp.com/") {
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
