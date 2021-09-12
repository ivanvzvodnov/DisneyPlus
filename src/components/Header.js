import styled from 'styled-components'
import React, { useEffect } from 'react'
import NavMenuItem from './NavMenuItem'
import { auth, provider } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice'


function Header(props) {

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

const Nav = styled.nav`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #040714;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    z-index:2;  
`

const NavLogo = styled.a`
    padding: 0;
    width: 80px;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display :block;
        width: 100%;
    }
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height :100%;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
    position: relative;
    margin-right: auto;
    margin-left: 25px;
    @media (max-width: 768px){
        display: none;
    }
`

const Login = styled.a`
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border: 1px solid #f9f9f9;
    border-radius:4px;
    transition: all .2s ease 0s;
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const UserImg = styled.img`
    height: 100%;
`

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header