
const x = prompt('Напишите что-нибудь')

const typeWhatEver = () => {
    a = x.charAt(0).toUpperCase() + x.slice(1);
    return a;
}
console.log(typeWhatEver(x));