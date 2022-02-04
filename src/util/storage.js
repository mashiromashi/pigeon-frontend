class StorageManagement {
  storage = localStorage;
  key = "pigeon";

  __stringify(value) {
    if (typeof value === "object") {
      return JSON.stringify(value);
    } else {
      return value;
    }
  }

  set(key, value) {
    if (typeof value !== "string") {
      let updateValue = this.__stringify(value);
      this.storage.setItem(key, updateValue);
    }
  }

  removeUserEntity() {
    this.storage.removeItem(this.key);
    this.storage.clear();
  }

  getUserEntity() {
    let users = this.storage.getItem(this.key);
    if (users) {
      return JSON.parse(users);
    } else {
      return null;
    }
  }

  setUserEntity(value) {
    this.set(this.key, value);
  }
}

const storage = new StorageManagement();
export { storage };
