import { userModel } from "../models/user.model.js";
import asynchandeler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asynchandeler(async (req, res) => {
  const { fullName, email, userName, password } = req.body;
  if (
    [fullName, email, userName, password].some(
      (item) => item === undefined || item === ""
    )
  ) {
    throw new ApiError(400, "All Fields must be Provided");
  } else {
    const existinguser = await userModel.findOne({
      $or: [{ email }, { userName }],
    });
    if (existinguser) {
      throw new ApiError(409, "Email Already Exists");
    }

    const avatarlocalpath = req.files?.avatar[0]?.path;
    const coverImagelocalpath = req.files?.coverImage ? [0]?.path : undefined;

    if (!avatarlocalpath) {
      throw new ApiError(409, "Avatar is Required");
    }
    const avatarCloudinaryUrl = await uploadOnCloudinary(avatarlocalpath);
    const coverImageCloudinaryUrl =
      await uploadOnCloudinary(coverImagelocalpath);

    const newUser = await userModel.create({
      fullName,
      email,
      userName: userName.toLowerCase(),
      avatar: avatarCloudinaryUrl.url,
      coverImage: coverImageCloudinaryUrl?.url || "",
      password,
    });
    res.status(201).json(new ApiResponse(201, newUser, "user Registered"));
  }
});
export { registerUser };
