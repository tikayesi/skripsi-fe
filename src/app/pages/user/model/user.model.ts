export interface User{
    id? : string,
    username : string,
    password : string,
    userDetail : UserDetail
}

export interface UserDetail {
    id? : string,
    nik : string,
    fullName : string,
    birthPlace : string,
    birthDate : Date,
    gender : string,
    address: string,
    province: string,
    city: string,
    districts: string,
    postalCode: string,
    email: string,
    phoneNumber: string,
    education: string,
    religion: string,
    otherInformation: string,
}