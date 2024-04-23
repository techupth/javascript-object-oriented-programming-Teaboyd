
class Notification { 
    constructor (notificationId,createTime,content,receiver){
        this.notificationId = notificationId;
        this.createTime = createTime;
        this.content = content;
        this.receiver  = receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification { 
    constructor(notificationId,createTime,content,receiver){
        super(notificationId,createTime,content,receiver)
    }
}

class SMSNotification extends Notification {
    constructor(notificationId,createTime,content,receiver){
        super(notificationId,createTime,content,receiver)
    }
 }
 const Email = new EmailNotification("Gmail","20:00","Hello, World","Patiphan@gmail.com");
 const Phone = new SMSNotification("Message","21:30","Hello, Patiphan","0654321321");
 Email.send();
 Phone.send();