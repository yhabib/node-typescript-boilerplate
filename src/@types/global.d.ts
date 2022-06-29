type Nullable<T> = T | undefined | null;
type Opaque<T, V> = T & { readonly _type: V };
type Id<T> = Opaque<T, T>;

type Primitive = symbol | string | number | boolean | bigint | null | undefined;

type DeepReadonly<T> = T extends Primitive
  ? Readonly<T>
  : T extends (infer R)[]
  ? Readonly<R[]>
  : {
      readonly [K in keyof T]: DeepReadonly<T[K]>;
    };

type DeepPartial<T> = T extends Primitive
  ? T
  : T extends (infer R)[]
  ? R[]
  : {
      [K in keyof T]?: DeepPartial<T[K]>;
    };

