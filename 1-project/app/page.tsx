import Banner from '@/components/Banner'
import Blog from '@/components/blog'
import Categorys from '@/components/Categorys'
import Discount from '@/components/Discount'
import Page from '@/components/page'
import Products from '@/components/Products'
import Topproducts from '@/components/Topproducts'
import React from 'react'
const page = () => {
  return (
    <div>
      <Page/>
      <Topproducts/>
       <Categorys/>
       <Products/>
       <Blog/>
       <Discount/>
       <Banner/> 
      
    </div>
  )
}

export default page
