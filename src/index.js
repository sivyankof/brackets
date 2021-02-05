module.exports = function check(str, bracketsConfig) {
    let arr = bracketsConfig.map((e) => e.join(""));

    for (let i = 0; i < str.length; i++) {

        if (str.includes(arr[i])) {
            str = str.replace(arr[i], "");
            i = -1;
        }

    }
    return str.length === 0;
};
