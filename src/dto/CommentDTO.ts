export default class CommentDTO{
  private _postId: number;
  private _id: number;
  private _name: string;
  private _email: string;
  private _body: string;


  constructor(postId: number, id: number, name: string, email: string, body: string) {
    this._postId = postId;
    this._id = id;
    this._name = name;
    this._email = email;
    this._body = body;
  }


  get postId(): number {
    return this._postId;
  }

  set postId(value: number) {
    this._postId = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get body(): string {
    return this._body;
  }

  set body(value: string) {
    this._body = value;
  }
}
