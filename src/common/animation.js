export function animationMove(dom, left, timeout = 500, frames = 50) { // 平移动画
  clearInterval(dom.timer);
  const interval = Math.round(timeout / frames); // timeout: 动画总时间, frames: 帧数
  let leftStep = (left - dom.offsetLeft) / timeout * interval;
  // 将像素进行非零整数化
  leftStep = leftStep > 0 ? Math.ceil(leftStep) : Math.floor(leftStep);
  leftStep = leftStep === 0 ? 1 : leftStep;
  const absLeftStep = Math.abs(leftStep);
  return new Promise(resolve => {
    dom.timer = setInterval(() => {
      if (Math.abs(left - dom.offsetLeft) > absLeftStep) {
        dom.style.left = dom.offsetLeft + leftStep + 'px';
      } else {
        dom.style.left = left + 'px';
        clearInterval(dom.timer);
        delete dom.timer;
        resolve();
      }
    }, interval);
  });
}
