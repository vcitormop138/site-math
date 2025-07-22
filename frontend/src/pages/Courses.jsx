import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent } from "@mui/material";

function Courses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("/api/course").then(res => setCourses(res.data));
  }, []);
  return (
    <div>
      {courses.map(course => (
        <Card key={course.id} sx={{ m: 2 }}>
          <CardContent>
            <h2>{course.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: course.content }} />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
export default Courses;