export {increment};
export {decrement};

  increment() {
    console.log('inside store.increment method');
    store.dispatch({type: 'Add-One', data:'added one'});
  }

  decrement() {
    console.log('inside store.decrement method');
    store.dispatch({type: 'Sub-One'});
  }