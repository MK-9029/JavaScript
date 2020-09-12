/**
 *功能是 决定字符串中的符号是正确的
 * @param str 字符串，包含()[]{}
 */
const isValid = (str) => {
    let obj = {};
    obj ["("] = ")";
    obj ["["] = "]";
    obj ["{"] = "}";
    let sta = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '{') {
            sta.push(str[i]);
        } else {
            if (str[i] == obj[sta[sta.length-1]]) {
                sta.pop();
            } else {
                return false;
            }
        }
        // else {
        //     const j = sta.length-1;
        //     if (str[i] == ')') {
        //         if (sta[j] == '(') {
        //             sta.pop();
        //         }
        //         else {
        //             return false;
        //         }
        //     }
        //     else {
        //         if (str[i] == ']') {
        //             if (sta[j] == '[') {
        //                 sta.pop();
        //             }
        //             else {
        //                 return false;
        //             }
        //         }
        //         else {
        //             if (str[i] == '}') {
        //                 if (sta[j] == '{') {
        //                     sta.pop();
        //                 }
        //                 else {
        //                     return false;
        //                 }
        //             }
        //         }
        //     }
        // }
    }
    if (sta.length == 0) {
        return true;
    }
}
console.log(isValid('([])'));//ture
console.log(isValid('()[]{}'));//ture
console.log(isValid('({})'));//ture
console.log(isValid('(])'));//flase
console.log(isValid(''));