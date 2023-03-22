import { useState } from "react";
import { CatalogFilter } from "#root/app/website/mall/catalog/filter/CatalogFilter";
import { FilterContainer } from "#root/app/website/mall/catalog/filter/FilterContainer";
import {
  PickingProps,
  CatalogListing,
} from "#root/app/website/mall/catalog/listing/CatalogListing";

type Props = PickingProps;

export function Catalog({ picks, onPick }: Props) {
  const [chosenFilter, setChosenFilter] = useState<FilterContainer>(
    new FilterContainer()
  );

  return (
    <div id="catalog">
      <CatalogFilter
        onFilterChanged={setChosenFilter}
        chosenFilter={chosenFilter}
      />

      <CatalogListing filter={chosenFilter} picks={picks} onPick={onPick} />
    </div>
  );
}
