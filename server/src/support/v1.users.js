import {getUsersController,getUserIdController, getCommentCourseController,  getUserLogoutController, postCourseRegistrationController, putAllowCourseController, getCourseRegistrationController, getValidationRegistredController, getRequestCoursesController, postCommentController} from "../controller/v1/users.controller.js";

let getUsers ={
    "1.0.0": getUsersController
}

let getUserId = {
    "1.0.0": getUserIdController
}

let getUserLogout = {
    "1.0.0": getUserLogoutController
}

let postCourseRegistration = {
    "1.0.0": postCourseRegistrationController
}

let getCourseRegistration = {
    "1.0.0": getCourseRegistrationController
}

let getValidationRegistred = {
    "1.0.0": getValidationRegistredController
}

let getRequestCourses = {
    "1.0.0": getRequestCoursesController
}

let postComment = {
    "1.0.0": postCommentController
}

let getCommentCourse = {
    "1.0.0": getCommentCourseController
}

let putAllowCourse = {
    "1.0.0": putAllowCourseController
}

export {
    getUsers,
    getUserId,
    getUserLogout,
    postCourseRegistration,
    getCourseRegistration,
    getValidationRegistred,
    getRequestCourses,
    postComment,
    getCommentCourse,
    putAllowCourse
}