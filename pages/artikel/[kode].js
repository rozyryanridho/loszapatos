import dummyData from '../dataset/dummy.json';
import DaftarArtikel from '../components/daftarartikel';
const Artikel = (props) => {
 return (
 <div className="container">
 <DaftarArtikel />
 <hr />
 {props.info.map(data => (
<div>
<h1 className="title">{data.nama}</h1>
 <p>{data.harga}</p>
</div>
 ))}
 </div>
 );
}
export async function getStaticProps(context){
 // cari artikel berdasarkan kode yang dikirim melalui URL
 // alias parameter dynamic routing
 let kode = context.params.kode;
 let data = dummyData.find(x => x.id == kode);
 // ambil judul & isi dari data hasil pencarian
 let { info } = data;
 return {
 props : {
 // kirim judul & isi sebagai properti ke komponen utama
 info
 }
 }
}
export async function getStaticPaths(){
 return {
 paths : dummyData.map(data => (
 {params : {kode : `${data.id}`}}
 )),
 fallback : false
 }
}
export default Artikel;
