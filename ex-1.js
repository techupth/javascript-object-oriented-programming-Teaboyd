class EmailNotification { 
    constructor (notificationId,createdTime,content,receiver){
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }

    send(){
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class SMSNotification extends EmailNotification{ 
    constructor (notificationId,createdTime,content,phonenumber){
        super(notificationId,createdTime,content)
        this.phonenumber = phonenumber;
        delete this.receiver;
    }
    send(){
        console.log(`Notification has been sent to ${this.phonenumber}`);
    }
}

const Email = new EmailNotification("Gmail","20:00","Hello, World","Patiphan@gmail.com");
const Phone = new SMSNotification("Message","21:30","Hello, Patiphan","0654321321");
console.log(Email);
console.log(Phone);
Email.send();
Phone.send();