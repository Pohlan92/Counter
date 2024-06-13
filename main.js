class Counter {
  _state = {
    count: 0,
  };

  constructor() {
    this._init();
  }

  _init() {
    this._element = this._createElement(this._getTemplate());
    this._addListeners();
  }

  _addListeners() {
    this._element.querySelector(".btn--minus").addEventListener("click", () => {
      this._setStateCount(this._state.count - 1);
      this._render();
    });

    this._element.querySelector(".btn--plus").addEventListener("click", () => {
      this._setStateCount(this._state.count + 1);
      this._render();
    });

    this._element.querySelector(".btn--reset").addEventListener("click", () => {
      this._setStateCount(0);
      this._render();
    });
  }

  _createElement(HTML) {
    const el = document.createElement("div");
    el.insertAdjacentHTML("beforeend", HTML);
    return el.firstElementChild;
  }

  _getTemplate() {
    return `<div class="counter">
        <h2 class="counter__title">Counter</h2>
        <span class="counter__value">0</span>
        <div class="counter__buttons">
          <button class="btn btn--minus">-</button>
          <button class="btn btn--reset">Reset</button>
          <button class="btn btn--plus">+</button>
        </div>
      </div>`;
  }

  _setStateCount(value) {
    this._state.count = value;
  }

  _render() {
    this._element.querySelector(".counter__value").textContent = this._state.count;

    if (this._state.count < 0) {
      this._element.querySelector(".counter__value").classList.add("counter__value--blue");
      this._element.querySelector(".counter__value").classList.remove("counter__value--green");
    }

    if (this._state.count > 0) {
      this._element.querySelector(".counter__value").classList.remove("counter__value--blue");
      this._element.querySelector(".counter__value").classList.add("counter__value--green");
    }

    if (this._state.count === 0) {
      this._element.querySelector(".counter__value").classList.remove("counter__value--blue");
      this._element.querySelector(".counter__value").classList.remove("counter__value--green");
    }
  }

  get element() {
    return this._element;
  }
}

const root = document.querySelector(".root");
root.insertAdjacentElement("beforeend", new Counter().element);
