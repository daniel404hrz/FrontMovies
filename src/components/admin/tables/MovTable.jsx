import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import styles from "./MovTable.module.css"
export default function MovTable() {
  return (
    <Table className={styles.table_box}  aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>COMPRAS</TableColumn>
        <TableColumn>RENTAS</TableColumn>
        <TableColumn>ACTIVE</TableColumn>
        <TableColumn>PRECIO</TableColumn>
        <TableColumn>STOCK</TableColumn>
        <TableColumn>EDIT</TableColumn>
        
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>CEO</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>Technical Lead</TableCell>
          <TableCell>Paused</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
          <TableCell>Active</TableCell>
        </TableRow>
        
        
        
        
      </TableBody>
    </Table>
  );
}