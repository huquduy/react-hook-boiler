import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@material-ui/core'
import React from 'react'
import './style.scss'

export interface ICredit {
    title: string;
    data: string;
}

interface ITableBalance {
    label: string;
    arrayValue: ICredit[],
}

const CurrentBalance: React.FC<ITableBalance> = ({ label, arrayValue, ...rest }: ITableBalance) => {
    return (
        <div className="table-custom">
            <TableContainer component={Paper}>
                <Table className="" size="small" aria-label="table-balance">
                    <TableBody>
                        {arrayValue.map((item) =>
                            <TableRow key={item.title}>
                                <TableCell component="th" scope="row">
                                    {item.title}
                                </TableCell>
                                <TableCell align="right">{item.data} IDR</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default CurrentBalance