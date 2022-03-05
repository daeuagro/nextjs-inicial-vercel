import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';


export default function About() {
  return (
   <>
  
        <h1>esta es la about page</h1>
        <h1 className={ 'title' }>
        Ir a <Link href="/about">About</Link>
        </h1>

        <p className={ 'description' }>
          Llegando al about{' '}
          <code className={ 'code' }>about/index.js</code>
        </p>
 
   </>

  )
}

About.getLayout = function getLayout( page: JSX.Element  ) {
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  );
}