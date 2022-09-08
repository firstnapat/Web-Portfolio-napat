import React from 'react'
import './home.css';
import Hover from '../../components/hover/Hover'
// import Datasource from '../../assets/GCP_Pipeline.png'
import Airflowhover from '../../assets/airflow-hover3.png'
import Hadoop from '../../assets/hadoop-logo.png'
import GCP from '../../assets/gcp.png'
import Docker from '../../assets/dockerhome.png'


const Home = () => {
    return (

        <div id='home' className='pt-16 w-full pb-48 bg-[#f5f5f5]'>
            <span>           
                <div className='icon'>
                    <img src={Airflowhover} alt="airflow" width="125px" className='mt-10 fixed ml-[1350px] animate-spin z-20 invisible lg:visible' loading="lazy"/>
                </div>
                
            </span>
            <span>
                <div className='hadoop'>
                    <img src={Hadoop} alt="hadoop" width="150px" className='absolute ml-[900px] mt-[200px] z-50 invisible lg:visible' />
                </div>
            </span>
            <span>
                <div className='hadoop'>
                    <img src={GCP} alt="gcp" width="150px" className='absolute ml-[1000px] mt-[300px] z-50 invisible lg:visible' />
                </div>
            </span>
            <span>
                <div className='hadoop'>                
                    <img src={Docker} alt="gcp" width="150px" className='absolute ml-[750px] mt-[350px] z-50 invisible lg:visible' />
                </div>
            </span>

            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-2 flex flex-col justify-center h-full'>
                <p className='text-[#007D83] text-xl'>Hello, there. My name is</p>
                
                <h1 className='text-4xl sm:text-7xl font-bold text-[#007D83]'>NAPATSAKORN <br/>PIANCHANA</h1>
                <h2 className='text-4xl sm:text-6xl font-bold text-[#111111]'>I'm a Data Engineer.</h2>
                <p className='text-[#111111] py-4 max-w-[700px]'>I'm a First Jobber who want to switch career path from Electrical field to<span className='text-[#f4550f] hover-link z-40'>  Tech field.</span>  I'm really passionate in <span className='text-[#f4550f] hover-link z-40'> Data Engineer </span>and Software engineering.
                    Enjoy Problem solving and Learn new technology for improve myself.</p>
                <div>
                    <Hover />
                </div>
            </div>
        </div>
    )
}

export default Home
