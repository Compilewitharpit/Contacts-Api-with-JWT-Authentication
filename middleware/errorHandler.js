const {constants} = require("../constants")

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode:500;
    switch(statusCode){
        case constants.FORBIDDEN:
            res.json({title: "Forbidden Content...authorization required",
                Meesage: err.Meesage,
                StackTrace: err.stack})
            break;
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation Error",
                Meesage: err.Meesage,
                StackTrace: err.stack})
                break;
        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized access",
                Meesage: err.Meesage,
                StackTrace: err.stack})
                break;
        case constants.PAGE_NOT_FOUND:
            res.json({title: "Page not found",
                Meesage: err.Meesage,
                StackTrace: err.stack})
                break;
        case constants.SERVER_ERROR:
            res.json({title: "Server Error",
                Meesage: err.Meesage,
                StackTrace: err.stack})
                break;
        default:
            console.log("No error...all good!")
     }
}


module.exports = errorHandler;