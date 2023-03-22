import { useEffect, useState } from "react";
import { PetId, Peto } from "#root/app/app2/org/def/goods/pet/peto/Peto";
import { MypicksContainer } from "#root/app/datasource/sourcedata/fakedb/mall/mypicks/MypicksContainer";
import { selectByAnimalTypes } from "#root/app/datasource/talk/org/goods/pet/peto/select/PetDaoSelect";
import { FilterContainer } from "#root/app/website/mall/catalog/filter/FilterContainer";
import { PetWidgetForCatalog } from "#root/app/website/mall/widget/PetWidgetForCatalog";

type Props = PickingProps & FilterProps;

export interface PickingProps {
  picks: MypicksContainer;

  onPick(petId: PetId): void;
}

interface FilterProps {
  filter: FilterContainer;
}

export function CatalogListing({ filter, picks, onPick }: Props) {
  const [pets, setPets] = useState<Readonly<Peto[]>>([]);

  useEffect(() => {
    (async () => {
      const fetched = await selectByAnimalTypes(filter.animalTypes);
      setPets(fetched);
    })();

    return () => {
      // this gets called when the component unmounts
    };
  }, [filter]);

  return (
    <div id="mallCatalogListing">
      {pets.map((pet) => {
        const isPicked = picks.indexOf(pet.id) > -1;

        return (
          <PetWidgetForCatalog
            onPick={onPick}
            petId={pet.id}
            pet={pet}
            isPicked={isPicked}
          />
        );
      })}
    </div>
  );
}
