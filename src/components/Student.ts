
export interface IStudent{
    MSSV: string;
    Name: string;
    DateOfBirth: string;
    Gender: string,
    ClassName: string;
    Teacher: string;
}
export const StudentData: IStudent[] = [
    {
        MSSV: "001",
        Name: "nguyen thi admin",
        DateOfBirth: "23/10/1999",
        Gender: "Female",
        ClassName: "Giải tích I",
        Teacher: "nguyen thi anh"
    },
    {
        MSSV: "002",
        Name: "nguyen van chuoi",
        DateOfBirth: "23/09/1996",
        Gender: "Male",
        ClassName: "Giải tích II",
        Teacher: "nguyen van hai"
    },
    {
        MSSV: "003",
        Name: "dang thi khoai",
        DateOfBirth: "22/11/1998",
        Gender: "Female",
        ClassName: "Giải tích II",
        Teacher: "nguyen van hai"
    },
    {
        MSSV: "004",
        Name: "hoang van binh",
        DateOfBirth: "23/02/1994",
        Gender: "Male",
        ClassName: "Giải tích III",
        Teacher: "dang hai dang"
    },
    {
        MSSV: "009",
        Name: "nguyen duy thai",
        DateOfBirth: "23/06/1994",
        Gender: "Male",
        ClassName: "Giải tích III",
        Teacher: "dang hai dang"
    },
    {
        MSSV: "010",
        Name: "pham phuong nhi",
        DateOfBirth: "30/09/1994",
        Gender: "Male",
        ClassName: "Giải tích III",
        Teacher: "dang hai dang"
    },
    {
        MSSV: "005",
        Name: "kieu thi ha",
        DateOfBirth: "25/05/1995",
        Gender: "Female",
        ClassName: "Phương pháp tính",
        Teacher: "hoang nam"
        
    },
    {
        MSSV: "006",
        Name: "nguyen van a",
        DateOfBirth: "24/07/1992",
        Gender: "Male",
        ClassName: "Phương pháp tính",
        Teacher: "hoang nam"
    },
    {
        MSSV: "007",
        Name: "pham thi b",
        DateOfBirth: "22/12/1995",
        Gender: "Female",
        ClassName: "Phương pháp tính",
        Teacher: "hoang nam"
    }
]