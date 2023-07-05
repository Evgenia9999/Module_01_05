
const x = prompt('Напишите что-нибудь')

const typeWhatEver = () => {
    a = x.toLowerCase()
    b = a.charAt(0).toUpperCase() + a.slice(1);
    return b;
}
console.log(typeWhatEver(x));