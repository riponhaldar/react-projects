import React from 'react'

const List = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, url } = menuItem
        return (
          <article key={id} className='menu-item'>
            <a href={url}>
              <img className='photo' src={img} alt={title} />
            </a>
          </article>
        )
      })}
    </div>
  )
}

export default List
