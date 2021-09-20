import React, { useEffect } from 'react'
import {NavMenuItem} from './NavMenuItem/NavMenuItem'
import { auth, provider } from '../../firebase'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../../features/user/userSlice'
import {Nav, NavLogo, NavMenu, Login, UserImg, DropDown, SignOut} from './Header.style'


export const Header = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user){
                setUser(user)
                history.push('/home')
            }
        })
    }, [userName])

    const handleAuth = () => {
        if (!userName) {
          auth
            .signInWithPopup(provider)
            .then((result) => {
              setUser(result.user);
            })
            .catch((error) => {
              alert(error.message);
            });
        } else if (userName) {
          auth
            .signOut()
            .then(() => {
              dispatch(setSignOutState());
              history.push("/");
            })
            .catch((err) => alert(err.message));
        }
      };

    const setUser = (user) =>{
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    return (
        <Nav>
            <NavLogo>
                <img src="/images/logo.svg" alt = "Disney+" />
            </NavLogo>
            {!userName ? (<Login onClick = {handleAuth}>Login</Login>)
            : (
            <>
                <NavMenu>
                    <NavMenuItem src = {'/images/home-icon.svg'} value = "HOME" href = "/home" />
                    <NavMenuItem src = {'/images/search-icon.svg'} value = "SEARCH"/>
                    <NavMenuItem src = {'/images/watchlist-icon.svg'} value = "WATCHLIST"/>
                    <NavMenuItem src = {'/images/original-icon.svg'} value = "ORIGINALS"/>
                    <NavMenuItem src = {'/images/movie-icon.svg'} value = "MOVIES"/>
                    <NavMenuItem src = {'/images/series-icon.svg'} value = "SERIES"/>
                </NavMenu>
                <SignOut>
                    <UserImg src = {userPhoto} alt = "userName" />
                    <DropDown>
                        <span onClick={handleAuth}>Sign out</span>
                    </DropDown>
                </SignOut>
            </>
            ) }
        </Nav>
    )
}