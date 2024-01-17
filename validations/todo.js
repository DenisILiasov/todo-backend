import { body } from "express-validator";

export const registerValidation = [
    body('title').isLength({min: 1}),
    body('text').isLength({min: 5}),
    body('status').isLength({min: 1})
]