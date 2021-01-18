export function debounce(func, delay) {
    let timer = null; 
    // apply改变this的指向
    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }