import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program_1.jpg'
import program_2 from '../../assets/program_2.jpg'
import program_3 from '../../assets/program_3.jpg'
import program_icon_1 from '../../assets/background.jpeg'


const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src="" alt="" />
                <p>Graduation Dregree</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
        </div>
        <div className="program">
            <img src={program_3} alt="" />
        </div>
      
    </div>
  )
}

export default Programs
