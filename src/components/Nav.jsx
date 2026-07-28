import { useRef, useState, useEffect } from 'react';
import './Nav.css';

export function Nav() {
    const [ activeIndex, setActiveIndex ] = useState(0);
    const navRefs = useRef([]);
    const isClickScrolling = useRef(false);
    
    const positionsFirst = [-115, -7, 108];
    const underlineWidthFirst = [79, 68, 94];

    const positionsSecond = [-107.5, -6.5, 101];
    const underlineWidthSecond = [71, 61, 84];

    const handleClick = (e, index) => {
        isClickScrolling.current = true;

        setActiveIndex(index);

        setTimeout(() => {
            isClickScrolling.current = false;
        }, 700);
    };

    useEffect(() => {
        const sections = [
            document.getElementById('about-me'),
            document.getElementById('projects'),
            document.getElementById('contact-me'),
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling.current) return;

                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const index = sections.findIndex(
                        (section) => section.id === entry.target.id
                    );

                    setActiveIndex(index);
                });
            },
            {
                threshold: 0.7,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="nav first">
                {['About me', 'Projects', 'Contact me']. map((item, index) => {
                    const targetId = item.toLowerCase().replace(' ', '-');

                    return (
                        <a href={`#${targetId}`} key={targetId}>
                            <p key={`nav-item-${index}`} 
                                item-text={item} 
                                onClick={(e) => handleClick(e, index)} 
                                ref={(el) => (navRefs.current[index] = el)} 
                                style={{ pointerEvents: index === activeIndex ? "none" : "auto", color: index === activeIndex ? 'transparent' : '' }}>
                                {item}
                            </p>
                        </a>
                    )
                })}
                <div className='underline' style={{ width: `${underlineWidthFirst[activeIndex]}px`, transform: `translateX(${positionsFirst[activeIndex]}px)`}}/>
            </div>
            <div className="nav second">
                {['About me', 'Projects', 'Contact me']. map((item, index) => {
                    const targetId = item.toLowerCase().replace(' ', '-');

                    return (
                        <a href={`#${targetId}`} key={targetId}>
                            <p key={`nav-item-${index}`} 
                                item-text={item} 
                                onClick={(e) => handleClick(e, index)} 
                                ref={(el) => (navRefs.current[index] = el)} 
                                style={{ pointerEvents: index === activeIndex ? "none" : "auto", color: index === activeIndex ? 'transparent' : '' }}>
                                {item}
                            </p>
                        </a>
                    )
                })}
                <div className='underline' style={{ width: `${underlineWidthSecond[activeIndex]}px`, transform: `translateX(${positionsSecond[activeIndex]}px)`}}/>
            </div>
        </>
    )
}