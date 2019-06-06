module.exports = {
    testRegex: "resources/js/test/.*.test.js$",
    setupFilesAfterEnv: [
        "@testing-library/react/cleanup-after-each"
        // ... other setup files ...
    ],
    moduleDirectories: [
        'node_modules',
        // the directory with the test-utils.js file
        'utils',
        // the root directory
        __dirname
    ]
};
