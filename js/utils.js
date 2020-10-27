"use strict";

class BillType {
    static get income() {
        return 1;
    }
    static get expense() {
        return 2;
    }
}

class OneArray {
    static get account() {
        return "account";
    }
    static get mainCategory() {
        return "mainCategory";
    }
    static get subCategory() {
        return "subCategory";
    }
    static get member() {
        return "member";
    }
    static get merchant() {
        return "merchant";
    }
    static get item() {
        return "item";
    }
}

class SingleList {
    constructor(token) {
        this.token = token;
        this.income = 0;
        this.expense = 0;
        this.remain = 0;
        this.list = [];
    }
}
