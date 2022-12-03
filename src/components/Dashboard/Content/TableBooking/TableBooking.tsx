<<<<<<< HEAD
import {styled} from "@mui/system";
import TableBookingItem from './TableBookingItem';
import Stack from '@mui/material/Stack';

const BlockTableBooking = styled('div')({
    boxSizing: "border-box",
    width: "25%",
    borderRadius:"6px",
    border: "0.5px solid #153453",
    background: "#081A2C",
    margin: "17px 0px 0px 18px",
    padding: "30px 38px",
    "@media (max-width:1900px)":{
    margin: "15px 0px 0px 14px",
    }
=======
import React from "react";
import { styled } from "@mui/system";

const BlockTableBooking = styled("div")({
  width: "25%",
  borderRadius: "6px",
  border: "0.5px solid #153453",
  background: "#081A2C",
  margin: "17px 0px 0px 18px",
  "@media (max-width:1900px)": {
    margin: "15px 0px 0px 14px",
  },
>>>>>>> c351ddb6137d6e0ed9d7a9fd5f2d86bcaae317d6
});

const BlockTableBookingTitle = styled('h2')({
    fontWeight: 500,
    fontSize: 18,
    color: "#FFFFFF", 
    marginBottom: "33px",
    marginTop: "0px"
})


const TableBooking = () => {
<<<<<<< HEAD
    return (
        <BlockTableBooking>
            <BlockTableBookingTitle>Online Table Booking</BlockTableBookingTitle>
            <Stack direction="row" rowGap={2} justifyContent="space-between" flexWrap="wrap">
                <TableBookingItem value={12} title="Total Booking" />
                <TableBookingItem value={27} title="People" />
                <TableBookingItem value={2} title="Special Request" />
            </Stack>
        </BlockTableBooking>
    );
=======
  return <BlockTableBooking></BlockTableBooking>;
>>>>>>> c351ddb6137d6e0ed9d7a9fd5f2d86bcaae317d6
};

export default TableBooking;
