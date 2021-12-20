class StorageManagerClass {
  setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  }
}

export const StorageManager = new StorageManagerClass();
