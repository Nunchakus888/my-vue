export default class Watcher {
  constructor(vm, expOfFn, cb) {
    this.vm = vm;
    this.cb = cb;

    this.getter = function(path) {
      const segment = path.split('.');
      return function(obj) {
        if (!obj) return;

        for(let i = 0; i < segment.length; i++) {
          obj = obj[i];
        }
        return obj;
      }
    }
    this.value = this.get();
  }

  get() {
    window.target = this;
    let value = this.getter.call(this.vm, this.vm);
    window.target = undefined;
    return value;
  }
}
