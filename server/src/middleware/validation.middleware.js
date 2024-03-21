import{Joi,Segment,celebrate}from "celebrate"

export const validatesSignUp=celebrate({
   [ Segment.BODY]:Joi.object().keys({
    username: Joi.string().min(4).max(24).required(),
    password: Joi.string().min(8).max(32).required(),
    confirmedPassword: Joi.any().valid(Joi.ref("password"))
   }),
});

export const validatesSignIn=celebrate({
    [ Segment.BODY]:Joi.object().keys({
     username: Joi.string().required(),
     password: Joi.string().required(),
    })
 })
 