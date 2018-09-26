function greet(name) {
    console.log(`hello, ${name}!`);
    greet2(name);
    console.log(`getting ready to say bye`);
    bye();
}

function greet2(name) {
    console.log(`How are you ${name}`);
}

function bye() {
    console.log(`Okay bye!`);   
}

greet("Shaolin")