import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {TasksService} from './tasks.service'
import { get } from 'http';
import { UpdateTaskDto, createTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService ){}

    @Get()
    getAllTasks(){
    return this.tasksService.getAllTasks()
    }
    @Post()
    createTask(@Body() newTask : createTaskDto){
        
       return this.tasksService.createTasks(newTask.title, newTask.descripcion)

    }
    @Delete(':id')
    deleteTask(@Param('id') id:string){
        this.tasksService.deleteTask(id)  
    }
    @Patch(":id")
    updadeTask(@Param("id") id :string ,@Body() updateFiels: UpdateTaskDto){
        return this.tasksService.updateTasks(id,updateFiels)
    }






    
}
