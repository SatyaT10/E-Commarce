import React from 'react'
import { Link } from 'react-router-dom'

const CardData = ({ data, header, subheader }) => {
    console.log(data, "daa")
    return (
        <>
            <div className='border-2 py-10'>
                <div>
                    <p className='text-[25px] font-bold px-20 text-blue-500 '>{header}</p>
                </div>
                <div>
                    <p className='text-[20px] font-bold px-20  '>{subheader}</p>
                </div>
                <div className='flex gap-5 justify-center py-10 '>
                    {
                        data?.map((item, i) => (
                            <Link to={`/detail/${item.id}`} className='py-2 p-2 box-border w-[300px]  h-auto border-2 shadow-lg rounded-lg flex-wrap break-words '>
                                <div key={i} >
                                    <img src={item.image} alt='img' className='w-[150px] h-[150px] p-2' />
                                    <div className='py-2 px-2'>
                                        <p className='py-5'>{item.title}</p>
                                        <p className='text-green-500 font-bold'>{item.price}</p>
                                    </div>
                                </div>
                            </Link>

                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CardData