package com.nology.courseology;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.stream.Collectors;

public class CourseologyService {
    @Autowired
    CourseologyRepository courseologyRepository;

    Course findCourseById (String id) {
        Course Course = courseologyRepository.findByid(id);
        if (Course == null) {
            throw new CourseNotFoundException();
        }
        return Course;
    }

    void deleteCourseById (String id) {
        findCourseById(id);
        courseologyRepository.deleteByid(id);

    }

    Course findRandomCourse() {
        List<Course> courseology = courseologyRepository.findAll();
        return courseology.get((int)(Math.random() * courseology.size()));
    }

    List<String> findAllCourseIds () {
        List<Course> courseology = courseologyRepository.findAll();
        return courseology.stream().map(Course::getId).collect(Collectors.toList());
    }

    List<Course> findAllCourses () {
        return courseologyRepository.findAll();
    }

    public void createCourse(Course Course) {
    }
}
