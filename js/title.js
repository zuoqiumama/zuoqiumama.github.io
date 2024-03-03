var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀你还在吗~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = 'o(*￣▽￣*)ブ你回来啦~';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});