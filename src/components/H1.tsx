import { cn } from '@/app/lib/utils';
import React from 'react'
'tailwind-merge';
type H1props ={
    children:React.ReactNode;
    className:string;

}
const H1 = ({children,className}:H1props) => {
  return (
    <div>
         <h1 className={cn("text-3xl lg:text-6xl tracking-tight font-bold ",className)}>
       {children}
      </h1>
    </div>
  )
}

export default H1