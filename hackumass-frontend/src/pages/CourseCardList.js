import "./CourseCardList.css"
import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import axios from 'axios';
import { toast } from 'react-toastify';

const CourseCardList = () => {
    const [ courseCardListData, setCourseCardListData ] = useState([])
    useEffect(() => {
        const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.get(`${baseUrl}/course/all`).then(res => {
            const { data } = res;
            const { status } = data;
            if (status === 200)
            {
                console.log(data.data);
                setCourseCardListData(data.data)
                // toast.success(data.success);
            }
        }).catch(err => {
            toast.success(err.message);
            console.log(err)
        })
    }, [])
    return (
        <div className="main-container">
            <div className="heading">
                <h1 className="heading__title">UMass CS Courses</h1>
                <p className="heading__credits"><a className="heading__link" target="_blank" href="https://dribbble.com/sl">Design by Simon Lurwer on Dribbble</a></p>
            </div>
            <div className="cards">
                {courseCardListData.map((card, index) => {
                    return <CourseCard index={index} key={card._id} codeName={card.codeName} fullName={card.fullName} />
                })}
            </div>
        </div>
    )

}

export default CourseCardList;