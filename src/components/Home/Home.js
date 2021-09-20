import {ImageSlider} from '../ImageSlider/ImageSlider';
import {Viewers} from '../Viewers/Viewers';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../../firebase'
import { setMovies } from '../../features/movie/movieSlicer'
import { selectUserName } from '../../features/user/userSlice'
import {Theme} from '../Theme/Theme';
import { selectRecommend, selectNewDisney, selectTrending, selectOriginal } from '../../features/movie/movieSlicer'
import { Container } from './Home.style';

export const Home = () => {
    const dispatch = useDispatch()
    const userName = useSelector(selectUserName)

    let recommends = []
    let newDisneys = []
    let originals = []
    let trending = []

    useEffect(() => {
        db.collection('movies').onSnapshot(snapshot  => {
            snapshot.docs.map(doc => {
                switch (doc.data().type){
                    case "recommend":
                    recommends = [...recommends, { id: doc.id, ...doc.data() }];
                    break;

                case "new":
                    newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                    break;

                case "original":
                    originals = [...originals, { id: doc.id, ...doc.data() }];
                    break;

                case "trending":
                    trending = [...trending, { id: doc.id, ...doc.data() }];
                    break;
                }
            })
            dispatch(setMovies({
                recommend: recommends,
                newDisney: newDisneys,
                original: originals,
                trending: trending,
            }))
        })
    }, [userName])

    return (
        <Container>
            <ImageSlider/>
            <Viewers />
            <Theme type = "Recommended For You" selector = {selectRecommend}/>
            <Theme type = "New to Disney+" selector = {selectNewDisney}/>
            <Theme type = "Originals" selector = {selectOriginal}/>
            <Theme type = "Trending" selector = {selectTrending}/>
        </Container>
    )
}
