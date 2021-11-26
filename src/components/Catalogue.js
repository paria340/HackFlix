
import { Link } from 'react-router-dom'
const Catalogue = ({ movies }) => {
    // console.log(props)
    //movies is the prop which was passed down and now we map through it 
    return (
        <ul className="catalogue">
            {
                movies.map((mov) => (
                    <li key={mov.id}>
                        {mov.original_title}
                        <Link to={`/movie/${mov.id}`}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`}
                                alt={`Poster for ${mov.original_title}`}
                            />
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default Catalogue