export function animationMove(dom, left, timeout = 500, frames = 50) { // 平移动画
  clearInterval(dom.timer);
  const interval = Math.round(timeout / frames); // timeout: 动画总时间, frames: 帧数
  const { style } = dom;
  if (style.left === '') {
    style.left = dom.offsetLeft + 'px';
  }
  let currentLeft = parseInt(style.left);
  let leftStep = (left - currentLeft) / timeout * interval;
  // 将像素进行非零整数化
  leftStep = leftStep > 0 ? Math.ceil(leftStep) : Math.floor(leftStep);
  leftStep = leftStep === 0 ? 1 : leftStep;
  const absLeftStep = Math.abs(leftStep);
  return new Promise(resolve => {
    dom.timer = setInterval(() => {
      currentLeft = parseInt(style.left);
      if (Math.abs(left - currentLeft) > absLeftStep) {
        style.left = currentLeft + leftStep + 'px';
      } else {
        style.left = left + 'px';
        clearInterval(dom.timer);
        delete dom.timer;
        resolve();
      }
    }, interval);
  });
}
