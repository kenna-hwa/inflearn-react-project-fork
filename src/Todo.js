"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Todo {
    constructor(title, priority, id = Todo.nextId) {
        this.title = title;
        this.priority = priority;
        this.id = id;
        Todo.nextId++;
    }
    toString() {
        return `${this.id}) 제목: ${this.title} (우선순위: ${this.priority})`;
    }
}
Todo.nextId = 1;
exports.default = Todo;
