const combineUsers = require('./index'); // adjust if needed

test('combines multiple user arrays', () => {
    const result = combineUsers(
        [{ name: "Ben" }],
        [{ name: "Alice" }, { name: "John" }]
    );

    expect(result.users.length).toBe(3);
});
