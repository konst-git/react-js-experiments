import { AnimalType } from "#root/app/app2/org/def/goods/pet/AnimalType";

export const animalTypeAsHumanStrPlural: AnimalTypeAsStrType = {
  [AnimalType.cat]: "cats",
  [AnimalType.dog]: "dogs",
  [AnimalType.turtle]: "turtles",
};

export const animalTypeAsHumanStr: AnimalTypeAsStrType = {
  [AnimalType.cat]: "cat",
  [AnimalType.dog]: "dog",
  [AnimalType.turtle]: "turtle",
};

type AnimalTypeAsStrType = {
  [key in AnimalType]: string;
};
