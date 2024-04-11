import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_TOKENLIFE } from "../config/keys";

export function hash (password){
    return bcrypt.hashSync(password, 12)
};

export function comparPassword(enteredPassword, usersPassword){
    return bcrypt.compareSync(enteredPassword, usersPassword)
}

export function signJwt(user) {

    const tokenUser = {
        sub: user._id, 
        username: user.username,
    }
    return jwt.sign(tokenUser, JWT_SECRET, { expiresIn: JWT_TOKENLIFE})
}



// if(!user || !user._id || !user.username){
//     throw new Error("Invalid user object");
// }
// let token;
// try{
//     const tokenUser = {
//         sub: user._id, 
//         username: user.username,
//     }
//     token= jwt.sign(tokenUser, JWT_SECRET,{
//         expiresIn: JWT_TOKENLIFE
//     });
// }catch(err){
//     throw new Error("Error signing the token: " + err.message);
// }
// return token;