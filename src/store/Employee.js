import { makeAutoObservable } from "mobx";

export default class Employee {
  employee = {
    id: null,
    fullName: null,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setId(id) {
    this.employee.id = id;
  }

  setId(fullName) {
    this.employee.fullName = fullName;
  }
}
