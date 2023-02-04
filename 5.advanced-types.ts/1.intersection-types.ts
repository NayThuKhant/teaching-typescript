type HR = {
  name: string
  privileges: string[]
}

type Employee = {
  name: string
  joinedDate: Date
}

type EmployeeWithHR = HR & Employee

const employeeWithHR: EmployeeWithHR = {
  name: 'ABC',
  privileges: ['Fire Employee'],
  joinedDate: new Date(),
}
