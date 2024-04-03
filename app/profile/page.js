'use client'

import TopBar from "../../components/TopBar/TopBar";
import TabBar from "../../components/TabBar/TabBar";


export default function Profile({ titulo }) {
  const user = localStorage.getItem('user');
  const table = localStorage.getItem('table');
  return (
    <>
      <TopBar titulo='Mi Perfil' />
      <div className="profile-global">
        <img
          alt="logo"
          className="logo-login"
          src="/images/logo.svg"
          width={205}
          height={39}
          style={{ marginBottom: '32px' }}
        />
        <div className="profile-name"><h1>Nombre</h1> <p>{user}</p></div>
        <div className="profile-table"><h1>Mesa</h1> <p>{table}</p></div>
      </div>
      <TabBar />
    </>
  )
}