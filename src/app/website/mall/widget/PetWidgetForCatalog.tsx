import { PetId, Peto } from "#root/app/app2/org/def/goods/pet/peto/Peto";

export type OnPick = (petId: PetId) => void;

interface Props {
  onPick: OnPick;

  petId: PetId;

  pet: Peto;

  isPicked: boolean;
}

export function PetWidgetForCatalog({ petId, pet, isPicked, onPick }: Props) {
  return (
    <div className={`mListingEntry ${isPicked ? "isPicked" : ""}`}>
      <div className="mCrate">
        <img src={"/" + pet.picture} />
        <button onClick={() => onPick(petId)}>Pick me</button>
      </div>

      <div className="mCrate">
        <div>{pet.name}</div>
        <div>{pet.gender}</div>
        <div className="particularAge">{pet.age}</div>
      </div>
    </div>
  );
}
