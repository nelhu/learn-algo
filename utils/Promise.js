const p1 = new Promise(executor)
p1.then(
  (result) => {
    //
  },
  (e) => {

  }
);
executor = (resolve, reject) => {
  if (x) reject(reason)
  resolve(result)
}

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
}

class MyPromise {
  constructor(executor) {
    this.status = STATUS.PENDING;
    this.handleFulfilled();
    this.handleRejected();
    const resolveFn = result => {
      if (this.status === STATUS.FULFILLED) return ;
      setTimeout(() => {
        this.status = STATUS.PENDING;
        this.value = result;
        this.handleFulfilled();
      }, 0);
    }
    const rejectFn = reason => {
      if (this.status === STATUS.REJECTED) return ;
      setTimeout(() => {
        this.status = STATUS.PENDING;
        this.reason = reason;
        this.handleRejected();
      }, 0);
    }
    try {
      executor(resolveFn, rejectFn);
    } catch (e) {
      rejectFn(e);
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled === 'function' && typeof onRejected === 'function') {
      return new MyPromise((resolve, reject) => {
        try {
          this.handleFulfilled = () => {
            const data = onFulfilled(this.value);
            data instanceof Promise ? data.then(resolve, reject) : resolve(data);
          }
          this.handleRejected = () => {
            const reason = onRejected(this.reason);
            reason instanceof Promise ? reason.then(resolve, reject) : reject(reason);
          }
        } catch (e) {
          reject(e)
        }
      });
    }
  }
  static all(promises = []) {
    return new Promise((resolve, reject) => {
      const results = [];
      promises.forEach((p, i) => {
        p.then(r => {
          results[i] = r;
          if (promises.length - 1 === i) {
            resolve(results)
          }
        }, reject);
      });
    });
  }
  static race (promises = []) {
    return Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const p = promises[i];
        p.then(resolve, reject);
      }
    });
  }
  static resolve = value => {
    if (value instanceof Promise) return value;
    return new Promise(resolve => resolve(value));
  }
  static reject = value => {
    return new Promise((resolve, reject) => reject(value));
  }
}
