import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

interface ICommonTableProps {
  header: Array<string>
  content: Array<any>
  pagination?: boolean
  sort?: boolean
  search?: boolean
  'aria-label'?: string
}

export default function BasicTable({ header, content, ...props }: ICommonTableProps): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((headerItem, headerIndex) => {
              return <TableCell key={headerIndex}>{headerItem}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((contentData, contentIndex) => (
            <TableRow key={contentIndex} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {header.map((headerName, headeri) => {
                return (
                  <TableCell
                    key={contentIndex.toString() + headeri.toString()}
                    component="th"
                    scope="row"
                  >
                    {contentData[headerName]}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
