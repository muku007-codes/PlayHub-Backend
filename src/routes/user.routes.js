import { Router } from "express";
import { registerUser, loginUser, logoutUser, refreshAccessToken, getCurrentUser, changeCurrentPassword, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getUserChannelProfile} from "../controllers/user.controller.js"
import { upload } from "../middleswares/multer.middleware.js"
import { verifyJwt } from "../middleswares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ])
    , registerUser)

router.route("/login").post(loginUser)

router.route("/logout").post(verifyJwt, logoutUser)

router.route("/refresh-token").post(refreshAccessToken)
router.route("/current-user").get(verifyJwt, getCurrentUser) // ✅
router.route("/change-password").post(verifyJwt, changeCurrentPassword) // ✅
router.route("/update-account").patch(verifyJwt, updateAccountDetails) // ✅

router.route("/avatar").patch(verifyJwt, upload.single("avatar"), updateUserAvatar) // ✅
router.route("/cover-image").patch(verifyJwt, upload.single("coverImage"), updateUserCoverImage) // ✅

export default router