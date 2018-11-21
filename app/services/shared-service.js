import Service from '@ember/service';

export default Service.extend({
    sendData(data){
        console.log(data, "this is service ..!!")
        this.trigger('distributeData', data);
    }
});
