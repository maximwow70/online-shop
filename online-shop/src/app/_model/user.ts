export class User {

    private _id: string;
    private _name: string;

    private _mail: string;
    private _password: string;

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

    constructor(id: string, name: string, mail: string, password: string) {
        this._id = id;
        this._name = name;

        this._mail = mail;
        this._password = password;
    }


    public static fromJSON(user: any): User {
        return new User(
            user.id,
            user.name,
            user.mail,
            user.password
        );
    }
    public static toJSON(user: User): any {
        return user;
    }
}
