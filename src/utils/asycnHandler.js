const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// const asyncHandler=() => (func) =>{
//     try {
//         func();
//     } catch (error) {
//         res.status(req.status || 500).json({
//             success: false,
//             message: error.message});

//     }
// }
export default asyncHandler;
