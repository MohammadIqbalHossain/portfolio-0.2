import React from 'react';
// import myImage from '../../assets/In-profile__2_-removebg.png';
import './About.scss';

function About () {
    return (
        <div className='about__container'>
            {/* <div className='about__img-container'>
               <img src={myImage} className='about__img' alt="PROFILE_PHOTO" />
            </div> */}
            <div className='about__content'>
               <span>Hi, There</span>
               <h2 className='about__header-name underline'>I&apos;m Mohammad Iqbal Hossain.</h2>
               <p className='about__content-details'>
               <span>
               I’m a product designer and developer living in Asheville.
               </span>

               <span>
               Whether it’s breaking down ambiguous and challenging problems into an actionable design strategy, or collaborating, sketching, designing, refining, coding, and prototyping experiences that help and delight the user, I’m an end-to-end designer who has seen large, complicated projects through to completion with a high level of quality.
               </span>

               <span>
               While most of my 13 years of professional experience has been focused in design, along the way I’ve built a strong, diverse skillset that complements my work. I’ve developed websites, including this one. I made a large, pretty video game, where I did all the design, art, coding (C#), audio, and writing. I’ve produced videos and designed motion graphics. And over the years, I’ve gotten to work with a wide range of clients, from individuals to companies like Microsoft and Dell.
               </span>

                <span>
                Outside of work, I like to explore and learn new things (it’s why I do side projects). I love taking trips to pretty places, chasing and playing with my kiddos, making dinner, relaxing with my wife, and watching movies.
                </span>
                <span>
                    
                I’m currently not looking for new opportunities, but feel free to say hi!
                </span>
               </p>
            </div>
        </div>
    )
}

export default About; 