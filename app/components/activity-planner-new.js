import Component from '@ember/component';
import Ember from 'ember'
import { get } from '@ember/object';


export default Component.extend({
    taskData: Ember.inject.service(),
    newTasks:['Task 1','Task 2', 'Task 3'],
    // removeTask: "this is check string",
    actions : {
        removeTask (taskObject) {
            debugger
            
            // console.log(taskObject, "is this getting triggered ??")
            console.log(taskObject.that.newTasks.removeObject(taskObject.data))
        
        }
    },
    init(){
        this._super(...arguments)
        let that = this
        
        this.get('taskData').on('data-comming', function(data) {
            console.log("sdfsdfsdf",that.newTasks,"this has reached the parent")
            that.actions.removeTask({that: that, data: data})
            
            
        })
    },
    didRender(){
        
    }
});
