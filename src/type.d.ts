
type UserObject = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

type InitialState = {
    users: UserObject[];
    postUserData:(user:Object) => void;
}