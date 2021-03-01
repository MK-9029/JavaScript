/**
 *功能是 决定字符串中的符号是正确的
 * @param str 字符串，包含()[]{}
 */
const isValid = (str) => {
    let sta = [];
    let obj = {};
    obj ["("] = ")";
    obj ["["] = "]";
    obj ["{"] = "}";
    for (let i = 0; i < str.length; i++) {
        if (!sta.length) {
            sta.push(str[i]);
        } else{
            if (str[i] == obj[sta[sta.length-1]]) {
                sta.pop();
            } else {
                sta.push(str[i]);
            }
        }
    }
    return !sta.length;
}
console.log(isValid('([])'));//ture
console.log(isValid('()[]{}'));//ture
console.log(isValid('({})'));//ture
console.log(isValid('(])'));//flase
console.log(isValid('('));