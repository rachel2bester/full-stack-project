package com.nology.courseology;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@CrossOrigin
public class CourseologyController {
    @Autowired
    CourseologyService courseologyService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(Exception exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE
    @PostMapping("/course")
    public ResponseEntity<String> createCourse(@RequestBody Course course) {
        courseologyService.createCourse(course);
        return ResponseEntity.status(HttpStatus.CREATED).body("Created Course with ID : " + course.getId());
    }

    // READ
    @GetMapping("/course")
    public String getCustomCourse(@RequestParam String name) {
        return "Hello " + name;
    }

    @GetMapping("/course/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable String id) {
        Course course = courseologyService.findCourseById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(course);
    }

    @GetMapping("/courses")
    public ResponseEntity<List<Course>> getCourses() {
        List<Course> courseology = courseologyService.findAllCourses();
        return ResponseEntity.status(HttpStatus.FOUND).body(courseology);
    }

    @GetMapping("/random")
    public ResponseEntity<Course> getRandomCourse() {
        Course randomCourse = courseologyService.findRandomCourse();
        return ResponseEntity.status(HttpStatus.FOUND).body(randomCourse);
    }

    // UPDATE
    @PutMapping("/course/{id}")
    public ResponseEntity<String> updateCourse(@RequestBody Course newCourse, @PathVariable String id) {
        courseologyService.updateCourse(newCourse, id);
        return ResponseEntity.status(HttpStatus.OK).body("Updated Course with ID : " + newCourse.getId());
    }

    // DELETE

    @DeleteMapping("/course/{id}")
    @Transactional
    public ResponseEntity<String> deleteCourseById(@PathVariable String id) {
        courseologyService.deleteCourseById(id);
        return ResponseEntity.status(HttpStatus.OK).body("Course deleted");
    }
}
}
