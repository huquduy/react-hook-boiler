import {
    Typography
  } from '@material-ui/core'
  import Bottom from 'components/Bottom'
  import Header from 'components/Header'
  import React  from 'react'
  import { RouteComponentProps, withRouter } from 'react-router-dom'
  import './style.scss'

  
  const TermCondition: React.FC<RouteComponentProps> = ({ history }) => {
    // const [ Loading] = useLoading(false)
    // const [ Snackbar] = useSnackbar(false)
    return (
      <div className='term-page'>
        {/* <Loading color="secondary" /> */}
        <Header />
        <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        Syarat Dan Ketentuan
          </Typography>
          <div className="container">
          {/* <Typography className="title">Syarat Dan Ketentuan</Typography> */}
          <ul className="list-custom">
	<li> Dengan menggunakan dan / atau mengunjungi setiap bagian (termasuk sub - domain ) dari website kami perusahaan atau situs-situs lain atau aplikasi yang kita sendiri (“Website”) dan / atau mendaftar di situs web ini, Anda setuju untuk terikat dengan 
			
		<br />( i ) Syarat dan Ketentuan
				
		<br />( ii ) Kebijakan Privasi kami , dan 
					
		<br />( iii ) Peraturan berlaku untuk taruhan atau produk game dan dianggap telah diterima dan dipahami semua Ketentuan . 
					
	</li>
	<li> Silakan baca Syarat hati-hati dan jika Anda tidak menerima Persyaratan , jangan menggunakan Website. Ketentuan ini juga berlaku untuk semua telepon taruhan dan taruhan atau game melalui perangkat mobile termasuk aplikasi download ke perangkat mobile. </li>
	<li> Di mana Anda bermain game apa saja , atau menempatkan taruhan atau taruhan , menggunakan situs web ini, Anda menerima dan setuju untuk terikat oleh, Aturan yang berlaku untuk produk yang berlaku tersedia di Situs Web dari waktu ke waktu . </li>
	<li> Perusahaan kami mengikuti pedoman yang ketat dan aman transaksi dan hanya akan mengkreditkan saldo account Anda setelah konfirmasi deposit Anda . Harap simpan tanda terima bank atau transaksi referensi ID seperti yang kita memintanya sebagai bukti transfer . </li>
	<li> Untuk tujuan keamanan , kami berhak untuk menolak penarikan apabila ada perbedaan dalam informasi yang diberikan selama proses verifikasi kami . </li>
	<li> Perusahaan kami berhak mutlak untuk menahan penarikan jika account sedang diselidiki untuk setiap kegiatan penipuan . </li>
	<li> Perusahaan kami mematuhi aturan dan peraturan yang ditetapkan oleh situs mitra kami . Dalam hal terjadi perselisihan atau sengketa , kami akan meneruskan keluhan anggota kami ke tim dukungan masing-masing dan memberikan dukungan penuh kami untuk mengatasi situasi dan menjaga anggota kami diberitahu tentang hasil keputusan . Setelah due diligence , perusahaan kami berhak untuk mengikuti keputusan akhir mitra kami ' . </li>
	<li> Harap diperhatikan bahwa perusahaan kami dan mitra kami berhak untuk membatalkan , menolak dan menolak setiap taruhan ditempatkan oleh pelanggan yang diduga tidak normal / tidak teratur taruhan atau penggunaan kecerdasan buatan ( bot ) . </li>
</ul>
          </div>
        {/* <Snackbar /> */}
        <Bottom />
      </div>
  
    )
  }
  
  export default withRouter(TermCondition)
  