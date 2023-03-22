import { AnimalType } from "#root/app/app2/org/def/goods/pet/AnimalType";
import { Peto } from "#root/app/app2/org/def/goods/pet/peto/Peto";
import { storage } from "#root/app/datasource/sourcedata/fakedb/org/goods/pet/peto/PetoStorage";

export async function selectorIn(
  keysWanted: number[]
): Promise<Readonly<Peto[]>> {
  return storage.filter((pet) => keysWanted.includes(pet.id));
}

export async function selectByAnimalTypes(
  desiredAnimalTypes: AnimalType[]
): Promise<Readonly<Peto[]>> {
  if (!desiredAnimalTypes.length) {
    return storage;
  }

  return storage.filter((pet) => desiredAnimalTypes.includes(pet.type));
}
