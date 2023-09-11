import { useParams } from "react-router-dom";
import CourseDetail from "../components/CourseDetail";
const CourseDetailPanel = () => {
    const params = useParams();
    const { codeName } = params;
    console.log(codeName);
    return (
        <CourseDetail codeName={codeName} />
    )
}

export default CourseDetailPanel;