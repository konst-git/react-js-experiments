import { AnimalType } from "#root/app/app2/org/def/goods/pet/AnimalType";

interface Props {
  animalType: AnimalType;

  text: string;

  isOn: boolean;

  onToggle(animalType: AnimalType): void;
}

export function FilterButton({ animalType, text, isOn, onToggle }: Props) {
  return (
    <span className="entryButtonSpot">
      <button
        className={isOn ? "isOn" : ""}
        name={animalType}
        onClick={() => onToggle(animalType)}
      >
        {text}
      </button>
    </span>
  );
}
