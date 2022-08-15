export default class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
}

export function printName(user) {
  console.log(`${user.first} ${user.last}`);
}
