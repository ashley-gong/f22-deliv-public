import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EntryModal from "./EntryModal";
import { getCategory } from "../utils/categories";
import { useState } from "react";
import { sorting } from "../utils/sort";

// Table component that displays entries on home screen

export default function EntryTable({ entries }) {
  // Sort handler
  const [sort, setSort] = useState("null");

  return (
    <div>
      <FormControl sx={{ "margin-bottom": 10, width: 230 }}>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          label="Sort"
          onChange={(event) => {
            setSort(event.target.value);
            console.log(sort);
            // handleSort(event.target.value);
          }}
        >
          {sorting.map((sort) => (
            <MenuItem value={sort.id}>{sort.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Link</TableCell>
              <TableCell align="right">User</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Open</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries
              .sort(
                { sort } === "null"
                  ? null
                  : (a, b) => (a[sort] > b[sort] ? 1 : -1)
              )
              .map((entry) => (
                <TableRow
                  key={entry.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {entry.name}
                  </TableCell>
                  <TableCell align="right">
                    <Link href={entry.link}>{entry.link}</Link>
                  </TableCell>
                  <TableCell align="right">{entry.user}</TableCell>
                  <TableCell align="right">
                    {getCategory(entry.category).name}
                  </TableCell>
                  <TableCell
                    sx={{ "padding-top": 0, "padding-bottom": 0 }}
                    align="right"
                  >
                    <EntryModal entry={entry} type="edit" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
