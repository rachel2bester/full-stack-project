package com.nology.courseology;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseologyRepository extends JpaRepository<Course, String> {
    Course findByid(String id);

    Course deleteByid(String id);
}
