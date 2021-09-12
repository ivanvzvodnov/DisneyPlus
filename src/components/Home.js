import styled from 'styled-components'
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import db from '../firebase'
import { setMovies } from '../features/movie/movieSlicer'
import { selectUserName } from '../features/user/userSlice'
import Theme from './Theme';
import { selectRecommend, selectNewDisney, selectTrending, selectOriginal } from '../features/movie/movieSlicer'

export default function Home(props) {
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

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;