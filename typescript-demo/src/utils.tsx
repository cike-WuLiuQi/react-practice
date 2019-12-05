export function loadMore(element: HTMLElement, getMore: any) {
  function _loadMore() {
    console.log(111111111);

    let scrollTop = element.scrollTop;
    let clientHeight = element.clientHeight;
    let scrollHeight = element.scrollHeight;
    if (scrollTop + clientHeight + 10 >= scrollHeight) {
      getMore();
    }
  }
  element.addEventListener("scroll", debounce(_loadMore, 300));
}

export function downReferesh(container: HTMLElement, refresh: any) {
    let startY: number;
    let distance: number;
    let originTop = container.offsetTop;
    container.addEventListener("touchstart", function(event) {
        console.log('downReferesh', new Date())
    let touchMove = throttle(_touchMove, 70);
    if (container.offsetTop == originTop && container.scrollTop == 0) {
      // 初始的位置
      startY = event.touches[0].pageY;
      container.addEventListener("touchmove", touchMove);
      container.addEventListener("touchend", touchEnd);
    }

    function _touchMove(event: any) {
      //
      let pageY = event.touches[0].pageY;
      if (pageY > startY) {
        distance = pageY - startY;
        container.style.top = originTop + distance + "px";
      } else {
        container.removeEventListener("touchmove", touchMove);
        container.removeEventListener("touchend", touchEnd);
      }
    }

    function touchEnd(event: any) {
      container.removeEventListener("touchmove", touchMove);
      container.removeEventListener("touchend", touchEnd);
      if (distance > 10) {
        refresh();
      }
      let timer = setInterval(() => {
        if (distance < 1) {
          container.style.top = originTop + "px";
          clearInterval(timer);
        } else {
          container.style.top = originTop + --distance + "px";
        }
      }, 13);
    }
  });

  //   container.addEventListener('touchmove', function (){

  //   })
}

function debounce(fn: any, time: number) {
  let timer: any = null;
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, time);
  };
}

function throttle(func: any, delay: number) {
  let prev = Date.now();
  return function() {
    let now = Date.now();
    let context = this;
    let args = Array.from(arguments);
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = now;
    }
  };
}
