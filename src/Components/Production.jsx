import React from 'react';
import disney from '../Images/phouse/disney.png';
import marvel from '../Images/phouse/marvel.png';
import pixar from '../Images/phouse/pixar.png';

function Production() {

    const productionList = [
        {
            id:1,
            img:disney,
           
        },
        {   
            id:2,
            img:marvel,
        },
        {
            id:3,
            img:pixar,
        },
        /*{ 
            id:4,
            img:starwars,
        },
        {
            id:5,
            img:nationalgeographic,
        },
        { 
            id:6,
            img:hotsar,
        }*/
    ]
  return (
    <div className='flex bg-black mt-10 p-20 space-x-10 items-center'>
      {productionList.map((item) => (
        <div className=' hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
            <img src={item.img} className='w-full' />
        </div>
      ))}
    </div>
  )
}

export default Production;
