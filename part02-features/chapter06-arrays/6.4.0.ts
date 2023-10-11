export let yearAndWarrior: [number, string];

yearAndWarrior = [530, 'Tomyris']; // OK

yearAndWarrior = [false, 'Tomyris']; // ERROR

yearAndWarrior = [530]; // ERROR

// year 타입: number
// warrior 타입: string
export let [year, warrior] = Math.random() > 0.5 ? [340, 'Archidamia'] : [1828, 'Rani of Jhansi'];
