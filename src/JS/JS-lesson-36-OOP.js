const soldier = {

  health: 400,
  armor: 100,
  sayHello: function () {
    console.log('Hello MF!')
  }


}

const John = {
  health: 100,
  armor:23
}

// Object.setPrototypeOf(Jhon, soldier)
// Jhon.__proto__=soldier


// const John= Object.create(soldier)

soldier.sayHello()

console.log(John.health)