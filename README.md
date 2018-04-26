# Colorful life
## My first personal project


## Update
### 19/04/2018

* Fork full-stack boilerplate
* Added ```App, Header, MainTable, TableHead``` components
* Added calender grid CSS
* Added utils file to handle date.
* Added ```WeekTable, DateTable```
* Refactor MainTable component, add ```dateOfMonthGenerator, dateRowWrapper``` to generate the date row of 35 grid
* Found out I can use new Date to get info, so need refactor Date related functions

```
var date1 = new Date(2018, 2, 0)
console.log(date1);
// Wed Feb 28 2018 00:00:00 GMT+1300 (NZDT)
```

### 21/04/2018

* Refactor the utils, rewrite the Date ralated function
* Fixed css issue, delete TableHead component
* Added ```gotoPreviousMonth``` and ```gotoNextMonth``` function. 
* Finished the basic function of the calendar
* Add function when click date grid redirect to date activities input page

### 24/04/2018

* Try to integrate redux into project
* Create a getInitDayArr in utils to build the default state of one day page.
* Create a UPDATE_ACTIVITIES_FROM_DB to update the change.
* Create oneDay reducer to handle this action

### 26/04/2018 

* Update activity function added.

## Code Structure
  - package.json
  - seeds and migrations
  - server
    - ```index, server``` start server and setup middleware
    - ```db``` communicate with database
    - ```calendar``` http router 
    - ```calendarApi``` api router communicate with db
    - ```public``` html and css
  - client
    - actions
      - ```index```
    - components
      - ```App```
        - ```Header```
        - ```MainTable```
          - Date print and button
          - ```WeekTable```
          - ```DateTable```
            - thead
            - ```HourTable```
        - ```DayTable```
    - reducers
      - index
      - ```dayTable```
      
<img src="./Components.JPG" alt=""/>

## Todo List
* Thinking about data structure 
- table name "Activities". 
- id increments
- date integer. e.g year*10000 + month*100 + day
- hour integer. e.g 1-24 6-7 => 7, 7-8 => 8
- activities string, means **no more than 255 char allowed**.
- tag integer 
  1. 1 - blue - guilt free play time
  2. 2 - green - rest time
  3. 3 - yellow - quality work time
  4. 4 - cyan - mandatory work time
  5. 5 - red - procrastination time

* Everytime I clicked the date. 
- send a get request then render the show page

