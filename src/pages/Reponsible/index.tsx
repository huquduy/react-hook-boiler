import {
    Typography
  } from '@material-ui/core'
  import Bottom from 'components/Bottom'
  import Header from 'components/Header'
  import React  from 'react'
  import { RouteComponentProps, withRouter } from 'react-router-dom'

  
  const Reponsible: React.FC<RouteComponentProps> = ({ history }) => {
    // const [ Loading] = useLoading(false)
    // const [ Snackbar] = useSnackbar(false)
    return (
      <div className='term-page'>
        {/* <Loading color="secondary" /> */}
        <Header />
        <Typography color="primary" className="title" variant="h5" align="center" component="h2" gutterBottom={true}>
        PERJUDIAN YANG BERTANGGUNG JAWAB
          </Typography>
          <div className="container">
          {/* <Typography className="title">PERJUDIAN YANG BERTANGGUNG JAWAB</Typography> */}
          <ul className="list-custom"><span><p>Sebagai penyedia game online , kami telah membawa gairah untuk bermain game dan taruhan ke internet . Kami mendukung generasi gamer online - dengan penawaran menarik dan menantang . Kami juga bertanggung jawab untuk produk kami line-up .</p> <p>Kami ingin menyediakan platform gaming paling aman dan paling inovatif di dunia untuk orang dewasa . Dengan menggunakan produk yang adil dan bertanggung jawab line-up , setiap pengguna bisa bermain dalam berarti keuangan mereka dan menerima layanan terbaik . Kami berkomitmen untuk integritas , keadilan dan kehandalan . Oleh karena itu jelas bahwa website harus melakukan yang terbaik untuk menghindari dan mengurangi masalah yang dapat timbul dari partisipasi dalam permainan kesempatan , terutama melalui bermain yang berlebihan . Pada saat yang sama , penting untuk menghormati hak-hak orang-orang yang mengambil bagian dalam permainan kesempatan sampai batas yang wajar sebagai sarana hiburan .</p> <p>Gaming bertanggung jawab di website ini didasarkan pada tiga pilar :</p> <p>1 . Keamanan pemain <br /> 2 . Keamanan permainan <br /> 3 . Perlindungan terhadap kecanduan game .</p> <p>Bersama dengan lembaga penelitian , asosiasi dan lembaga terapi , kami bekerja pada langkah-langkah untuk perlindungan player dan bekerja menuju , kerangka bertanggung jawab aman dan dapat diandalkan untuk game online di Asia dan Eropa .</p> <p className="title_bold">1. Keamanan pemain</p> <p>Kami bertanggung jawab atas keamanan pemain kami . Kami termasuk anak-anak dari produk line-up dan perlindungan privasi, yang melibatkan hubungan yang bertanggung jawab dengan data dan proses pembayaran . Keadilan dan sifat acak dari produk yang ditawarkan dipantau secara ketat oleh otoritas independen. Komunikasi pemasaran juga diarahkan perlindungan pemain : a game adil line-up hanya menjanjikan apa yang dapat memberikan.</p> <p>Kami termasuk anak di bawah umur ( orang di bawah usia 18 tahun ) dari partisipasi dalam game line- up . Oleh karena itu konfirmasi Wajib telah mencapai usia mayoritas dan tanggal lahir merupakan persyaratan untuk pendaftaran . Sandi Penarikan juga diperlukan ketika pelanggan melakukan penarikan pertama mereka . Situs mengambil tanggung jawabnya untuk mencegah anak-anak dari mengambil bagian dalam game line- up serius . Dalam rangka untuk menawarkan perlindungan terbaik - mungkin anak di bawah umur , kami juga mengandalkan dukungan dari orang tua dan pengambil . Harap informasi akses Anda aman setiap saat ( ID pengguna , kata sandi dan pertanyaan dan jawaban kombinasi ) .</p> <p>Selain itu, kami akan merekomendasikan bahwa Anda menginstal software filter . Perangkat lunak ini akan memungkinkan Anda untuk membatasi akses internet untuk anak-anak dan orang muda . Anda dapat menemukan informasi lebih lanjut tentang topik ini di <a target="_blank" title="" href="http://www.saferinternet.org/">www.saferinternet.org.</a> . Software filter seperti <a target="_blank" title="" href="https://www.netnanny.com/">www.netnanny.com</a> dapat menawarkan perlindungan lebih lanjut .</p> <p className="title_bold">2. Keamanan permainan</p> <p>Kami bertanggung jawab untuk keamanan game kami line-up dalam dua cara : pertama-tama , kita melindungi pengguna terhadap kesalahan seperti penempatan di - advertant taruhan dengan cara ' gameful kegunaan ' . Selain itu, pemantauan online di website serta pengalaman karyawan kasino kami menjamin perlindungan terhadap penipuan . Manipulasi taruhan dan pencucian uang adalah kejahatan dan bukan permainan .</p> <p className="title_bold">3. Perlindungan terhadap kecanduan game .</p> <p>Sementara sebagian besar orang melakukan perjudian dalam batas kemampuannya , untuk beberapa perjudian dapat menjadi masalah . <br /> Perjudian kompulsif tidak bermanfaat bagi kita . Kami berusaha untuk memiliki yang aman , menyenangkan lingkungan di situs kami . Penjudi kompulsif masalah bagi keluarga mereka , teman-teman dan kehidupan mereka , menciptakan stabil , lingkungan yang tidak aman .</p> <p>Kami berkomitmen untuk mendeteksi dan mengurangi perjudian kompulsif . Kami memiliki sistem untuk melacak aktivitas pemain , dan kami terus bekerja untuk merancang dan menerapkan kontrol yang dirancang untuk membatasi pola perjudian yang berada di luar kendali .</p> <p>Kami berusaha tidak hanya untuk mengidentifikasi penjudi kompulsif , tetapi juga membantu mereka untuk mengatasi masalah mereka dan mencegah pemain lain dari menjadi penjudi kompulsif .</p> <p className="textyellow">Ini dapat membantu Anda untuk menjaga kontrol untuk mengingat hal-hal berikut :</p> <p>1 . Perjudian harus dilihat sebagai hiburan, alamat sebagai jika Anda membayar untuk hiburan sehingga tidak lebih membayar untuk hiburan Anda <br /> 2 . Judi TIDAK harus dilihat sebagai cara yang tulus untuk membuat uang <br /> 3 . Hindari mengejar kerugian <br /> 4 . Hanya berjudi apa yang Anda mampu untuk kehilangan <br /> 5 . Melacak waktu dan jumlah yang Anda belanjakan perjudian <br /> 6 . Jika Anda ingin memiliki istirahat dari judi Anda bisa menggunakan opsi self- exclude kami</p> <p>Kami ikuti panduan dari lembaga yang didedikasikan untuk mengatasi dampak sosial perjudian . Untuk membantu pemain berjudi secara bertanggung jawab , kami berkomitmen untuk bekerja sama dengan lembaga-lembaga untuk mengembangkan kebijakan dan praktik yang bertanggung jawab .</p> <p>Selain itu, kami mendorong hal berikut :</p> <p> <span className="textyellow">Perusahaan yang dipimpin batas taruhan :</span>
    <br /> Dengan menetapkan kebijakan batas taruhan kita mencoba untuk membatasi paparan pemain dan membantu dalam mengendalikan jumlah dimainkan dengan kami dalam jangka waktu tertentu.</p>
    <p> <span className="textyellow">Pelanggan yang dipimpin batas taruhan :</span>
        <br /> Menetapkan batas taruhan sederhana dan memungkinkan Anda untuk mengontrol jumlah yang Anda bermain melalui akun Anda dalam jangka waktu tertentu. Menetapkan kebijakan batas taruhan Anda sebelum Anda mulai bermain dengan kami dengan menghubungi kami .</p>
    <p> <span className="textyellow">Self- pengecualian Tools:</span>
        <br /> Untuk perlindungan Anda sendiri, Anda dapat meminta diri pengecualian atau suspensi untuk jangka waktu tertentu . Ini berarti bahwa Anda tidak akan dapat log on ke website kami selama periode pendinginan - off yang telah ditentukan . Segera setelah periode diri pengecualian telah berakhir , secara otomatis Anda akan bisa masuk lagi .</p>
    <p> <span className="textyellow">Tahu Kapan Harus Berhenti</span>
        <br /> nline judi adalah bentuk hiburan dan itu sangat penting bagi pemain untuk memahami bahwa jika perjudian telah menempatkan beban pada kehidupan Anda baik secara finansial maupun emosional , kami sarankan Anda bertanya pada diri sendiri pertanyaan berikut 20 :</p>
    <p>1 . Apakah Anda pernah kehilangan waktu dari pekerjaan atau pendidikan karena judi ?
        <br /> 2 . Apakah judi yang pernah dibuat kehidupan rumah Anda bahagia ?
        <br /> 3 . Apakah perjudian mempengaruhi reputasi Anda ?
        <br /> 4 . Apakah Anda pernah merasa menyesal setelah perjudian ?
        <br /> 5 . Apakah Anda pernah berjudi untuk mendapatkan uang untuk membayar utang atau menyelesaikan kesulitan keuangan ?
        <br /> 6 . Apakah perjudian menyebabkan penurunan ambisi atau efisiensi ?
        <br /> 7 . Setelah kerugian , apakah Anda merasa Anda perlu untuk kembali secepat mungkin dan memenangkan kembali kerugian Anda ?
        <br /> 8 . Setelah menang , kau memiliki keinginan yang kuat untuk kembali dan menang lebih banyak ?
        <br /> 9 . Apakah Anda pernah berjudi sampai dolar terakhir Anda pergi?
        <br /> 10 . Apakah Anda pernah meminjam untuk membiayai perjudian ?
        <br /> 11 . Pernahkah Anda menjual apa-apa untuk membiayai perjudian ?
        <br /> 12 . Apakah Anda enggan untuk menggunakan ' perjudian uang' untuk pengeluaran normal?
        <br /> 13 . Apakah judi membuat Anda ceroboh kesejahteraan diri sendiri atau keluarga Anda ?
        <br /> 14 . Apakah Anda pernah berjudi lebih lama dibandingkan yang anda rencanakan ?
        <br /> 15 . Pernahkah Anda berjudi untuk melarikan diri khawatir atau masalah ?
        <br /> 16 . Pernahkah Anda melakukan, atau yang dianggap melakukan , tindakan ilegal untuk membiayai perjudian ?
        <br /> 17 . Apakah perjudian menyebabkan Anda memiliki kesulitan tidur ?
        <br /> 18 . Apakah argumen , kekecewaan atau frustrasi menciptakan dalam diri Anda dorongan untuk berjudi ?
        <br /> 19 . Apakah Anda pernah memiliki dorongan untuk merayakan setiap nasib baik dengan beberapa jam perjudian ?
        <br /> 20 . Apakah Anda pernah mempertimbangkan penghancuran diri atau bunuh diri sebagai hasil dari perjudian ?
        <br /> </p>
    <p>Penjudi kompulsif Kebanyakan akan menjawab ya untuk setidaknya tujuh pertanyaan ini. Jika Anda ingin mencari nasihat profesional , silahkan mencari bantuan .</p>
    </span>
</ul>
          </div>
        {/* <Snackbar /> */}
        <Bottom />
      </div>
  
    )
  }
  
  export default withRouter(Reponsible)
  