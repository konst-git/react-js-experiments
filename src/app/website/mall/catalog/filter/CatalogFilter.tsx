import { AnimalType } from "#root/app/app2/org/def/goods/pet/AnimalType";
import { animalTypesAsList } from "#root/app/app2/org/def/goods/pet/AnimalTypesAsList";
import { animalTypeAsHumanStrPlural } from "#root/app/app2/org/def/goods/pet/AnimalTypeAsHumanStr";
import { FilterContainer } from "#root/app/website/mall/catalog/filter/FilterContainer";
import { FilterButton } from "#root/app/website/mall/catalog/filter/widget/FilterButton";

interface Props {
  onFilterChanged: (filterContainer: FilterContainer) => void;
  chosenFilter: FilterContainer;
}

export function CatalogFilter({ onFilterChanged, chosenFilter }: Props) {
  const chosenAnimalTypes = chosenFilter.animalTypes;

  const onToggle = (animalType: AnimalType) => {
    const existingIndex = chosenAnimalTypes.indexOf(animalType);

    if (existingIndex != -1) {
      // remove element
      const typesChanged = chosenAnimalTypes.filter(
        (_, i) => i !== existingIndex
      );

      const filterChanged = {
        ...chosenFilter,
        animalTypes: typesChanged,
      };

      onFilterChanged(filterChanged);
    } else {
      // add element
      const typesChanged = [...chosenAnimalTypes, animalType];

      const filterChanged = {
        ...chosenFilter,
        animalTypes: typesChanged,
      };

      onFilterChanged(filterChanged);
    }
  };

  return (
    <div id="mallCatalogFilter">
      <h2>Filter</h2>
      <div className="buttonsStripe">
        {animalTypesAsList.map(function (animalType) {
          return (
            <FilterButton
              animalType={animalType}
              isOn={chosenAnimalTypes.includes(animalType)}
              text={animalTypeAsHumanStrPlural[animalType]}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    </div>
  );
}
