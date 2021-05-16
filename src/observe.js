import Deps from './Deps.js';

export default class Observe {
  constructor(v) {
    if (!Array.isArray(v)) {
      this.defineReactive(v);
    }
  }

  walk(v) {
    Object.keys(v).forEach(i => {
      this.defineReactive(v, i, v[i])
    })
  }

  defineReactive(data, k, v) {
    if (typeof v === 'object') {
      new Object(data[k]);
    }

    let deps = new Deps();
    Object.defineProperty(data, k, {
      enumerable: true,
      configurable: true,
      get: function () {
        deps.depend();
        return v;
      },
      set: function (val) {
        if (val === v) return;
        v = val;
        deps.notify();
      }
    })
  }
}
