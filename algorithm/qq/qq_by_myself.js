let qq_number = "631758924";
/**
 * 
 * @param qq type String
 * @return type bool
 * @功能 判断qq号是否合格
 * @desc 只能是数字 长度5位以上，13位以内
 */
const is_valid_qq = (qq) => {
    if (!qq) return false;
    if (/[0-9]{5,13}/.test(qq)) {
        return true;
    } else {
        return false;
    }
}
const decode_qq = (qq) => {
    let true_qq = [], qq_array = [];
    for (let i = 0; i < qq.length; i++) {
        qq_array.push(qq[i]);
    }
    while (qq_array != 0) {
        true_qq.push(qq_array[0]);
        qq_array.shift();
        qq_array.push(qq_array[0]);
        qq_array.shift();
    }
    return true_qq;
}
console.log(is_valid_qq(qq_number));
console.log(decode_qq(qq_number));
