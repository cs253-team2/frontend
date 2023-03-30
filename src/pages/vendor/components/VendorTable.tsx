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
import { border } from "@chakra-ui/react";
import { flexbox } from '@mui/system';
import { useEffect } from "react";

import {Customer, getCustomerData} from "../../callbacks/CustomerData";



type Order = "asc" | "desc";

export default function VendorTable() {
  const [filteredData, setFilteredData] = React.useState<Customer[]>([]);
  const [customersData, setCustomersData] = React.useState<Customer[]>([]);
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const filteredRows = customersData.filter((row) => {
      return (row.user_id.toLowerCase().includes(value.toLowerCase())||
      row.email.toLowerCase().includes(value.toLowerCase())||
      row.username.toLowerCase().includes(value.toLowerCase())||
      row.phone_number.toLowerCase().includes(value.toLowerCase()));
    });
    if(value === ""){
      setFilteredData(customersData);
    }else{
      setFilteredData(filteredRows);
    }
  };


  const setCustomerData = (data: Customer[]) => {
    //console.log("inside setter function");
    setCustomersData(data);
    setFilteredData(data);
  };

  useEffect (() => {
    // //console.log("use effect called in vendor table");
    getCustomerData().then((data) => {
      //console.log("data received in vendor table");
      //console.log(data);
      setCustomerData(data);
      //console.log("Vendors Data: ",vendorsData);
    });
  }, []);

  return (
    <React.Fragment>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: {
            xs: "none",
            sm: "flex",
          },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: {
              xs: "120px",
              md: "160px",
            },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <Input
            placeholder="Search for vendor"
            startDecorator={<i data-feather="search" />}
            onChange={handleFilter}
          />
        </FormControl>
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          width: "100%",
          height: "73vh",
          borderRadius: "md",
          flex: 1,  
          overflow: "auto",
          overflowY: "scroll",
          minHeight: 0,
          border:"none"
        }}
      >
        <Box sx = {{width: "100%"}} >

            {filteredData.map((row) =>{
                return(
                    <div style={{display:'inline-block', margin:'1%', width:'45%', minWidth:'415px'}}>
                    <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{ width: "100%", bgcolor: "background.body", }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1" sx={{ width: 185 }}>
                        <img 
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagAOppyMeA7F5Dv98mR8mvCbPtCXO5bI_F-Q3aYg21g&s"
                          srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagAOppyMeA7F5Dv98mR8mvCbPtCXO5bI_F-Q3aYg21g&s"
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent sx={{ pl:2, pr:2 }}  >
                      <Typography
                        fontWeight="md"
                        textColor="success.plainColor"
                        mb={0.5}
                        fontSize="20px"
                        // mt="-5px"
                        
                      >
                        {row.username}
                      </Typography>
                      <Typography level="body1">{row.username}</Typography>
                      <Typography level="body3">
                        {row.email}
                      </Typography>
                      <Typography level="body1" mt="2px">
                        {row.user_id}
                      </Typography>
                      <Box sx={{ display: "flex", pt: 1 }}>
                        <div>
                          {/* <Typography level="body3">Vendor since:</Typography>
                          <Typography fontSize="16px" fontWeight="lg">
                            {row.last_login}
                          </Typography> */}
                        </div>
                        {/* <Button
                          variant="solid"
                          size="sm"
                          color="success"
                          aria-label="Explore Bahamas Islands"
                          sx={{ ml: "auto", fontWeight: 600 }}

                          // onClick={()=>handleClearDues(row.user_id)}
                        >
                          Clear Dues
                        </Button> */}
                      </Box>
                    </CardContent>
                  </Card>
                  </div>
                );
            })}
        </Box>
      </Sheet>
    </React.Fragment>
  );
}
