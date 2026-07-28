import './AboutMe.css';
import functionalityBlackIcon from '../assets/AboutMeImg/functionality-black-icon.png';
import interfaceBlackIcon from '../assets/AboutMeImg/interface-black-icon.png';
import interactionBlackIcon from '../assets/AboutMeImg/interaction-black-icon.png';
import functionalityGradientIcon from '../assets/AboutMeImg/functionality-gradient-icon.png';
import interfaceGradientIcon from '../assets/AboutMeImg/interface-gradient-icon.png';
import interactionGradientIcon from '../assets/AboutMeImg/interaction-gradient-icon.png';
import xmumImg from '../assets/AboutMeImg/xmum.png';
import graduateImg from '../assets/AboutMeImg/guaduate-photo.jpg';
import academicTranscript from '../assets/AboutMeImg/shunlinglim-academic-transcript.jpg';

export function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <div className="descr">
                <h1>I'm Lim Shun Ling</h1>
                <h2>Fresh Graduate & Frontend Developer dedicated to creating smooth, responsive web experiences. </h2>
                <div className="boxes-wrapper">
                    <div>
                        <div className='box black'>
                            <img className='icon' src={functionalityBlackIcon} alt="icon" />
                            <div>
                                <h3>Functionality</h3>
                                <p>Delivering stable and scalable frontend logic for robust websites.</p>
                            </div>
                        </div>
                        <div className='box gradient'>
                            <img className='icon' src={functionalityGradientIcon} alt="icon" />
                            <div>
                                <h3>Functionality</h3>
                                <p>Delivering stable and scalable frontend logic for robust websites.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='box black'>
                            <img className='icon' src={interfaceBlackIcon} alt="icon" />
                            <div>
                                <h3>Interface</h3>
                                <p>Modern layouts that emphasize high-quality visual standards.</p>
                            </div>
                        </div>
                        <div className='box gradient'>
                            <img className='icon' src={interfaceGradientIcon} alt="icon" />
                            <div>
                                <h3>Interface</h3>
                                <p>Modern layouts that emphasize high-quality visual standards.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="box black">
                            <img className='icon' src={interactionBlackIcon} alt="icon" />
                            <div>
                                <h3>Interaction</h3>
                                <p>Crafting immersive experiences with seamless animations.</p>
                            </div>
                        </div>
                        <div className="box gradient">
                            <img className='icon' src={interactionGradientIcon} alt="icon" />
                            <div>
                                <h3>Interaction</h3>
                                <p>Crafting immersive experiences with seamless animations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='languages-wrapper'>
                    <h4>Fluent Language:</h4>
                    <div>
                        <h4 className='language'>English</h4>
                        <h4 className='greeting'>Hello!</h4>
                    </div>
                    <div>
                        <h4 className='language'>Malay</h4>
                        <h4 className='greeting'>Hai!</h4>
                    </div>
                    <div>
                        <h4 className='language'>Mandarin</h4>
                        <h4 className='greeting'>你好！</h4>
                    </div>
                </div>
            </div>
            <div className="edu">
                <div className='photos'>
                    <img className='xmum-photo' src={xmumImg} alt="xmum" />
                    <img className='graduate-photo' src={graduateImg} alt="graduate" />
                </div>
                <div className='edu-content'>
                    <h2>Xiamen University Malaysia</h2>
                    <div>
                        <h4>Bachelor of Science in <br />Mathematics and Applied Mathematics</h4>
                        <p>Sep 2022 - Jul 2025</p>
                    </div>
                    <h4>CGPA 3.75 / 4.00</h4>
                    <a href={academicTranscript} target="_blank">View my academic transcript</a>
                </div>
            </div>
        </section>
    )
}