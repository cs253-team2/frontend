/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import ModalClose from '@mui/joy/ModalClose';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Table from '@mui/joy/Table';
import Sheet from '@mui/joy/Sheet';
import Checkbox from '@mui/joy/Checkbox';
import IconButton, { iconButtonClasses } from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { TransactionsVendorPage } from '../../callbacks/Overview';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
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

const rows = [
  {
    id: 'INV-1234',
    date: 'Feb 3, 2023',
    status: 'Paid',
    transaction_id: '123123',
    amount: 1234
  },
  {
    id: 'INV-1233',
    date: 'Feb 3, 2023',
    status: 'Paid',
    transaction_id: '123123',
    amount: 1234
  },
  {
    id: 'INV-1232',
    date: 'Feb 3, 2023',
    status: 'Paid',
    transaction_id: '123123',
    amount: 1234
  },
  {
    id: 'INV-1231',
    date: 'Feb 3, 2023',
    status: 'Refunded',
    transaction_id: '123123',
    amount: 1234
  },
  {
    id: 'INV-1230',
    date: 'Feb 3, 2023',
    status: 'Paid',
    transaction_id: '123123',
    amount: 1234
  },

];

export default function OverviewTable({data}:{data:TransactionsVendorPage[]}) {
  const [tableData, setTableData] = React.useState<TransactionsVendorPage[]>(data);
  const [order, setOrder] = React.useState<Order>('desc');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=>{
    setTableData(data);
    console.log(data);
    console.log(tableData);
  }, [data]);
  // const renderFilters = () => (
  //   <React.Fragment>
  //     <FormControl size="sm">
  //       <FormLabel>Status</FormLabel>
  //       <Select
  //         placeholder="Filter by status"
  //         slotProps={{ button: { sx: { whiteSpace: 'nowrap' } } }}
  //       >
  //         <Option value="paid">Paid</Option>
  //         <Option value="pending">Pending</Option>
  //         <Option value="refunded">Refunded</Option>
  //         <Option value="cancelled">Cancelled</Option>
  //       </Select>
  //     </FormControl>

  //     <FormControl size="sm">
  //       <FormLabel>Category</FormLabel>
  //       <Select placeholder="All">
  //         <Option value="all">All</Option>
  //       </Select>
  //     </FormControl>

  //     <FormControl size="sm">
  //       <FormLabel>Customer</FormLabel>
  //       <Select placeholder="All">
  //         <Option value="all">All</Option>
  //       </Select>
  //     </FormControl>
  //   </React.Fragment>
  // );


  return (
    <React.Fragment>
      {/* <Sheet
        className="SearchAndFilters-mobile"
        sx={{
          display: {
            xs: 'flex',
            sm: 'none',
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
            <Sheet sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {renderFilters()}
              <Button color="primary" onClick={() => setOpen(false)}>
                Submit
              </Button>
            </Sheet>
          </ModalDialog>
        </Modal>
      </Sheet> */}
      {/* <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: 'sm',
          py: 2,
          display: {
            xs: 'none',
            sm: 'flex',
          },
          flexWrap: 'wrap',
          gap: 1.5,
          '& > *': {
            minWidth: {
              xs: '120px',
              md: '160px',
            },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Search</FormLabel>
          <Input placeholder="Search" startDecorator={<i data-feather="search" />} />
        </FormControl>

        {renderFilters()}
      </Box> */}
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          width: '100%',
          borderRadius: 'md',
          flex: 1,
          overflow: 'auto',
          minHeight: 0,
        }}
        
      >
        <Table
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            '--TableCell-headBackground': (theme) =>
              theme.vars.palette.background.level1,
            '--Table-headerUnderlineThickness': '1px',
            '--TableRow-hoverBackground': (theme) =>
              theme.vars.palette.background.level1,
          }}
        >
          <thead>
            <tr>
              {/* <th style={{ width: 48, textAlign: 'center', padding: 12 }}>
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length !== rows.length
                  }
                  checked={selected.length === rows.length}
                  onChange={(event) => {
                    setSelected(
                      event.target.checked ? rows.map((row) => row.id) : [],
                    );
                  }}
                  color={
                    selected.length > 0 || selected.length === rows.length
                      ? 'primary'
                      : undefined
                  }
                  sx={{ verticalAlign: 'text-bottom' }}
                />
              </th> */}
              <th style={{ width: 140, padding: 12 }}>
                <Link
                  underline="none"
                  color="primary"
                  component="button"
                  onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
                  fontWeight="lg"
                  endDecorator={<i data-feather="arrow-down" />}
                  sx={{
                    '& svg': {
                      transition: '0.2s',
                      transform:
                        order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                    },
                  }}
                >
                  Invoice
                </Link>
              </th>
              <th style={{ width: 120, padding: 12 }}>Date</th>
              <th style={{ width: 120, padding: 12 }}>Status</th>
              <th style={{ width: 220, padding: 12 }}>Transaction ID</th>
              <th style={{ width: 120, padding: 12 }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* {stableSort(rows, getComparator(order, 'id')).map((row) => ( */}
            {tableData.map((row: TransactionsVendorPage) => (
              <tr key={row.transactionID}>
                {/* <td style={{ textAlign: 'center' }}>
                  <Checkbox
                    checked={selected.includes(row.id)}
                    color={selected.includes(row.id) ? 'primary' : undefined}
                    onChange={(event) => {
                      setSelected((ids) =>
                        event.target.checked
                          ? ids.concat(row.id)
                          : ids.filter((itemId) => itemId !== row.id),
                      );
                    }}
                    slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
                    sx={{ verticalAlign: 'text-bottom' }}
                  />
                </td> */}
                <td>
                  <Typography fontWeight="md">{row.transactionID}</Typography>
                </td>
                <td>{row.time}</td>
                <td>
                  <Chip
                    variant="soft"
                    size="sm"
                    startDecorator={
                      {
                        0: <i data-feather="chevron-right" />,
                        1: <i data-feather="circle" />,
                        2: <i data-feather="circle" />,
                        3: <i data-feather="circle" />,
                        4: <i data-feather="circle" />,
                      }[row.transactionStatus]
                    }
                    color={
                      {
                        0: 'success', // green // paid
                        1: 'danger', // red // failed
                        2: 'warning', // yellow // pending
                        3: 'warning', // yellow // in review
                        4: 'primary', // blue // cleared
                      }[row.transactionStatus] as ColorPaletteProp
                    }
                  >
                    {row.transactionStatus === 0 ? "Paid": row.transactionStatus === 1 ? "Failed": row.transactionStatus === 2 ? "Pending": row.transactionStatus === 3 ? "InReview": row.transactionStatus === 4 ? "Cleared": "Unknown"}
                  </Chip>
                </td>
                <td>
                  {/* <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Avatar size="sm">{row.customer.initial}</Avatar>
                    <div>
                      <Typography
                        fontWeight="lg"
                        level="body3"
                        textColor="text.primary"
                      >
                        {row.customer.name}
                      </Typography>
                      <Typography level="body3">{row.customer.email}</Typography>
                    </div>
                  </Box> */}
                  {
                    row.transactionID
                  }
                </td>
                <td>{row.transactionAmount}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Box
        className="Pagination-mobile"
        sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}
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
      {/* <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 4,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
          display: {
            xs: 'none',
            md: 'flex',
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
        {['1', '2', '3', '…', '8', '9', '10'].map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) ? 'outlined' : 'plain'}
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
