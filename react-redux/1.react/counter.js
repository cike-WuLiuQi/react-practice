let batchingStrategy = {
  isBatchingUpdates: false,
  dirtyComponents: [],
  batchedUpdates() {
    this.dirtyComponents.forEach(component => {
        component.updateComponent();
    })
  }
};

class Updater {
  constructor(component) {
    this.pendingStates = [];
    this.component = component;
  }
  addState(particalState) {
    this.pendingStates.push(particalState);
    batchingStrategy.isBatchingUpdates ?
    batchingStrategy.dirtyComponents.push(this.component)
    : this.component.updateComponent();
  }
}

class Component {
  constructor(props) {
    this.props = props;
    this.$updater = new Updater(this);
  }
  // 如何创建一个dom元素
  // 首先创建一个div,在div内插入一个domString生成dom
  // 将dom元素返回出来
  setState(partcialState) {
    this.$updater.addState(partcialState);
    // this.state = Object.assign(this.state, partcialState);
    // let oldElement = this.domElement;
    // let newElement = this.createDomFromDomString();
    // oldElement.parentNode.replaceChild(newElement, oldElement);
  }

  updateComponent() {
		let pendingStates = this.$updater.pendingStates;
		pendingStates.forEach(newState => Object.assign(this.state, newState));
		pendingStates.length = 0;
    let oldElement = this.domElement;
    let newElement = this.createDomFromDomString();
    oldElement.parentNode.replaceChild(newElement, oldElement);
  }

  createDomFromDomString() {
    //   调用子类的方法
    // 此时内部this指向实例
    let elementString = this.render();
    const div = document.createElement("div");
    div.innerHTML = elementString;
    this.domElement = div.children[0];

    // 让组件有一个可以访问组件实例的引用
    this.domElement.component = this;
    return this.domElement;
  }
  mount(container) {
    container.appendChild(this.createDomFromDomString());
  }
}

window.trigger = function(event, method) {
	console.log("event", event);
	batchingStrategy.isBatchingUpdates = true;
	event.target.component[method].call(event.target.component);
	batchingStrategy.isBatchingUpdates = false;
	batchingStrategy.batchedUpdates();
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }

  add() {
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
    setTimeout(() => {
      this.setState({ number: this.state.number + 1 });
      console.log(this.state.number);
      this.setState({ number: this.state.number + 1 });
      console.log(this.state.number);
    });
  }
  render() {
    return `<button onClick="trigger(event,'add')">${this.state.number}</button>`;
  }
}

// react中的事件
// react中的事件委托，会将所有的事件委托给全局的document

// class A {
//     constructor() {}
//     add() {
//         console.log('a');
//         this.test();
//     }
// }

// class B extends A {
//     // constructor
//     test() {
//         console.log(1);

//     }
// }

// new B().add()
