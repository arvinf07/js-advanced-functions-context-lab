/* Your Code Here */

function createEmployeeRecord([firstName, familyName, title, payPerHour]){
  return {
    firstName,
    familyName,
    title,
    payPerHour,
    timeInEvents: [],
    timeOutEvents: []
  }
}

function createEmployeeRecords(employeesArray){
  return employeesArray.map(employeeInfo => createEmployeeRecord(employeeInfo))
}

function createTimeInEvent(dateStamp){
  let [date, hour] = dateStamp.split(" ")
  this.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour),
    date
  })
  return this
}

function createTimeOutEvent(dateStamp){
  let [date, hour] = dateStamp.split(" ")
  this.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour),
    date
  })
  return this
}

function hoursWorkedOnDate(date){
  let timeIn = this.timeInEvents.find(event => event.date === date)
  let timeOut = this.timeOutEvents.find(event => event.date === date)
  return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(date){
  return this.payPerHour * hoursWorkedOnDate.call(this, date)
}

// function allWagesFor(){
//   return this.timeInEvents.reduce((acc, timeEvent) =>{
//     return acc + wagesEarnedOnDate.call(this, timeEvent.date)
//   }, 0)
// }

function calculatePayroll(employees){
  return employees.reduce( (accumulator, employee) => {
    return accumulator + allWagesFor.call(employee)
  }, 0)
}

function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find(empRec => empRec.firstName === firstName)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}