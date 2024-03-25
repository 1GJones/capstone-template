import { Joi, Segments } from 'celebrate';
import { celebrate } from 'celebrate';

export const validatesSignUp = celebrate({
  [Segments.BODY]: Joi.object().keys({
    username: Joi.string().min(4).max(24).required(),
    password: Joi.string().min(8).max(32).required(),
   confirmPassword: Joi.any().valid(Joi.ref('password')),
    email: Joi.string().email().required(),
  }),
});

// export const validatesSignIn = celebrate({
//   [Segments.BODY]: Joi.object().keys({
//     username: Joi.string().required(),
//     password: Joi.string().required(),
//     email:Joi.string().email().required(),
//   }),
// });