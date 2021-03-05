module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }
    let str = n.toString();
    let str2 = '';

    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    n = +str2;
    return n;
}
