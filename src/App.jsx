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
    const [h1textWidth, setH1TextWidth] = useState(0);
    const [slideDistance, setSlideDistance] = useState(0);

    //Render Loading Page
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

    //Calculate h1 text width
    useEffect(() => {
        const calculateWidth = () => {
            const h1 = document.querySelector('.hero h1');

            if (!h1) return;

            const styles = window.getComputedStyle(h1);

            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            context.font = `
            ${styles.fontStyle}
            ${styles.fontWeight}
            ${styles.fontSize}
            ${styles.fontFamily}
        `;

            let textWidth = context.measureText(h1.textContent).width;

            // Add letter spacing
            const letterSpacing = parseFloat(styles.letterSpacing);

            if (!isNaN(letterSpacing)) {
                textWidth += letterSpacing * (h1.textContent.length - 1);
            }

            // Get the actual gap from .group
            const group = document.querySelector('.hero .group');
            const groupStyles = window.getComputedStyle(group);
            const gap = parseFloat(groupStyles.columnGap);

            setH1TextWidth(textWidth);
            setSlideDistance(textWidth + gap);
        };

        calculateWidth();

        const handleResize = () => {
            requestAnimationFrame(calculateWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isVisible && <LoadingPage isFading={isFading} h1textWidth={h1textWidth} slideDistance={slideDistance} />}
            <Hero isVisible={isVisible} isFading={isFading} h1textWidth={h1textWidth} slideDistance={slideDistance} />
            <Nav />
            <AboutMe />
            <Projects />
            <ContactMe />
        </>
    )
}

export default App
