import Layout from '../../components/layout'
import Link from 'next/link';

export default function Jadwal()
{
    return (
        <Layout title="Meikai-sa | Jadwal Latihan">
            <div>
                <h1>Jadwal Latihan</h1>
                <p>
                    Waktu Latihan adalah kesempatan untuk belajar dan mengajar terkait teknik Karate yang dipelajari oleh setiap anggota. Berikut adalah jadwal latihan <Link href="/posts/tingkatan-anggota">
                        <a>Tingkat</a>
                        </Link> pemula.
                    <ul>
                        <li>
                    Rabu : 19.00 - 21.00 WIB *
                        </li>
                        <li>
                    Minggu : 07.00 - 9.00 WIB
                        </li>
                    </ul>

                    <small>
                        * opsional
                    </small>
                </p>
            </div>
        </Layout>
    )
}