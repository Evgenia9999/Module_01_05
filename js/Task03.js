const a = prompt('Напишите текст сюда');

const typeSomething = () => {
    const reverse = a.split('').reverse().join('');
    return(reverse);
}

console.log(typeSomething(a));