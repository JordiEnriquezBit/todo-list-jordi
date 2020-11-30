export class Todo {
  private _id:string;
  private _orderId: number;
  private _name:String;
  private _description:String;


	constructor(id?:string,orderId?: number, name?: String, description?: String) {
    this._id = id;
    this._orderId = orderId;
		this._name = name;
		this._description = description;
	}


    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter orderId
     * @return {number}
     */
	public get orderId(): number {
		return this._orderId;
	}

    /**
     * Getter name
     * @return {String}
     */
	public get name(): String {
		return this._name;
	}

    /**
     * Getter description
     * @return {String}
     */
	public get description(): String {
		return this._description;
	}

    /**
     * Setter id
     * @param {String} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter orderId
     * @param {number} value
     */
	public set orderId(value: number) {
		this._orderId = value;
	}

    /**
     * Setter name
     * @param {String} value
     */
	public set name(value: String) {
		this._name = value;
	}

    /**
     * Setter description
     * @param {String} value
     */
	public set description(value: String) {
		this._description = value;
	}

}
