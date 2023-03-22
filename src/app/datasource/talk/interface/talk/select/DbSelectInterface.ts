export type SelectorAll<TRecord> = () => ReturnedMany<TRecord>;

export type SelectorIn<TRecord> = (keys: number[]) => ReturnedMany<TRecord>;

export type SelectorNotIn<TRecord> = (keys: number[]) => ReturnedMany<TRecord>;

export type SelectorByCriteriaQ<TRecord> = (
  criteria: string,
  args: object
) => ReturnedMany<TRecord>;

export type ReturnedMany<TRecord> = Promise<Readonly<TRecord>>;
