import React from 'react'
import './skill.css'
// link images



const Skills = () => {
  return (
    <div name='skills' className='bg-[#f5f5f5] text-[#111111] border-b-2 border-black'>
      <div name='background' className='absolute z-0'>
        {/* <img src={Warehouse} alt="" /> */}
      </div>
      {/* Container */}

      <div className='max-w-[1200px] mx-auto p-4 pb-28 flex flex-col justify-center w-full h-full px-20'>
        <div>
          <p className='text-4xl font-bold inline text-[#111111]'></p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
          <div className="p-6 bg-white border-dashed border-black border-2">
            <h2 class="font-semibold text-lg text-left text-gray-800 mt-2 ">
              LANGUAGES
            </h2>
            <p class="mt-2 text-gray-800 text-left">
              <li>Python (Pandas, PySpark, OOP)</li>
              <li>Power Shell, Bash Code</li>
              <li>SQL (SubQuery, DDL, CASE)</li>
              <li>R (Tidyverse, ggplot2)</li>
            </p>
          </div>
          <div class="p-6 bg-white border-dashed border-black border-2">
            <h2 class="font-semibold text-lg text-left text-gray-800 mt-2">
              DATABASE MANAGEMENT
            </h2>
            <p class="mt-2 text-gray-800 text-left">
              <li>ETL</li>
              <li>Google Cloud Storage</li>
              <li>SQL (SubQuery, DDL, CASE)</li>
              <li>MongoDB</li>
              <li>Postgres</li>
            </p>
          </div>
          <div class="p-6 bg-white border-dashed border-black border-2">
            <h2 class="font-semibold text-lg text-left text-gray-800 mt-2">
              ANALYTICS
            </h2>
            <p class="mt-2 text-gray-800 text-left">
              <li>Data Modeling</li>
              <li>Data Wrangling</li>
              <li>Data Visualization</li>
              <li>SQL</li>
              <li>BigQuery</li>
              <li>Data Studio</li>
            </p>
          </div>
          <div class="p-6 bg-white border-dashed border-black border-2">
            <p class="text-left">
            </p>
            <h2 class="font-semibold text-lg text-left text-gray-800 mt-2">
              WEB PROGAMMING
            </h2>
            <p class="mt-2 text-gray-800 text-left">
              <li>HTML& CSS</li>
              <li>React</li>
              <li>ExpressJs</li>
              <li>NodeJs</li>
              <li>Django</li>
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills