import './Hero.css';

export function Hero() {

    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='hero-heading'>
                    <div className="main">
                        <p>Hey, I'm Shun Ling</p>
                        <div className='line'/>
                        <div className="h1-wrapper">
                            <div className='group'>
                                <h1>Want a Fancy Website</h1>
                                <h1>Want a Fancy Website</h1>
                            </div>
                        </div>
                        <div className='line'/>
                        <p>Hire me as a frontend developer</p>
                    </div>
                </div>
                <a href="#about-me">
                    <div className="clickable-range">
                        <div className="arrow-down" />
                    </div>
                </a>
            </div>
        </section>
    )
}