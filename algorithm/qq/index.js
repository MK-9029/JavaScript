let enc_qq = [6, 3, 1, 7, 5, 8, 9, 2, 4],
    qq = [],
    head = 0,
    tail = 9;
while (head < tail) {
    qq.push(enc_qq[head]);
    head++;
    enc_qq[tail] = enc_qq[head];
    head++;
    tail++;
}
console.log(qq);
