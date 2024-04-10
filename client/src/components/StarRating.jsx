import React , {useState} from 'react'
import { FaStar } from 'react-icons/fa';

function StarRating({ onRate, stars, readOnly}) {
    const [hover, setHover] = useState(null);
    const [rating, setRating] =useState(null)

    const handleClick = (ratingValue) => {
      onRate(ratingValue)
      setRating(ratingValue)
    }


  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1

        return (
        <label key={i}>
          <input type="radio" name="starRating" value={ratingValue} onClick={() =>  handleClick(ratingValue)}/>
          <FaStar
           className='star'
           color={ratingValue <=(hover || rating || stars) ? "#ffc107" : "#e4e5e9"}
           onMouseEnter={() => setHover(ratingValue)}
           onMouseLeave={() => setHover(null)}
            size={25}
            style={{pointerEvents: readOnly ? 'none': 'auto'}}
            />
        </label> 
        )
      })}
      </div>
      
  )
}

export default StarRating