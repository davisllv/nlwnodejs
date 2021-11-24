import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs";

import { sign } from "jsonwebtoken";

import { UsersRepositories } from "../repositories/UserRepositories"

interface IAuthenticatedRequest{
  email: string;
  password: string;
}

class AuthenticatedUserService {
async execute({email, password}: IAuthenticatedRequest){
  const userRepositories = getCustomRepository(UsersRepositories);

  //Verificar se o email existe
  const user = await userRepositories.findOne({email})

  if(!user){
    throw new Error("Email/Password incorrect")
  }

  // Verificar se a senha está correta

  const passMatch = await compare(password, user.password)
  if(!passMatch){
    throw new Error("Email/Password incorrect")
  }
  const token = sign({
    email: user.email
  }, "bee551818ccca6666fa5aa87a0646c55",{
    subject: user.id,
    expiresIn: "1d"
  }
  )
  return token
}
}

export {AuthenticatedUserService}