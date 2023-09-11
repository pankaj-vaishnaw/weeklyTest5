# index.html
first we have created a container inside that container we have select tag which is for month 
then we have one more select and option which is disabled bydefault which will be working through javascript 
then we have a section that is for week days 
then we have list for 31 days bydefault 
then we have a form which contains a function calling from the javascript file which is ValidateDate function 

 
 # index.js
in this file we have used funtionality which is
first we are creating the variable and assging the new Date function to it which wikl provide current date 
then we are using the  an array to define that how many days of month willl be 
then we are geting the dom elements by selecting with querySelectors  which is 
listOfFays 
yearSelect
monthSelect
highlightDateInput
then we are initializing the year select options with function initializeyearSelect()
then we have a method called initializeMonthSelect() which is for month selection in which

we have an array of months  and forEach month the will be selecrted by their index value 

then we have a function called populateCalender() which will get 
year
month
first day
and days in current month 
and on listof days we are applying foreach to apply the conditions over the for the day number
then we are checking that day is >0 and less than days in current month else daynumber wil be empty
then we are setting the dayNumber is == currentDate  and month ==current month and year ==current year that we are setting that as curren date 
after that we are setting the selected date as active 
than we have added the eventlistener for year selection which is and change event whenever someone changes the event we can select the year and the changes will occure  same as for month whwnever we select month the change event will occure 
  then we have a event listener for highlighting a specific date which will occur on changing the date 
  which will check the condition that if its a number then select date month and year 



  






