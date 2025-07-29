
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model PrivateChat
 * 
 */
export type PrivateChat = $Result.DefaultSelection<Prisma.$PrivateChatPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.privateChat`: Exposes CRUD operations for the **PrivateChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrivateChats
    * const privateChats = await prisma.privateChat.findMany()
    * ```
    */
  get privateChat(): Prisma.PrivateChatDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Group: 'Group',
    Message: 'Message',
    Reaction: 'Reaction',
    PrivateChat: 'PrivateChat'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "group" | "message" | "reaction" | "privateChat"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      PrivateChat: {
        payload: Prisma.$PrivateChatPayload<ExtArgs>
        fields: Prisma.PrivateChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrivateChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrivateChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          findFirst: {
            args: Prisma.PrivateChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrivateChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          findMany: {
            args: Prisma.PrivateChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>[]
          }
          create: {
            args: Prisma.PrivateChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          createMany: {
            args: Prisma.PrivateChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrivateChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>[]
          }
          delete: {
            args: Prisma.PrivateChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          update: {
            args: Prisma.PrivateChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          deleteMany: {
            args: Prisma.PrivateChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrivateChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrivateChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>[]
          }
          upsert: {
            args: Prisma.PrivateChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrivateChatPayload>
          }
          aggregate: {
            args: Prisma.PrivateChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrivateChat>
          }
          groupBy: {
            args: Prisma.PrivateChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrivateChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrivateChatCountArgs<ExtArgs>
            result: $Utils.Optional<PrivateChatCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    group?: GroupOmit
    message?: MessageOmit
    reaction?: ReactionOmit
    privateChat?: PrivateChatOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sentMessages: number
    receivedPrivateMessages: number
    groups: number
    createdGroups: number
    reactions: number
    initiatedPrivateChats: number
    receivedPrivateChats: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedPrivateMessages?: boolean | UserCountOutputTypeCountReceivedPrivateMessagesArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
    createdGroups?: boolean | UserCountOutputTypeCountCreatedGroupsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    initiatedPrivateChats?: boolean | UserCountOutputTypeCountInitiatedPrivateChatsArgs
    receivedPrivateChats?: boolean | UserCountOutputTypeCountReceivedPrivateChatsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedPrivateMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInitiatedPrivateChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedPrivateChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateChatWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    members: number
    messages: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | GroupCountOutputTypeCountMembersArgs
    messages?: boolean | GroupCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type MessageCountOutputType
   */

  export type MessageCountOutputType = {
    reactions: number
    lastMessageGroups: number
    PrivateChatLastMessage: number
  }

  export type MessageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reactions?: boolean | MessageCountOutputTypeCountReactionsArgs
    lastMessageGroups?: boolean | MessageCountOutputTypeCountLastMessageGroupsArgs
    PrivateChatLastMessage?: boolean | MessageCountOutputTypeCountPrivateChatLastMessageArgs
  }

  // Custom InputTypes
  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageCountOutputType
     */
    select?: MessageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountLastMessageGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }

  /**
   * MessageCountOutputType without action
   */
  export type MessageCountOutputTypeCountPrivateChatLastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateChatWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    image: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedPrivateMessages?: boolean | User$receivedPrivateMessagesArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    createdGroups?: boolean | User$createdGroupsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    initiatedPrivateChats?: boolean | User$initiatedPrivateChatsArgs<ExtArgs>
    receivedPrivateChats?: boolean | User$receivedPrivateChatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedPrivateMessages?: boolean | User$receivedPrivateMessagesArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    createdGroups?: boolean | User$createdGroupsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    initiatedPrivateChats?: boolean | User$initiatedPrivateChatsArgs<ExtArgs>
    receivedPrivateChats?: boolean | User$receivedPrivateChatsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedPrivateMessages: Prisma.$MessagePayload<ExtArgs>[]
      groups: Prisma.$GroupPayload<ExtArgs>[]
      createdGroups: Prisma.$GroupPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      initiatedPrivateChats: Prisma.$PrivateChatPayload<ExtArgs>[]
      receivedPrivateChats: Prisma.$PrivateChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      image: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedPrivateMessages<T extends User$receivedPrivateMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedPrivateMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdGroups<T extends User$createdGroupsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    initiatedPrivateChats<T extends User$initiatedPrivateChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$initiatedPrivateChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedPrivateChats<T extends User$receivedPrivateChatsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedPrivateChatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedPrivateMessages
   */
  export type User$receivedPrivateMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.createdGroups
   */
  export type User$createdGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User.initiatedPrivateChats
   */
  export type User$initiatedPrivateChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    where?: PrivateChatWhereInput
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    cursor?: PrivateChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * User.receivedPrivateChats
   */
  export type User$receivedPrivateChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    where?: PrivateChatWhereInput
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    cursor?: PrivateChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
    lastMessageId: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    creatorId: string | null
    lastMessageId: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    creatorId: number
    lastMessageId: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    lastMessageId?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    lastMessageId?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    creatorId?: true
    lastMessageId?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    creatorId: string
    lastMessageId: string | null
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    lastMessageId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | Group$lastMessageArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    messages?: boolean | Group$messagesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    lastMessageId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | Group$lastMessageArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    lastMessageId?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | Group$lastMessageArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creatorId?: boolean
    lastMessageId?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "creatorId" | "lastMessageId", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | Group$lastMessageArgs<ExtArgs>
    members?: boolean | Group$membersArgs<ExtArgs>
    messages?: boolean | Group$messagesArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | Group$lastMessageArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | Group$lastMessageArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      lastMessage: Prisma.$MessagePayload<ExtArgs> | null
      members: Prisma.$UserPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      creatorId: string
      lastMessageId: string | null
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastMessage<T extends Group$lastMessageArgs<ExtArgs> = {}>(args?: Subset<T, Group$lastMessageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends Group$membersArgs<ExtArgs> = {}>(args?: Subset<T, Group$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Group$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Group$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
    readonly creatorId: FieldRef<"Group", 'String'>
    readonly lastMessageId: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.lastMessage
   */
  export type Group$lastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * Group.members
   */
  export type Group$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Group.messages
   */
  export type Group$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    timestamp: Date | null
    edited: boolean | null
    imageUrl: string | null
    dbCreatedAt: Date | null
    dbUpdatedAt: Date | null
    senderId: string | null
    recipientUserId: string | null
    recipientGroupId: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    timestamp: Date | null
    edited: boolean | null
    imageUrl: string | null
    dbCreatedAt: Date | null
    dbUpdatedAt: Date | null
    senderId: string | null
    recipientUserId: string | null
    recipientGroupId: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    timestamp: number
    edited: number
    imageUrl: number
    dbCreatedAt: number
    dbUpdatedAt: number
    senderId: number
    recipientUserId: number
    recipientGroupId: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    edited?: true
    imageUrl?: true
    dbCreatedAt?: true
    dbUpdatedAt?: true
    senderId?: true
    recipientUserId?: true
    recipientGroupId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    edited?: true
    imageUrl?: true
    dbCreatedAt?: true
    dbUpdatedAt?: true
    senderId?: true
    recipientUserId?: true
    recipientGroupId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    edited?: true
    imageUrl?: true
    dbCreatedAt?: true
    dbUpdatedAt?: true
    senderId?: true
    recipientUserId?: true
    recipientGroupId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    timestamp: Date
    edited: boolean
    imageUrl: string | null
    dbCreatedAt: Date
    dbUpdatedAt: Date
    senderId: string
    recipientUserId: string | null
    recipientGroupId: string | null
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    edited?: boolean
    imageUrl?: boolean
    dbCreatedAt?: boolean
    dbUpdatedAt?: boolean
    senderId?: boolean
    recipientUserId?: boolean
    recipientGroupId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipientUser?: boolean | Message$recipientUserArgs<ExtArgs>
    recipientGroup?: boolean | Message$recipientGroupArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    lastMessageGroups?: boolean | Message$lastMessageGroupsArgs<ExtArgs>
    PrivateChatLastMessage?: boolean | Message$PrivateChatLastMessageArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    edited?: boolean
    imageUrl?: boolean
    dbCreatedAt?: boolean
    dbUpdatedAt?: boolean
    senderId?: boolean
    recipientUserId?: boolean
    recipientGroupId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipientUser?: boolean | Message$recipientUserArgs<ExtArgs>
    recipientGroup?: boolean | Message$recipientGroupArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    edited?: boolean
    imageUrl?: boolean
    dbCreatedAt?: boolean
    dbUpdatedAt?: boolean
    senderId?: boolean
    recipientUserId?: boolean
    recipientGroupId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipientUser?: boolean | Message$recipientUserArgs<ExtArgs>
    recipientGroup?: boolean | Message$recipientGroupArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    timestamp?: boolean
    edited?: boolean
    imageUrl?: boolean
    dbCreatedAt?: boolean
    dbUpdatedAt?: boolean
    senderId?: boolean
    recipientUserId?: boolean
    recipientGroupId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "timestamp" | "edited" | "imageUrl" | "dbCreatedAt" | "dbUpdatedAt" | "senderId" | "recipientUserId" | "recipientGroupId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipientUser?: boolean | Message$recipientUserArgs<ExtArgs>
    recipientGroup?: boolean | Message$recipientGroupArgs<ExtArgs>
    reactions?: boolean | Message$reactionsArgs<ExtArgs>
    lastMessageGroups?: boolean | Message$lastMessageGroupsArgs<ExtArgs>
    PrivateChatLastMessage?: boolean | Message$PrivateChatLastMessageArgs<ExtArgs>
    _count?: boolean | MessageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipientUser?: boolean | Message$recipientUserArgs<ExtArgs>
    recipientGroup?: boolean | Message$recipientGroupArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    recipientUser?: boolean | Message$recipientUserArgs<ExtArgs>
    recipientGroup?: boolean | Message$recipientGroupArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      recipientUser: Prisma.$UserPayload<ExtArgs> | null
      recipientGroup: Prisma.$GroupPayload<ExtArgs> | null
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      lastMessageGroups: Prisma.$GroupPayload<ExtArgs>[]
      PrivateChatLastMessage: Prisma.$PrivateChatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      timestamp: Date
      edited: boolean
      imageUrl: string | null
      dbCreatedAt: Date
      dbUpdatedAt: Date
      senderId: string
      recipientUserId: string | null
      recipientGroupId: string | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipientUser<T extends Message$recipientUserArgs<ExtArgs> = {}>(args?: Subset<T, Message$recipientUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    recipientGroup<T extends Message$recipientGroupArgs<ExtArgs> = {}>(args?: Subset<T, Message$recipientGroupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reactions<T extends Message$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Message$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lastMessageGroups<T extends Message$lastMessageGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Message$lastMessageGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PrivateChatLastMessage<T extends Message$PrivateChatLastMessageArgs<ExtArgs> = {}>(args?: Subset<T, Message$PrivateChatLastMessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly timestamp: FieldRef<"Message", 'DateTime'>
    readonly edited: FieldRef<"Message", 'Boolean'>
    readonly imageUrl: FieldRef<"Message", 'String'>
    readonly dbCreatedAt: FieldRef<"Message", 'DateTime'>
    readonly dbUpdatedAt: FieldRef<"Message", 'DateTime'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly recipientUserId: FieldRef<"Message", 'String'>
    readonly recipientGroupId: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.recipientUser
   */
  export type Message$recipientUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Message.recipientGroup
   */
  export type Message$recipientGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Message.reactions
   */
  export type Message$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Message.lastMessageGroups
   */
  export type Message$lastMessageGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Message.PrivateChatLastMessage
   */
  export type Message$PrivateChatLastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    where?: PrivateChatWhereInput
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    cursor?: PrivateChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionMinAggregateOutputType = {
    emoji: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    messageId: string | null
  }

  export type ReactionMaxAggregateOutputType = {
    emoji: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    messageId: string | null
  }

  export type ReactionCountAggregateOutputType = {
    emoji: number
    createdAt: number
    updatedAt: number
    userId: number
    messageId: number
    _all: number
  }


  export type ReactionMinAggregateInputType = {
    emoji?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    messageId?: true
  }

  export type ReactionMaxAggregateInputType = {
    emoji?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    messageId?: true
  }

  export type ReactionCountAggregateInputType = {
    emoji?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    messageId?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    emoji: string
    createdAt: Date
    updatedAt: Date
    userId: string
    messageId: string
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    emoji?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    messageId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    emoji?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    messageId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    emoji?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    messageId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectScalar = {
    emoji?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    messageId?: boolean
  }

  export type ReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"emoji" | "createdAt" | "updatedAt" | "userId" | "messageId", ExtArgs["result"]["reaction"]>
  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    message?: boolean | MessageDefaultArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      message: Prisma.$MessagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      emoji: string
      createdAt: Date
      updatedAt: Date
      userId: string
      messageId: string
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `emoji`
     * const reactionWithEmojiOnly = await prisma.reaction.findMany({ select: { emoji: true } })
     * 
     */
    findMany<T extends ReactionFindManyArgs>(args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
     */
    create<T extends ReactionCreateArgs>(args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionCreateManyArgs>(args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `emoji`
     * const reactionWithEmojiOnly = await prisma.reaction.createManyAndReturn({
     *   select: { emoji: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
     */
    delete<T extends ReactionDeleteArgs>(args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionUpdateArgs>(args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionDeleteManyArgs>(args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionUpdateManyArgs>(args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reactions and only return the `emoji`
     * const reactionWithEmojiOnly = await prisma.reaction.updateManyAndReturn({
     *   select: { emoji: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    message<T extends MessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MessageDefaultArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reaction model
   */
  interface ReactionFieldRefs {
    readonly emoji: FieldRef<"Reaction", 'String'>
    readonly createdAt: FieldRef<"Reaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Reaction", 'DateTime'>
    readonly userId: FieldRef<"Reaction", 'String'>
    readonly messageId: FieldRef<"Reaction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reaction updateManyAndReturn
   */
  export type ReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model PrivateChat
   */

  export type AggregatePrivateChat = {
    _count: PrivateChatCountAggregateOutputType | null
    _min: PrivateChatMinAggregateOutputType | null
    _max: PrivateChatMaxAggregateOutputType | null
  }

  export type PrivateChatMinAggregateOutputType = {
    initiatorId: string | null
    recipientId: string | null
    lastMessageId: string | null
  }

  export type PrivateChatMaxAggregateOutputType = {
    initiatorId: string | null
    recipientId: string | null
    lastMessageId: string | null
  }

  export type PrivateChatCountAggregateOutputType = {
    initiatorId: number
    recipientId: number
    lastMessageId: number
    _all: number
  }


  export type PrivateChatMinAggregateInputType = {
    initiatorId?: true
    recipientId?: true
    lastMessageId?: true
  }

  export type PrivateChatMaxAggregateInputType = {
    initiatorId?: true
    recipientId?: true
    lastMessageId?: true
  }

  export type PrivateChatCountAggregateInputType = {
    initiatorId?: true
    recipientId?: true
    lastMessageId?: true
    _all?: true
  }

  export type PrivateChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateChat to aggregate.
     */
    where?: PrivateChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrivateChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrivateChats
    **/
    _count?: true | PrivateChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrivateChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrivateChatMaxAggregateInputType
  }

  export type GetPrivateChatAggregateType<T extends PrivateChatAggregateArgs> = {
        [P in keyof T & keyof AggregatePrivateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrivateChat[P]>
      : GetScalarType<T[P], AggregatePrivateChat[P]>
  }




  export type PrivateChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrivateChatWhereInput
    orderBy?: PrivateChatOrderByWithAggregationInput | PrivateChatOrderByWithAggregationInput[]
    by: PrivateChatScalarFieldEnum[] | PrivateChatScalarFieldEnum
    having?: PrivateChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrivateChatCountAggregateInputType | true
    _min?: PrivateChatMinAggregateInputType
    _max?: PrivateChatMaxAggregateInputType
  }

  export type PrivateChatGroupByOutputType = {
    initiatorId: string
    recipientId: string
    lastMessageId: string | null
    _count: PrivateChatCountAggregateOutputType | null
    _min: PrivateChatMinAggregateOutputType | null
    _max: PrivateChatMaxAggregateOutputType | null
  }

  type GetPrivateChatGroupByPayload<T extends PrivateChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrivateChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrivateChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrivateChatGroupByOutputType[P]>
            : GetScalarType<T[P], PrivateChatGroupByOutputType[P]>
        }
      >
    >


  export type PrivateChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    initiatorId?: boolean
    recipientId?: boolean
    lastMessageId?: boolean
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | PrivateChat$lastMessageArgs<ExtArgs>
  }, ExtArgs["result"]["privateChat"]>

  export type PrivateChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    initiatorId?: boolean
    recipientId?: boolean
    lastMessageId?: boolean
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | PrivateChat$lastMessageArgs<ExtArgs>
  }, ExtArgs["result"]["privateChat"]>

  export type PrivateChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    initiatorId?: boolean
    recipientId?: boolean
    lastMessageId?: boolean
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | PrivateChat$lastMessageArgs<ExtArgs>
  }, ExtArgs["result"]["privateChat"]>

  export type PrivateChatSelectScalar = {
    initiatorId?: boolean
    recipientId?: boolean
    lastMessageId?: boolean
  }

  export type PrivateChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"initiatorId" | "recipientId" | "lastMessageId", ExtArgs["result"]["privateChat"]>
  export type PrivateChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | PrivateChat$lastMessageArgs<ExtArgs>
  }
  export type PrivateChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | PrivateChat$lastMessageArgs<ExtArgs>
  }
  export type PrivateChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    recipient?: boolean | UserDefaultArgs<ExtArgs>
    lastMessage?: boolean | PrivateChat$lastMessageArgs<ExtArgs>
  }

  export type $PrivateChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrivateChat"
    objects: {
      initiator: Prisma.$UserPayload<ExtArgs>
      recipient: Prisma.$UserPayload<ExtArgs>
      lastMessage: Prisma.$MessagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      initiatorId: string
      recipientId: string
      lastMessageId: string | null
    }, ExtArgs["result"]["privateChat"]>
    composites: {}
  }

  type PrivateChatGetPayload<S extends boolean | null | undefined | PrivateChatDefaultArgs> = $Result.GetResult<Prisma.$PrivateChatPayload, S>

  type PrivateChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrivateChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrivateChatCountAggregateInputType | true
    }

  export interface PrivateChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrivateChat'], meta: { name: 'PrivateChat' } }
    /**
     * Find zero or one PrivateChat that matches the filter.
     * @param {PrivateChatFindUniqueArgs} args - Arguments to find a PrivateChat
     * @example
     * // Get one PrivateChat
     * const privateChat = await prisma.privateChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrivateChatFindUniqueArgs>(args: SelectSubset<T, PrivateChatFindUniqueArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrivateChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrivateChatFindUniqueOrThrowArgs} args - Arguments to find a PrivateChat
     * @example
     * // Get one PrivateChat
     * const privateChat = await prisma.privateChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrivateChatFindUniqueOrThrowArgs>(args: SelectSubset<T, PrivateChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatFindFirstArgs} args - Arguments to find a PrivateChat
     * @example
     * // Get one PrivateChat
     * const privateChat = await prisma.privateChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrivateChatFindFirstArgs>(args?: SelectSubset<T, PrivateChatFindFirstArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrivateChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatFindFirstOrThrowArgs} args - Arguments to find a PrivateChat
     * @example
     * // Get one PrivateChat
     * const privateChat = await prisma.privateChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrivateChatFindFirstOrThrowArgs>(args?: SelectSubset<T, PrivateChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrivateChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrivateChats
     * const privateChats = await prisma.privateChat.findMany()
     * 
     * // Get first 10 PrivateChats
     * const privateChats = await prisma.privateChat.findMany({ take: 10 })
     * 
     * // Only select the `initiatorId`
     * const privateChatWithInitiatorIdOnly = await prisma.privateChat.findMany({ select: { initiatorId: true } })
     * 
     */
    findMany<T extends PrivateChatFindManyArgs>(args?: SelectSubset<T, PrivateChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrivateChat.
     * @param {PrivateChatCreateArgs} args - Arguments to create a PrivateChat.
     * @example
     * // Create one PrivateChat
     * const PrivateChat = await prisma.privateChat.create({
     *   data: {
     *     // ... data to create a PrivateChat
     *   }
     * })
     * 
     */
    create<T extends PrivateChatCreateArgs>(args: SelectSubset<T, PrivateChatCreateArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrivateChats.
     * @param {PrivateChatCreateManyArgs} args - Arguments to create many PrivateChats.
     * @example
     * // Create many PrivateChats
     * const privateChat = await prisma.privateChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrivateChatCreateManyArgs>(args?: SelectSubset<T, PrivateChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrivateChats and returns the data saved in the database.
     * @param {PrivateChatCreateManyAndReturnArgs} args - Arguments to create many PrivateChats.
     * @example
     * // Create many PrivateChats
     * const privateChat = await prisma.privateChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrivateChats and only return the `initiatorId`
     * const privateChatWithInitiatorIdOnly = await prisma.privateChat.createManyAndReturn({
     *   select: { initiatorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrivateChatCreateManyAndReturnArgs>(args?: SelectSubset<T, PrivateChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrivateChat.
     * @param {PrivateChatDeleteArgs} args - Arguments to delete one PrivateChat.
     * @example
     * // Delete one PrivateChat
     * const PrivateChat = await prisma.privateChat.delete({
     *   where: {
     *     // ... filter to delete one PrivateChat
     *   }
     * })
     * 
     */
    delete<T extends PrivateChatDeleteArgs>(args: SelectSubset<T, PrivateChatDeleteArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrivateChat.
     * @param {PrivateChatUpdateArgs} args - Arguments to update one PrivateChat.
     * @example
     * // Update one PrivateChat
     * const privateChat = await prisma.privateChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrivateChatUpdateArgs>(args: SelectSubset<T, PrivateChatUpdateArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrivateChats.
     * @param {PrivateChatDeleteManyArgs} args - Arguments to filter PrivateChats to delete.
     * @example
     * // Delete a few PrivateChats
     * const { count } = await prisma.privateChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrivateChatDeleteManyArgs>(args?: SelectSubset<T, PrivateChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrivateChats
     * const privateChat = await prisma.privateChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrivateChatUpdateManyArgs>(args: SelectSubset<T, PrivateChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrivateChats and returns the data updated in the database.
     * @param {PrivateChatUpdateManyAndReturnArgs} args - Arguments to update many PrivateChats.
     * @example
     * // Update many PrivateChats
     * const privateChat = await prisma.privateChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrivateChats and only return the `initiatorId`
     * const privateChatWithInitiatorIdOnly = await prisma.privateChat.updateManyAndReturn({
     *   select: { initiatorId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrivateChatUpdateManyAndReturnArgs>(args: SelectSubset<T, PrivateChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrivateChat.
     * @param {PrivateChatUpsertArgs} args - Arguments to update or create a PrivateChat.
     * @example
     * // Update or create a PrivateChat
     * const privateChat = await prisma.privateChat.upsert({
     *   create: {
     *     // ... data to create a PrivateChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrivateChat we want to update
     *   }
     * })
     */
    upsert<T extends PrivateChatUpsertArgs>(args: SelectSubset<T, PrivateChatUpsertArgs<ExtArgs>>): Prisma__PrivateChatClient<$Result.GetResult<Prisma.$PrivateChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrivateChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatCountArgs} args - Arguments to filter PrivateChats to count.
     * @example
     * // Count the number of PrivateChats
     * const count = await prisma.privateChat.count({
     *   where: {
     *     // ... the filter for the PrivateChats we want to count
     *   }
     * })
    **/
    count<T extends PrivateChatCountArgs>(
      args?: Subset<T, PrivateChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrivateChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrivateChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrivateChatAggregateArgs>(args: Subset<T, PrivateChatAggregateArgs>): Prisma.PrismaPromise<GetPrivateChatAggregateType<T>>

    /**
     * Group by PrivateChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrivateChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrivateChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrivateChatGroupByArgs['orderBy'] }
        : { orderBy?: PrivateChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrivateChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivateChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrivateChat model
   */
  readonly fields: PrivateChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrivateChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrivateChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    initiator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recipient<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lastMessage<T extends PrivateChat$lastMessageArgs<ExtArgs> = {}>(args?: Subset<T, PrivateChat$lastMessageArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrivateChat model
   */
  interface PrivateChatFieldRefs {
    readonly initiatorId: FieldRef<"PrivateChat", 'String'>
    readonly recipientId: FieldRef<"PrivateChat", 'String'>
    readonly lastMessageId: FieldRef<"PrivateChat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PrivateChat findUnique
   */
  export type PrivateChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChat to fetch.
     */
    where: PrivateChatWhereUniqueInput
  }

  /**
   * PrivateChat findUniqueOrThrow
   */
  export type PrivateChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChat to fetch.
     */
    where: PrivateChatWhereUniqueInput
  }

  /**
   * PrivateChat findFirst
   */
  export type PrivateChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChat to fetch.
     */
    where?: PrivateChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateChats.
     */
    cursor?: PrivateChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateChats.
     */
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * PrivateChat findFirstOrThrow
   */
  export type PrivateChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChat to fetch.
     */
    where?: PrivateChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrivateChats.
     */
    cursor?: PrivateChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrivateChats.
     */
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * PrivateChat findMany
   */
  export type PrivateChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter, which PrivateChats to fetch.
     */
    where?: PrivateChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrivateChats to fetch.
     */
    orderBy?: PrivateChatOrderByWithRelationInput | PrivateChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrivateChats.
     */
    cursor?: PrivateChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrivateChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrivateChats.
     */
    skip?: number
    distinct?: PrivateChatScalarFieldEnum | PrivateChatScalarFieldEnum[]
  }

  /**
   * PrivateChat create
   */
  export type PrivateChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * The data needed to create a PrivateChat.
     */
    data: XOR<PrivateChatCreateInput, PrivateChatUncheckedCreateInput>
  }

  /**
   * PrivateChat createMany
   */
  export type PrivateChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrivateChats.
     */
    data: PrivateChatCreateManyInput | PrivateChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrivateChat createManyAndReturn
   */
  export type PrivateChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * The data used to create many PrivateChats.
     */
    data: PrivateChatCreateManyInput | PrivateChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateChat update
   */
  export type PrivateChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * The data needed to update a PrivateChat.
     */
    data: XOR<PrivateChatUpdateInput, PrivateChatUncheckedUpdateInput>
    /**
     * Choose, which PrivateChat to update.
     */
    where: PrivateChatWhereUniqueInput
  }

  /**
   * PrivateChat updateMany
   */
  export type PrivateChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrivateChats.
     */
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyInput>
    /**
     * Filter which PrivateChats to update
     */
    where?: PrivateChatWhereInput
    /**
     * Limit how many PrivateChats to update.
     */
    limit?: number
  }

  /**
   * PrivateChat updateManyAndReturn
   */
  export type PrivateChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * The data used to update PrivateChats.
     */
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyInput>
    /**
     * Filter which PrivateChats to update
     */
    where?: PrivateChatWhereInput
    /**
     * Limit how many PrivateChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrivateChat upsert
   */
  export type PrivateChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * The filter to search for the PrivateChat to update in case it exists.
     */
    where: PrivateChatWhereUniqueInput
    /**
     * In case the PrivateChat found by the `where` argument doesn't exist, create a new PrivateChat with this data.
     */
    create: XOR<PrivateChatCreateInput, PrivateChatUncheckedCreateInput>
    /**
     * In case the PrivateChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrivateChatUpdateInput, PrivateChatUncheckedUpdateInput>
  }

  /**
   * PrivateChat delete
   */
  export type PrivateChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
    /**
     * Filter which PrivateChat to delete.
     */
    where: PrivateChatWhereUniqueInput
  }

  /**
   * PrivateChat deleteMany
   */
  export type PrivateChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrivateChats to delete
     */
    where?: PrivateChatWhereInput
    /**
     * Limit how many PrivateChats to delete.
     */
    limit?: number
  }

  /**
   * PrivateChat.lastMessage
   */
  export type PrivateChat$lastMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
  }

  /**
   * PrivateChat without action
   */
  export type PrivateChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrivateChat
     */
    select?: PrivateChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrivateChat
     */
    omit?: PrivateChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrivateChatInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    creatorId: 'creatorId',
    lastMessageId: 'lastMessageId'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    timestamp: 'timestamp',
    edited: 'edited',
    imageUrl: 'imageUrl',
    dbCreatedAt: 'dbCreatedAt',
    dbUpdatedAt: 'dbUpdatedAt',
    senderId: 'senderId',
    recipientUserId: 'recipientUserId',
    recipientGroupId: 'recipientGroupId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    emoji: 'emoji',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    messageId: 'messageId'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const PrivateChatScalarFieldEnum: {
    initiatorId: 'initiatorId',
    recipientId: 'recipientId',
    lastMessageId: 'lastMessageId'
  };

  export type PrivateChatScalarFieldEnum = (typeof PrivateChatScalarFieldEnum)[keyof typeof PrivateChatScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sentMessages?: MessageListRelationFilter
    receivedPrivateMessages?: MessageListRelationFilter
    groups?: GroupListRelationFilter
    createdGroups?: GroupListRelationFilter
    reactions?: ReactionListRelationFilter
    initiatedPrivateChats?: PrivateChatListRelationFilter
    receivedPrivateChats?: PrivateChatListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedPrivateMessages?: MessageOrderByRelationAggregateInput
    groups?: GroupOrderByRelationAggregateInput
    createdGroups?: GroupOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    initiatedPrivateChats?: PrivateChatOrderByRelationAggregateInput
    receivedPrivateChats?: PrivateChatOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sentMessages?: MessageListRelationFilter
    receivedPrivateMessages?: MessageListRelationFilter
    groups?: GroupListRelationFilter
    createdGroups?: GroupListRelationFilter
    reactions?: ReactionListRelationFilter
    initiatedPrivateChats?: PrivateChatListRelationFilter
    receivedPrivateChats?: PrivateChatListRelationFilter
  }, "id" | "name" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: UuidFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    creatorId?: UuidFilter<"Group"> | string
    lastMessageId?: UuidNullableFilter<"Group"> | string | null
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    members?: UserListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    creator?: UserOrderByWithRelationInput
    lastMessage?: MessageOrderByWithRelationInput
    members?: UserOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    lastMessageId?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    creatorId?: UuidFilter<"Group"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
    members?: UserListRelationFilter
    messages?: MessageListRelationFilter
  }, "id" | "name" | "lastMessageId">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    creatorId?: UuidWithAggregatesFilter<"Group"> | string
    lastMessageId?: UuidNullableWithAggregatesFilter<"Group"> | string | null
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: UuidFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    edited?: BoolFilter<"Message"> | boolean
    imageUrl?: StringNullableFilter<"Message"> | string | null
    dbCreatedAt?: DateTimeFilter<"Message"> | Date | string
    dbUpdatedAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: UuidFilter<"Message"> | string
    recipientUserId?: UuidNullableFilter<"Message"> | string | null
    recipientGroupId?: UuidNullableFilter<"Message"> | string | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipientUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    recipientGroup?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    reactions?: ReactionListRelationFilter
    lastMessageGroups?: GroupListRelationFilter
    PrivateChatLastMessage?: PrivateChatListRelationFilter
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    edited?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    dbCreatedAt?: SortOrder
    dbUpdatedAt?: SortOrder
    senderId?: SortOrder
    recipientUserId?: SortOrderInput | SortOrder
    recipientGroupId?: SortOrderInput | SortOrder
    sender?: UserOrderByWithRelationInput
    recipientUser?: UserOrderByWithRelationInput
    recipientGroup?: GroupOrderByWithRelationInput
    reactions?: ReactionOrderByRelationAggregateInput
    lastMessageGroups?: GroupOrderByRelationAggregateInput
    PrivateChatLastMessage?: PrivateChatOrderByRelationAggregateInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    edited?: BoolFilter<"Message"> | boolean
    imageUrl?: StringNullableFilter<"Message"> | string | null
    dbCreatedAt?: DateTimeFilter<"Message"> | Date | string
    dbUpdatedAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: UuidFilter<"Message"> | string
    recipientUserId?: UuidNullableFilter<"Message"> | string | null
    recipientGroupId?: UuidNullableFilter<"Message"> | string | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipientUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    recipientGroup?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    reactions?: ReactionListRelationFilter
    lastMessageGroups?: GroupListRelationFilter
    PrivateChatLastMessage?: PrivateChatListRelationFilter
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    edited?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    dbCreatedAt?: SortOrder
    dbUpdatedAt?: SortOrder
    senderId?: SortOrder
    recipientUserId?: SortOrderInput | SortOrder
    recipientGroupId?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    edited?: BoolWithAggregatesFilter<"Message"> | boolean
    imageUrl?: StringNullableWithAggregatesFilter<"Message"> | string | null
    dbCreatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    dbUpdatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    senderId?: UuidWithAggregatesFilter<"Message"> | string
    recipientUserId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
    recipientGroupId?: UuidNullableWithAggregatesFilter<"Message"> | string | null
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
    userId?: UuidFilter<"Reaction"> | string
    messageId?: UuidFilter<"Reaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }

  export type ReactionOrderByWithRelationInput = {
    emoji?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    user?: UserOrderByWithRelationInput
    message?: MessageOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    userId_messageId_emoji?: ReactionUserIdMessageIdEmojiCompoundUniqueInput
    userId_messageId?: ReactionUserIdMessageIdCompoundUniqueInput
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
    userId?: UuidFilter<"Reaction"> | string
    messageId?: UuidFilter<"Reaction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    message?: XOR<MessageScalarRelationFilter, MessageWhereInput>
  }, "userId_messageId" | "userId_messageId_emoji">

  export type ReactionOrderByWithAggregationInput = {
    emoji?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    emoji?: StringWithAggregatesFilter<"Reaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
    userId?: UuidWithAggregatesFilter<"Reaction"> | string
    messageId?: UuidWithAggregatesFilter<"Reaction"> | string
  }

  export type PrivateChatWhereInput = {
    AND?: PrivateChatWhereInput | PrivateChatWhereInput[]
    OR?: PrivateChatWhereInput[]
    NOT?: PrivateChatWhereInput | PrivateChatWhereInput[]
    initiatorId?: UuidFilter<"PrivateChat"> | string
    recipientId?: UuidFilter<"PrivateChat"> | string
    lastMessageId?: UuidNullableFilter<"PrivateChat"> | string | null
    initiator?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }

  export type PrivateChatOrderByWithRelationInput = {
    initiatorId?: SortOrder
    recipientId?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    initiator?: UserOrderByWithRelationInput
    recipient?: UserOrderByWithRelationInput
    lastMessage?: MessageOrderByWithRelationInput
  }

  export type PrivateChatWhereUniqueInput = Prisma.AtLeast<{
    lastMessageId?: string
    initiatorId_recipientId?: PrivateChatInitiatorIdRecipientIdCompoundUniqueInput
    AND?: PrivateChatWhereInput | PrivateChatWhereInput[]
    OR?: PrivateChatWhereInput[]
    NOT?: PrivateChatWhereInput | PrivateChatWhereInput[]
    initiatorId?: UuidFilter<"PrivateChat"> | string
    recipientId?: UuidFilter<"PrivateChat"> | string
    initiator?: XOR<UserScalarRelationFilter, UserWhereInput>
    recipient?: XOR<UserScalarRelationFilter, UserWhereInput>
    lastMessage?: XOR<MessageNullableScalarRelationFilter, MessageWhereInput> | null
  }, "initiatorId_recipientId" | "lastMessageId" | "initiatorId_recipientId">

  export type PrivateChatOrderByWithAggregationInput = {
    initiatorId?: SortOrder
    recipientId?: SortOrder
    lastMessageId?: SortOrderInput | SortOrder
    _count?: PrivateChatCountOrderByAggregateInput
    _max?: PrivateChatMaxOrderByAggregateInput
    _min?: PrivateChatMinOrderByAggregateInput
  }

  export type PrivateChatScalarWhereWithAggregatesInput = {
    AND?: PrivateChatScalarWhereWithAggregatesInput | PrivateChatScalarWhereWithAggregatesInput[]
    OR?: PrivateChatScalarWhereWithAggregatesInput[]
    NOT?: PrivateChatScalarWhereWithAggregatesInput | PrivateChatScalarWhereWithAggregatesInput[]
    initiatorId?: UuidWithAggregatesFilter<"PrivateChat"> | string
    recipientId?: UuidWithAggregatesFilter<"PrivateChat"> | string
    lastMessageId?: UuidNullableWithAggregatesFilter<"PrivateChat"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageCreateNestedManyWithoutRecipientUserInput
    groups?: GroupCreateNestedManyWithoutMembersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageUncheckedCreateNestedManyWithoutRecipientUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUncheckedUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedGroupsInput
    lastMessage?: MessageCreateNestedOneWithoutLastMessageGroupsInput
    members?: UserCreateNestedManyWithoutGroupsInput
    messages?: MessageCreateNestedManyWithoutRecipientGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    lastMessageId?: string | null
    members?: UserUncheckedCreateNestedManyWithoutGroupsInput
    messages?: MessageUncheckedCreateNestedManyWithoutRecipientGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    lastMessage?: MessageUpdateOneWithoutLastMessageGroupsNestedInput
    members?: UserUpdateManyWithoutGroupsNestedInput
    messages?: MessageUpdateManyWithoutRecipientGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUncheckedUpdateManyWithoutGroupsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRecipientGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    lastMessageId?: string | null
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipientUser?: UserCreateNestedOneWithoutReceivedPrivateMessagesInput
    recipientGroup?: GroupCreateNestedOneWithoutMessagesInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientUserId?: string | null
    recipientGroupId?: string | null
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupUncheckedCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipientUser?: UserUpdateOneWithoutReceivedPrivateMessagesNestedInput
    recipientGroup?: GroupUpdateOneWithoutMessagesNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUncheckedUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientUserId?: string | null
    recipientGroupId?: string | null
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReactionCreateInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
    message: MessageCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    messageId: string
  }

  export type ReactionUpdateInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionCreateManyInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    messageId: string
  }

  export type ReactionUpdateManyMutationInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type PrivateChatCreateInput = {
    initiator: UserCreateNestedOneWithoutInitiatedPrivateChatsInput
    recipient: UserCreateNestedOneWithoutReceivedPrivateChatsInput
    lastMessage?: MessageCreateNestedOneWithoutPrivateChatLastMessageInput
  }

  export type PrivateChatUncheckedCreateInput = {
    initiatorId: string
    recipientId: string
    lastMessageId?: string | null
  }

  export type PrivateChatUpdateInput = {
    initiator?: UserUpdateOneRequiredWithoutInitiatedPrivateChatsNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedPrivateChatsNestedInput
    lastMessage?: MessageUpdateOneWithoutPrivateChatLastMessageNestedInput
  }

  export type PrivateChatUncheckedUpdateInput = {
    initiatorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrivateChatCreateManyInput = {
    initiatorId: string
    recipientId: string
    lastMessageId?: string | null
  }

  export type PrivateChatUpdateManyMutationInput = {

  }

  export type PrivateChatUncheckedUpdateManyInput = {
    initiatorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type PrivateChatListRelationFilter = {
    every?: PrivateChatWhereInput
    some?: PrivateChatWhereInput
    none?: PrivateChatWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrivateChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MessageNullableScalarRelationFilter = {
    is?: MessageWhereInput | null
    isNot?: MessageWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    lastMessageId?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    lastMessageId?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creatorId?: SortOrder
    lastMessageId?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    edited?: SortOrder
    imageUrl?: SortOrder
    dbCreatedAt?: SortOrder
    dbUpdatedAt?: SortOrder
    senderId?: SortOrder
    recipientUserId?: SortOrder
    recipientGroupId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    edited?: SortOrder
    imageUrl?: SortOrder
    dbCreatedAt?: SortOrder
    dbUpdatedAt?: SortOrder
    senderId?: SortOrder
    recipientUserId?: SortOrder
    recipientGroupId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    edited?: SortOrder
    imageUrl?: SortOrder
    dbCreatedAt?: SortOrder
    dbUpdatedAt?: SortOrder
    senderId?: SortOrder
    recipientUserId?: SortOrder
    recipientGroupId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageScalarRelationFilter = {
    is?: MessageWhereInput
    isNot?: MessageWhereInput
  }

  export type ReactionUserIdMessageIdEmojiCompoundUniqueInput = {
    userId: string
    messageId: string
    emoji: string
  }

  export type ReactionUserIdMessageIdCompoundUniqueInput = {
    userId: string
    messageId: string
  }

  export type ReactionCountOrderByAggregateInput = {
    emoji?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    emoji?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    emoji?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    messageId?: SortOrder
  }

  export type PrivateChatInitiatorIdRecipientIdCompoundUniqueInput = {
    initiatorId: string
    recipientId: string
  }

  export type PrivateChatCountOrderByAggregateInput = {
    initiatorId?: SortOrder
    recipientId?: SortOrder
    lastMessageId?: SortOrder
  }

  export type PrivateChatMaxOrderByAggregateInput = {
    initiatorId?: SortOrder
    recipientId?: SortOrder
    lastMessageId?: SortOrder
  }

  export type PrivateChatMinOrderByAggregateInput = {
    initiatorId?: SortOrder
    recipientId?: SortOrder
    lastMessageId?: SortOrder
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRecipientUserInput = {
    create?: XOR<MessageCreateWithoutRecipientUserInput, MessageUncheckedCreateWithoutRecipientUserInput> | MessageCreateWithoutRecipientUserInput[] | MessageUncheckedCreateWithoutRecipientUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientUserInput | MessageCreateOrConnectWithoutRecipientUserInput[]
    createMany?: MessageCreateManyRecipientUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput> | GroupCreateWithoutMembersInput[] | GroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput | GroupCreateOrConnectWithoutMembersInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type PrivateChatCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<PrivateChatCreateWithoutInitiatorInput, PrivateChatUncheckedCreateWithoutInitiatorInput> | PrivateChatCreateWithoutInitiatorInput[] | PrivateChatUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutInitiatorInput | PrivateChatCreateOrConnectWithoutInitiatorInput[]
    createMany?: PrivateChatCreateManyInitiatorInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type PrivateChatCreateNestedManyWithoutRecipientInput = {
    create?: XOR<PrivateChatCreateWithoutRecipientInput, PrivateChatUncheckedCreateWithoutRecipientInput> | PrivateChatCreateWithoutRecipientInput[] | PrivateChatUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutRecipientInput | PrivateChatCreateOrConnectWithoutRecipientInput[]
    createMany?: PrivateChatCreateManyRecipientInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRecipientUserInput = {
    create?: XOR<MessageCreateWithoutRecipientUserInput, MessageUncheckedCreateWithoutRecipientUserInput> | MessageCreateWithoutRecipientUserInput[] | MessageUncheckedCreateWithoutRecipientUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientUserInput | MessageCreateOrConnectWithoutRecipientUserInput[]
    createMany?: MessageCreateManyRecipientUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput> | GroupCreateWithoutMembersInput[] | GroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput | GroupCreateOrConnectWithoutMembersInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type PrivateChatUncheckedCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<PrivateChatCreateWithoutInitiatorInput, PrivateChatUncheckedCreateWithoutInitiatorInput> | PrivateChatCreateWithoutInitiatorInput[] | PrivateChatUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutInitiatorInput | PrivateChatCreateOrConnectWithoutInitiatorInput[]
    createMany?: PrivateChatCreateManyInitiatorInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type PrivateChatUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: XOR<PrivateChatCreateWithoutRecipientInput, PrivateChatUncheckedCreateWithoutRecipientInput> | PrivateChatCreateWithoutRecipientInput[] | PrivateChatUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutRecipientInput | PrivateChatCreateOrConnectWithoutRecipientInput[]
    createMany?: PrivateChatCreateManyRecipientInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRecipientUserNestedInput = {
    create?: XOR<MessageCreateWithoutRecipientUserInput, MessageUncheckedCreateWithoutRecipientUserInput> | MessageCreateWithoutRecipientUserInput[] | MessageUncheckedCreateWithoutRecipientUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientUserInput | MessageCreateOrConnectWithoutRecipientUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecipientUserInput | MessageUpsertWithWhereUniqueWithoutRecipientUserInput[]
    createMany?: MessageCreateManyRecipientUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecipientUserInput | MessageUpdateWithWhereUniqueWithoutRecipientUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecipientUserInput | MessageUpdateManyWithWhereWithoutRecipientUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput> | GroupCreateWithoutMembersInput[] | GroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput | GroupCreateOrConnectWithoutMembersInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutMembersInput | GroupUpsertWithWhereUniqueWithoutMembersInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutMembersInput | GroupUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutMembersInput | GroupUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCreatorInput | GroupUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCreatorInput | GroupUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCreatorInput | GroupUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type PrivateChatUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<PrivateChatCreateWithoutInitiatorInput, PrivateChatUncheckedCreateWithoutInitiatorInput> | PrivateChatCreateWithoutInitiatorInput[] | PrivateChatUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutInitiatorInput | PrivateChatCreateOrConnectWithoutInitiatorInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutInitiatorInput | PrivateChatUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: PrivateChatCreateManyInitiatorInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutInitiatorInput | PrivateChatUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutInitiatorInput | PrivateChatUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type PrivateChatUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<PrivateChatCreateWithoutRecipientInput, PrivateChatUncheckedCreateWithoutRecipientInput> | PrivateChatCreateWithoutRecipientInput[] | PrivateChatUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutRecipientInput | PrivateChatCreateOrConnectWithoutRecipientInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutRecipientInput | PrivateChatUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: PrivateChatCreateManyRecipientInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutRecipientInput | PrivateChatUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutRecipientInput | PrivateChatUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRecipientUserNestedInput = {
    create?: XOR<MessageCreateWithoutRecipientUserInput, MessageUncheckedCreateWithoutRecipientUserInput> | MessageCreateWithoutRecipientUserInput[] | MessageUncheckedCreateWithoutRecipientUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientUserInput | MessageCreateOrConnectWithoutRecipientUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecipientUserInput | MessageUpsertWithWhereUniqueWithoutRecipientUserInput[]
    createMany?: MessageCreateManyRecipientUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecipientUserInput | MessageUpdateWithWhereUniqueWithoutRecipientUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecipientUserInput | MessageUpdateManyWithWhereWithoutRecipientUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput> | GroupCreateWithoutMembersInput[] | GroupUncheckedCreateWithoutMembersInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput | GroupCreateOrConnectWithoutMembersInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutMembersInput | GroupUpsertWithWhereUniqueWithoutMembersInput[]
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutMembersInput | GroupUpdateWithWhereUniqueWithoutMembersInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutMembersInput | GroupUpdateManyWithWhereWithoutMembersInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput> | GroupCreateWithoutCreatorInput[] | GroupUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCreatorInput | GroupCreateOrConnectWithoutCreatorInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCreatorInput | GroupUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: GroupCreateManyCreatorInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCreatorInput | GroupUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCreatorInput | GroupUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type PrivateChatUncheckedUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<PrivateChatCreateWithoutInitiatorInput, PrivateChatUncheckedCreateWithoutInitiatorInput> | PrivateChatCreateWithoutInitiatorInput[] | PrivateChatUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutInitiatorInput | PrivateChatCreateOrConnectWithoutInitiatorInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutInitiatorInput | PrivateChatUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: PrivateChatCreateManyInitiatorInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutInitiatorInput | PrivateChatUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutInitiatorInput | PrivateChatUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type PrivateChatUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: XOR<PrivateChatCreateWithoutRecipientInput, PrivateChatUncheckedCreateWithoutRecipientInput> | PrivateChatCreateWithoutRecipientInput[] | PrivateChatUncheckedCreateWithoutRecipientInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutRecipientInput | PrivateChatCreateOrConnectWithoutRecipientInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutRecipientInput | PrivateChatUpsertWithWhereUniqueWithoutRecipientInput[]
    createMany?: PrivateChatCreateManyRecipientInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutRecipientInput | PrivateChatUpdateWithWhereUniqueWithoutRecipientInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutRecipientInput | PrivateChatUpdateManyWithWhereWithoutRecipientInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedGroupsInput = {
    create?: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutLastMessageGroupsInput = {
    create?: XOR<MessageCreateWithoutLastMessageGroupsInput, MessageUncheckedCreateWithoutLastMessageGroupsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutLastMessageGroupsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutRecipientGroupInput = {
    create?: XOR<MessageCreateWithoutRecipientGroupInput, MessageUncheckedCreateWithoutRecipientGroupInput> | MessageCreateWithoutRecipientGroupInput[] | MessageUncheckedCreateWithoutRecipientGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientGroupInput | MessageCreateOrConnectWithoutRecipientGroupInput[]
    createMany?: MessageCreateManyRecipientGroupInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutRecipientGroupInput = {
    create?: XOR<MessageCreateWithoutRecipientGroupInput, MessageUncheckedCreateWithoutRecipientGroupInput> | MessageCreateWithoutRecipientGroupInput[] | MessageUncheckedCreateWithoutRecipientGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientGroupInput | MessageCreateOrConnectWithoutRecipientGroupInput[]
    createMany?: MessageCreateManyRecipientGroupInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedGroupsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedGroupsInput
    upsert?: UserUpsertWithoutCreatedGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedGroupsInput, UserUpdateWithoutCreatedGroupsInput>, UserUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type MessageUpdateOneWithoutLastMessageGroupsNestedInput = {
    create?: XOR<MessageCreateWithoutLastMessageGroupsInput, MessageUncheckedCreateWithoutLastMessageGroupsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutLastMessageGroupsInput
    upsert?: MessageUpsertWithoutLastMessageGroupsInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutLastMessageGroupsInput, MessageUpdateWithoutLastMessageGroupsInput>, MessageUncheckedUpdateWithoutLastMessageGroupsInput>
  }

  export type UserUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupsInput | UserUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupsInput | UserUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupsInput | UserUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutRecipientGroupNestedInput = {
    create?: XOR<MessageCreateWithoutRecipientGroupInput, MessageUncheckedCreateWithoutRecipientGroupInput> | MessageCreateWithoutRecipientGroupInput[] | MessageUncheckedCreateWithoutRecipientGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientGroupInput | MessageCreateOrConnectWithoutRecipientGroupInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecipientGroupInput | MessageUpsertWithWhereUniqueWithoutRecipientGroupInput[]
    createMany?: MessageCreateManyRecipientGroupInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecipientGroupInput | MessageUpdateWithWhereUniqueWithoutRecipientGroupInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecipientGroupInput | MessageUpdateManyWithWhereWithoutRecipientGroupInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput> | UserCreateWithoutGroupsInput[] | UserUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput | UserCreateOrConnectWithoutGroupsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutGroupsInput | UserUpsertWithWhereUniqueWithoutGroupsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutGroupsInput | UserUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutGroupsInput | UserUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutRecipientGroupNestedInput = {
    create?: XOR<MessageCreateWithoutRecipientGroupInput, MessageUncheckedCreateWithoutRecipientGroupInput> | MessageCreateWithoutRecipientGroupInput[] | MessageUncheckedCreateWithoutRecipientGroupInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutRecipientGroupInput | MessageCreateOrConnectWithoutRecipientGroupInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutRecipientGroupInput | MessageUpsertWithWhereUniqueWithoutRecipientGroupInput[]
    createMany?: MessageCreateManyRecipientGroupInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutRecipientGroupInput | MessageUpdateWithWhereUniqueWithoutRecipientGroupInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutRecipientGroupInput | MessageUpdateManyWithWhereWithoutRecipientGroupInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedPrivateMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedPrivateMessagesInput, UserUncheckedCreateWithoutReceivedPrivateMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPrivateMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
    connect?: GroupWhereUniqueInput
  }

  export type ReactionCreateNestedManyWithoutMessageInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type GroupCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<GroupCreateWithoutLastMessageInput, GroupUncheckedCreateWithoutLastMessageInput> | GroupCreateWithoutLastMessageInput[] | GroupUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLastMessageInput | GroupCreateOrConnectWithoutLastMessageInput[]
    createMany?: GroupCreateManyLastMessageInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type PrivateChatCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<PrivateChatCreateWithoutLastMessageInput, PrivateChatUncheckedCreateWithoutLastMessageInput> | PrivateChatCreateWithoutLastMessageInput[] | PrivateChatUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutLastMessageInput | PrivateChatCreateOrConnectWithoutLastMessageInput[]
    createMany?: PrivateChatCreateManyLastMessageInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<GroupCreateWithoutLastMessageInput, GroupUncheckedCreateWithoutLastMessageInput> | GroupCreateWithoutLastMessageInput[] | GroupUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLastMessageInput | GroupCreateOrConnectWithoutLastMessageInput[]
    createMany?: GroupCreateManyLastMessageInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type PrivateChatUncheckedCreateNestedManyWithoutLastMessageInput = {
    create?: XOR<PrivateChatCreateWithoutLastMessageInput, PrivateChatUncheckedCreateWithoutLastMessageInput> | PrivateChatCreateWithoutLastMessageInput[] | PrivateChatUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutLastMessageInput | PrivateChatCreateOrConnectWithoutLastMessageInput[]
    createMany?: PrivateChatCreateManyLastMessageInputEnvelope
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneWithoutReceivedPrivateMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedPrivateMessagesInput, UserUncheckedCreateWithoutReceivedPrivateMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPrivateMessagesInput
    upsert?: UserUpsertWithoutReceivedPrivateMessagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedPrivateMessagesInput, UserUpdateWithoutReceivedPrivateMessagesInput>, UserUncheckedUpdateWithoutReceivedPrivateMessagesInput>
  }

  export type GroupUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
    upsert?: GroupUpsertWithoutMessagesInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMessagesInput, GroupUpdateWithoutMessagesInput>, GroupUncheckedUpdateWithoutMessagesInput>
  }

  export type ReactionUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutMessageInput | ReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutMessageInput | ReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutMessageInput | ReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type GroupUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<GroupCreateWithoutLastMessageInput, GroupUncheckedCreateWithoutLastMessageInput> | GroupCreateWithoutLastMessageInput[] | GroupUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLastMessageInput | GroupCreateOrConnectWithoutLastMessageInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutLastMessageInput | GroupUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: GroupCreateManyLastMessageInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutLastMessageInput | GroupUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutLastMessageInput | GroupUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type PrivateChatUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<PrivateChatCreateWithoutLastMessageInput, PrivateChatUncheckedCreateWithoutLastMessageInput> | PrivateChatCreateWithoutLastMessageInput[] | PrivateChatUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutLastMessageInput | PrivateChatCreateOrConnectWithoutLastMessageInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutLastMessageInput | PrivateChatUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: PrivateChatCreateManyLastMessageInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutLastMessageInput | PrivateChatUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutLastMessageInput | PrivateChatUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput> | ReactionCreateWithoutMessageInput[] | ReactionUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutMessageInput | ReactionCreateOrConnectWithoutMessageInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutMessageInput | ReactionUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: ReactionCreateManyMessageInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutMessageInput | ReactionUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutMessageInput | ReactionUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<GroupCreateWithoutLastMessageInput, GroupUncheckedCreateWithoutLastMessageInput> | GroupCreateWithoutLastMessageInput[] | GroupUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutLastMessageInput | GroupCreateOrConnectWithoutLastMessageInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutLastMessageInput | GroupUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: GroupCreateManyLastMessageInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutLastMessageInput | GroupUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutLastMessageInput | GroupUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type PrivateChatUncheckedUpdateManyWithoutLastMessageNestedInput = {
    create?: XOR<PrivateChatCreateWithoutLastMessageInput, PrivateChatUncheckedCreateWithoutLastMessageInput> | PrivateChatCreateWithoutLastMessageInput[] | PrivateChatUncheckedCreateWithoutLastMessageInput[]
    connectOrCreate?: PrivateChatCreateOrConnectWithoutLastMessageInput | PrivateChatCreateOrConnectWithoutLastMessageInput[]
    upsert?: PrivateChatUpsertWithWhereUniqueWithoutLastMessageInput | PrivateChatUpsertWithWhereUniqueWithoutLastMessageInput[]
    createMany?: PrivateChatCreateManyLastMessageInputEnvelope
    set?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    disconnect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    delete?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    connect?: PrivateChatWhereUniqueInput | PrivateChatWhereUniqueInput[]
    update?: PrivateChatUpdateWithWhereUniqueWithoutLastMessageInput | PrivateChatUpdateWithWhereUniqueWithoutLastMessageInput[]
    updateMany?: PrivateChatUpdateManyWithWhereWithoutLastMessageInput | PrivateChatUpdateManyWithWhereWithoutLastMessageInput[]
    deleteMany?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutReactionsInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    connect?: MessageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type MessageUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: MessageCreateOrConnectWithoutReactionsInput
    upsert?: MessageUpsertWithoutReactionsInput
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutReactionsInput, MessageUpdateWithoutReactionsInput>, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type UserCreateNestedOneWithoutInitiatedPrivateChatsInput = {
    create?: XOR<UserCreateWithoutInitiatedPrivateChatsInput, UserUncheckedCreateWithoutInitiatedPrivateChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInitiatedPrivateChatsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedPrivateChatsInput = {
    create?: XOR<UserCreateWithoutReceivedPrivateChatsInput, UserUncheckedCreateWithoutReceivedPrivateChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPrivateChatsInput
    connect?: UserWhereUniqueInput
  }

  export type MessageCreateNestedOneWithoutPrivateChatLastMessageInput = {
    create?: XOR<MessageCreateWithoutPrivateChatLastMessageInput, MessageUncheckedCreateWithoutPrivateChatLastMessageInput>
    connectOrCreate?: MessageCreateOrConnectWithoutPrivateChatLastMessageInput
    connect?: MessageWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInitiatedPrivateChatsNestedInput = {
    create?: XOR<UserCreateWithoutInitiatedPrivateChatsInput, UserUncheckedCreateWithoutInitiatedPrivateChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInitiatedPrivateChatsInput
    upsert?: UserUpsertWithoutInitiatedPrivateChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInitiatedPrivateChatsInput, UserUpdateWithoutInitiatedPrivateChatsInput>, UserUncheckedUpdateWithoutInitiatedPrivateChatsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedPrivateChatsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedPrivateChatsInput, UserUncheckedCreateWithoutReceivedPrivateChatsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPrivateChatsInput
    upsert?: UserUpsertWithoutReceivedPrivateChatsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedPrivateChatsInput, UserUpdateWithoutReceivedPrivateChatsInput>, UserUncheckedUpdateWithoutReceivedPrivateChatsInput>
  }

  export type MessageUpdateOneWithoutPrivateChatLastMessageNestedInput = {
    create?: XOR<MessageCreateWithoutPrivateChatLastMessageInput, MessageUncheckedCreateWithoutPrivateChatLastMessageInput>
    connectOrCreate?: MessageCreateOrConnectWithoutPrivateChatLastMessageInput
    upsert?: MessageUpsertWithoutPrivateChatLastMessageInput
    disconnect?: MessageWhereInput | boolean
    delete?: MessageWhereInput | boolean
    connect?: MessageWhereUniqueInput
    update?: XOR<XOR<MessageUpdateToOneWithWhereWithoutPrivateChatLastMessageInput, MessageUpdateWithoutPrivateChatLastMessageInput>, MessageUncheckedUpdateWithoutPrivateChatLastMessageInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    recipientUser?: UserCreateNestedOneWithoutReceivedPrivateMessagesInput
    recipientGroup?: GroupCreateNestedOneWithoutMessagesInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    recipientUserId?: string | null
    recipientGroupId?: string | null
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupUncheckedCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutRecipientUserInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipientGroup?: GroupCreateNestedOneWithoutMessagesInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutRecipientUserInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientGroupId?: string | null
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupUncheckedCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutRecipientUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRecipientUserInput, MessageUncheckedCreateWithoutRecipientUserInput>
  }

  export type MessageCreateManyRecipientUserInputEnvelope = {
    data: MessageCreateManyRecipientUserInput | MessageCreateManyRecipientUserInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedGroupsInput
    lastMessage?: MessageCreateNestedOneWithoutLastMessageGroupsInput
    messages?: MessageCreateNestedManyWithoutRecipientGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    lastMessageId?: string | null
    messages?: MessageUncheckedCreateNestedManyWithoutRecipientGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type GroupCreateWithoutCreatorInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessage?: MessageCreateNestedOneWithoutLastMessageGroupsInput
    members?: UserCreateNestedManyWithoutGroupsInput
    messages?: MessageCreateNestedManyWithoutRecipientGroupInput
  }

  export type GroupUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessageId?: string | null
    members?: UserUncheckedCreateNestedManyWithoutGroupsInput
    messages?: MessageUncheckedCreateNestedManyWithoutRecipientGroupInput
  }

  export type GroupCreateOrConnectWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput>
  }

  export type GroupCreateManyCreatorInputEnvelope = {
    data: GroupCreateManyCreatorInput | GroupCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ReactionCreateWithoutUserInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    message: MessageCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutUserInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messageId: string
  }

  export type ReactionCreateOrConnectWithoutUserInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionCreateManyUserInputEnvelope = {
    data: ReactionCreateManyUserInput | ReactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PrivateChatCreateWithoutInitiatorInput = {
    recipient: UserCreateNestedOneWithoutReceivedPrivateChatsInput
    lastMessage?: MessageCreateNestedOneWithoutPrivateChatLastMessageInput
  }

  export type PrivateChatUncheckedCreateWithoutInitiatorInput = {
    recipientId: string
    lastMessageId?: string | null
  }

  export type PrivateChatCreateOrConnectWithoutInitiatorInput = {
    where: PrivateChatWhereUniqueInput
    create: XOR<PrivateChatCreateWithoutInitiatorInput, PrivateChatUncheckedCreateWithoutInitiatorInput>
  }

  export type PrivateChatCreateManyInitiatorInputEnvelope = {
    data: PrivateChatCreateManyInitiatorInput | PrivateChatCreateManyInitiatorInput[]
    skipDuplicates?: boolean
  }

  export type PrivateChatCreateWithoutRecipientInput = {
    initiator: UserCreateNestedOneWithoutInitiatedPrivateChatsInput
    lastMessage?: MessageCreateNestedOneWithoutPrivateChatLastMessageInput
  }

  export type PrivateChatUncheckedCreateWithoutRecipientInput = {
    initiatorId: string
    lastMessageId?: string | null
  }

  export type PrivateChatCreateOrConnectWithoutRecipientInput = {
    where: PrivateChatWhereUniqueInput
    create: XOR<PrivateChatCreateWithoutRecipientInput, PrivateChatUncheckedCreateWithoutRecipientInput>
  }

  export type PrivateChatCreateManyRecipientInputEnvelope = {
    data: PrivateChatCreateManyRecipientInput | PrivateChatCreateManyRecipientInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: UuidFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    timestamp?: DateTimeFilter<"Message"> | Date | string
    edited?: BoolFilter<"Message"> | boolean
    imageUrl?: StringNullableFilter<"Message"> | string | null
    dbCreatedAt?: DateTimeFilter<"Message"> | Date | string
    dbUpdatedAt?: DateTimeFilter<"Message"> | Date | string
    senderId?: UuidFilter<"Message"> | string
    recipientUserId?: UuidNullableFilter<"Message"> | string | null
    recipientGroupId?: UuidNullableFilter<"Message"> | string | null
  }

  export type MessageUpsertWithWhereUniqueWithoutRecipientUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRecipientUserInput, MessageUncheckedUpdateWithoutRecipientUserInput>
    create: XOR<MessageCreateWithoutRecipientUserInput, MessageUncheckedCreateWithoutRecipientUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRecipientUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRecipientUserInput, MessageUncheckedUpdateWithoutRecipientUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutRecipientUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRecipientUserInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutMembersInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutMembersInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateManyWithWhereWithoutMembersInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutMembersInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: UuidFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    creatorId?: UuidFilter<"Group"> | string
    lastMessageId?: UuidNullableFilter<"Group"> | string | null
  }

  export type GroupUpsertWithWhereUniqueWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCreatorInput, GroupUncheckedUpdateWithoutCreatorInput>
    create: XOR<GroupCreateWithoutCreatorInput, GroupUncheckedCreateWithoutCreatorInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCreatorInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCreatorInput, GroupUncheckedUpdateWithoutCreatorInput>
  }

  export type GroupUpdateManyWithWhereWithoutCreatorInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
  }

  export type ReactionUpdateManyWithWhereWithoutUserInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    emoji?: StringFilter<"Reaction"> | string
    createdAt?: DateTimeFilter<"Reaction"> | Date | string
    updatedAt?: DateTimeFilter<"Reaction"> | Date | string
    userId?: UuidFilter<"Reaction"> | string
    messageId?: UuidFilter<"Reaction"> | string
  }

  export type PrivateChatUpsertWithWhereUniqueWithoutInitiatorInput = {
    where: PrivateChatWhereUniqueInput
    update: XOR<PrivateChatUpdateWithoutInitiatorInput, PrivateChatUncheckedUpdateWithoutInitiatorInput>
    create: XOR<PrivateChatCreateWithoutInitiatorInput, PrivateChatUncheckedCreateWithoutInitiatorInput>
  }

  export type PrivateChatUpdateWithWhereUniqueWithoutInitiatorInput = {
    where: PrivateChatWhereUniqueInput
    data: XOR<PrivateChatUpdateWithoutInitiatorInput, PrivateChatUncheckedUpdateWithoutInitiatorInput>
  }

  export type PrivateChatUpdateManyWithWhereWithoutInitiatorInput = {
    where: PrivateChatScalarWhereInput
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyWithoutInitiatorInput>
  }

  export type PrivateChatScalarWhereInput = {
    AND?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
    OR?: PrivateChatScalarWhereInput[]
    NOT?: PrivateChatScalarWhereInput | PrivateChatScalarWhereInput[]
    initiatorId?: UuidFilter<"PrivateChat"> | string
    recipientId?: UuidFilter<"PrivateChat"> | string
    lastMessageId?: UuidNullableFilter<"PrivateChat"> | string | null
  }

  export type PrivateChatUpsertWithWhereUniqueWithoutRecipientInput = {
    where: PrivateChatWhereUniqueInput
    update: XOR<PrivateChatUpdateWithoutRecipientInput, PrivateChatUncheckedUpdateWithoutRecipientInput>
    create: XOR<PrivateChatCreateWithoutRecipientInput, PrivateChatUncheckedCreateWithoutRecipientInput>
  }

  export type PrivateChatUpdateWithWhereUniqueWithoutRecipientInput = {
    where: PrivateChatWhereUniqueInput
    data: XOR<PrivateChatUpdateWithoutRecipientInput, PrivateChatUncheckedUpdateWithoutRecipientInput>
  }

  export type PrivateChatUpdateManyWithWhereWithoutRecipientInput = {
    where: PrivateChatScalarWhereInput
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyWithoutRecipientInput>
  }

  export type UserCreateWithoutCreatedGroupsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageCreateNestedManyWithoutRecipientUserInput
    groups?: GroupCreateNestedManyWithoutMembersInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutCreatedGroupsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageUncheckedCreateNestedManyWithoutRecipientUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutCreatedGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
  }

  export type MessageCreateWithoutLastMessageGroupsInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipientUser?: UserCreateNestedOneWithoutReceivedPrivateMessagesInput
    recipientGroup?: GroupCreateNestedOneWithoutMessagesInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    PrivateChatLastMessage?: PrivateChatCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutLastMessageGroupsInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientUserId?: string | null
    recipientGroupId?: string | null
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    PrivateChatLastMessage?: PrivateChatUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutLastMessageGroupsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutLastMessageGroupsInput, MessageUncheckedCreateWithoutLastMessageGroupsInput>
  }

  export type UserCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageCreateNestedManyWithoutRecipientUserInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageUncheckedCreateNestedManyWithoutRecipientUserInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type MessageCreateWithoutRecipientGroupInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipientUser?: UserCreateNestedOneWithoutReceivedPrivateMessagesInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutRecipientGroupInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientUserId?: string | null
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupUncheckedCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutRecipientGroupInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutRecipientGroupInput, MessageUncheckedCreateWithoutRecipientGroupInput>
  }

  export type MessageCreateManyRecipientGroupInputEnvelope = {
    data: MessageCreateManyRecipientGroupInput | MessageCreateManyRecipientGroupInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedGroupsInput = {
    update: XOR<UserUpdateWithoutCreatedGroupsInput, UserUncheckedUpdateWithoutCreatedGroupsInput>
    create: XOR<UserCreateWithoutCreatedGroupsInput, UserUncheckedCreateWithoutCreatedGroupsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedGroupsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedGroupsInput, UserUncheckedUpdateWithoutCreatedGroupsInput>
  }

  export type UserUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUncheckedUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type MessageUpsertWithoutLastMessageGroupsInput = {
    update: XOR<MessageUpdateWithoutLastMessageGroupsInput, MessageUncheckedUpdateWithoutLastMessageGroupsInput>
    create: XOR<MessageCreateWithoutLastMessageGroupsInput, MessageUncheckedCreateWithoutLastMessageGroupsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutLastMessageGroupsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutLastMessageGroupsInput, MessageUncheckedUpdateWithoutLastMessageGroupsInput>
  }

  export type MessageUpdateWithoutLastMessageGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipientUser?: UserUpdateOneWithoutReceivedPrivateMessagesNestedInput
    recipientGroup?: GroupUpdateOneWithoutMessagesNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutLastMessageGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutGroupsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutGroupsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type UserUpdateManyWithWhereWithoutGroupsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutGroupsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutRecipientGroupInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutRecipientGroupInput, MessageUncheckedUpdateWithoutRecipientGroupInput>
    create: XOR<MessageCreateWithoutRecipientGroupInput, MessageUncheckedCreateWithoutRecipientGroupInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutRecipientGroupInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutRecipientGroupInput, MessageUncheckedUpdateWithoutRecipientGroupInput>
  }

  export type MessageUpdateManyWithWhereWithoutRecipientGroupInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutRecipientGroupInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedPrivateMessages?: MessageCreateNestedManyWithoutRecipientUserInput
    groups?: GroupCreateNestedManyWithoutMembersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    receivedPrivateMessages?: MessageUncheckedCreateNestedManyWithoutRecipientUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedPrivateMessagesInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    groups?: GroupCreateNestedManyWithoutMembersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutReceivedPrivateMessagesInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutReceivedPrivateMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedPrivateMessagesInput, UserUncheckedCreateWithoutReceivedPrivateMessagesInput>
  }

  export type GroupCreateWithoutMessagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedGroupsInput
    lastMessage?: MessageCreateNestedOneWithoutLastMessageGroupsInput
    members?: UserCreateNestedManyWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    lastMessageId?: string | null
    members?: UserUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type GroupCreateOrConnectWithoutMessagesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
  }

  export type ReactionCreateWithoutMessageInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutMessageInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type ReactionCreateOrConnectWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput>
  }

  export type ReactionCreateManyMessageInputEnvelope = {
    data: ReactionCreateManyMessageInput | ReactionCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type GroupCreateWithoutLastMessageInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutCreatedGroupsInput
    members?: UserCreateNestedManyWithoutGroupsInput
    messages?: MessageCreateNestedManyWithoutRecipientGroupInput
  }

  export type GroupUncheckedCreateWithoutLastMessageInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
    members?: UserUncheckedCreateNestedManyWithoutGroupsInput
    messages?: MessageUncheckedCreateNestedManyWithoutRecipientGroupInput
  }

  export type GroupCreateOrConnectWithoutLastMessageInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutLastMessageInput, GroupUncheckedCreateWithoutLastMessageInput>
  }

  export type GroupCreateManyLastMessageInputEnvelope = {
    data: GroupCreateManyLastMessageInput | GroupCreateManyLastMessageInput[]
    skipDuplicates?: boolean
  }

  export type PrivateChatCreateWithoutLastMessageInput = {
    initiator: UserCreateNestedOneWithoutInitiatedPrivateChatsInput
    recipient: UserCreateNestedOneWithoutReceivedPrivateChatsInput
  }

  export type PrivateChatUncheckedCreateWithoutLastMessageInput = {
    initiatorId: string
    recipientId: string
  }

  export type PrivateChatCreateOrConnectWithoutLastMessageInput = {
    where: PrivateChatWhereUniqueInput
    create: XOR<PrivateChatCreateWithoutLastMessageInput, PrivateChatUncheckedCreateWithoutLastMessageInput>
  }

  export type PrivateChatCreateManyLastMessageInputEnvelope = {
    data: PrivateChatCreateManyLastMessageInput | PrivateChatCreateManyLastMessageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedPrivateMessages?: MessageUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receivedPrivateMessages?: MessageUncheckedUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserUpsertWithoutReceivedPrivateMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedPrivateMessagesInput, UserUncheckedUpdateWithoutReceivedPrivateMessagesInput>
    create: XOR<UserCreateWithoutReceivedPrivateMessagesInput, UserUncheckedCreateWithoutReceivedPrivateMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedPrivateMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedPrivateMessagesInput, UserUncheckedUpdateWithoutReceivedPrivateMessagesInput>
  }

  export type UserUpdateWithoutReceivedPrivateMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedPrivateMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type GroupUpsertWithoutMessagesInput = {
    update: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
    create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
  }

  export type GroupUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    lastMessage?: MessageUpdateOneWithoutLastMessageGroupsNestedInput
    members?: UserUpdateManyWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type ReactionUpsertWithWhereUniqueWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutMessageInput, ReactionUncheckedUpdateWithoutMessageInput>
    create: XOR<ReactionCreateWithoutMessageInput, ReactionUncheckedCreateWithoutMessageInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutMessageInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutMessageInput, ReactionUncheckedUpdateWithoutMessageInput>
  }

  export type ReactionUpdateManyWithWhereWithoutMessageInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutMessageInput>
  }

  export type GroupUpsertWithWhereUniqueWithoutLastMessageInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutLastMessageInput, GroupUncheckedUpdateWithoutLastMessageInput>
    create: XOR<GroupCreateWithoutLastMessageInput, GroupUncheckedCreateWithoutLastMessageInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutLastMessageInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutLastMessageInput, GroupUncheckedUpdateWithoutLastMessageInput>
  }

  export type GroupUpdateManyWithWhereWithoutLastMessageInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutLastMessageInput>
  }

  export type PrivateChatUpsertWithWhereUniqueWithoutLastMessageInput = {
    where: PrivateChatWhereUniqueInput
    update: XOR<PrivateChatUpdateWithoutLastMessageInput, PrivateChatUncheckedUpdateWithoutLastMessageInput>
    create: XOR<PrivateChatCreateWithoutLastMessageInput, PrivateChatUncheckedCreateWithoutLastMessageInput>
  }

  export type PrivateChatUpdateWithWhereUniqueWithoutLastMessageInput = {
    where: PrivateChatWhereUniqueInput
    data: XOR<PrivateChatUpdateWithoutLastMessageInput, PrivateChatUncheckedUpdateWithoutLastMessageInput>
  }

  export type PrivateChatUpdateManyWithWhereWithoutLastMessageInput = {
    where: PrivateChatScalarWhereInput
    data: XOR<PrivateChatUpdateManyMutationInput, PrivateChatUncheckedUpdateManyWithoutLastMessageInput>
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageCreateNestedManyWithoutRecipientUserInput
    groups?: GroupCreateNestedManyWithoutMembersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
    initiatedPrivateChats?: PrivateChatCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageUncheckedCreateNestedManyWithoutRecipientUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    initiatedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutInitiatorInput
    receivedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type MessageCreateWithoutReactionsInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipientUser?: UserCreateNestedOneWithoutReceivedPrivateMessagesInput
    recipientGroup?: GroupCreateNestedOneWithoutMessagesInput
    lastMessageGroups?: GroupCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutReactionsInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientUserId?: string | null
    recipientGroupId?: string | null
    lastMessageGroups?: GroupUncheckedCreateNestedManyWithoutLastMessageInput
    PrivateChatLastMessage?: PrivateChatUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutReactionsInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
    initiatedPrivateChats?: PrivateChatUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUncheckedUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    initiatedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type MessageUpsertWithoutReactionsInput = {
    update: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
    create: XOR<MessageCreateWithoutReactionsInput, MessageUncheckedCreateWithoutReactionsInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutReactionsInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutReactionsInput, MessageUncheckedUpdateWithoutReactionsInput>
  }

  export type MessageUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipientUser?: UserUpdateOneWithoutReceivedPrivateMessagesNestedInput
    recipientGroup?: GroupUpdateOneWithoutMessagesNestedInput
    lastMessageGroups?: GroupUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    lastMessageGroups?: GroupUncheckedUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type UserCreateWithoutInitiatedPrivateChatsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageCreateNestedManyWithoutRecipientUserInput
    groups?: GroupCreateNestedManyWithoutMembersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    receivedPrivateChats?: PrivateChatCreateNestedManyWithoutRecipientInput
  }

  export type UserUncheckedCreateWithoutInitiatedPrivateChatsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageUncheckedCreateNestedManyWithoutRecipientUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    receivedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutRecipientInput
  }

  export type UserCreateOrConnectWithoutInitiatedPrivateChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInitiatedPrivateChatsInput, UserUncheckedCreateWithoutInitiatedPrivateChatsInput>
  }

  export type UserCreateWithoutReceivedPrivateChatsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageCreateNestedManyWithoutRecipientUserInput
    groups?: GroupCreateNestedManyWithoutMembersInput
    createdGroups?: GroupCreateNestedManyWithoutCreatorInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatCreateNestedManyWithoutInitiatorInput
  }

  export type UserUncheckedCreateWithoutReceivedPrivateChatsInput = {
    id?: string
    name: string
    email: string
    image?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedPrivateMessages?: MessageUncheckedCreateNestedManyWithoutRecipientUserInput
    groups?: GroupUncheckedCreateNestedManyWithoutMembersInput
    createdGroups?: GroupUncheckedCreateNestedManyWithoutCreatorInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    initiatedPrivateChats?: PrivateChatUncheckedCreateNestedManyWithoutInitiatorInput
  }

  export type UserCreateOrConnectWithoutReceivedPrivateChatsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedPrivateChatsInput, UserUncheckedCreateWithoutReceivedPrivateChatsInput>
  }

  export type MessageCreateWithoutPrivateChatLastMessageInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
    recipientUser?: UserCreateNestedOneWithoutReceivedPrivateMessagesInput
    recipientGroup?: GroupCreateNestedOneWithoutMessagesInput
    reactions?: ReactionCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupCreateNestedManyWithoutLastMessageInput
  }

  export type MessageUncheckedCreateWithoutPrivateChatLastMessageInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientUserId?: string | null
    recipientGroupId?: string | null
    reactions?: ReactionUncheckedCreateNestedManyWithoutMessageInput
    lastMessageGroups?: GroupUncheckedCreateNestedManyWithoutLastMessageInput
  }

  export type MessageCreateOrConnectWithoutPrivateChatLastMessageInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutPrivateChatLastMessageInput, MessageUncheckedCreateWithoutPrivateChatLastMessageInput>
  }

  export type UserUpsertWithoutInitiatedPrivateChatsInput = {
    update: XOR<UserUpdateWithoutInitiatedPrivateChatsInput, UserUncheckedUpdateWithoutInitiatedPrivateChatsInput>
    create: XOR<UserCreateWithoutInitiatedPrivateChatsInput, UserUncheckedCreateWithoutInitiatedPrivateChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInitiatedPrivateChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInitiatedPrivateChatsInput, UserUncheckedUpdateWithoutInitiatedPrivateChatsInput>
  }

  export type UserUpdateWithoutInitiatedPrivateChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    receivedPrivateChats?: PrivateChatUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutInitiatedPrivateChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUncheckedUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    receivedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserUpsertWithoutReceivedPrivateChatsInput = {
    update: XOR<UserUpdateWithoutReceivedPrivateChatsInput, UserUncheckedUpdateWithoutReceivedPrivateChatsInput>
    create: XOR<UserCreateWithoutReceivedPrivateChatsInput, UserUncheckedCreateWithoutReceivedPrivateChatsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedPrivateChatsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedPrivateChatsInput, UserUncheckedUpdateWithoutReceivedPrivateChatsInput>
  }

  export type UserUpdateWithoutReceivedPrivateChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUpdateManyWithoutInitiatorNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedPrivateChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUncheckedUpdateManyWithoutRecipientUserNestedInput
    groups?: GroupUncheckedUpdateManyWithoutMembersNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutInitiatorNestedInput
  }

  export type MessageUpsertWithoutPrivateChatLastMessageInput = {
    update: XOR<MessageUpdateWithoutPrivateChatLastMessageInput, MessageUncheckedUpdateWithoutPrivateChatLastMessageInput>
    create: XOR<MessageCreateWithoutPrivateChatLastMessageInput, MessageUncheckedCreateWithoutPrivateChatLastMessageInput>
    where?: MessageWhereInput
  }

  export type MessageUpdateToOneWithWhereWithoutPrivateChatLastMessageInput = {
    where?: MessageWhereInput
    data: XOR<MessageUpdateWithoutPrivateChatLastMessageInput, MessageUncheckedUpdateWithoutPrivateChatLastMessageInput>
  }

  export type MessageUpdateWithoutPrivateChatLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipientUser?: UserUpdateOneWithoutReceivedPrivateMessagesNestedInput
    recipientGroup?: GroupUpdateOneWithoutMessagesNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutPrivateChatLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    recipientUserId?: string | null
    recipientGroupId?: string | null
  }

  export type MessageCreateManyRecipientUserInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientGroupId?: string | null
  }

  export type GroupCreateManyCreatorInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lastMessageId?: string | null
  }

  export type ReactionCreateManyUserInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    messageId: string
  }

  export type PrivateChatCreateManyInitiatorInput = {
    recipientId: string
    lastMessageId?: string | null
  }

  export type PrivateChatCreateManyRecipientInput = {
    initiatorId: string
    lastMessageId?: string | null
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientUser?: UserUpdateOneWithoutReceivedPrivateMessagesNestedInput
    recipientGroup?: GroupUpdateOneWithoutMessagesNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUncheckedUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageUpdateWithoutRecipientUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipientGroup?: GroupUpdateOneWithoutMessagesNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRecipientUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUncheckedUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutRecipientUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientGroupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    lastMessage?: MessageUpdateOneWithoutLastMessageGroupsNestedInput
    messages?: MessageUpdateManyWithoutRecipientGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    messages?: MessageUncheckedUpdateManyWithoutRecipientGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessage?: MessageUpdateOneWithoutLastMessageGroupsNestedInput
    members?: UserUpdateManyWithoutGroupsNestedInput
    messages?: MessageUpdateManyWithoutRecipientGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
    members?: UserUncheckedUpdateManyWithoutGroupsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRecipientGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReactionUpdateWithoutUserInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutUserInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionUncheckedUpdateManyWithoutUserInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
  }

  export type PrivateChatUpdateWithoutInitiatorInput = {
    recipient?: UserUpdateOneRequiredWithoutReceivedPrivateChatsNestedInput
    lastMessage?: MessageUpdateOneWithoutPrivateChatLastMessageNestedInput
  }

  export type PrivateChatUncheckedUpdateWithoutInitiatorInput = {
    recipientId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrivateChatUncheckedUpdateManyWithoutInitiatorInput = {
    recipientId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrivateChatUpdateWithoutRecipientInput = {
    initiator?: UserUpdateOneRequiredWithoutInitiatedPrivateChatsNestedInput
    lastMessage?: MessageUpdateOneWithoutPrivateChatLastMessageNestedInput
  }

  export type PrivateChatUncheckedUpdateWithoutRecipientInput = {
    initiatorId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrivateChatUncheckedUpdateManyWithoutRecipientInput = {
    initiatorId?: StringFieldUpdateOperationsInput | string
    lastMessageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessageCreateManyRecipientGroupInput = {
    id?: string
    content: string
    timestamp?: Date | string
    edited?: boolean
    imageUrl?: string | null
    dbCreatedAt?: Date | string
    dbUpdatedAt?: Date | string
    senderId: string
    recipientUserId?: string | null
  }

  export type UserUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUpdateManyWithoutRecipientUserNestedInput
    createdGroups?: GroupUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedPrivateMessages?: MessageUncheckedUpdateManyWithoutRecipientUserNestedInput
    createdGroups?: GroupUncheckedUpdateManyWithoutCreatorNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    initiatedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutInitiatorNestedInput
    receivedPrivateChats?: PrivateChatUncheckedUpdateManyWithoutRecipientNestedInput
  }

  export type UserUncheckedUpdateManyWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutRecipientGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    recipientUser?: UserUpdateOneWithoutReceivedPrivateMessagesNestedInput
    reactions?: ReactionUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutRecipientGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
    reactions?: ReactionUncheckedUpdateManyWithoutMessageNestedInput
    lastMessageGroups?: GroupUncheckedUpdateManyWithoutLastMessageNestedInput
    PrivateChatLastMessage?: PrivateChatUncheckedUpdateManyWithoutLastMessageNestedInput
  }

  export type MessageUncheckedUpdateManyWithoutRecipientGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    edited?: BoolFieldUpdateOperationsInput | boolean
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dbCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dbUpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: StringFieldUpdateOperationsInput | string
    recipientUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReactionCreateManyMessageInput = {
    emoji: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type GroupCreateManyLastMessageInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    creatorId: string
  }

  export type PrivateChatCreateManyLastMessageInput = {
    initiatorId: string
    recipientId: string
  }

  export type ReactionUpdateWithoutMessageInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutMessageInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionUncheckedUpdateManyWithoutMessageInput = {
    emoji?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCreatedGroupsNestedInput
    members?: UserUpdateManyWithoutGroupsNestedInput
    messages?: MessageUpdateManyWithoutRecipientGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
    members?: UserUncheckedUpdateManyWithoutGroupsNestedInput
    messages?: MessageUncheckedUpdateManyWithoutRecipientGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutLastMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creatorId?: StringFieldUpdateOperationsInput | string
  }

  export type PrivateChatUpdateWithoutLastMessageInput = {
    initiator?: UserUpdateOneRequiredWithoutInitiatedPrivateChatsNestedInput
    recipient?: UserUpdateOneRequiredWithoutReceivedPrivateChatsNestedInput
  }

  export type PrivateChatUncheckedUpdateWithoutLastMessageInput = {
    initiatorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }

  export type PrivateChatUncheckedUpdateManyWithoutLastMessageInput = {
    initiatorId?: StringFieldUpdateOperationsInput | string
    recipientId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}