import React from 'react'
import "./MainSection.style.css"
// import { defaults } from 'chart.js/auto'
import { Chart as ChartJS ,defaults } from 'chart.js/auto'
import { Bar,Pie } from 'react-chartjs-2'
import SourceData from "../GraphsRep/SourceData.json"
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
                        hoverBorderColor:"#97BC625",
                        // barPercentage:'0.5',
                        data:SourceData.map((data)=>data.value),
                        backgroundColor: [
                            '#97BC62'
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
        <Pie
            data={{
                labels:SourceData.map((data)=>data.label),

                datasets:[
                    {
                        label:"SkillSet",
                        data:SourceData.map((data)=>data.value),
                        backgroundColor: [
                            '#D9F4C7',
                            '#F8FA90',
                            '#F4EF88',
                            '#AC9969',
                            '#9DCDC0'
                          ],
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