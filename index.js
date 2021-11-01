class Steck {
  constructor() {
    this.length = 0;
    this.node = {};
  }

  push(value) {
    if (!this.length) {
      this.node = {
        value: value,
        next: {},
      }
    } else {
      this.node = {
        value: value,
        next: this.node,
      }
    }
    this.length++;
  }

  pop() {
    if (!this.length) {
      let result = this.node;
      this.node = this.node.next;
      this.length--;
      return result.value;
    }
  }

  size() {
    return this.length;
  }

  peek() {
    return this.node.value;
  }
}

const steck = new Steck();
steck.push(1);
steck.push(2);
steck.push(3);
steck.push(4);

// console.log(steck.peek());
// console.log(steck.pop());
// console.log(steck.pop());
// console.log(steck.pop());
// console.log(steck.pop());