import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core'
import {
  Send as SendIcon,
} from '@material-ui/icons'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import TextInput from 'components/TextInput'
import { AuthContext } from 'contexts/authContext'
import useLoading from 'hooks/loading'
import useSnackbar from 'hooks/snackbar'
import moment from 'moment'
import { map } from 'ramda'
import React, { useEffect, useState } from 'react'
import { Field, withTypes } from 'react-final-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { get } from 'services/http'
import '../style.scss'

interface IForm {
  fromDate: string,
  toDate: string,

}
const { Form } = withTypes<IForm>()

const WithdrawReport: React.FC<RouteComponentProps> = ({ history }) => {
  const { auth } = React.useContext(AuthContext)
  const [initialValues] = useState<IForm>({
    fromDate: moment(new Date()).format('YYYY-MM-DD'),
    toDate: moment(new Date()).format('YYYY-MM-DD')
  })
  const [rows, setRows] = useState<[]>([])

  const [, withLoading, Loading] = useLoading(false)
  const [showSnackbar, Snackbar] = useSnackbar(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);

  const fetchTable = async ({ fromDate, toDate }) => {
    const params: any = { 'fromDate': fromDate, 'toDate': toDate, 'page': 1 }
    const { result: dataResults, error }: { result: [], error: string } = await withLoading(() => get({
      body: params,
      path: 'withdraws/history'
    })).catch((err) => err)
    if (error) {
      return showSnackbar(error)
    }
    setRows(dataResults)
  }
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    const fromDate = moment(new Date()).format('YYYY-MM-DD')
    const toDate = moment(new Date()).format('YYYY-MM-DD')
    if(auth.username){
      fetchTable({ fromDate, toDate })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='deposit-page'>
      <Loading color="secondary" />
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        WITHDRAWN REPORT
      </Typography>
      <Form
        initialValues={initialValues}
        onSubmit={fetchTable}
      >
        {({ handleSubmit }) =>
          <form onSubmit={handleSubmit}>
            <div className='container'>
              <div>
                <Field
                  name="fromDate"
                  label="From Date :"
                  type="date"
                  fullWidth={true}
                  component={TextInput}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div>
                <Field
                  name="toDate"
                  label="To Date :"
                  type="date"
                  fullWidth={true}
                  component={TextInput}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div>
                <Button variant="outlined" color="primary" type="submit" startIcon={<SendIcon />}>
                  Submit
                </Button>
              </div>
            </div>
          </form>}
      </Form>
      <div className="table-custom">
        <TableContainer component={Paper}>
          <Table
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>AMOUNT</TableCell>
                <TableCell>CURRENCY</TableCell>
                <TableCell>DATE TIME</TableCell>
                <TableCell>STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {map(({ id, amount, currency, createdAt, status }) =>
                <TableRow key={id}>
                  <TableCell align="center" color="primary" component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="center">{amount} </TableCell>
                  <TableCell align="center">{currency} </TableCell>
                  <TableCell align="center">{createdAt} </TableCell>
                  <TableCell align="center">{status} </TableCell>
                </TableRow>
              , rows)}
            </TableBody>
          </Table>
        </TableContainer>
        {rows.length > 0 ? <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        /> : null}
      </div>
      <Snackbar />
      <Bottom />
    </div>

  )
}

export default withRouter(WithdrawReport)
