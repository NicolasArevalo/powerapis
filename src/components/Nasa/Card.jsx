import './Nasa.css'

const Card = ( {copyright, date, explanation, title, url} ) => {
  return (
    <div className='nasa-card'>
        <h1>{title}</h1>
        <img src={url} alt={title} />
        <p>{explanation}</p>
        <span>{date}</span>
        <span> © {copyright}</span>
    </div>
  )
}

export default Card