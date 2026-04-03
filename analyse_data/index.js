function combineUsers(...arrays) {

    let combinedObject = {
        users: []
    }
    for (let i = 0; i < arrays.length; i++) {

        combinedObject.users.push(...arrays[i])
    }
    combinedObject.merge_date = new Date().toLocaleDateString()
    return combinedObject
}
module.exports = combineUsers;