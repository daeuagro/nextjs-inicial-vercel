import Link from 'next/link';
import { MainLayout } from '../../components/layouts/MainLayout';
import { Navbar } from '../../components/Navbar';


export default function Pricing() {
  return (
    <MainLayout>

        <h1>esta es la Pricing  page</h1>
        <h1 className={ 'title' }>
        Ir a <Link href="/about">About</Link>
        </h1>

        <p className={ 'description' }>
          Llegando a la Contact page{' '}
          <code className={ 'code' }>pricing/index.js</code>
        </p>

    </MainLayout>

  )
}
