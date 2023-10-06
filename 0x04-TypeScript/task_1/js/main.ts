interface Teacher{
    readonly firstName: string; // readonly ensures that the value cannot be modified after initializtion
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}
