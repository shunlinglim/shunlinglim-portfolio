import './LoadingPage.css';

export function LoadingPage({ isFading }) {    

    return (
        <section className={`loading-page ${isFading ? 'loading-fade-out' : ''}`} >
            <div className="h1-wrapper">
                <div className='group'>
                    <h1>Want a Fancy Website</h1>
                    <h1>Want a Fancy Website</h1>
                </div>
            </div>
        </section>
    )
}