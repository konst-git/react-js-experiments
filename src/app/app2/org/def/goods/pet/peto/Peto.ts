import { AnimalType } from "#root/app/app2/org/def/goods/pet/AnimalType";
import { Gender } from "#root/app/app2/org/def/goods/pet/Gender";

export interface Peto {
  id: number;
  type: AnimalType;
  name: string;
  gender: Gender;
  age: number;
  descr?: string | null;
  picture: string | null;
}

export type PetId = Peto["id"];
