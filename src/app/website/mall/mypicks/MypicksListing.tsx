import { useEffect, useState } from "react";
import { PetId, Peto } from "#root/app/app2/org/def/goods/pet/peto/Peto";
import { MypicksContainer } from "#root/app/datasource/sourcedata/fakedb/mall/mypicks/MypicksContainer";
import { SelectorIn } from "#root/app/datasource/talk/interface/talk/select/DbSelectInterface";
import { PetWidgetForPicks } from "#root/app/website/mall/widget/PetWidgetForPicks";

export { MypicksListing };

interface Props {
  selectorIn: SelectorIn<Peto[]>;

  picks: MypicksContainer;

  onRemovePick(petId: PetId): void;
}

function MypicksListing({ picks, selectorIn, onRemovePick }: Props) {
  const [pets, setPets] = useState<Readonly<Peto[]>>([]);

  useEffect(() => {
    (async () => {
      const fetched = await selectorIn(picks);
      setPets(fetched);
    })();

    return () => {
      // this gets called when the component unmounts
    };
  }, [picks]);

  return (
    <div id="mallMypicks">
      <h2>My Picks</h2>

      <div>
        {pets.map((pet) => (
          <PetWidgetForPicks
            onRemovePick={onRemovePick}
            petId={pet.id}
            pet={pet}
          />
        ))}
      </div>
    </div>
  );
}
