import { Request,Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";



class ListUserSendComplimentsController {
async handle(request: Request, response: Response){

  const { user_id} = request
 
  const listUserSendComplimentService = new ListUserSenderComplimentsService()

  const compliments = await listUserSendComplimentService.execute(user_id)

  response.json(compliments)
}

}

export { ListUserSendComplimentsController }