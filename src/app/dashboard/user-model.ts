export interface UserModel {
    id: number;
    name: string;
    username: string;
    address: {
        email: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
    };
    phone: string;
};
