const storeCreator = (callback, initialStore) => {
  return new Proxy(initialStore,
    {
      set: (target, key, value) => {
        target[key] = value;
        callback(key, value);
        return true;
      },
    });
};

export default storeCreator;
