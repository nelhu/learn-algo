// const f = () => console.log(this.name);
function f() {
  console.log(this);

  console.log(this.name);
}

const bind = (fn, _this) => {
  return function(...args) {
    fn.apply(_this, args);
  }
}

const withBind = bind(f, {name: 'tom'});
withBind();