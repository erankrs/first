

export enum Seniority {
    Senior = "senior",
    MID = "mid-level",
    JUNIOR = "junior"
}

type member_level = "Senior"|"Mid"|"Junior"|"Leader";

export class teamMember {
    private _id: number;
    private _name: string;
    private _level: member_level

    // Constructor with parameters
    constructor(id?: number, name?: string, level?:member_level) {
        this._id = id;
        this._name = name;
        this._level = level;
    }

   

    // Getter for id
    get id(): number {
        return this._id;
    }

    // Setter for id
    set id(id: number) {
        this._id = id;
    }

    // Getter for name
    get name(): string {
        return this._name;
    }

    // Setter for name
    set name(name: string) {
        this._name = name;
    }

    // Getter for level
    get level():member_level {
        return this._level;
    }

    // Setter for level
    set level(level:member_level) {
        this._level = level;
    }
}