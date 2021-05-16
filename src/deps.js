export default class Deps {
  constructor() {
    this.subs = [];
  }

  addSub(v) {
    this.subs.push(v);
  }

  removeSub(v) {
    remove(this.subs, v);
  }

  depend(target) {
    if (window.target) {
      this.subs.push(window.target);
    }
  }

  notify() {
    const sub = this.subs.slice();
    sub.forEach(i => {
      i.update();
    })
  }
}

function remove(list, item) {
  if (list.length) {
    const index = list.findIndex(i => i === item);
    if (index > -1) {
      list.splice(index, 1);
    }
  }
}
