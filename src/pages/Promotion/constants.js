import moment from 'moment'

const currentMonth = moment().format('MMM').toUpperCase()
const oneMonthEarlier = moment().subtract(1, 'months').format('MMM').toUpperCase()
const oneMonthLater = moment().add(1, 'months').format('MMM').toUpperCase()
export const promotions = [
  {
    id: '1',
    name: 'Luckydraw Hb',
    image: 'Luckydraw_Hb.jpg',
    group: 'Promotion',
    content: `<div>
      <ul>
        <h4 class="bold cap">SELAMAT KEPADA PARA PEMENANG LUCKYDRAW  ( 01 ${oneMonthEarlier} - 01 ${currentMonth} 2020 )</h4>
        <p>1. ID : ZAn*43 &gt; Samsung S20 Ultra</p>
        <p>2. ID : BUn**02 &gt; Samsung Note 10</p>
        <p>3. ID : FinT**09 &gt; LAPTOP ASUS</p>
        <p>4. ID : Iyum**7 &gt; OPPO Reno F2</p>
        <p>5. ID : Punm**39 &gt; OPPO A31</p>
        <p><br /></p>
        <p>Hadiah yang tunai masing-masing mendapatkan 1 juta rupiah</p>
        <p>1. ID : iluc*s</p>
        <p>2. ID : mot**g</p>
        <p>3. ID : tomc**g</p>
        <p>4. ID : sab**nak</p>
        <p>5. ID : kucin**23</p>
      </ul>
    </div>`
  },
  {
    id: '2',
    name: 'lucky_draw',
    image: 'lucky_draw.jpg',
    group: 'Promotion',
    content: `<div>
      <ul>
        <h4 class="bold cap">PROMO LUCKY DRAW HOKIBET188 (01 ${currentMonth} 2020 – 01 ${oneMonthLater} 2020)</h4>
        <p>CARA BERPARTISIPASI :</p>
        <li>Memiliki Account active di HOKIBET188</li>
        <li>Aktif Bermain, Setiap anda melakukan taruhan/bet akan mendapatkan 1 transaction id</li>
        <li>Lucky Draw yang di undi adalah dari ticket transaction bet Anda dari tgl 01 ${currentMonth} jam 12.00 s/d 01 ${oneMonthLater} 2020 jam 12.00</li>
        <p>SYARAT DAN KETENTUAN :</p>
        <li>1.Promo ini berlaku untuk semua member active kami yang setia di Hokibet188</li>
        <li>2.Hadiah yang diberikan antara lain</li>
        <li> Hadiah 1 : Samsung Galaxy s20 Ultra</li>
        <li> Hadiah 2 : Samsung Note 11+</li>
        <li> Hadiah 3 : Laptop Asus Vivibook A412DA Ryzen</li>
        <li> Hadiah 4 : Oppo Reno F2</li>
        <li> Hadiah 5 : Oppo A31</li>
        <li> Hadiah 6 - 10 : Uang Tunai Masing - Masing 1 Juta Rupiah</li>
        <li>3.Pemenang Akan Kami Informasikan Pada Tanggal 01 ${oneMonthLater} 2020 jam 12.00 Melalui:</li>
        <li> Halaman FB kami www.facebook.com/hokibet188</li>
        <li> Instagram @hokibet188</li>
        <li>4.kami akan melakukan panggilan telpon melalui Whatsapp ke Pemenang Jika selama 2 hari kami mencoba untuk mengkonfirmasi berdasarkan data Hp yg Terdaftar,namun data yang tidak valid atau tidak bisa di konfirmasi pihak Hokibet188 Berhak membatalkan atau menghanguskan hadiah yang telah anda dapatkan</li>
        <li>5. Hadiah tidak dapat di alihkan atas nama orang lain dan tidak dapat di tukar dengan barang lain atau pun di uangkan.</li>
        <li>6.Hadiah tidak dapat di claim hanya dengan bukti screenshoot yang anda kirimkan</li>
        <li>7. Hadiah yang anda dapatkan akan kami Komfirmasi Melalui telpon WhatsApp untuk menanyakan alamat yang valid serta member diwajibkan mengisi alamat di profil anda</li>
      </ul>
    </div>`
  },
  {
    id: '3',
    name: 'extra bonus',
    image: 'extra_bonus.png',
    group: 'Promotion',
    content: '<div><ul><h4 class="bold">EXTRA BONUS 100% WITHDRAW KAPAN SAJA</h4><li>1.Persyaratan Rollover/Perputaran 25X DARI DEPOSIT PERTAMA berlaku untuk semua provider kecuali TOGEL/SG4D,POKER Contoh: ( Deposit IDR 100 + Bonus IDR 100 ) x 25 TO = IDR 5,000</li><li>2.Bonus tambahan ini berlaku untuk setiap member baru</li><li>3.Bonus 100% = max IDR 10juta</li><li>4.Bonus akan diberikan secara otomatis setiap hari senin diatas jam 12:00 wib ,setelah mencapai target rollover/perputaran</li><li>5.Tidak ada komisi dan cash back 5% selama periode extra bonus.</li><li>6.Jika tidak mencapai pun, bisa di Withdraw setiap saat, Dan Rollover/Perputaran bisa dilanjutkan di deposit selanjut nya sampai Rollover anda tercapai. BONUS TIDAK AKAN DIBERIKAN APABILA KEDAPATAN BERTARUH DI DUA SISI (SAFETY BET)</li><li>7.Hokibet188.com memegang hak tak terbantahkan untuk membatalkan promosi bila di temukan safety bet dan penipuan lainnya.</li></ul></div>',
  },
  {
    id: '4',
    name: 'welcome bonus',
    image: 'welcome_bonus.png',
    group: 'Promotion',
    content: '<div><ul><h4 class="bold cap">Welcome Bonus 100% </h4><li>syarat dan ketentuan :</li><li>1.Promo berlaku untuk member baru Sportsbook ,Live Casino,Keno,Slot Games.Cock Fight kecuali Poker</li><li>2.Members wajib memilih "Claim Welcome Bonus 100%" sewaktu reguest transfer ke games yang diinginkan</li><li>Minimal Setoran Adalah IDR 100.000 (100 c) Dan Maximum bonus yang diberikan adalah IDR 200.000 (200 c)</li><li>3.Bonus Welcome 100% langsung diberikan ke acc member</li><li>4.Maksimum Bet adalah sesuai nilai depo + bonus</li><li>contoh depo 100 + 100 bonus=200 , maka maximal bet adalah 200</li><li>5.Apabila hanya menang atau kalah ½, yang di perhitungkan kedalam TURNOVER juga hanya ½</li><li>dan jika DRAW maka tidak akan terhitung TURNOVER</li><li>6.Untuk Games Sportsbook yang diperbolehkan hanya HANDICAP, OVER UNDER Tidak diperbolehkanl Bet MIX PARLAY</li><li>Jika Bet MIX PARLAY atau bertaruh di TYPE LAIN maka Bonus akan di BATALKAN dan Credit akan HANGUS.</li><li>7.Credit dapat di withdraw setelah credit + bonus mencapai turn over sebanyak 20x</li><li>Contoh</li><li>- depo 100 RP (100 c) + bonus depo 100% = RP. 200.000 (200 c)</li><li>- turn over RP.200,000 (200 c) x 20 = RP 4.000.000 (4.000 c)</li><li>8.Turn over yang dilakukan bukan berupa manipulasi / penipuan / dan tidak boleh safety bet (no risk bet)</li><li>Promo lain tidak berlaku saat mengikuti promo ini kecuali komisi</li><li>9.Pihak Hokibet188 berhak secara sepihak membatalkan bonus dan kemenangan apabila ditemukan kesamaan (ip , no telp, no rek, email) dan bagi yang melanggar syarat/peraturan ini</li><li>10.Pihak Hokibet188.com berhak mengubah atau menambahkan aturan dalam promo ini kapan saja tanpa pemberitahuan terlebih dahulu.</li><li>11.Keputusan Hokibet188.com adalah mutlak dan tidak dapat di ganggu gugat</li></ul></div>',
  },
  {
    id: '5',
    name: 'Topup Bonus',
    image: 'topup_bonus.png',
    group: 'Promtion',
    content: '<div><ul><h4 class="bold cap">MEMBER LOYALTY BONUS 10%</h4><li>Telah menjadi member HOKIBET188 dan telah/pernah melakukan deposit sebanyak 3x</li><li>Mengisi form/centang "claim loyalty bonus 10%" sewaktu transfer cre4dit ke games yang diinginkan</li><li>Bonus loyalty 10% langsung diberikan ke acc member setelah transfer credit berhasil</li><li>Maximum bonus yang diberikan adalah idr 500,000 /members max 1x / hari dari jam 00:00 sd 00:00 wib</li><li>Bonus dapat di withdraw/ transfer ke walet setelah TO (turn over) mencapai 5x dari jumlah deposit dan bonus</li><li>Contoh:</li><li>- Depo RP.1.000.000</li><li>- Kredit yang akan diberikan RP.1.100.0 (1.100 c)</li><li>- To harus sebesar RP. 1.1000.000 x 5 = rp. 5.5000.000 (5.500 c).</li><li>Turn over (t0) yang dilakukan bukan berupa manipulasi/penipuan dan tidak boleh safety bet</li><li>Contoh :</li><li>- (bet bank/player-home/away-over/under dalam 1 partai)</li><li>- (bet banker/player - home/away - over/under in 1 event)</li><li>Promo lain tidak berlaku saat mengikuti promo</li><li>- Ini,kecuali rabat 0.8% (casino) rabat 0.5%(sports) dan cash back 5%</li><li>Bonus akan ditarik apabila persyaratan to(turn over) tidak terpenuhi setelah 30 hari</li><li>Pihak Hokibet188.com berhak secara sepihak membatalkan bonus apabila ditemukan kesamaan (ip , no telp, no rek, email) dan hal lain yang diperkirakan sama</li><li>Pihak Hokibet188.com berhak mengubah atau menambahkan aturan dalam promo ini kapan saja tanpa pemberitahuan terlebih dahulu.keputusan hokibet188.com adalah mutlak dan tidak dapat diganggu gugat</li></ul></div>',
  },
  {
    id: '6',
    name: 'HB_CASH BACK 3',
    image: 'HB_CASH_BACK_3.jpg',
    group: 'Promotion',
    content: '<div><ul><h4 class="bold cap">Cash Back Up To 15%</h4><p>Promo Cash Back Berlaku Bagi Member dengan keadaan Total Kalah dari Hari senin s/d Senin Cash Back tidak berlaku bagi Poker</p><p>Bonus Cash back yang diberikan sebesar :</p><p> 5% total lose = IDR 1.000.000 – IDR 99.999.000</p><p> 10% total lose = IDR 100.000.000 – IDR 249.999.000</p><p> 15% total lose = IDR 250.000.000 ke atas</p><p>Claim Cash Back Minimum Lose / Kalah RP.1.000.000.</p><p>Cara Hitung : Total Kekalahan (Total Win Dikurang Total Lose) dari hari Senin sampai Senin jam 12:00 wib untuk Casino dan Senin sampai Minggu untuk Sportsbook.</p><p> Contoh:</p><p> - Anda mengalami Total kekalahan Dari hari senin s/d hari senin Rp 1jt maka, Rp 1.000.000 x 5% = Rp 50,000</p><p> - Cashback yang anda dapatkan Rp 50.000 &amp; Bonus Cash Back anda akan di masukan ke dalam ID ACC anda setiap hari senin sore).</p><p>Minimum Cash Back yang kami berikan RP.50,000 dan maksimum RP. 150,000,000</p><p>Cash Back baru dapat di klaim apabila member telah mencapai syarat Turnover.</p><p> - Live Casino : Syarat 10 (sepuluh) kali Turn Over</p><p> - Slot Games : Syarat 10 (sepuluh) Kali Turn Over</p><p> - Sportsbook : Syarat 5 (lima) kali Turn Over</p><p> - Bolatangkas : Syarat 10 (sepuluh) kali Turn Over</p><p> - Cock Fight : Syarat 10 (sepuluh) kali Turn Over</p><p> Contoh:</p><p> - Jika member kalah Rp 1jt dan telah mencapai Syarat Turnover 10 (Sepuluh) kali,</p><p> 1jt x TO 10 = Rp 10 jt maka cash back 5% sebesar Rp 50,000 baru dapat dicairkan.</p><p> Pihak HOKIBET188 berhak secara sepihak membatalkan bonus apabila ditemukan kesamaan (ip , no telp, no rek, email) dan hal lain yang diperkirakan sama</p><p>keputusan HOKIBET188 adalah mutlak dan tidak dapat diganggu gugat</p></ul></div>',
  }
  ,
  {
    id: '7',
    name: 'Cashback Weekly',
    image: 'cashback_weekly.png',
    group: 'Promotion',
    content: '<div><ul><h4 class="bold">CASH BACK MINGGUAN</h4><h4 class="cap bold">Sportsbook 0.5%</h4><li>Cash Back/Rebate Mingguan diberikan berdasarkan total taruhan di sportsbook</li><li>Cash Back diberikan setiap hari Senin diatas jam 12:00 wib</li><li>Minimal cash back yang diberikan adalah rp 10.000 (10 credit)</li><li>- Contoh : total bet 2.000 x 0.5%=10 credit</li><li>Semua Hasil Tie/Draw Tidak Masuk Hitungan Komisi/Rollingan.</li><li>Semua Komplain Promo &amp; Bonus, apabila lewat dari seminggu (7 hari) akan kami abaikan.</li><li>Syarat &amp; ketentuan berlaku, apabila kami melihat adanya indikasi kecurangan maka Promo tidak berlaku.</li></ul><ul><h4 class="bold">CASINO 0.8%</h4><li>Cash Back Live Casino adalah 0,8%.</li><li>Cash Back/Rebate diberikan berdasarkan jumlah total taruhan real dari senin jam 12:00 sd senin jam 11:59 wib</li><li>- Contoh : total bet 1.500 x 0.8%=12 credit</li><li>Minimal cash back yang diberikan adalah rp 10.000 (10 credit) dan tidak ada limit maximum.</li><li>Semua Hasil Tie/Draw Tidak Masuk Hitungan Cash Back/Rebate.</li><li>Cash Back akan dikreditkan ke ID Anda setiap Senin di atas jam 12.00 wib.</li><li>Semua Komplain Promo &amp; Bonus, apabila lewat dari seminggu (7 hari) akan kami abaikan.</li></ul><ul><h4 class="bold">Slot Games 0.8%</h4><li>Cash Back Slot Games adalah 0,8%.</li><li>Cash Back diberikan berdasarkan jumlah total taruhan real dari senin jam 12:00 sd senin jam 11:59 wib</li><li>- Contoh : total bet 1.500 x 0.8%=12 credit</li><li>Minimal Cash Back yang diberikan adalah rp 10.000 (10 credit) dan tidak ada limit maximum.</li><li>Semua Hasil Tie/Draw Tidak Masuk Hitungan Cash Back/Rebate.</li><li>Cash Back/Rebate akan dikreditkan ke ID Anda setiap Senin di atas jam 12.00 wib.</li><li>Semua Komplain Promo &amp; Bonus, apabila lewat dari seminggu (7 hari) akan kami abaikan.</li></ul><ul><h4 class="bold">Keno 1%</h4><li>Cash Back KENO adalah 1%.</li><li>Cash Back/Rebate diberikan berdasarkan jumlah total taruhan real dari senin jam 12:00 sd senin jam 11:59 wib</li><li>- Contoh : total bet 1.500 x 1%=15 credit</li><li>Minimal Cash Back yang diberikan adalah rp 10.000 (10 credit) dan tidak ada limit maximum.</li><li>Semua Hasil Tie/Draw Tidak Masuk Hitungan Cash Back/Rebate.</li><li>Cash Back/Rebate akan dikreditkan ke ID Anda setiap Senin di atas jam 12.00 wib.</li><li>Semua Komplain Promo &amp; Bonus, apabila lewat dari seminggu (7 hari) akan kami abaikan</li></ul></div>',
  },
  {
    id: '8',
    name: 'Poker',
    image: 'poker.jpg',
    group: 'Promotion',
    content: '<div><ul><h4 class="bold">CASH BACK POKER MINGGUAN</h4><li>Cash Back diberikan berdasarkan jumlah total taruhan real dari senin jam 12:00 sd senin jam 11:59 wib</li><li>- Contoh : total bet idr 2 juta x 0.3% = 6 credit ( idr 6 ribu)</li><li>Minimal Cash Back yang diberikan adalah Idr 1000 (1 credit) dan tidak ada limit maximum.</li><li>Cash Back/Rebate akan dikreditkan ke ID Anda setiap Senin di atas jam 12.00 wib.</li><li>Semua Komplain Promo &amp; Bonus, apabila lewat dari 3 hari akan kami abaikan.</li></ul></div>',
  }
]