// import React from 'react'
// import Bird from "./Bird";

// interface Props {
//   bird:Bird;
// }

const Card: React.FC = () => {
	return (
		<div>
			<p>sdfg</p>
		</div>
	);
};


// const Card = ({bird}: Props) => {
//   const picLocalUrl = "/images/dailybest/" + bird.pic_url.split("/")[6]
//   const altText = "Вид птицы:" + bird.taxon_name + ", сфотографировал:" + bird.author + ", место съемки:" + bird.location
//   console.log(picLocalUrl)
//   return (
//     <>
//     {/* <div className="col">
//         <div className='card'>
//           <a href={bird.pic_page_url}>
//             <img className='card-img-top' src={picLocalUrl} alt={altText}></img>
//           </a>
//             <div className='card-body'>
//                 <h5 className='card-title'><a href={bird.taxon_link}>{bird.taxon_name}</a></h5>                 
//                 <p className='card-text'>Автор снимка: <a href={bird.author_url}>{bird.author}</a><br/> Где снято: {bird.location} </p>
//             </div>
//         </div>
//     </div> */}
//       <div className="col-md-3">
//         <div className='thumbnail'>
//           <a href={bird.pic_page_url}>
//             <img className='card-img-top' src={picLocalUrl} alt={altText}></img>
//           </a>
//           <div className='card-body'>
//                 <h5 className='card-title'><a href={bird.taxon_link}>{bird.taxon_name}</a></h5>                 
//                 <p className='card-text'>{bird.location} <br/> Автор снимка: <a href={bird.author_url}>{bird.author}</a> </p>
//             </div>
//             <br/>
//           </div>
//       </div>

//     </>
//   )
// }

export default Card