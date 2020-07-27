import Link from 'next/link';
import artikel from '../dataset/data.json';
const DaftarArtikel = () => (
 <p>
 Daftar artikel : <br />
 
 {artikel.map((data)=>(
 <Link href="/artikel/[kode]" as={`/artikel/${data.id}`} key={data.id}><a>{data.id}</a></Link>
 ))}
 
 </p>
)
export default DaftarArtikel;