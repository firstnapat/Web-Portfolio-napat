import React from 'react'
// import DashBoard from '../../assets/Car_Loan_Customer_Behavior_Report-1.png'
// import WebHip from '../../assets/webhipbone.png'
// import GitHub from '../../assets/github.png'
// import Jammming from '../../assets/jammming.png'
// import GCP from '../../assets/dataproject.png'
// import JSD from '../../assets/Homepage-Dashboard-Desktop.png'
import './project.css'
import TextScroller from '../run-text/runtext'




const Project = () => {
    return (
        <div id='project' className='w-full text-[#111111] bg-[#f5f5f5] pt-20'>
            <div className='max-w-[1000px] mx-auto justify-center w-full h-full'>

                <div className='pb-8'>
                    <TextScroller text={<p className='text-8xl font-bold inline text-[#05C19C] '>WORK WORK WORK</p>} />

                    {/* <p className='py-6'>// my recent work</p> */}
                </div>
                <div className='body'>
                    <div className="card-container border-[#5bc0eb] border-2 border-dashed">

                        <div className="card card--blue"><a href="https://github.com/firstnapat/End_to_end_de_project_covid19_daily_dashboard">

                            <div className="card--display flex flex-wrap justify-between"><i className="material-symbols-outlined">toys_fan</i>
                                <h1 className='text-md font-medium'>Data TH</h1>
                                <h2 >Data Engineer Project (Inprogress) </h2>
                            </div>

                            <div className="card--hover">
                                <h2 className='text-[#111111]'>End to End Data Pipeline on Google cloud (Inprogress)</h2>
                                <p className='text-[#111111]'>
                                    <li>Ingested Covid19 Data from REST API and Converted to Data frame.</li>
                                    <li>Utilized Cloud Composer to managed a data pipeline and Automated by Apache Airflow.</li>
                                    <li>Load final data to Serverless Data Warehouse in Google BigQuery and Visualized trend on Google Data Studio Dashboard.</li>
                                </p>


                                <p className="link">Click to see project</p>
                            </div></a>
                            <div className="card--border"></div>
                        </div>
                    </div>

                    <div className="card-container border-[#5bc0eb] border-2 border-dashed">
                        <div className="card"><a href="https://immifit.vercel.app/">
                            <div className="card--display flex flex-wrap justify-between"><i className="material-icons">snowboarding</i>
                                <h1 className='text-md font-medium'>Generation Thailand</h1>
                                <h2>Full-Stack Developer Project (2022)</h2>
                            </div>
                            <div className="card--hover">
                                <h2>Immifit Web App (2022)</h2>
                                <p>
                                    <li>Created Web development for exercise tracking.</li>
                                    <li>Used Html, CSS, JavaScript, Reactjs, Vitejs Dev Server, ExpressJs, NodeJs and SQL.</li>
                                    <li>Store data on MongoDB and Cloudinary.</li>
                                </p>
                                <p className="link">Click to see project</p>
                            </div></a>
                            <div className="card--border"></div>
                        </div>
                    </div>
                    <div className="card-container border-[#5bc0eb] border-2 border-dashed">
                        <div className="card"><a href="https://github.com/firstnapat/Data_Science_Bootcamp_Project/blob/main/Car-Loan-Customer-Bahavior-Report/Car_Loan_Customer_Behavior_Report.pdf">
                            <div className="card--display flex flex-wrap justify-between"><i className="material-symbols-outlined">insights</i>
                                <h1 className='text-md font-medium text-right'>Data Science Bootcamp <br /> Datarockie </h1>
                                <h2>Data Analytic Project (2022)</h2>
                            </div>
                            <div className="card--hover ">
                                <h2>Car Loan Customer Behavior Report (2022)</h2>
                                <p>        
                                    <li>Discovered the Car Loan Customer Behavior Data Set from Kaggle</li>
                                    <li>Clean data and Generated dashboard for Data insight such as Top5 jobs of Car Loan Customers, Average Age & Risk with House Ownership and Geo-chart.</li>

                                </p>
                                <p className="link">Click to see project</p>
                            </div></a>
                            <div className="card--border"></div>
                        </div>
                    </div>
                    <div className="card-container border-[#5bc0eb] border-2 border-dashed">
                        <div className="card card--yellow"><a href="https://jammming-app-by-napat.surge.sh/">
                            <div className="card--display flex flex-wrap justify-between"><i className="material-symbols-outlined">
                                library_music
                            </i>
                                <h1 className='text-md font-medium text-right'>Generation Thailand</h1>
                                <h2>Front-End Project </h2>
                            </div>
                            <div className="card--hover">
                                <h2>Jammming Playlist App With the Spotify API (2022)</h2>
                                <p>Build a React App for custom playlists that combines multiple components, interactive search functionality, and requests to the Spotify API.</p>
                                <p className="link">Click to see project</p>
                            </div></a>
                            <div className="card--border"></div>
                        </div>
                    </div>
                    <div className="card-container w-[1500px] border-[#5bc0eb] border-2 border-dashed">
                        <div className="card card--dark"><a href="https://yolohipbone.herokuapp.com/">
                            <div className="card--display flex flex-wrap justify-between"><i className="material-symbols-outlined">radiology</i>
                                <h1 className='text-md font-medium text-right'>Senior Project</h1>
                                <h2>Deep Learning Project (2022)</h2>
                            </div>
                            <div className="card--hover">
                                <h2>Web App for Spotting Broken Hip Bone on X-ray Image (2022)</h2>
                                <p>
                                    <li>Created Web development for exercise tracking.</li>
                                    <li>Used Html, CSS, JavaScript, Reactjs, Vitejs Dev Server, ExpressJs, NodeJs and SQL.</li>
                                    <li>Store data on MongoDB and Cloudinary.</li>
                                </p>
                                <p className="link ">Click to see project</p>
                            </div></a>
                            <div className="card--border"></div>
                        </div>
                    </div>
                    <div className="card-container w-[1500px] border-[#5bc0eb] border-2 border-dashed">
                        <div className="card card--light"><a href="https://github.com/firstnapat/Data_Science_Bootcamp_Project/tree/main/HW-SQL-Design_Database">
                            <div className="card--display flex flex-wrap justify-between"><i className="material-symbols-outlined">database</i>
                                <h1 className='text-md font-medium text-right'>Data Science Bootcamp <br /> Datarockie </h1>
                                <h2>Data Modeling Project (2022)</h2>
                            </div>
                            <div className="card--hover">
                                <h2>Database Design (2022)</h2>
                                <p>Database Design is one important part is Data Science. In Data Science Bootcamp I've learn about Restaurant Database Design. Designed table, Defined Primary Key & Foreign Key.</p>
                                <p className="link">Click to see project</p>
                            </div></a>
                            <div className="card--border"></div>
                        </div>
                    </div>
                    <div className="card-container w-[1500px] border-[#5bc0eb] border-2 border-dashed">
                        <div className="card card--dark"><a href="https://medium.com/@napatpianchana/%E0%B8%AA%E0%B8%A3%E0%B8%B8%E0%B8%9B-live-2022-ep-5-becoming-data-engineering-consultant-%E0%B8%9E%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B8%B2%E0%B8%99%E0%B8%95%E0%B9%8C-odds-d5cc25db3927">
                            <div className="card--display justify-between"><i className="material-symbols-outlined">engineering</i>
                                <h1 className='text-md font-medium text-right'>Blog - Medium</h1>
                                <h2>Becoming Data Engineering Consultant — P'Karn ODDS</h2>
                            </div>
                            <div className="card--hover">
                                <h2>Key Takeaways</h2>
                                <p>This is my first blog on Medium. I've learned how to become a Data Consultancy.
                                    <li>Skills of Data Consult</li>
                                    <li>Pitfall of Career</li>
                                    <li>Be in their shoes</li>
                                    <li>Know the right too for the right job </li>
                                    <li>Keep learning</li>
                                </p>
                                <p className="link">Click to read full content</p>
                            </div></a>
                            <div className="card--border"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='project pb-10'>
                    <div className="grid place-items-center font-mono">
                        <div className="rounded-md bg-gray-800 shadow-lg">
                            <div className="md:flex px-4 leading-none max-w-4xl">

                                <div className="flex-col text-gray-300">
                                    <p className="pl-4 pt-4 text-2xl font-bold">End to End Data Pipeline on Google cloud (Inprogress)</p>
                                    <div className="hr-text" data-content="">
                                        <div className="text-md flex justify-between px-4 my-2">
                                            <span className="font-bold">Data Engineer Project</span>
                                            <span className="font-bold">
        
                                            </span>
                                        </div>
                                        <p className="hidden md:block px-4 my-4 text-sm text-left">
                                            Ingested Covid19 Data from REST API and Converted to Data frame.
                                    Utilized Cloud Composer to managed a data pipeline and Automated by Apache Airflow.
                                    Load final data to Serverless Data Warehouse in Google BigQuery and Visualized trend on Google Data Studio Dashboard.
                                    </p>
                                        

                                        <div className="text-xs">
                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Python</button>

                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Google Cloud</button>

                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Tableau</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex-none ">
                                    <img src={GCP} alt="" className='max-w-[400px] rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg' />
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-4 pt-4 mb-4 w-full">
                                <div className="flex">
                                    <i className="material-icons mr-2 text-red-600">
                                        <a href="https://github.com/firstnapat/Data_Science_Bootcamp_Project/tree/main/Car-Loan-Customer-Bahavior-Report">
                                            <img src={GitHub} alt="" className='max-w-[30px]' />
                                        </a>
                                    </i>
                                    <i className="material-symbols-outlined"><span class="material-symbols-outlined ml-4 pt-1">
                                        open_in_new
                                    </span></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <div className="grid place-items-center font-mono">
                        <div className="rounded-md bg-gray-800 shadow-lg">
                            <div className="md:flex px-4 leading-none max-w-4xl">
                                <div className="flex-none ">
                                    <img src={DashBoard} alt="" className='max-w-[400px] rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg' />
                                </div>
                                <div className="flex-col text-gray-300">
                                    <p className="pl-4 pt-4 text-2xl font-bold">Car Loan Customer Behavior Report (2022)</p>
                                    <div className="hr-text" data-content="">
                                        <div className="text-md flex justify-between px-4 my-2">
                                            <span className="font-bold">Data Analytic Project</span>
                                            <span className="font-bold"></span>
                                        </div>
                                        <p className="hidden md:block px-4 my-4 text-sm text-left">For the last 4 months, I've been enrolled in Data Science Bootcamp with P'Toy Datarockie. I had to construct a variety of mini-projects. This one, of all. I discovered the Car Loan Customer Behavior Data Set from Kaggle, then I queried null value and created a dashboard for data insight such as Top5 jobs of Car Loan Customers, Average Age & Risk with House Ownership and Geo-chart. </p>

                                        <div className="text-xs">
                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Data Studio</button>


                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-4 pt-4 mb-4 w-full">
                                <div className="flex">
                                    <i className="material-icons mr-2 text-red-600">
                                        <a href="https://github.com/firstnapat/Data_Science_Bootcamp_Project/tree/main/Car-Loan-Customer-Bahavior-Report">
                                            <img src={GitHub} alt="" className='max-w-[30px]' />
                                        </a>
                                    </i>
                                    <i className="material-symbols-outlined"><span class="material-symbols-outlined ml-4 pt-1">
                                        open_in_new
                                    </span></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='project pt-10'>
                    <div className="grid place-items-center font-mono">
                        <div className="rounded-md bg-gray-800 shadow-lg">
                            <div className="md:flex px-4 leading-none max-w-4xl">
                                <div className="flex-none ">
                                    <img src={JSD} alt="" className='max-w-[400px] rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg' />
                                </div>
                                <div className="flex-col text-gray-300">
                                    <p className="pl-4 pt-4 text-2xl font-bold">Immifit Web App (2022)</p>
                                    <div className="hr-text" data-content="">
                                        <div className="text-md flex justify-between px-4 my-2">
                                            <span className="font-bold">Full-stack Project</span>
                                            <span className="font-bold"></span>
                                        </div>
                                        <p className="hidden md:block px-4 my-4 text-sm text-left">
                                            <li>Created Web development for exercise tracking.</li>
                                            <li>Used Html, CSS, JavaScript, Reactjs, Vitejs Dev Server, ExpressJs, NodeJs and SQL.</li>
                                            <li>Store data on MongoDB and Cloudinary.</li>
                                        </p>

                                        <div className="text-xs">
                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">MongoDB</button>
                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">ExpressJs</button>
                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">React</button>
                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">NodeJs</button>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-4 pt-4 mb-4 w-full">
                                <div className="flex">
                                    <i className="material-icons mr-2 text-red-600">
                                        <a href="https://github.com/firstnapat/Data_Science_Bootcamp_Project/tree/main/Car-Loan-Customer-Bahavior-Report">
                                            <img src={GitHub} alt="" className='max-w-[30px]' />
                                        </a>
                                    </i>
                                    <i className="material-symbols-outlined"><span class="material-symbols-outlined ml-4 pt-1">
                                        open_in_new
                                    </span></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='project pt-10'>
                    <div className="grid place-items-center font-mono">
                        <div className="rounded-md bg-gray-800 shadow-lg">
                            <div className="md:flex px-4 leading-none max-w-4xl">

                                <div className="flex-col text-gray-300">
                                    <p className="pl-4 pt-4 text-2xl font-bold">Jammming Playlist App With the Spotify API (2022)</p>
                                    <div className="hr-text" data-content="">
                                        <div className="text-md flex justify-between px-4 my-2">
                                            <span className="font-bold">FRONT-END APP Project</span>
                                            <span className="font-bold"></span>
                                        </div>
                                        <p className="hidden md:block px-4 my-4 text-sm text-left">Build a React App for custom playlists that combines multiple components, interactive search functionality, and requests to the Spotify API.</p>

                                        <div className="text-xs">
                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">React</button>

                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">HTML&CSS</button>

                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">API</button>
                                        </div>

                                    </div>
                                </div>
                                <div className="flex-none ">
                                    <img src={Jammming} alt="" className='max-w-[400px] rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg' />
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-4 pt-4 mb-4 w-full">
                                <div className="flex">
                                    <i className="material-icons mr-2 text-red-600">
                                        <a href="https://github.com/firstnapat/Data_Science_Bootcamp_Project/tree/main/Car-Loan-Customer-Bahavior-Report">
                                            <img src={GitHub} alt="" className='max-w-[30px]' />
                                        </a>
                                    </i>
                                    <i className="material-symbols-outlined"><span class="material-symbols-outlined ml-4 pt-1">
                                        open_in_new
                                    </span></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='project pt-10'>
                    <div className="grid place-items-center font-mono">
                        <div className="rounded-md bg-gray-800 shadow-lg">
                            <div className="md:flex px-4 leading-none max-w-4xl">
                                <div className="flex-none ">
                                    <img src={WebHip} alt="" className='max-w-[400px] rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg' />
                                </div>
                                <div className="flex-col text-gray-300">
                                    <p className="pl-4 pt-4 text-2xl font-bold">Web App for Spotting Broken Hip Bone on X-ray Image (2022)</p>
                                    <div className="hr-text" data-content="">
                                        <div className="text-md flex justify-between px-4 my-2">
                                            <span className="font-bold">AI Project</span>
                                            <span className="font-bold"></span>
                                        </div>
                                        <p className="hidden md:block px-4 my-4 text-sm text-left">
                                            <li>Built a web application to allow users to upload for predicted broken hip bones on x-ray images.</li>
                                            <li>Utilized YoloV5s Model in Python to detect possible broken hipbones when validate with test set accuracy resulted in 86.2%</li>
                                            <li>Deployed on Heroku cloud application platform.
                                                Used HTML, CSS, Python and Django framework.</li>
                                        </p>

                                        <div className="text-xs">
                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Yolov5</button>

                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Django</button>

                                            <button type="button" className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">Python</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-4 pt-4 mb-4 w-full">
                                <div className="flex">
                                    <i className="material-icons mr-2 text-red-600">
                                        <a href="https://github.com/firstnapat/Data_Science_Bootcamp_Project/tree/main/Car-Loan-Customer-Bahavior-Report">
                                            <img src={GitHub} alt="" className='max-w-[30px]' />
                                        </a>
                                    </i>
                                    <i className="material-symbols-outlined"><span class="material-symbols-outlined ml-4 pt-1">
                                        open_in_new
                                    </span></i>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div> */ }
        </div>
    )
}

export default Project


