import React from 'react'
type H1props ={
    children:React.ReactNode;

}
const H1 = ({children}:H1props) => {
  return (
    <div>
         <h1 className="text-3xl lg:text-6xl tracking-tight font-bold ">
       {children}
      </h1>
    </div>
  )
}

export default H1