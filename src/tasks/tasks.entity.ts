





export class Task {
    id:string ;
    title : string ;
    descripcion: string ;
    status:TaskStatus ;

}
export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE',

}
