import {
  Typography
} from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './style.scss'

const Faq: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div className='faq'>
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        FAQ
    </Typography>
      <div className="container">
        <ul className="list-custom">
          <p><strong>Hal umum</strong></p>
          <li>1. Apakah mata uang yang diterima oleh perusahaan?
          <br />Mata uang yang diterima oleh perusahaan adalah:<br />
            - Indonesia Rupiah (IDR)</li>
          <li>2 . Bagaimana saya menyetor dana ke rekening taruhan saya?<br />
            Untuk kredit dana lebih cepat, disarankan untuk menggunakan Local-Pay - Deposit Bank Lokal.</li>
          <li>3. Bagaimana saya melakukan penarikan dana dari rekening taruhan saya?<br />
            Uang dapat ditarik dari rekening taruhan melalui Local Bank Transfer.</li>
          <li>4. Berapa lama waktu yang diperlukan untuk memproses penarikan?<br />
            Setelah kami menerima semua informasi yang diperlukan sesuai dengan Kebijakan Perusahaan&nbsp; dalam hal
            Penarikan, kami akan mengirimkan permintaan penarikan kepada tim keuangan kami untuk memulai proses tersebut
        </li>
        </ul>
        <div className="table-responsive">
          <table className="margin-left table table-bordered tbl-faq">
            <thead>
              <tr>
                <th>Method of withdrawal</th>
                <th>The Company Processing Time</th>
                <th>Funds Received&nbsp; by You (Estimated)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Banking</td>
                <td>--/-</td>
                <td>--/-</td>
              </tr>
              <tr>
                <td>Bank transfer</td>
                <td>1-5 min</td>
                <td>1-5 min</td>
              </tr>
              <tr>
                <td>Local Bank transfer</td>
                <td>1-5 min</td>
                <td>1-5 min</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="list-custom">
          <p>* Hari kerja mengecualikan Sabtu, Minggu, hari libur dan hari libur bank lokal Anda.</p>
          <li>5. Apakah saya akan dikenakan biaya untuk setiap transaksi deposit dan penarikan? <br /> Perusahaan tidak
            akan mengenakan biaya untuk setiap transaksi deposit dan penarikan yang dilakukan ke rekening Anda. </li>
          <li>6. Apa kegunaan dompet utama dan dompet produk? <br /> Saldo Dompet Utama menunjukan jumlah total dana
            yang anda bisa tarik atau transfer ke Dompet Produk untuk mendanai transaksi taruhan Anda. Deposit yang baru
            berhasil akan diperbarui ke saldo dompet utama tersebut. <br /> Saldo Anda akan ditampilkan di masing-masing
            dompet produk: <br /> -SportsBook atau taruhan Sportbooks <br /> -Casino: Untuk Dealer live di Perusahaan
            Live kasino dan Slot Games <br /> -Lotere: Untuk produk taruhan angka seperti Keno <br /> -Poker: untuk
            semua jenis permainan poker di produk Poker <br />- Anda dapat mentransfer dana dari dompet utama ke
            masing-masing dompet produk dengan memilih dompet yang diinginkan dari Transfer dari/ke daftar drop-down.
            <br /> ii). <strong className="upper">Akun saya</strong> <br /> 1. Bagaimana cara untuk membuka akun di
            perusahaan? <br />- Membuka akun di perusahaan sangat mudah dan seharusnya hanya akan memakan waktu beberapa
            menit saja. <br />- Pada halaman utama, klik 'Join Now(Bergabung Sekarang)' tombol di pojok kanan atas
            halaman. Kemudian Anda akan menemukan informasi berikut pada halaman pendaftaran: <br />- Nama pengguna -
            pengenal unik Anda ketika login ke akun Anda. <br />- Sandi - rahasia, tetapi harus terdiri dari karakter
            yang panjang antara 6 sampai 12 karakter dengan campuran huruf dan angka, yang harus terdiri dari huruf
            besar dan angka. Ingatlah untuk selalu menjaga password Anda pribadi dan rahasia. <br />- Alamat email –
            untuk mengingatkan Anda mengenai pemberitahuan penting, pengumuman produk atau promosi khusus untuk account
            Anda. <br />- Mata uang - mata uang yang ingin Anda gunakan untuk deposit dan taruhan. <br />- Terakhir,
            Anda akan diminta untuk mengisi beberapa informasi kontak pribadi lainnya, menerima syarat dan ketentuan dan
            mengkonfirmasi bahwa Anda sudah berusia lebih dari 18 tahun. <br /> 2. Apa yang akan terjadi jika saya lupa
            rincian login saya? <br />- Jika anda lupa username anda, cukup klik pada link 'Lupa username anda?' di
            bawah bagian login halaman utama. Masukkan alamat email Anda dan kode verifikasi yang ditampilkan dan Anda
            akan menerima email dari kami dengan isi nama pengguna Anda. Silahkan periksa folder junk/spam jika
            seandainya email kami tidak diakui/dikenali. <br />- Jika anda lupa password, cukup klik pada link 'Lupa
            password anda?' di bawah bagian login halaman utama dan ikuti petunjuk. <br />- (Untuk bagian login di
            halaman utama, harap ganti 'Lupa rincian login?' dengan 'Lupa username Anda' dan tambahkan 'Lupa password
            anda?' maka total ada dua.) <br /> 3. Apa yang terjadi jika tulisan 'Password Error' muncul? <br />- Periksa
            dan pastikan password sudah dimasukkan dengan benar. Password harus terdiri dari 8 sampai 10 karakter,
            dimana 2 atau lebih harus terdiri atasangka/nomor. <br />- Jika masalah ini berlanjut, silakan hubungi
            perwakilan kami di LIVE HELP atau mengemail kami di Kontak <br /> 4. Apakah informasi pribadi saya aman?
            <br />- Perusahaan tidak akan mengungkapkan informasi pribadi Anda kepada pihak ketiga <br />- Kami berhak
            untuk mengungkapkan dan mentransfer data pribadi Anda kepada penyedia Layanan-Layanan pembayaran kami dan
            lembaga-lembaga keuangan yang diperlukan untuk menyelesaikan pembayaran terhadap layanan yang diberikan
            melalui website kami. <br />- Semua informasi pribadi yang diberikan akan dikirimkan melalui Secure Socket
            (SSL 128 bit enkripsi standar) dan disimpan di sistem operasiaonal yang aman yang tidak dapat diakses oleh
            publik. Internal akses ke semua data terbatas dan akan diawasi secara ketat. <br />- Silakan lihat Kebijakan
            Privasi kami untuk informasi lebih lanjut. <br /> iii). <strong className="upper">Deposit</strong> <br /> 1.
            Bagaimana cara melakukan deposit melalui Local-Pay? <br />- Step 1: <br /> Hubungi pusat pelayanan informasi
            perusahaan Live Help atau Kontak pusat pelayanan informasi perusahaan kami untuk mendapatkan detail bank
            kami. <br />- Step 2: <br /> Pilih Setoran ke bank yang hendak Anda setor misalnya BCA,Mandiri,BNI,BRI yang
            telah disediakan. <br /> Silakan kutipkan Nama akun dan nomer rekening untuk pendepositan. <br />- Step 3:
            <br /> Masuk Jumlah yang ingin anda setor contoh 100 untuk nilai rp 100.000 <br />- Step4: <br /> Masukan
            Password anda lalu submit <br /> iv). <strong className="upper">Penarikan</strong> <br /> 1. Bagaimana cara
            melakukan penarikan dana dari akun taruhan Saya? <br />- Anda dapat melakukan penarikan dana dari account
            taruhan Anda menggunakan Transfer Bank lokal. Penarikan dana dari akun hanya dapat dilakukan dalam mata uang
            yang sama dengan mata uang ketika deposit dibuat. <br />- Untuk meminta agar penarikan dikirimkan ke
            rekening bank Anda, pilih 'Penarikan' di halaman penarikan. Masukkan jumlah yang Anda ingin tarik, masukkan
            Password anda dan klik Submit </li>
        </ul>
      </div>
      <Bottom />
    </div>

  )
}

export default withRouter(Faq)