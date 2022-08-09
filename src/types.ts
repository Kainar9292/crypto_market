export declare type Recordable<T = any> = Record<string, T>;

export interface DefaultModule<T = Recordable> {
  readonly default: T
}
