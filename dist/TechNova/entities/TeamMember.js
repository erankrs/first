"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamMember = void 0;
var Seniority;
(function (Seniority) {
    Seniority["Senior"] = "senior";
    Seniority["MID"] = "mid-level";
    Seniority["JUNIOR"] = "junior";
})(Seniority || (Seniority = {}));
var teamMember = /** @class */ (function () {
    function teamMember(id, name, level) {
        this._id = id;
        this._name = name;
        this._level = level;
    }
    Object.defineProperty(teamMember.prototype, "id", {
        // Getter for id
        get: function () {
            return this._id;
        },
        // Setter for id
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(teamMember.prototype, "name", {
        // Getter for name
        get: function () {
            return this._name;
        },
        // Setter for name
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(teamMember.prototype, "level", {
        // Getter for level
        get: function () {
            return this._level;
        },
        // Setter for level
        set: function (level) {
            this._level = level;
        },
        enumerable: false,
        configurable: true
    });
    return teamMember;
}());
exports.teamMember = teamMember;
