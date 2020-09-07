import Layout from '../../components/layout'
import Link from 'next/link';

export default function Join()
{
    return (
        <Layout title="Meikai-sa | Bergabung">
            <div>
                <h1>Cara Bergabung</h1>
                <p>
                    Untuk bergabung dalam proyek ini, diharapkan pendaftar memenuhi syarat dan ketentuan umum berikut ini :
                    <ol>
                        <li>Usia minimal 15 tahun</li>
                        <li>Izin dari orang tua</li>
                        <li>Memiliki pengalaman dan/atau ketertarikan dalam seni beladiri khususnya Karate</li>
                        <li>Memiliki kepribadian yang baik</li>
                        <li>Memiliki niat belajar dan mengajar</li>
                    </ol>
                    Selanjutnya, silahkan mengisi <a href="https://docs.google.com/forms/d/11gMSc-jWO4IWiCWpPLi1zc3hYbQF5Xt0o57KZCtaEtE" target="_blank">Formulir Data Diri</a> dan tunggu verifikasi serta undangan grup <strong>WhatsApp</strong>.
                </p>
            </div>
        </Layout>
    )
}