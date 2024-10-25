// import { useState } from 'react'
import './JobCard.css'

function JobCard() {
//   const [count, setCount] = useState(0)

  return (
    <>
    <div className="job-card">
        <div>
            {/* <image src="#" alt="Job Title" /> */}
            <p>Image will be here</p>
        </div>
        <div>
            <h3>Job Title</h3>
            <div>
                <p>ratings</p>
                <p>Verified</p>
            </div>
            <p>Company Description Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Sunt corporis quas magnam? Placeat quo possimus nam dolore aperiam, 
                error facere impedit pariatur quae quos recusandae eius nihil 
                ducimus nostrum repellat.
            </p>
        </div>
        <div>
            <button>Apply</button>
            <button>View Details</button>
        </div>
    </div>
    </>
  )
}

export default JobCard;
