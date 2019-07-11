const StateMachine = require('./StateMachine')

const states = {
    ACTIVE: 'active',
    CHANGED: 'changed',
    INACTIVE: 'inactive',
    DELETED: 'deleted',
}

const transaction = {
    ACTIVE: [states.INACTIVE, states.CHANGED, states.DELETED],
    CHANGED: [states.INACTIVE, states.ACTIVE],
    INACTIVE: [states.ACTIVE, states.DELETED],
    DELETED: [states.ACTIVE]
}

const UserStateMachine = StateMachine(states, transaction)

module.exports = UserStateMachine