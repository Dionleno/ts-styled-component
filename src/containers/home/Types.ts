export interface IDataProps {
    data: IAllTodoesProps;
}
export interface IAllTodoesProps {
    allTodoes: InfoUsers[];
    loading: boolean;
}

export interface InfoUsers {
    name: string;
    email: string;
}

