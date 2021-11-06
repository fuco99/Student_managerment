
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
        DateOfBirth: "10/23/1999",
        Gender: "Female",
        ClassName: "Giải tích I",
        Teacher: "nguyen thi anh"
    },
    {
        MSSV: "002",
        Name: "nguyen van chuoi",
        DateOfBirth: "09/23/1996",
        Gender: "Male",
        ClassName: "Giải tích II",
        Teacher: "nguyen van hai"
    },
    {
        MSSV: "003",
        Name: "dang thi khoai",
        DateOfBirth: "11/22/1998",
        Gender: "Female",
        ClassName: "Giải tích II",
        Teacher: "nguyen van hai"
    },
    {
        MSSV: "004",
        Name: "hoang van binh",
        DateOfBirth: "02/23/1994",
        Gender: "Male",
        ClassName: "Giải tích III",
        Teacher: "dang hai dang"
    },
    {
        MSSV: "009",
        Name: "nguyen duy thai",
        DateOfBirth: "06/23/1994",
        Gender: "Male",
        ClassName: "Giải tích III",
        Teacher: "dang hai dang"
    },
    {
        MSSV: "010",
        Name: "pham phuong nhi",
        DateOfBirth: "09/30/1994",
        Gender: "Male",
        ClassName: "Giải tích III",
        Teacher: "dang hai dang"
    },
    {
        MSSV: "005",
        Name: "kieu thi ha",
        DateOfBirth: "05/25/1995",
        Gender: "Female",
        ClassName: "Phương pháp tính",
        Teacher: "hoang nam"
        
    },
    {
        MSSV: "006",
        Name: "nguyen van a",
        DateOfBirth: "07/24/1992",
        Gender: "Male",
        ClassName: "Phương pháp tính",
        Teacher: "hoang nam"
    },
    {
        MSSV: "007",
        Name: "pham thi b",
        DateOfBirth: "12/22/1995",
        Gender: "Female",
        ClassName: "Phương pháp tính",
        Teacher: "hoang nam"
    }
]