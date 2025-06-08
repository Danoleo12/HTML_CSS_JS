class Employee{
    constructor(firstName, lastName, EmployeeId, BankAccount, Shift, Position, DateOfBirth){
        this.BankAccount = BankAccount;
        this.DateOfBirth = DateOfBirth;
        this.firstName = firstName;
        this.lastName = lastName;
        this.EmployeeId = EmployeeId;
        this.Position = Position; // Reference to the Position class (positionName, Wage)
        this.Shift = Shift; //Reference to the Shift class; Shift(start, end, location)
    }


}