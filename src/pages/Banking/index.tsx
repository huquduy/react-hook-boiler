import {
  Typography
} from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './style.scss';


const Banking: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div className='term-page'>
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        TPerbankan
      </Typography>
      <div className="container">
        <Typography className="title">Syarat Dan Ketentuan</Typography>
        <div>
          HokiBet188, menyediakan berbagai pilihan dalam melakukan Deposit dan Penarikan agar Anda dapat melakukan transaksi dengan nyaman dan efektif. Pelajari metode pembayaran kami dibawah ini dan pilih cara transaksi yang cocok dengan Anda.
        </div>
        <div className="table-responsive">
          <table className="tbl-faq">
            <thead>
              <tr>
                <th rowSpan={2}>PILIHAN BANK</th>
                <th rowSpan={2}>STATUS</th>
                <th rowSpan={2}>TRANSAKSI</th>
                <th rowSpan={2}>METODE PERBANKAN</th>
                <th colSpan={2}>BATAS TRANSAKSI (IDR)</th>
              </tr>
              <tr>
                <th>JUMLAH MINIMAL</th>
                <th>JUMLAH MAKSIMAL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2}>BCA</td>
                <td rowSpan={2}>Online</td>
                <td>Deposit</td>
                <td>Transfer ATM/Internet Banking</td>
                <td rowSpan={2}>50.000</td>
                <td rowSpan={2}>99.000.000</td>
              </tr>
              <tr>
                <td>Withdraw</td>
                <td>Transfer BCA</td>
              </tr>
              <tr>
                <td rowSpan={2}>BNI</td>
                <td rowSpan={2}>Online</td>
                <td>Deposit</td>
                <td>Transfer ATM/Internet Banking</td>
                <td rowSpan={2}>50.000</td>
                <td rowSpan={2}>99.000.000</td>
              </tr>
              <tr>
                <td>Withdraw</td>
                <td>Transfer BNI</td>
              </tr>
              <tr>
                <td rowSpan={2}>MANDIRI</td>
                <td rowSpan={2}>Online</td>
                <td>Deposit</td>
                <td>Transfer ATM/Internet Banking</td>
                <td rowSpan={2}>50.000</td>
                <td rowSpan={2}>99.000.000</td>
              </tr>
              <tr>
                <td>Withdraw</td>
                <td>Transfer MANDIRI</td>
              </tr>
              <tr>
                <td rowSpan={2}>BRI</td>
                <td rowSpan={2}>Online</td>
                <td>Deposit</td>
                <td>Transfer ATM/Internet Banking</td>
                <td rowSpan={2}>50.000</td>
                <td rowSpan={2}>99.000.000</td>
              </tr>
              <tr>
                <td>Withdraw</td>
                <td>Transfer BANK</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-custom ">
          <p>INFORMASI PENTING:</p> 
        <li>
          <br />• Untuk deposit dan penarikan harus mengisi form yang terdapat didalam AKUN ANDA. <br />• Transaksi penarikan akan diproses paling lama 2 jam. <br />• Member hanya dapat melakukan penarikan maksimum 2 kali dalam waktu 24 jam. <br />• Member dapat melakukan deposit dan penarikan mengikuti jam online Bank masing-masing. <br />• Segala transaksi akan bergantung pada jadwal online/pengoperasian bank yang disebutkan diatas (informasi jadwal online bank dapat ditanyakan kepada customer service kami) <br />• Penarikan hanya akan di proses ke rekening yang Anda daftarkan pertama kali di Hokibet188 <br />• Tidak melayani transfer ke rekening pihak ke-tiga. <br />• Apabila nama dan no rekening tidak sesuai dengan yang didaftarkan, maka semua dana yang ada kami anggap sebagai donasi/sumbangan. <br />• Harap menginformasikan sebelumnya apabila terdapat penarikan dana dalam jumlah besar, dikarenakan akan memerlukan beberapa waktu untuk memproses transaksi tersebut. <br />• Kami tidak melayani adanya komplain dalam bentuk apapun setelah proses deposit / penarikan selesai lebih dari 24 jam. <br />• Untuk bank lokal lain selain bank yang tersedia di tabel di atas, silahkan hubungi customer service kami untuk informasi lebih lanjut. <br />• Untuk bantuan pelanggan silahkan menghubungi customer service kami (online 24 jam).
        </li>
        </ul>
      </div>
      {/* <Snackbar /> */}
      <Bottom />
    </div>

  )
}

export default withRouter(Banking)
