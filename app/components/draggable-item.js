  import Component from '@ember/component';
  import Ember from 'ember'
  import {
    get
  } from '@ember/object';
  import {
    set
  } from '@ember/object';


  export default Component.extend({
    init(){
      this._super(...arguments);
      const self = this
      this.set('self', self)
      console.log(this)

    },
    // self: this,
    classNames: ['draggableItem'],
    attributeBindings: ['draggable'],
    draggable: 'true',
    dragClass: 'deactivated',
    taskData: Ember.inject.service('task-data'),
    dragStart(event) {
      let data = event.dataTransfer.setData('some_Object', get(this, 'content')); // rename it after
    
      return data
    },
    dragLeave(event) {
      event.preventDefault();
      set(this, 'dragClass', 'deactivated');
    },

    dragOver(event) {
      event.preventDefault();
      set(this, 'dragClass', 'activated');
    },
    drop(event) {
      let data = event.dataTransfer.getData('some_Object');
      this.sendAction('dropped', data);
      // this.actions.some_action(data)
      this.sendAction('dragged', data);
      console.log("what is this ??")
      this.taskData.sendData(data)
      // this.newTasks.removeObject(data);
      // console.log(this.actions.some_action(data),data, "which we are getting from the events")
      set(this, 'dragClass', 'deactivated');
    },
    // actions: {
    //   some_action: function(task) {
    //     console.log(this, "what is this ??")
         
    //   }
    // }
    
  });
