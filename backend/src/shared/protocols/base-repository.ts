export interface IBaseRepositoryExtended {
  id?: string;
}

export interface IBaseRepository<T extends IBaseRepositoryExtended> {
  create(data: Omit<T, 'id'>): Promise<T>;
  update(id: string, data: T): Promise<T | null>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}
