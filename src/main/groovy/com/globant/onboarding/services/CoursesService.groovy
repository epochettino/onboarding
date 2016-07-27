package com.globant.onboarding.services

import com.globant.onboarding.model.Course
import groovy.util.logging.Slf4j
import org.springframework.stereotype.Service

@Service
@Slf4j
class CoursesService {
    def getCourses() {
        log.debug("Entering getCourses...")
        //TODO: logic to find the curse corresponding to an user
        def res = [new Course(id: 1, title:"Angul1", videoUrl:"https://github.com/training-committee/onboarding", name: "AngularJS", description: "AngularJS Course", imageUrl: "Test"),
                   new Course(id: 2, title:"Angul1", videoUrl:"https://github.com/training-committee/onboarding", name: "HTML5", description: "HTML5 Course", imageUrl: "Test"),
                   new Course(id: 3, title:"Angul1", videoUrl:"https://github.com/training-committee/onboarding", name: "CSS3", description: "CSS3 Course", imageUrl: "Test")]
    }

    Course findById(Long id){
        return new Course(id: id, title:'Angul1', videoUrl:'https://github.com/training-committee/onboarding', name: 'AngularJS', description: 'Angular Course', imageUrl: 'Test')
    }
}
