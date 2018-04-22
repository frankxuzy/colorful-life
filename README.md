# Colorful life
## My first personal project


## Update
### 19/04/2018

* Fork full-stack boilerplate
* Add ```App, Header, MainTable, TableHead``` components
* Add calender grid CSS
* Add utils file to handle date.
* Add ```WeekTable, DateTable```
* Refactor MainTable component, add ```dateOfMonthGenerator, dateRowWrapper``` to generate the date row of 35 grid
* Find out I can use new Date to get info, so need refactor Date related functions

```
var date1 = new Date(2018, 2, 0)
console.log(date1);
// Wed Feb 28 2018 00:00:00 GMT+1300 (NZDT)
```

### 21/04/2018

* Refactor the utils, rewrite the Date ralated function
* Fix css issue, delete TableHead component