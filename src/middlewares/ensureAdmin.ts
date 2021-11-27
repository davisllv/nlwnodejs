import { Request, Response, NextFunction} from "express"
import { UsersRepositories } from "../repositories/UserRepositories";
import { getCustomRepository } from "typeorm";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
  const { user_id } = request;

  const userRepositories = getCustomRepository(UsersRepositories);

  const user = await userRepositories.findOne(user_id);
  
  

  if(user?.admin){
    return next()
  }

  
    return response.status(401).json({
      error: "Unauthorized"
    })
  
}