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
import { useEffect, useState } from "react"
import { TransactionHistoryDataFields } from '../../callbacks/VendorTransactions';





/*const [nrows, setRows] = useState<people[]>(rows);
  const [searched, setSearched] = useState<string>("");
  

  const requestSearch = (searchedVal: string) => {
    const filteredRows = rows.filter((row) => {
      return row.id.toLowerCase().includes(searchedVal.toLowerCase()); 
    });
    setRows(filteredRows);
  };*/
  

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

function SearchBar({placeholder,data}:{placeholder:string, data:TransactionHistoryDataFields[]}){
  //console.log("inside search bar :", data);
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [order, setOrder] = React.useState<Order>('desc');
  const [filteredData, setFilteredData] =useState<TransactionHistoryDataFields[]>(data);
  // setFilteredData(data);
  //console.log("inside render table :", filteredData);
  const handleFilter =(event:any) =>{
    const searchWord = event.target.value;
    const newFilter = data.filter((value: TransactionHistoryDataFields) =>{
      return (value.date.toLowerCase().includes(searchWord.toLowerCase()) ||
              value.status.toLowerCase().includes(searchWord.toLowerCase())||
              value.transactionID.toLowerCase().includes(searchWord.toLowerCase()))
    })
    if(searchWord ==""){
      setFilteredData(data);
    }else{
      setFilteredData(newFilter);
    }
    
  }

    useEffect(() => {
      setFilteredData(data);
    }, [data]);
    return (
        <div className="search">
            <Box className="searchInput" sx={{
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
                }}>
                
                <FormControl sx={{ flex: 1 }} size="sm">
                    <FormLabel>Search for order</FormLabel>
                    <Input type="text" placeholder={placeholder} onChange={handleFilter}/>
                </FormControl>
                
            
            </Box>
            <div className="dataResults">
                  <div>
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
                                    selected.length > 0 && selected.length !== data.length
                                  }
                                  checked={selected.length === data.length}
                                  onChange={(event) => {
                                    setSelected(
                                      event.target.checked ? data.map((row) => row.id) : [],
                                    );
                                  }}
                                  color={
                                    selected.length > 0 || selected.length === data.length
                                      ? 'primary'
                                      : undefined
                                  }
                                  sx={{ verticalAlign: 'text-bottom' }}
                                />
                              </th> */}
                              <th style={{ width: 140, padding: 12 }}>
                                {/* <Link
                                  underline="none"
                                  color="primary"
                                  component="button"
                                  // onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}
                                  fontWeight="lg"
                                  // endDecorator={<i data-feather="arrow-down" />}
                                  sx={{
                                    '& svg': {
                                      transition: '0.2s',
                                      transform:
                                        order === 'desc' ? 'rotate(0deg)' : 'rotate(180deg)',
                                    },
                                  }}
                                > */}
                                  CustomerID
                                {/* </Link> */}
                              </th>
                              <th style={{ width: 120, padding: 12 }}>Date</th>
                              <th style={{ width: 120, padding: 12 }}>Status</th>
                              <th style={{ width: 220, padding: 12 }}>TransactionID</th>
                              <th style={{ width: 120, padding: 12 }}>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* {stableSort(filteredData, getComparator(order, 'id')).map((row) => ( */}
                            {filteredData.map((row:TransactionHistoryDataFields) => (
                              <tr key={row.receiverID}>
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
                                  <Typography fontWeight="md">{row.receiverID}</Typography>
                                </td>
                                <td>{row.date}</td>
                                <td>
                                  <Chip
                                    variant="soft"
                                    size="sm"
                                    startDecorator={
                                      {
                                        Paid: <i data-feather="check" />,
                                        InReview: <i data-feather="circle" />,
                                        Pending: <i data-feather="circle" />,
                                        Failed: <i data-feather="circle" />,
                                        Cleared: <i data-feather="circle" />,
                                      }[row.status]
                                    }
                                    color={
                                      {
                                        Paid: 'success',
                                        Failed: 'danger',
                                        Pending: 'warning',
                                        InReview: 'warning',
                                        Cleared: 'primary',
                                      }[row.status] as ColorPaletteProp
                                    }
                                  >
                                    {row.status}
                                  </Chip>
                                </td>
                                <td>
                                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                  
                                    <div>
                                      <Typography
                                        fontWeight="lg"
                                        level="body3"
                                        textColor="text.primary"
                                      >
                                        {row.transactionID}
                                      </Typography>
                                      
                                    </div>
                                  </Box>
                                </td>
                                <td>{row.amount}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </Sheet>
                        </div>
                
            </div>
            
        </div>
    )
}

export default SearchBar
