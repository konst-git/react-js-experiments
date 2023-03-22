import { PetId, Peto } from "#root/app/app2/org/def/goods/pet/peto/Peto";

export type OnRemovePick = (petId: PetId) => void;

interface Props {
  petId: PetId;

  pet: Peto;

  onRemovePick: OnRemovePick;
}

export function PetWidgetForPicks({ petId, pet, onRemovePick }: Props) {
  return (
    <div className="mListingEntry">
      <div className="mCrate">
        <img src={"/" + pet.picture} />
        <button onClick={() => onRemovePick(petId)}>Remove</button>
      </div>

      <div className="mCrate">
        <div>{pet.name}</div>
        <div>{pet.gender}</div>
        <div className="particularAge">{pet.age}</div>
      </div>
    </div>
  );
}
