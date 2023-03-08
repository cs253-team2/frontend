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

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function VendorTable2() {
  const [order, setOrder] = React.useState<Order>("desc");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [open, setOpen] = React.useState(false);

  const renderFilters = () => (
    <React.Fragment>
      <FormControl size="sm">
        <FormLabel>Status</FormLabel>
        <Select
          placeholder="Filter by status"
          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
        >
          <Option value="paid">Paid</Option>
          <Option value="pending">Pending</Option>
          <Option value="refunded">Refunded</Option>
          <Option value="cancelled">Cancelled</Option>
        </Select>
      </FormControl>

      <FormControl size="sm">
        <FormLabel>Category</FormLabel>
        <Select placeholder="All">
          <Option value="all">All</Option>
        </Select>
      </FormControl>

      <FormControl size="sm">
        <FormLabel>Customer</FormLabel>
        <Select placeholder="All">
          <Option value="all">All</Option>
        </Select>
      </FormControl>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
          my: 1,
          gap: 1,
        }}
      >
        <Input
          size="sm"
          placeholder="Search"
          startDecorator={<i data-feather="search" />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setOpen(true)}
        >
          <i data-feather="filter" />
        </IconButton>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog aria-labelledby="filter-modal" layout="fullscreen">
            <ModalClose />
            <Typography id="filter-modal" level="h2">
              Filters
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Sheet sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {renderFilters()}
              <Button color="primary" onClick={() => setOpen(false)}>
                Submit
              </Button>
            </Sheet>
          </ModalDialog>
        </Modal>
      </Sheet>
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
        {/* <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground": (theme) =>
              theme.vars.palette.background.level1,
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground": (theme) =>
              theme.vars.palette.background.level1,
            overflow: "auto",
            overflowY: "scroll",
            [`& .${tableCellClasses.root}`]: {
              borderBottom: "none",
            },
            borderBottom:'none'
          }}
        > */}
          {/* <thead>
            <tr>
              <th style={{ width: 48, textAlign: "center", padding: 12 }}>
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length !== rows.length
                  }
                  checked={selected.length === rows.length}
                  onChange={(event) => {
                    setSelected(
                      event.target.checked ? rows.map((row) => row.id) : []
                    );
                  }}
                  color={
                    selected.length > 0 || selected.length === rows.length
                      ? "primary"
                      : undefined
                  }
                  sx={{ verticalAlign: "text-bottom" }}
                />
              </th>
              <th style={{ width: 100, padding: 12 }}>
                <Link
                  underline="none"
                  color="primary"
                  component="button"
                  onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
                  fontWeight="lg"
                  endDecorator={<i data-feather="arrow-down" />}
                  sx={{
                    "& svg": {
                      transition: "0.2s",
                      transform:
                        order === "desc" ? "rotate(0deg)" : "rotate(180deg)",
                    },
                  }}
                >
                  VendorID
                </Link>
              </th>
              <th style={{ width: 200, padding: 12 }}>Vendor name</th>
              <th style={{ width: 160, padding: 12 }}>Description</th>
              <th style={{ width: 120, padding: 12 }}>Validation date </th>
              <th style={{ width: 120, padding: 12 }}>Subscription</th>
              <th style={{ width: 160, padding: 12 }}> </th>
            </tr>
          </thead> */}
          {/* <tbody style={{ overflow: "hidden", overflowY: "scroll" }}>
            {rows.map((row) => (
              <tr
                key={row.id}
                style={{ overflow: "hidden", overflowY: "scroll", }
            } */}
              {/* > */}
                {/* <td style={{ textAlign: "center" }}>
                  <Checkbox
                    checked={selected.includes(row.id)}
                    color={selected.includes(row.id) ? "primary" : undefined}
                    onChange={(event) => {
                      setSelected((ids) =>
                        event.target.checked
                          ? ids.concat(row.id)
                          : ids.filter((itemId) => itemId !== row.id)
                      );
                    }}
                    slotProps={{ checkbox: { sx: { textAlign: "left" } } }}
                    sx={{ verticalAlign: "text-bottom" }}
                  />
                </td> */}
                {/* <td>
                  <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{ width: 450, bgcolor: "background.body" }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="1" sx={{ width: 180 }}>
                        <img
                          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                          loading="lazy"
                          alt=""
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent sx={{ px: 1.5 }}>
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
                </td> */}

                {/* <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar size="sm">{row.customer.initial}</Avatar>
                    <div>
                      <Typography
                        fontWeight="lg"
                        level="body3"
                        textColor="text.primary"
                      >
                        {row.customer.name}
                      </Typography>
                      <Typography level="body3">
                        {row.customer.email}
                      </Typography>
                    </div>
                  </Box>
                </td> */}
                {/* <td>{row.description}</td> */}
                {/* <td>
                  <Typography textAlign="left">{row.date}</Typography>
                </td> */}
                {/* <td>{row.customer.name}</td> */}
                {/* <td>
                  <Chip
                    variant="soft"
                    size="sm"
                    startDecorator={
                      {
                        Paid: <i data-feather="check" />,
                        Refunded: <i data-feather="corner-up-left" />,
                        Cancelled: <i data-feather="x" />,
                      }[row.status]
                    }
                    color={
                      {
                        Paid: 'success',
                        Refunded: 'neutral',
                        Cancelled: 'danger',
                      }[row.status] as ColorPaletteProp
                    }
                  >
                    {row.status}
                  </Chip>
                </td> */}

                {/* <td>{row.subscription}</td> */}
                {/* <td>
                  <Link fontWeight="lg" component="button" color="neutral">
                    Delete vendor
                  </Link>
                  <Link
                    fontWeight="lg"
                    component="button"
                    color="danger"
                    sx={{ ml: 2 }}
                  >
                    Delete Vendor
                  </Link>
                </td> */}
              {/* </tr> */}
            {/* ))} */}
          {/* </tbody> */}
        {/* </Table> */}

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
      {/* <Box
        className="Pagination-mobile"
        sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
      >
        <IconButton
          aria-label="previous page"
          variant="outlined"
          color="neutral"
          size="sm"
        >
          <i data-feather="arrow-left" />
        </IconButton>
        <Typography level="body2" mx="auto">
          Page 1 of 10
        </Typography>
        <IconButton
          aria-label="next page"
          variant="outlined"
          color="neutral"
          size="sm"
        >
          <i data-feather="arrow-right" />
        </IconButton>
      </Box>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 4,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="plain"
          color="neutral"
          startDecorator={<i data-feather="arrow-left" />}
        >
          Previous
        </Button>

        <Box sx={{ flex: 1 }} />
        {["1", "2", "3", "…", "8", "9", "10"].map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) ? "outlined" : "plain"}
            color="neutral"
          >
            {page}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />

        <Button
          size="sm"
          variant="plain"
          color="neutral"
          endDecorator={<i data-feather="arrow-right" />}
        >
          Next
        </Button>
      </Box> */}
    </React.Fragment>
  );
}
