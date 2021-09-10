
let the_num = 1;

const doubler = (our_num) => {
    console.log(`The number to double is ${our_num}`);
    let the_doubled_num = our_num * 2;
    return the_doubled_num;
};

const tripler = (our_num) => {
    console.log(`The number to triple is ${our_num}`);
    let the_tripled_num = our_num * 3;
    return the_tripled_num;
};

const someone_elses_function = () => {
    the_num = the_num * Math.PI;
};

console.log(the_num);
console.log("");

console.log(`What is two times 1? The answer is ${doubler(1)}`);

console.log(the_num);
console.log("");

someone_elses_function();

console.log(the_num);
console.log("");

console.log(`What is three times 1? The answer is ${tripler(1)}`);

console.log(the_num);
console.log("");
