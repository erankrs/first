

enum Seniority{
    Senior = "senior",
    MID = "mid-level",
    JUNIOR = "junior"

}

export class teamMember{
    private _id: number;
    private _name: string;
    private _level: Seniority;

    
    constructor(id: number, name: string, level: Seniority) {
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
    get level(): Seniority {
        return this._level;
    }

    // Setter for level
    set level(level: Seniority) {
        this._level = level;
    }
}