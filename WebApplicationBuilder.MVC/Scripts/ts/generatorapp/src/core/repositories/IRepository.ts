interface IRepository<T, A> {
  create(id: string, attributes: Partial<A>): T;
  get(id: string): T | undefined;
  update(id: string, attributes: Partial<A>): void;
  remove(id: string): void;
}
