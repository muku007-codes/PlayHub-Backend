import { asyncHandlers } from "../utils/asyncHandler.js"

const registerUser = asyncHandlers(async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

export { registerUser }