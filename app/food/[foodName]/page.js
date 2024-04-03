'use client'

import { useEffect, useState } from "react"
import TopBar from "../../../components/TopBar/TopBar"
import TabBar from "../../../components/TabBar/TabBar"
import AddItem from "../../../components/common/AddItem/AddItem"
import GoBack from "../../../components/common/GoBack/GoBack"

export default function Food({ params }) {

  const [food, setFood] = useState([])
  localStorage.setItem('food', JSON.stringify(food))

  useEffect(() => {
    fetch(`/data/${params.foodName}.json`)
      .then(res => res.json())
      .then(data => {
        setFood(data)
      })
  }, [])

  return (<>
    <div className="topbar-container" style={{ display: 'flex' }}>
      <GoBack />
      <TopBar titulo={params.foodName} />
    </div>
    <h2>{food.id}</h2>
    <ul>
      {food.map((item) => (<li style={{ display: 'flex', position: 'relative', marginBottom: '32px' }} key={item.id}>
        <img style={{ width: '64px', height: '64px' }} src={item.image} />
        <div className="food-info">
          <p className="food-info__name">{item.name}</p>
          <p className="food-info__price">${item.price}</p>
          <p className="food-info__ingredients">{item.ingredients}</p>
        </div>
        <AddItem />
      </li>))}
    </ul>
    <TabBar />
  </>)
}