"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Input_1 = require("./Input");
const type_1 = require("./type");
const Todo_1 = __importDefault(require("./Todo"));
const Command_1 = require("./Command");
const commands = [
    new Command_1.CommandPrintTodos()
];
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const state = {
            todos: [
                new Todo_1.default('test1', type_1.Priority.High),
                new Todo_1.default('test2', type_1.Priority.Medium),
                new Todo_1.default('test3', type_1.Priority.Low),
            ],
        };
        while (true) {
            console.clear();
            for (const command of commands) {
                console.log(command.toString());
            }
            console.log();
            const key = yield (0, Input_1.waitForInput)('input command: ');
            console.clear();
            const command = commands.find(item => item.key === key);
            if (command) {
                yield command.run(state);
            }
        }
    });
}
