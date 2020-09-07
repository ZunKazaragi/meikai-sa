import Layout from '../../components/layout'
import Link from 'next/link';

export default function Join()
{
    return (
        <Layout title="Meikai-sa | Tingkatan Anggota">
            <div>
                <h1>Tingkatan Anggota</h1>
                <p>
                    Meikai-sa merupakan proyek terbuka. Hal ini membuat Founder menerapkan tingkatan yang membedakan pemula dan pengajar. Berikut adalah pembagian tingkatan anggota yang diterapkan.
                </p>
                    <h3>Pemula</h3>
                    Anggota pemula ialah anggota yang pengalaman Karate-nya kurang dari 2 tahun. Biasanya namun tak terbatas dari sabuk putih hingga biru.
                    <h3>Pengajar</h3>
                    Anggota pengajar ialah anggota yang memiliki pengalaman Karate 2 tahun atau memenuhi kriteria pengajar Meikai-sa. Biasanya pengguna sabuk coklat hingga hitam.
            </div>
        </Layout>
    )
}