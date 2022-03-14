N.1

let fullName = arr => arr.map(elem => ({fullName: `${elem.name} ${elem.surname}`, id:elem.id}));

N.2

function oncePerMill(func, n) {
  let switcher = true;
  function decorator(...args){
    if (switcher) {
      switcher = false;
      setTimeout(() => switcher = true, n)
      return func.apply(this, args)
    }
  }
  return decorator;
}

N.3

function decoratorFunction(f, ms) {
  let switcher = false,
    savArgs,
    savThis;
  function wrapper(...args) {
     if(switcher) {
    savArgs = args;
    savThis = this;
       return;
  }
    f.apply(this, args)
    switcher = true;
    setTimeout(function(){
      if(savArgs) {
        switcher = false;
        wrapper.apply(savThis, savArgs)
        savArgs = savThis = null;
      }
    }, ms)
  }
    return wrapper;
  }