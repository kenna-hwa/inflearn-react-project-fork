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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandPrintTodos = exports.Command = void 0;
const Input_1 = require("./Input");
class Command {
    constructor(key, desc) {
        this.key = key;
        this.desc = desc;
    }
    toString() {
        return `${this.key}: ${this.desc}`;
    }
}
exports.Command = Command;
class CommandPrintTodos extends Command {
    constructor() {
        super('p', '모든 할 일 출력하기');
    }
    run(state) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const todo of state.todos) {
                const text = todo.toString();
                console.log(text);
            }
            yield (0, Input_1.waitForInput)('press any key: ');
        });
    }
}
exports.CommandPrintTodos = CommandPrintTodos;
