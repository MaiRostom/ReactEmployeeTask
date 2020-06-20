import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function EmployeeList() {
  const classes = useStyles();

  const empData = useSelector((state) => {
    console.log("state", state);
    return state.employeeReducer;
  });
  console.log("list", empData);
const dataLoading =(<Typography>The Data is Loading </Typography>);
const notValid=(<Typography>{empData.error}</Typography>)

  const isValid = empData.employeeList.map((listItem,index) => {
    //console.log("Index", index);
    return (
      <Typography key={index} className={classes.pos} color="textSecondary">
        <Link to={`/EmployeesList/${listItem.employee_name}`}>
          {listItem.employee_name}
        </Link>
        <br />
        <label htmlFor="The Salary">Salary: </label>
        {listItem.employee_salary}
        <br />
        <label htmlFor="The Age">Age: </label>
        {listItem.employee_age}
         </Typography> 

    );
  });

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Employees List
        </Typography>
         
        {empData.isLoading ? dataLoading : empData.isLoading===false && empData.error==="" ?isValid : notValid}
        
      </CardContent>
    </Card>
  );
}
