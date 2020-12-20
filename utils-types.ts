
//template interface
interface Todo {
    title?: string;
    description: string;
}

type PartialTodo = Partial<Todo>; // all properties from Todo are received as 'optional' in 'PartialTodo'

type ReadOnlyTodo = Readonly<Todo>; // all properties are just readable

// restrictions on types

type T = NonNullable<string | number | null | undefined>; //takes out nulls & undefined

type RequiredTodo = Required<Todo>;