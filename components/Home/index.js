import styles from './styles.module.css'
import Navbar from './Navbar';
import IntroCard from './IntroCard';
import Footer from './Footer';
import Image from 'next/image'
import React, { useLayoutEffect, useEffect, useState } from 'react'
import bannerImage from '../../public/assets/banner-image.png'
import descImage from '../../public/assets/workdesc.png'
import timeImage from '../../public/assets/time.png'
import exhaustImage from '../../public/assets/exhaust.png'
import accImage from '../../public/assets/accessories.png'
import Slider from "react-slick";
import { grid, style } from '@mui/system';

const settingsSlick = {
    dots: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    slidesToShow: 1,

};

export default function Home() {

    return (
        <>
            <Navbar />
            <div className={styles.bannerContainer} id="banner">
                <Image className={styles.bannerImage} src={bannerImage} alt="company-logo" ></Image>
                <div className={styles.triangle1}></div>
                <div className={styles.triangle2}></div>
            </div>
            <div className={styles.squareBanner}>
                <h1>
                    Discover<br />
                    Your Wonder
                </h1>
                <h5 style={{ marginTop: '10px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </h5>
            </div>
            <div class={styles.introContainer} id="whowheare">
                <IntroCard
                    title="Who we are"
                    subtitle="Technology Company"
                    style={{
                        position: 'relative',
                        left: '4em',
                        top: '3em',
                    }}
                >
                    <p>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </IntroCard>
                <IntroCard
                    title="What we do"
                    subtitle="Professional Brand Management"
                >
                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                </IntroCard>
                <IntroCard
                    title="How we do"
                    subtitle="Strategize, Design, Collaborate"
                    style={{
                        position: 'relative',
                        right: '4em',
                        top: '3em',
                    }}
                >
                    <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.</p>
                </IntroCard>
            </div>

            <div className={styles.coreValue} id="core" >
                <div >
                    <h1 className={styles.title} >Our Core Values</h1>
                    <p style={{ marginTop: 24 }}>
                        Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
                        <br /><br />
                        In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim.
                    </p>
                    <ul className={styles.listContainer}>
                        <li>
                            <h4>Dedication</h4>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</p>
                        </li>
                        <li>
                            <h4>Intellectual Honesty</h4>
                            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</p>
                        </li>
                        <li>
                            <h4>Curiosity</h4>
                            <p> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                        </li>
                    </ul>
                </div>
                <Image src={descImage} alt="working people" width="420" height="250"></Image>

            </div>
            <div className={styles.outerSpecialContainer} id="speciality">
                <div className={styles.innerSpecialContainer}>
                    <h1 className={styles.title} >OUR SPECIALITY</h1>
                    <p style={{ marginTop: 24 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.
                    </p>

                    <Slider {...settingsSlick} className={styles.slickContainer}>
                        <div className={styles.itemSlick} >
                            <Image src={timeImage} alt="working people" width="121" height="121"></Image>
                            <h5>Speed Improvement</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                        </div>
                        <div className={styles.itemSlick}>
                            <Image src={exhaustImage} alt="working people" width="121" height="121"></Image>
                            <h5>Exhaust</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                        </div>
                        <div className={styles.itemSlick}>
                            <Image src={accImage} alt="working people" width="121" height="121"></Image>
                            <h5>Speed Improvement</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
                        </div>
                    </Slider>
                </div>
            </div>
            <Footer />
        </>
    )
}
