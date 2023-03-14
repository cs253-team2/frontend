/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { ColorPaletteProp } from "@mui/joy/styles";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { spacing } from "@mui/system";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import { Grid } from "@mui/material";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table from "@mui/joy/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import { border, Img } from "@chakra-ui/react";
import { flexbox } from '@mui/system';

const rows = [
  {
    name: "Aditya Bangar",
    roll_no: "210069",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericMale.png",
  },
  {
    name: "Akshat Rajani",
    roll_no: "210812",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericMale.png",
  },
  
  {
    name: "Harsh Bihany",
    roll_no: "210406",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericMale.png",
  },

  {
    name: "Kalika",
    roll_no: "210482",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericFemale.png",
  },

  {
    name: "Monil Lodha",
    roll_no: "210630",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericMale.png",
  },

  {
    name: "Pratham Sahu",
    roll_no: "210755",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericMale.png",
  },

  {
    name: "Pulkit Gopalani",
    roll_no: "180564",
    dept: "EE",
    img_url:"https://search.pclub.in/assets/images/GenericMale.png",
  },

  {
    name: "Ravija Chandel",
    roll_no: "210835",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericFemale.png",
  },

  {
    name: "Shantanu Kolte",
    roll_no: "210958",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericMale.png",
  },

  {
    name: "Siddhant Jakhotiya",
    roll_no: "211030",
    dept: "CSE",
    img_url:"https://search.pclub.in/assets/images/GenericMale.png",
  },
  
  
  
];

type Order = "asc" | "desc";

export function CreditsTable() {

  const [filteredData, setFilteredData] = React.useState(rows);
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filteredRows = rows.filter((row) => {
      return (row.name.toLowerCase().includes(value.toLowerCase())||
      row.roll_no.toLowerCase().includes(value.toLowerCase())||
      row.dept.toLowerCase().includes(value.toLowerCase()))
    });
    if(value === ""){
      setFilteredData(rows);
    }else{
      setFilteredData(filteredRows);
    }
  };

  return (
    <div>
       <React.Fragment>
      <Sheet
        // classid="OrderTableContainer"
        variant="outlined"
        sx={{
          width: "100%",
          height: "100vh",
          borderRadius: "md",
          flex: 1,  
          overflow: "auto",
          overflowY: "scroll",
          minHeight: 0,
          border:"none"
        }}
      >
        <Box sx = {{width: "100%"}} >
        <Grid container rowSpacing={2} columnSpacing={{ xs: 6}}>
            {filteredData.map((row) =>{
                return(
                    <Grid item xs={6}>
                    <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{ width: "100%", bgcolor: "background.body", }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1" sx={{ width: 120}}>
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagAOppyMeA7F5Dv98mR8mvCbPtCXO5bI_F-Q3aYg21g&s"
                          srcSet={row.img_url}
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent sx={{ pl:2, pr:2 }}  >
                    <Typography fontWeight="md"
                        textColor="success.plainColor"
                        mb={0.5}
                        fontSize="20px">Name: {row.name}</Typography>
                    <Typography fontWeight="md"
                        textColor="success.plainColor"
                        mb={0.5}
                        fontSize="20px">Roll Number: {row.roll_no}</Typography>
                    <Typography fontWeight="md"
                        textColor="success.plainColor"
                        mb={0.5}
                        fontSize="20px">Department: {row.dept}</Typography>
                    </CardContent>
                  </Card>
                  </Grid>
                );
            })}
        </Grid>
        </Box>
      </Sheet>
    </React.Fragment>
    </div>
   
  );
}
