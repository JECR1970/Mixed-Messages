function randomMessage () {
    
    const arrayOne = ['eternally', 'always', 'forever'];
    const arrayTwo = ['keep', 'be', 'stay'];
    const arrayThree = ['hungry', 'foolish', 'young'];
    
    let arrayOneRand = arrayOne[Math.floor(Math.random()*3)];
    let arrayTwoRand = arrayTwo[Math.floor(Math.random()*3)];
    let arrayThreeRand = arrayThree[Math.floor(Math.random()*3)];
    
        console.log(`Hey: ${arrayOneRand} ${arrayTwoRand} ${arrayThreeRand}!`);
}
randomMessage();