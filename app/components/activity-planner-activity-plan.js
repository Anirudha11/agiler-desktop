import Component from '@ember/component';

export default Component.extend({
    activityPlanTasks: ['Task A', 'Task B', 'Task C', 'Task D'],
    actions: {
        // ondragover_handler(e){

        //     console.log("dragover zone");
        //     e.preventDefault();
        // },
        // drop_handler(task){
            
        //     console.log(task,"drop zone")
        //     this.tasks.pushObject(task);

        // },
        // ondragenter_handler()
        // {
        //     console.log("ondragenter event")
        // },
        addTask(x){
            console.log("addTask action")
            this.activityPlanTasks.pushObject(x);
            console.log(this.activityPlanTasks);
            this.set('dropFlag',true);
        }
    //     removeTask(x){
    //         console.log(x);
    //         this.newTasks.removeObject(x);
    //         console.log(this.newTasks,"newTasks");
    //     }
    
    }
});
