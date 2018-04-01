export class Category {

    private _id: number = null;
    private _name: string = null;

    private _hasChildren: boolean = null;
    private _children: Category[] = null;

    
    public get id(): number {
        return this._id;
    }
    public get name(): string {
        return this._name;
    }

    public get hasChildren(): boolean {
        return this._hasChildren;
    }
    public get children(): Category[] {
        return this._children;
    }

    constructor(id: number, name: string, hasChildren: boolean, children: Category[]) {
        this._id = id;
        this._name = name;
        this._hasChildren = hasChildren;
        this._children = children;
    }

    public equals(other: Category): boolean {
        if (!other) {
            return false;
        }
        
        if (this.hasChildren && !this.children.some(child => other.children.some(c => child.equals(c)))) {
            return false;
        }
        if (other.hasChildren && !other.children.some(child => this.children.some(c => child.equals(c)))) {
            return false;
        }
        return this.id === other.id
            && this.name === other.name
            && this.hasChildren === other.hasChildren;
    }


    public static toJSON(category: Category): any {
        return category;
    }
    public static fromJSON(json: any): Category {
        return new Category(
            json.id,
            json.name,
            json.hasChildren,
            json.children.map(child => Category.fromJSON(child))
        );
    }


}
