import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import Spinner from "../spinner/Spinner";
import Video from "./Video";

function Course(props) {
    const [loading, setLoading] =useState(true);
    const [courseVids, setCourseVids] = useState();

    // const getCourse = () => {
    //     axios
    //         .get(`/api/course/${id}`)
    //         .then((res) => {

    //         })
    // }
    
    useEffect(() => {
        getCourse();
    }, []);
    
    return (
        <div>
            <div>Course Page</div>
        </div>
    )
}

export default Course;