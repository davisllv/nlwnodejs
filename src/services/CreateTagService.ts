import { getCustomRepository } from "typeorm"
import { TagRepositories } from "../repositories/TagRepositories"

interface ITagRequest{
  name: string;
  
}

class CreateTagService{
  async execute({name}: ITagRequest){
    const tagRepositories = getCustomRepository(TagRepositories)

    if(!name){
      throw new Error("Name incorrect")
    }

    const tagAlreadyExists = await tagRepositories.findOne({name});

    if(tagAlreadyExists){
      throw new Error("Tag already exists")
    }

    const tag = tagRepositories.create({name})

    await tagRepositories.save(tag)
    return tag
  }

  
}

export {CreateTagService}