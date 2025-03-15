import React from 'react'
import "./MainSection.style.css"
// import { defaults } from 'chart.js/auto'
import { Chart as ChartJS ,defaults } from 'chart.js/auto'
import { Bar,Doughnut,Line } from 'react-chartjs-2'
import SourceData from "../GraphsRep/SourceData.json"
import Button from "../Utils/Button.jsx"
const Skills = () => {
        defaults.maintainAspectRatio = false;
        defaults.responsive = true;
        defaults.plugins.title.display = true;
        defaults.plugins.title.align = "start";
        defaults.plugins.title.font.size = 20;
        defaults.plugins.title.color = "black";
   
  return (
    <section className='main-container-skills'>
        <div className="language-skills">
        <p className='lang-title raleway-thin-black'>Languages I've delt with</p>
            <div className='lang-container'>
            <Bar
            data={{
                labels:SourceData.map((data)=>data.label),

                datasets:[
                    {
                        label:"SkillSet",
                        data:SourceData.map((data)=>data.value),
                        backgroundColor: [
                            '#1E2761',
                            '#408EC6',
                            '#7A2048' 
                          ],
                          borderRadius: 5,
                    },
                ]
            }}
            />
        </div>
        </div>
       
       <div className='dsa-skills'>
         <p className='dsa-title raleway-thin-black'>Practice as Much as Data Structures and it will Never be Enough!</p>
         <div className="dsa-container">
        <Doughnut
            data={{
                labels:SourceData.map((data)=>data.label),

                datasets:[
                    {
                        label:"SkillSet",
                        data:SourceData.map((data)=>data.value),
                        backgroundColor: [
                            '#1E2761',
                            '#408EC6',
                            '#7A2048' 
                          ],
                          borderRadius: 5,
                    },
                ]
            }}
            />
        </div>
       </div>
       

       <div className="leetcode-api-main-container">
        <div className='leetcode-api-sub-container'>
        <p className='leetcode-api-title raleway-thin-black'>My LeetCode Journey has been a little rough...</p>
         <Button BtnName={"Wanna Checkout?"}/>
        </div>
        <div className="LeetCode-api">
        <Bar
            data={{
                labels:SourceData.map((data)=>data.label),
                datasets:[
                    {
                        label:"SkillSet",
                        data:SourceData.map((data)=>data.value),
                        backgroundColor: "#064FF0",
                        borderColor: "#064FF0",
                    },
                ]
            }}
            />
        </div>
       </div>
        
    </section>
  )
}

export default Skills