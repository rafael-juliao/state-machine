console.log('\n\nENUM\n\n')

const Enum = require('./Enum')

const dumbEnumStatus = {
    CREATED: 'created',
    DELETED: 'deleted'
}

const dumbEnumData = Enum(dumbEnumStatus);

console.log(dumbEnumData.keys())
console.log(dumbEnumData.values())
console.log(dumbEnumData.key('created'))
console.log(dumbEnumData.key('deleted'))

//////////////////////////////////////////////
console.log('\n\nSTATE MACHINE\n\n')

const StateMachine = require('./StateMachine')

const enumStatus = {
    CREATED: 'created',
    APPROVED: 'approved',
    CHANGED: 'changed',
    REJECTED: 'rejected'
}

const transactionsMap = {
    CREATED:  [ enumStatus.APPROVED, enumStatus.REJECTED, enumStatus.CHANGED ],
    APPROVED: [ enumStatus.CHANGED ],
    CHANGED:  [ enumStatus.APPROVED, enumStatus.REJECTED ],
    REJECTED: [ enumStatus.CHANGED ]
}

smartStateMachine = StateMachine(enumStatus, transactionsMap)


console.log(
    smartStateMachine.isValidTransaction(
        enumStatus.CREATED,
        enumStatus.APPROVED
    )
)

console.log(
    smartStateMachine.isValidTransaction(
        enumStatus.REJECTED,
        enumStatus.APPROVED
    )
)

//////////////////////////////////////////////
console.log('\n\nIMPORT USER STATE MACHINE\n\n')

const UserState = require('./UserStateMachine')

console.log(UserState.isValidTransaction(
    UserState.INACTIVE,
    UserState.DELETED
))
console.log(UserState.isValidTransaction(
    UserState.ACTIVE,
    UserState.DELETED
))
console.log(UserState.isValidTransaction(
    UserState.DELETED,
    UserState.CHANGED
))