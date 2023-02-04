class Year {
  private months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Sept',
    'Oct',
    'Nov',
  ]

  set setMonths(month: string) {
    this.addMonth(month)
  }

  get getMonths() {
    return this.months
  }

  addMonth(month: string) {
    this.months.push(month)
  }
}

const year = new Year()
year.addMonth('DEC') // through method
year.setMonths = 'DEC' // through setter, Notice that we dont have to add '()'

// year.months //	Property 'months' is private and only accessible within class 'Year'
year.getMonths // Notice that we dont have to add '()'
