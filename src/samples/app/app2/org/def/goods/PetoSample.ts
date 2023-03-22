import { AnimalType } from "#root/app/app2/org/def/goods/pet/AnimalType";
import { Gender } from "#root/app/app2/org/def/goods/pet/Gender";
import { Peto } from "#root/app/app2/org/def/goods/pet/peto/Peto";

export const PetoSample: Peto = {
  id: 1,
  name: "PlatypusSample",
  type: AnimalType.cat,
  gender: Gender.f,
  age: 0.1,
  picture: "cat1.jpeg",
};
