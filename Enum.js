module.exports = enumData => ({
    ...enumData,
    keys: () => Object.keys(enumData),
    values: () => Object.values(enumData),
    key: (value) =>  Object.keys(enumData).find(key => enumData[key] === value)
});