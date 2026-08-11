import './LoadingPage.css';

export function LoadingPage({ isFading, h1textWidth, slideDistance }) {    

    return (
        <section className={`loading-page ${isFading ? 'loading-fade-out' : ''}`} >
            <div className="h1-wrapper" style={{'--h1-width': `${h1textWidth}px`}}>
                <div className='group' style={{'--slide-distance': `${slideDistance}px`}}>
                    <h1>Want a Fancy Website</h1>
                    <h1>Want a Fancy Website</h1>
                </div>
            </div>
        </section>
    )
}