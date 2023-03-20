
import React, {useEffect, useState} from 'react'
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
import {PendingDue} from "../../callbacks/VendorDues";

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
function SearchBar({placeholder,rows}:{placeholder:string, rows:PendingDue[]}){
  //console.log("rows: ", rows);
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [order, setOrder] = React.useState<Order>('desc');
  const [filteredData, setFilteredData] =useState<PendingDue[]>(rows);
  const handleFilter =(event:any) =>{
    const searchWord = event.target.value;
    const newFilter = rows.filter((value) =>{
      return (value.sender_name.toLowerCase().includes(searchWord.toLowerCase()) || 
              value.sender_id.toLowerCase().includes(searchWord.toLowerCase()) ||
              value.sender_email.toLowerCase().includes(searchWord.toLowerCase()) ||
              value.dues.toString().toLowerCase().includes(searchWord.toLowerCase()));
    })
    if(searchWord ==""){
      setFilteredData(rows);
    }else{
      setFilteredData(newFilter);
    }
    
  }

    useEffect(()=>{
        setFilteredData(rows)
    }, [rows])
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
                                <tr style={{alignItems:'center'}}>
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
                                    CustomerID
                                    </Link>
                                </th>
                                <th style={{ width: 120, padding: 12 }}>Customer Name</th>
                                {/* <th style={{ width: 120, padding: 12 }}>Status</th> */}
                                <th style={{ width: 220, padding: 12 }}>Customer Email</th>

                                <th style={{ width: 120, padding: 12 }}>Dues Amount</th>
                                </tr>
                            </thead>
                          <tbody>
                            {filteredData.map((row:PendingDue) => (
                            <tr key={row.sender_id} style={{alignItems:'center'}}>
                                <td>
                                    <Typography fontWeight="md">{row.sender_id}</Typography>
                                </td>
                                <td>{row.sender_name}</td>
                                <td>{row.sender_email}</td>
                                <td>
                                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    {/* <Avatar size="sm">{row.vendor.initial}</Avatar> */}
                                    {/* <Modal open={open} onClose={() => setOpen(false)}>
                                        <ModalDialog variant="plain">
                                        <ModalClose />
                                        <Typography>{row.vendor.initial}</Typography>
                                        <Typography>{row.vendor.name}</Typography>
                                        <Typography>{row.vendor.email}</Typography>
                                        </ModalDialog>
                                    </Modal> */}
                                    <div>
                                        <Typography
                                        fontWeight="lg"
                                        level="body3"
                                        textColor="text.primary"
                                        >
                                        {row.dues}
                                        </Typography>
                                        {/* <Typography level="body3">{row.vendor.email}</Typography> */}
                                    </div>
                                    </Box>
                                </td>
                        
                    
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