import React from 'react'
import Icofont from 'react-icofont'
import UserImg from '../../assets/images/user.jpg'
const ProjectSummary = () =>{
    return (
      <div className="card border-0 flex-row my-3">
      <div className="col-2 mt-4"> <img src={UserImg} alt="userImage" className="card-img sphere"/></div>
        <div className="card-body">
        
            <h3 className="card-title font-weight-bolder text-orange">Project Title</h3>

            <p className="text-secondary date">22 Oct 2020 ~ <a href="/" className="user-link text-secondary">Keli</a></p>
            <div className="card-body">
            <p className="text-dark">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
                nihil quis dicta voluptates!
            </p>

            <div className="card-actions">
                <button type="button" className="like outline-green bg-white"><Icofont icon="like" className="text-success" /></button>
                <span className="like-num">3</span> 
                <button type="button" className="like bg-danger"><Icofont icon="like" className="text-white like-reverse" /></button>
                <span className="like-num">3</span> 
            </div>
            </div>
        </div>
    </div>
    )
}

export default  ProjectSummary