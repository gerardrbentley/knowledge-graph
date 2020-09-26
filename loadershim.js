const jestConfig = require("./jest.config");

global.___loader = {
    enqueue: jest.fn(),
}