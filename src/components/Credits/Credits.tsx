import {
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@material-ui/core'
import { AuthContext } from 'contexts/authContext'
import useLoading from 'hooks/loading'
import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { get } from 'services/http'
import './style.scss'

export interface ICredit {
  label: string;
  value: string;
}

const Credits: React.FC = () => {
  const { auth } = React.useContext(AuthContext)
  const [isLoading, withLoading] = useLoading(false)
  const [credits, setCredits] = useState<ICredit[] | []>([])
  useEffect(() => {
    const fetchCredits = async () => {
      const correctCreditProps = ({ title, data }) => ({
        label: title,
        value: data
      })
      const { data: creditResps, error }: { data: any[], error: string } = await withLoading(() => get({
        path: 'user/credit'
      }))
        .catch((err) => err)

      if (error) {
        // tslint:disable-next-line: no-console
        console.log(error)
      }
      setCredits(map(correctCreditProps, creditResps))

    }
    if(auth.username) {
      fetchCredits();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="table-custom">
      {isLoading ?
        <div className="loading">
          <CircularProgress
            variant="indeterminate"
            disableShrink={true}
            size={24}
            thickness={4}
          />
          <Typography color="primary" variant="overline" display="block" gutterBottom={true}>
            Your credits are being loaded ...
          </Typography>
        </div>
        : <TableContainer component={Paper}>
          <Table className="" size="small" aria-label="table-balance">
            <TableBody>
              {map(({ label: labelItem, value }: ICredit) =>
                <TableRow key={labelItem}>
                  <TableCell color="primary" component="th" scope="row">
                    {labelItem}
                  </TableCell>
                  <TableCell align="right">{value} IDR</TableCell>
                </TableRow>
              , credits)}
            </TableBody>
          </Table>
          </TableContainer>}
    </div>
  )
}

export default Credits