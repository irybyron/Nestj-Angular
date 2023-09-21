import { Injectable } from '@nestjs/common';
import{ Task } from './tasks.entity';
import{ TaskStatus } from './tasks.entity';
import {v4} from 'uuid'
import { UpdateTaskDto } from './dto/task.dto';


@Injectable()
export class TasksService {

    private tasks: Task[] = [
    {
        id: v4(),
        title:'first task',
        descripcion: 'some tasks',
        status:TaskStatus.PENDING

    }
    ]


    getAllTasks(){
        return this.tasks;
        
    }
    createTasks(title:string,descripcion:string){
        const task = {
            id: new Date().toISOString(),
            title,
            descripcion,
            status : TaskStatus.PENDING

        }
        this.tasks.push(task)
        return task;

    }
    deleteTask(id:string){
        this.tasks = this.tasks.filter(task => task.id !== id)

    }
    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)

    }
    updateTasks(id: string, updateFields:UpdateTaskDto):Task{
        const task = this.getTaskById(id)
        const newTask = Object.assign(task,updateFields)
        this.tasks = this.tasks.map(task => task.id ===id? newTask: task);
        return newTask;
    
    
    }
   
}
