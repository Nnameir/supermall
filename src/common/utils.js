export function debounce(func, delay = 200) { // 防抖函数, 将 func 以 delay 为延迟包装成一个防抖函数
  let timer = null;
  return function (...args) {
    if (timer !== null) { // 验证是否为第一次调用该函数
      clearTimeout(timer); // 利用闭包保存定时器的 timer
    }
    timer = setTimeout(() => {
      func.apply(this, args); // 传入包装后的防抖函数的执行上下文和参数
    }, delay);
  };
};
