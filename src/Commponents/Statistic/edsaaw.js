const filteredSupply = (supply) => {
    const supplyToArr = supply.toString().slice(1,).split('')
    if (supplyToArr.length >= 6 && supplyToArr.length < 9) {
        const supplyM = supply.toString().slice(1,).split('')
        switch (supplyM.length) {
            case 6: return supply.toString().slice(0, 1) + 'M';
            case 7: return supply.toString().slice(0, 2) + 'M';
            case 8: return supply.toString().slice(0, 3) + 'M';
            default: return supply
        }
    }
}

console.log(filteredSupply(1000000))
console.log(filteredSupply(10000000)) /* 10 000 000 */
console.log(filteredSupply(100000000)) /* 100 000 00 */