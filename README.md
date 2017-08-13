## us_census

This project takes an sqlite DB and provides data to the front end application based on certain variables. For example if the front end makes a request based on the variable 'education' then the back end will return the most frequent values of that variable as well as the average age of people who fall into that value. The front end will only display a maximum of 100 different values. It registers how many more values there are if value number exceeds 100. 

## How to run

Add Database

Due to the size of the database it cannot be stored on Git and therefore needs to be added manually. Please add us-census.db to 
```
server/model
```

Install dependencies
```
npm install
```

Run the server and application

```
npm start
```
The site will be running at localhost:3000

## Stack

Based on the react boilerplate this project uses the following technologies

```
- React (Base Framework)
- Redux (State Container)
- Reselect (Memoization Handler)
- Sagas (Data flow Handler)
```