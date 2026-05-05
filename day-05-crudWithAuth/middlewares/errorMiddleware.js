// 1. The Wrapper: Catches errors in async functions and passes them to next()
export const catchAsyncErrors = (passedFunction) => (req, res, next) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);
};

// 2. The Global Handler: The final stop for all errors
export const globalErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};
