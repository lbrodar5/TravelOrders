export class User {
    constructor(
        public id : number,
        public firstName : string,
        public lastName : string,
        private _token : string,
        private expirationDate : string
    ) {}
    get token() {
        if(new Date(this.expirationDate) < new Date()) {
            return null;
        }
        return this._token;
    }
}