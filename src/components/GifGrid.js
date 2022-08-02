import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

export default function GifGrid({ category }) {

  const { data: gifs, loading } = useFetchGifs(category);
 
  return (
    <>
      <h3 className='animate_animated animate__bounceOut'>{category}</h3>
      { loading && <p className='animate_animated animate_flash'>'Cargando...'</p> }
        <div className='card-grid'>
          {
            gifs.map(gif => (
              <GifGridItem 
                key={gif.id} 
                {...gif} 
              />
            ))
          }
      </div>
    </>
  )
}
