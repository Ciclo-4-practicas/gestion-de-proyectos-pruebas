import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className= 'bg-green-500'>
      <p> Página de Index </p>
     <Link href="/admin/usuarios">
       <a>Ir a admin usuarios</a>
     </Link>
    </div>
  )
}

export default Home
