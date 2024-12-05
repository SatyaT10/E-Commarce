import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HomeBanner'
import CardData from '../components/CardData'
import Footer from '../components/Footer'

const Home = () => {
  const [product, setProduct] = useState([])
  const [productData, setProductData] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/jewelery', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()
    console.log(data)

    if (data) {
      setProduct(data)
    }


  }


  const fetchDataProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products/category/electronics', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await response.json()
    console.log(data, "in electronics")

    if (data) {
      setProductData(data)
    }


  }


  useEffect(() => {
    fetchData()
    fetchDataProduct()
  }, [])
  return (
    <>
      <Header />
      <HeroSection />
      <CardData data={product} header="card data" subheader="subheading" />
      <CardData data={productData} header="card data" subheader="subheading" />
      <Footer />
    </>
  )
}

export default Home