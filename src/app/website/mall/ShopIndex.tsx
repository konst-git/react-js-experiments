import React, { useState } from "react";

import { PetId } from "#root/app/app2/org/def/goods/pet/peto/Peto";
import { MypicksContainer } from "#root/app/datasource/sourcedata/fakedb/mall/mypicks/MypicksContainer";
import { selectorIn } from "#root/app/datasource/talk/org/goods/pet/peto/select/PetDaoSelect";
import { Catalog } from "#root/app/website/mall/catalog/Catalog";
import { MypicksListing } from "#root/app/website/mall/mypicks/MypicksListing";

export function ShopIndex() {
  const [picks, setPicks] = useState<MypicksContainer>([]);

  const onPick = (petId: PetId) => {
    setPicks([...picks, petId]);
  };

  const onRemovePick = (petId: PetId) => {
    // remove element from array
    const changed = picks.filter((petIdChecked) => petIdChecked !== petId);
    setPicks(changed);
  };

  return (
    <div id="mallMainWrapper">
      <div>
        <h1>Pet Shop</h1>
      </div>

      <div id="mallLevel2">
        <div id="mallLeftSide">
          <Catalog picks={picks} onPick={onPick} />
        </div>

        <div id="mallRightSide">
          <MypicksListing
            selectorIn={selectorIn}
            picks={picks}
            onRemovePick={onRemovePick}
          />
        </div>
      </div>
    </div>
  );
}
