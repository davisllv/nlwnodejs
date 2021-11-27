import { getCustomRepository } from "typeorm";
import { TagRepositories } from "../repositories/TagRepositories";
import {classToPlain} from "class-transformer"

class ListTagService{
  async execute(){
    const tagRepositories = getCustomRepository(TagRepositories)

    const tags = await tagRepositories.find();

    return classToPlain(tags)
  }
}

export {ListTagService}