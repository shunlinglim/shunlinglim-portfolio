import { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { AboutMe } from './components/AboutMe'
import { Projects } from './components/Projects'
import { ContactMe } from './components/ContactMe'
import './App.css'
import { LoadingPage } from './components/LoadingPage'

function App() {
    const [isFading, setIsFading] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lockedScrollY = 0;

        const preventScroll = () => {
            window.scrollTo(0, lockedScrollY);
        };

        const lockScroll = () => {
            lockedScrollY = window.scrollY;

            window.addEventListener('scroll', preventScroll, { passive: true });
        };

        const unlockScroll = () => {
            window.removeEventListener('scroll', preventScroll);
        };

        const handleLoad = () => {
            // Jump to top while still locked
            lockedScrollY = 0;
            window.scrollTo(0, 0);

            setIsFading(true);

            setTimeout(() => {
                setIsVisible(false);
                unlockScroll();
            }, 3000);
        };

        if (isVisible) {
            lockScroll();

            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
            }
        }

        return () => {
            window.removeEventListener('load', handleLoad);
            unlockScroll();
        };
    }, [isVisible]);

    return (
        <>
            {isVisible && <LoadingPage isFading={isFading} />}
            <Hero isVisible={isVisible} isFading={isFading} />
            <Nav />
            <AboutMe />
            <Projects />
            <ContactMe />
        </>
    )
}

export default App
