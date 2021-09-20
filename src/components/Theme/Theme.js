import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container, Content, Wrap } from './Theme.style'


export const Theme = ({selector, type}) => {
    const movies = useSelector(selector)
    return (
        <Container>
            <h4>{type}</h4>
            <Content>
            {movies &&
                movies.map((movie, key) => (
                    <Wrap key={key}>
                        {movie.id}
                        <Link to={`/detail/` + movie.id}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>
                ))} 
            </Content>
        </Container>
    )
}