module.exports = function fn(arg) {
    if (typeof arg == 'string') {
        return arg.split('').reverse().join('');
    } else if (typeof arg != 'string' && !Array.isArray(arg)) {
        return null;
    } else if (Array.isArray(arg)) {
        return [arg[0].split().reverse().join(''), null];
    }
};
