import {
  Typography
} from '@material-ui/core'
import Bottom from 'components/Bottom'
import Header from 'components/Header'
import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'


const Privacy: React.FC<RouteComponentProps> = ({ history }) => {
  // const [ Loading] = useLoading(false)
  // const [ Snackbar] = useSnackbar(false)
  return (
    <div className='term-page'>
      {/* <Loading color="secondary" /> */}
      <Header />
      <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        Kebijakan Privasi
      </Typography>
      <div className="container">
        {/* <Typography className="title">Kebijakan Privasi</Typography> */}
        <ul className="list-custom"><span><p>Kebijakan Privasi ini menggambarkan cara di mana “ Perusahaan ” (jika tidak disebut di sini sebagai “ kita ” atau “kami ” ) berurusan dengan informasi dan data yang Anda berikan kepada kami untuk memungkinkan kita untuk mengelola hubungan Anda dengan website kami . Kami akan memproses informasi pribadi yang diberikan kepada kami (baik melalui website kami (“Website ” ) , formulir aplikasi pelanggan atau cara lain ) atau dipegang oleh kami terkait dengan Anda dengan cara yang ditetapkan dalam Kebijakan Privasi ini . Dengan mengirimkan informasi kepada kami dan menggunakan Website Anda mengkonfirmasi persetujuan Anda untuk penggunaan informasi pribadi Anda sebagaimana diatur dalam Kebijakan Privasi ini . Jika Anda tidak setuju dengan syarat-syarat Kebijakan Privasi jangan menggunakan Website atau menyediakan kami dengan informasi pribadi Anda .</p> <p className="title_bold">Informasi yang Dikumpulkan dan Cara Apakah Digunakan</p> 
          <p> <span>Informasi dan data tentang Anda yang kami dapat mengumpulkan , menggunakan dan proses meliputi :</span>
            <br /> 1 . Informasi yang anda berikan kepada kami dengan mengisi formulir di website atau informasi lain yang Anda kirimkan kepada kami melalui website atau email ;
            <br />2 . Catatan korespondensi , baik melalui website , email , telepon atau sarana lainnya ;
            <br />3 . Tanggapan Anda untuk survei atau penelitian pelanggan yang kita jalankan ;
            <br />4 . Rincian transaksi Anda melakukan dengan kami , baik melalui website , telepon atau cara lain , dan
            <br />5 . Rincian kunjungan Anda ke situs web termasuk , namun tidak terbatas pada, data lalu lintas, data lokasi , weblog dan data komunikasi lainnya .
            <br />
            <br /><span>Kami dapat menggunakan informasi pribadi Anda dan data bersama-sama dengan informasi lain untuk tujuan :</span>
            <br />1 . Pengolahan taruhan Anda , termasuk pembayaran kartu dan on-line ;
            <br />2 . Menyiapkan , mengoperasikan dan mengelola akun Anda ;
            <br />3 . Mematuhi tugas hukum dan peraturan kami ;
            <br />4 . Membangun profil pribadi ;
            <br />5 . Melaksanakan penelitian pelanggan, survei dan analisis ;
            <br />6 . Memberikan Anda dengan informasi tentang penawaran promosi dan produk dan layanan kami , dimana anda setuju , dan
            <br />7 . Pemantauan transaksi untuk tujuan mencegah penipuan , taruhan yang tidak teratur , pencucian uang dan kecurangan .
          </p>
          <p className="title_bold">Penyimpanan informasi</p>
          <p>Kami akan mengambil semua langkah yang wajar untuk memastikan bahwa informasi Anda tetap aman dan dilindungi . Kami hanya akan mengungkapkan informasi pribadi kepada perusahaan lain dalam perusahaan asosiasi atau anak perusahaan dan mitra bisnis , penerus dalam judul untuk bisnis kami dan pemasok yang terlibat untuk memproses informasi tersebut atas nama kami . Jika Anda mengajukan permohonan untuk rekening dengan kami kemudian untuk membantu kita membuat keputusan kredit tentang Anda , untuk mencegah penipuan , untuk memeriksa usia dan identitas dan untuk mencegah pencucian uang , kita dapat menggunakan pihak ketiga termasuk instansi referensi kredit yang akan mencatat setiap pencarian pada Anda berkas . Kami juga dapat membuat pertanyaan dari , dan mengungkapkan rincian tentang bagaimana Anda melakukan account Anda untuk , lembaga tersebut , organisasi keamanan dan pihak ketiga lainnya yang relevan untuk penipuan dan pencegahan pencucian uang .</p>
          <p className="title_bold">Panggilan telepon</p>
          <p>Panggilan telepon ke dan dari kami Customer Contact Centre dicatat untuk pelatihan dan tujuan keamanan bersama dengan resolusi setiap pertanyaan yang timbul dari layanan yang Anda terima .</p>
          <p className="title_bold">Transfer berbasis internet</p>
          <p>Mengingat bahwa Internet adalah lingkungan global , menggunakan Internet untuk mengumpulkan dan memproses data pribadi harus melibatkan transmisi data secara internasional . Beberapa data prosesor terlibat untuk memproses data pribadi mungkin didasarkan luar Wilayah Ekonomi Eropa ( EEA ) . Oleh karena itu, dengan browsing situs web dan berkomunikasi secara elektronik dengan kami, Anda mengakui dan setuju untuk kita (atau pemasok atau sub - kontraktor ) pengolahan data pribadi Anda di luar EEA . Kami akan mengambil semua langkah yang wajar untuk memastikan bahwa informasi dan data diperlakukan secara aman dan sesuai dengan Kebijakan Privasi ini .</p>
          <p className="title_bold">Keterbukaan Informasi</p>
          <p>Kami berhak untuk berbagi informasi yang kami miliki tentang Anda yang meliputi data pribadi dan taruhan sejarah dengan regulator , badan olahraga dan badan-badan lainnya , termasuk polisi , untuk menyelidiki penipuan , pencucian uang atau masalah integritas olahraga dan mematuhi aturan-aturan hukum dan peraturan .
            <br />Dalam rangka memenuhi persyaratan hukum dan peraturan Perusahaan kita dan memiliki prosedur manajemen risiko intern dalam perusahaan kami, kami akan menyimpan informasi untuk jangka waktu tertentu ( umumnya tidak lebih dari enam tahun ) setelah penutupan account Anda . Semua informasi tersebut akan diselenggarakan sesuai dengan Kebijakan Privasi ini .
          </p>
          <p className="title_bold">Akses terhadap informasi</p>
          <p>Anda berhak untuk mengakses informasi yang dimiliki tentang Anda .</p>
          <p className="title_bold">Perubahan pada Pernyataan Privasi</p>
          <p>Setiap perubahan yang kami lakukan pada Kebijakan Privasi kami di masa depan akan diposting di halaman ini dan setiap perubahan tersebut akan menjadi efektif setelah posting dari Kebijakan Privasi direvisi . Jika kita membuat materi atau substansial perubahan terhadap Kebijakan Privasi ini kita akan menggunakan upaya yang wajar untuk memberitahu Anda melalui email , pemberitahuan di Website atau saluran komunikasi lain yang disepakati .</p>
        </span>
        </ul>
      </div>
      {/* <Snackbar /> */}
      <Bottom />
    </div>

  )
}
          
export default withRouter(Privacy)
  