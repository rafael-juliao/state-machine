const Enum = require('./Enum');
module.exports = (states, transaction) => ({
    ...Enum(states),
    isValidTransaction: (currentEnum, nextEnum) =>
        transaction[Enum(states).key(currentEnum)]
            .some(validNewState => nextEnum === validNewState)
});