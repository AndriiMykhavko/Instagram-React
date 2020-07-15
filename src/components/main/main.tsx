import React from 'react'

interface IProps {
  logout: any
}

export const Main: React.FC<IProps> = (props: any) => {
    return (
    <>
      <h1>Main</h1>
      <button onClick={props.logout} >Logout</button>
    </>
    )
}