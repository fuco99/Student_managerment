import { IClass } from "./Class";
import { Iteacher } from "./Teacher";

export interface IStudent{
    MSSV: string;
    Name: string;
    DateOfBirth: string;
    Gender: string,
    Classes?: IClass[];
    Teachers?: Iteacher[];
}
export const StudentData: IStudent[] = [
    {
        MSSV: "001",
        Name: "nguyen thi lua",
        DateOfBirth: "23/10/1999",
        Gender: "Female"
    },
    {
        MSSV: "002",
        Name: "nguyen van khu",
        DateOfBirth: "23/09/1996",
        Gender: "Male"
    },
    {
        MSSV: "003",
        Name: "dang thi chuoi",
        DateOfBirth: "22/11/1998",
        Gender: "Female"
    },
    {
        MSSV: "004",
        Name: "hoang van binh",
        DateOfBirth: "23/02/1994",
        Gender: "Male"
    },
    {
        MSSV: "005",
        Name: "kieu thi ha",
        DateOfBirth: "25/05/1995",
        Gender: "Female"
        
    },
    {
        MSSV: "006",
        Name: "nguyen van a",
        DateOfBirth: "24/07/1992",
        Gender: "Male"
    },
    {
        MSSV: "007",
        Name: "pham thi b",
        DateOfBirth: "22/12/1995",
        Gender: "Female"
        
    }
]