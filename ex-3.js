//  Start coding here
class User{
    constructor (id,name,email){
        this.id = id
        this.name = name
        this.email = email
    }
}

class PostLine{
    constructor(posts){
        this.posts = [];
    }
    addPost(Post){
        Post.push(this.posts);
    }
    shardPost(){
        console.log(`You've shared about ${this.title} to your friend`);
    }
}

class Post extends PostLine {
    constructor(id,title,content){
        super();
        this.id = id
        this.title = title
        this.content = content
        this.comment = [];
    }
    addComment(comment){
        comment.push(this.comment);
    }
}
class Comment extends Post{
    constructor(id,content,createdBy,like){
        super(id,content,createdBy,like)
        this.createdBy = createdBy
        this.like = 0;
    }
    addLike(){
        ++this.like;
    }
}

class Facebook{
    constructor (groupList,pageList){
        this.groupList = []
        this.pageList = []
    }
    addGroup(){
        ++this.groupList
    }
    addGroup(){
        ++this.pageList
    }
}

class FacebookPage{
    constructor (name){
        this.name = name
    }
}

class FacebookGroup extends FacebookPage{
    constructor(name){
        super(name)
    }
}

class Notification extends Comment{
    constructor(id){
        super(id);
        delete this.name,this.email;
    }
    send(){
        console.log(`Notification:${this.createdBy} has just commented on this post- ${this.title}`)
    }
}