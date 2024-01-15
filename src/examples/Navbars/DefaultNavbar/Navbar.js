import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Header.css';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import { onAuthStateChanged } from "firebase/auth";
import { useFirebase } from '../../../pages/Presentation/components/FirebaseContex';
function Header() {

    const navOptions = ["HOME", "NOSOTROS", "NUESTROS PRODUCTOS", "CENTRAL DE MONITOREO", "MEDIO AMBIENTE", "CONTACTO"];
    const location = useLocation();
    const currentPath = location.pathname;
    const [open, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
    const [scrolling, setScrolling] = useState(false);
    const [user, setUser] = useState();
    const [userImageUrl, setUserImageUrl] = useState();
    const { auth } = useFirebase();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setUserImageUrl(user?.photoURL);
        });


        return () => unsubscribe();
    }, [auth]);

    const loginWithGoogle = async () => {

        const provider = new GoogleAuthProvider();

        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error.message);
        }
    };

    const logout = async () => {

        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error al cerrar sesión:', error.message);
        }
    };



    const toggleMenu = () => {
        console.log(!open);
        setOpen(!open);
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolling = window.scrollY > 0;
            setScrolling(isScrolling);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`App ${scrolling ? 'scrolling' : ''}`} style={{backgroundColor:"#182440"}}>

            <div className={`header ${currentPath.includes('medio-ambiente') ? 'green' : ''}`}>
                <img onClick={() => window.location.href = '/home'} alt='logo' className={`logo ${isMobile ? 'mob' : ''}`} src={require("../../../assets/logo.png")} style={{ cursor: 'pointer' }}></img>
                {isMobile && (<button className="toggle" onClick={toggleMenu}>&#9776;</button>)}
            </div>
            <nav className={`navBar ${isMobile ? open ? 'mob-show' : 'mob-hide' : ''} ${currentPath.includes('medio-ambiente') ? 'green' : ''}`}>
                <button className={`toggle-close ${currentPath.includes('medio-ambiente') ? 'green' : ''}`} onClick={toggleMenu}>&#x2715;</button>
                {(navOptions.map((opcion, index) => (
                    <button
                        className={`${currentPath.includes(opcion.toLowerCase().replace(/\s/g, '-')) ? 'selected' : ''} ${currentPath.includes('medio-ambiente') ? 'green' : ''}`}
                        key={index}
                        onClick={() => window.location.href = `/${opcion.toLowerCase().replace(/\s/g, '-')}`}
                    >
                        {opcion}
                    </button>
                )))}

                <button
                    className={`${currentPath.includes('medio-ambiente') ? 'green' : ''}`}
                    onClick={() => window.location.href = 'https://www.psepagos.co/PSEHostingUI/ShowTicketOffice.aspx?ID=1383'}
                >
                    PAGOS

                </button>

                {user ? (
                    <div className="user-menu">
                        <div className="user-avatar" style={{ backgroundImage: `url(${userImageUrl})` }}></div>
                        <div className="logout-menu">
                            <button
                                onClick={logout}>Cerrar sesión
                            </button>
                        </div>
                    </div>
                ) : (
                    <button
                        className={`${currentPath.includes('medio-ambiente') ? 'green' : ''}`}
                        onClick={loginWithGoogle}>INICIAR SESION
                    </button>
                )}

            </nav>


        </div>
    );
}

export default Header;
