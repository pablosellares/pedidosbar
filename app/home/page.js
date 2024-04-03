'use client'

import Categories from '../../components/Categories/Categories'
import TabBar from '../../components/TabBar/TabBar'
import TopBar from '../../components/TopBar/TopBar'

export default function Home({ titulo }) {

  const user = localStorage.getItem('user')

  return (<div className='categorias-global'>
    <TopBar titulo={`Hola, ${user}!`} />
    <form style={{
      height: "42px",
      marginBottom: '32px'
    }}>
      <input className="categorias-search" type="search" placeholder='Busca una comida o bebida' />
    </form >
    <div className='categorias-row' style={{ display: "flex" }}>
      <Categories />
    </div>

    <TabBar />
  </div >
  )
}