// import React from 'react'

interface Props {
    url: string;
    link: string;
    title: string;
    location: string;
    author: string;
}

const Card = ({url, link, title, location, author}: Props) => {
  const picLocalUrl = "/images/dailybest/" + url.split("/")[6]
  console.log(picLocalUrl)
  return (
    <>
    <div className="col">
        <div className='card'>
            <img className='card-img-top' src={picLocalUrl} alt={title}></img>
            <div className='card-body'>
                <h5 className='card-title'><a href={link}>{title}</a> </h5>
                <p className='card-text'>Автор снимка: {author}<br/> Где снято: {location} </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card