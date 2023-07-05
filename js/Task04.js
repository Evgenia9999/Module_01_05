const calculate = (sum, num, promo) => {
    
    if (num >= 10) {
        disc1 = sum * 0.03;
        sum -= disc1;
    }

    if (sum >= 30000) {
        disc2 = 0.15 * (sum - 30000);
        sum -= disc2;
    }

    if (promo === 'METHED') {
        disc3 = 0.1 * sum;
        sum -= disc3;
    }

    if (promo === 'G3H2Z1') {
        if (sum > 2000);
        disc4 = 500;
        sum -= disc4;
    }
    
    total = sum;

    return total;
}
console.log(calculate(40000));


