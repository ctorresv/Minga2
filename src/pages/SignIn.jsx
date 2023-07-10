import React, { useRef, useState } from 'react'
import { Formulario } from '../components/Formulario'
import axios from 'axios'
import apiUrl from '../../api'

export const SignIn = () => {

  const userName = useRef()
  const password = useRef()
  const [logg,setLogg] = useState(false)

  const sendData = (e) => {
    e.preventDefault()

    let user = userName.current.value
    let pass = password.current.value

    let data = {
      email: user,
      password: pass
    }

    axios.post(apiUrl + 'user/signin', data)
      .then(res => {
        console.log(res)
        console.log('entramos')
        setLogg(true)
      })
      .catch(err => console.log(err))

    console.log('User Name: ', user)
    console.log('password: ', pass)
  }

  return (
    <div className='flex justify-center items-center h-[100vh] bg-backgroundManga'>
      <form className='flex justify-center flex-col rounded bg-[#ffffff] w-[20rem] p-8 border-[2px] border-solid border-black mt-40'>
        <legend className='flex justify-center' ><h1>Minga 2</h1></legend>
        <legend>Log in</legend>
        <div className='m-3'>
          <input ref={userName} type="email" className='border-gray-600 border-solid rounded border-[2px]' aria-describedby="emailHelp" placeholder="Username" />
        </div>
        <div className='m-3'>
          <input ref={password} type="password" className='border-gray-600 border-solid rounded border-[2px]' placeholder="Password" />
        </div>
        <button type="submit" className='border-[1px] border-solid border-blue-500' onClick={sendData} >Log in</button>
        <a href="">Or, sing up</a>
        {logg ? <p>Te has loggeado</p> : <div></div>}
        <img src='https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg' alt="" />
      </form>
    </div>
  )
}
