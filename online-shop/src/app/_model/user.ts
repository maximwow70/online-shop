export class User {

    private _id: string;
    private _name: string;

    private _mail: string;
    private _password: string;

    constructor(id: string, name: string, mail: string, password: string) {
        this._id = id;
        this._name = name;

        this._mail = mail;
        this._password = password;
    }

    public get id(): string {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }

    public get mail(): string {
        return this._mail;
    }
    public get password(): string {
        return this._password;
    }

    public static fromJSON(_user: string): User {
        let user = JSON.parse(_user);
        return new User(
            user.id,
            user.name,
            user.mail,
            user.password
        );
    }
}
