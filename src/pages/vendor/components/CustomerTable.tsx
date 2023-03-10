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

const rows = [
  {
    id: "INV-1234",
    date: "Feb 3, 2023",
    status: "Paid",
    customer: {
      initial: "O",
      name: "Olivia Ryhe",
      email: "olivia@email.com",
    },
    subscription: "Yearly",
    description: "Hall 12 Canteen",
  },
  {
    id: "INV-1233",
    date: "Feb 3, 2023",
    status: "Paid",
    customer: {
      initial: "S",
      name: "Steve Hampton",
      email: "steve.hamp@email.com",
    },
    subscription: "Monthly",
    description: "Hall 12 Stationary Shop",
  },
  {
    id: "INV-1232",
    date: "Feb 3, 2023",
    status: "Paid",
    customer: {
      initial: "C",
      name: "Ciaran Murray",
      email: "ciaran.murray@email.com",
    },
    subscription: "Yearly",
    description: "Hall 8 Canteen",
  },
  {
    id: "INV-1231",
    date: "Feb 3, 2023",
    status: "Refunded",
    customer: {
      initial: "M",
      name: "Maria Macdonald",
      email: "maria.mc@email.com",
    },
    subscription: "Yearly",
    description: "CSE Canteen",
  },
  {
    id: "INV-1230",
    date: "Feb 3, 2023",
    status: "Paid",
    customer: {
      initial: "C",
      name: "Charles Fulton",
      email: "fulton@email.com",
    },
    subscription: "Yearly",
    description: "Campus D-shop",
  },
  {
    id: "INV-1229",
    date: "Feb 3, 2023",
    status: "Cancelled",
    customer: {
      initial: "J",
      name: "Jay Hooper",
      email: "hooper@email.com",
    },
    subscription: "Yearly",
    description: "Hall 5 Barber shop",
  },
  {
    id: "INV-1228",
    date: "Feb 3, 2023",
    status: "Cancelled",
    customer: {
      initial: "K",
      name: "Krystal Stevens",
      email: "k.stevens@email.com",
    },
    subscription: "Monthly",
    description: "Hall 9 Canteen",
  },
  {
    id: "INV-1227",
    date: "Feb 3, 2023",
    status: "Paid",
    customer: {
      initial: "S",
      name: "Sachin Flynn",
      email: "s.flyn@email.com",
    },
    subscription: "Monthly",
    description: "Hall 2 Canteen",
  },
  {
    id: "INV-1226",
    date: "Feb 3, 2023",
    status: "Cancelled",
    customer: {
      initial: "B",
      name: "Bradley Rosales",
      email: "brad123@email.com",
    },
    subscription: "Monthly",
    description: "Campus E-shop",
  },
];

type Order = "asc" | "desc";

export default function VendorTable2() {

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
          {/* <FormLabel>Search for vendor</FormLabel> */}
          <Input
            placeholder="Search for vendor"
            startDecorator={<i data-feather="search" />}
          />
        </FormControl>

        {/* {renderFilters()} */}
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          width: "100%",
          height: "75vh",
          borderRadius: "md",
          flex: 1,  
          overflow: "auto",
          overflowY: "scroll",
          minHeight: 0,
          border:"none"
        }}
      >
        <Box >
            {rows.map((row) =>{
                return(
                    <div style={{display:'inline-block', margin:'15px'}}>
                    <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{ width: 490, bgcolor: "background.body", }}
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
                    <CardContent sx={{ pl: 2, pr:1 }}>
                      <Typography
                        fontWeight="md"
                        textColor="success.plainColor"
                        mb={0.5}
                        fontSize="20px"
                        mt="-5px"
                      >
                        {row.description}
                      </Typography>
                      <Typography level="body1">{row.customer.name}</Typography>
                      <Typography level="body3">
                        {row.customer.email}
                      </Typography>
                      <Typography level="body1" mt="2px">
                        {row.id}
                      </Typography>
                      <Box sx={{ display: "flex", pt: 1 }}>
                        <div>
                          <Typography level="body3">Vendor since:</Typography>
                          <Typography fontSize="16px" fontWeight="lg">
                            {row.date}
                          </Typography>
                        </div>
                        <Button
                          variant="solid"
                          size="sm"
                          color="danger"
                          aria-label="Explore Bahamas Islands"
                          sx={{ ml: "auto", fontWeight: 600 }}
                        >
                          Remove
                        </Button>
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
