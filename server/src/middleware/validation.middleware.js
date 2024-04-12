import { Segments, Joi, celebrate } from "celebrate";

export const validateSignUp = celebrate({
    [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        userName: Joi.string().required(),
        password: Joi.string().required(),
        confirmPassword: Joi.any().valid(Joi.ref("password")),
        address: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        zipCode: Joi.string().required(),
        selectedAvatar: Joi.string().required(),
        favGenres: Joi.string(),
    }),
});

export const validateSignIn = celebrate({
    [Segments.BODY]: Joi.object().keys({
        userName: Joi.string().required(),
        password: Joi.string().required(),
    }),
});
