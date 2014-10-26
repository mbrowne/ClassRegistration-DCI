/**
 * Use Case: Register Student(s) For Classes
 * Allows a parent or administrator to register students for classes.
 */
context RegisterStudents
{
    constructor(parent: User, cart: Cart) {
        bindRoles(parent, cart);
        ...
    }

    bindRoles(parent: User, cart: Cart) {
        Parent <- parent; //note: there should be a check to ensure that this is really a parent and not another type of User
        Students <- new Array<Student>;
        Cart <- cart;
        CourseCatalog <- require('repositories/CourseRepository');
        Registrar <- require('repositories/CourseRegistrationRepository');
        
        //This is a nested context; although it's part of the same use case, it made sense to use a separate
        //Context for payment to prevent this Context from getting too cluttered.
        PayForRegistrationsContext <- require('use-cases/RegisterStudents/PayForRegistrations');
        
        Mailer <- require('services/EmailService');
    }
    
    //Trigger methods (method bodies not shown)
    
    saveStudentInfo(data: Object);
    getCoursesForSelectionPage(): Array<Course>;
    addCourseToCart(studentId: int, courseId: int);
    removeCourseFromCart(studentId: int, courseId: int);
    getCartDisplayData(): Object;
    payForRegistrations(paymentInfo: Object);
    
    //Getter methods like getParent() and getStudents() (not shown)
    ...
    
    //Roles
    
    role Parent {}
    role Students {}

    role CourseCatalog {
        roleObjectContract: CourseRepository {
            findCurrentSemesterCourses(): Array[Course];
        }
        
        getEligibleCourses(): Array<Course> {
            ...
        }
    }
    
    role Cart {
        roleObjectContract: Cart {
            addCourse(studentId: int, courseId: int);
            removeCourse(studentId: int, courseId: int);
            getCoursesByStudentId(): {[studentId: int]: Course};
        }
        
        //Add course after validating student eligibility and course availability
        addCourseSecurely(studentId: int, courseId: int) {
            ...
        }
        removeCourseSecurely(studentId: int, courseId: int) {
            ...
        }
        getDisplayData(): Object {
            ...
        }
    }
    
    role Registrar {
        roleObjectContract: CourseRegistrationRepository {
            getAvailability(): {[courseId: int]: int};
            save(registration: CourseRegistration);
            remove(studentId: int, courseId: int);
        }
        
        //reserve the student a spot in the course
        holdSpotInCourse(studentId: int, courseId: int) {
            ...
        }
        //release the student's spot in the course, making it available to other students
        releaseSpotInCourse(studentId: int, courseId: int) {
            ...
        }
    }
    
    role PayForRegistrationsContext {
        roleObjectContract: PayForRegistrations;
    }
    
    role Mailer {
        roleObjectContract: {
            send(email: Email);
        }
    
        sendReceipt() {
            ...
        }
    }
}