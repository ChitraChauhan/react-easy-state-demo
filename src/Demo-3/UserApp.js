import React from 'react'
import { view, store } from 'react-easy-state'

// store() wraps your objects with transparent, reactive proxies
const users = window.users = store([])

function UsersApp () {
  return users.map((user, idx) =>
    <div key={idx}>{user.name} <small>{user.email}</small></div>
  )
}

// view() makes your components reactive, by re-rendering them on store mutations
export default view(UsersApp)