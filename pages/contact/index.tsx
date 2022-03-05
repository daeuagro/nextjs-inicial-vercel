import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';
import { Navbar } from '../../components/Navbar';


export default function Contact() {
  return (
    <MainLayout>

        <h1>esta es la Contact page</h1>
        <h1 className={ 'title' }>
        Ir a <Link href="/about">About</Link>
        </h1>

        <p className={ 'description' }>
          Llegando a la Contact page{' '}
          <code className={ 'code' }>about/index.js</code>
        </p>

    </MainLayout>

  )
}
