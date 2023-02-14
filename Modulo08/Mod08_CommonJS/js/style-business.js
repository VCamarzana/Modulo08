
// style-business.js

const getNodeStyle = function (account) {
    if (account.money < 0) {
        return "color: red";
    }
    return "color: blue";
}

module.exports = {
    getNodeStyle: getNodeStyle
};