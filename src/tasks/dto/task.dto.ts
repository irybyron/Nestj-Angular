import { Task, TaskStatus } from "../tasks.entity";


export class createTaskDto {
    title : string
    descripcion : string

}
export class UpdateTaskDto {
    title ? : string
    descripcion ?: string
    status ?: TaskStatus
}
