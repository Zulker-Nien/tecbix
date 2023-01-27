import { makeAutoObservable } from "mobx";
import { createContext } from "react";

class Store {
  show = false;
  department = "";

  constructor() {
    makeAutoObservable(this);
  }

  setShow = () => {
    this.show = !this.show;
  };

  setFalse = () => {
    this.show = false;
  };

  setDepartment = (department) => {
    this.department = department;
  };
}

export default createContext(new Store());
