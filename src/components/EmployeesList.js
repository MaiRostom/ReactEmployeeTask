import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";

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

  const listarray = useSelector((state) => {
    console.log("state", state);
    return state.employeeReducer.employeeList;
  });
  console.log("list", listarray);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Employees List
        </Typography>
        <Typography variant="h5" component="h2">
          {listarray.map((listItem, index) => {
            console.log("Index", index);
            return (
             
                <Typography  key={index} className={classes.pos} color="textSecondary">
                  {listItem.first_name}
                
<br/>
                {listItem.email}
                </Typography>
            );
          })}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
