import React from 'react'
// import Datalake from '../../assets/GCP_Pipeline2.png'
import Profile from '../../assets/Profile.png'
import './about.css'
const About = () => {
    return (
        <div name='about' className='w-full pt-24 bg-[#f5f5f5] text-[#111111] border-black border-t-2 '>
            {/* <div name='background' className='absolute mx-24 mt-10 z-30'>
                <img src={Datalake} alt="" />
            </div> */}
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-6xl font-bold inline'>
                            ABOUT
                        </p>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-1 gap-10 px-4'>
                    <div className='sm:text-left text-[16px]'>
                        <p>Hello! My name is Napatsakorn Pianchana. I'm a new graduated in Bachelor's degree in
                            <span className='text-[#f4550f] font-bold hover-link z-40'> Electrical Engineering</span> at KhonKaen University.</p>
                        <p> I enjoy learning up new skills in the tech world.I became interested in data when I decided to study a variety of technological courses in my 4th year of university, including AI, Data Engineering, Data Analytics, and Web development and so on.</p>
                        <p> I collaborated with a Physician on my final project about<span className='font-bold text-[#f4550f] hover-link z-40'> Web application for spotting broken hip bones on X-ray images.
                        </span></p>
                        <br /><br />

                        <p>I have experience with <span className='text-[#f4550f] font-bold hover-link z-40'>python, SQL, Airflow, GCP, Bash, Spark, ETL.</span> I'm currently learning Cloud Platform and New technology about Data Engineer. I'm looking for <span className='text-[#f4550f] font-bold hover-link z-40'>Data Engineer full-time position.</span> In order to improve myself, learning to create value from data and make data driven. I'm looking for a new opportunity to work with a team of passionate people.</p>
                    </div>
                    <div className='flex justify-between '>
                    <div className='body2 mt-10 '>
                        <div className="containerskill2">
                            <div className="cards2">
                                <div className="card2 card-one">
                                    <h2 className="card-title2"><img src={Profile} alt="" className='max-w-[300px]' /></h2>
                                    
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    <div>
                    <p className='pl-14 py-4'>I'm experienced in Data Analytics processing such as Data Wrangling, Model Training, Data Visualization, AI, Data Engineering and Web Development. 
                    </p>
                    <p className='pl-14'>I'm joined in <span className='text-[#005eff] font-bold hover-link2 z-40'>Junior Software Developer Bootcamp at Generation Thailand.</span> I had learn about <span className='text-[#005eff] font-bold hover-link2 z-40'>MERN Stack (MongoDB, Express, React, Node)</span> and So on I will Learn about Container (Docker) and Data tools on ecosystem such as Hive, Hadoop, PostgreSQL, Airflow and keep on track on Road to Data Engineer. </p>
                    </div>
                    </div>
                    

                </div>
            </div>

        </div>

    )
}

export default About
