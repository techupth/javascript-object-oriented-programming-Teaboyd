//  Start coding here
class PostList{
    constructor(){
        this.posts = [];
    }
    addPost(post){
        this.posts.push({
            id: this.posts.length + 1,
            title: post.title,
            content: post.content,
            comments: post.comments,

        });
    }

    shardPost(postId){
        console.log(`You've shared about ${this.posts[postId - 1].title} to your friend`);
    }
}

class Post {
    constructor(id,title,content){
        this.id = id;
        this.title = title;
        this.content = content;
        this.comments = [];
    }
    addComment(comment){
        this.comments.push(comment);
    }
}
class Comment{
    constructor(id,content,createdBy){
        this.id = id;
        this.content = content;
        this.createdBy = createdBy;
        this.like = 0;
    }
    addLike(){
        ++this.like;
    }
}

class User{
    constructor(id,name,email){
        this.id = id
        this.name = name
        this.email = email
    }
}

class Facebook{
    constructor (){
        this.groupList = []
        this.pageList = []
    }
    addGroup(group){
        this.groupList.push(group);
    }
    addPage(page){
        this.pageList.push(page);
    }
}

class FacebookPage{
    constructor (name){
        this.name = name;
    }
}

class FacebookGroup{
    constructor(name){
        this.name = name;
    }
}

class Notification{
    constructor(id){
        this.id = id;
    }
    send(comment,post){
        console.log(`Notification:${comment.createdBy.name} has just commented on this post- ${post.title}`)
    }
}

const Pati = new User(1,"Patiphan","Patiphan@gmail.com");
const postList = new PostList();
const firstPost = new Post(1,"Paboy","Patiphan love SmartHearth");
const firstComment = new Comment(1,"Comment", Pati);
firstComment.addLike();
firstComment.addLike();
console.log(firstComment.like);
postList.addPost(firstPost);
console.log(postList.posts);
firstPost.addComment(firstComment);
postList.shardPost(1);

const facebook = new Facebook();
const firstPage = new FacebookPage("My First page");
const firstGroup = new FacebookGroup("My first group");
facebook.addPage(firstPage);
facebook.addGroup(firstGroup);
console.log(facebook.pageList);
console.log(facebook.groupList);
const notification = new Notification(1);
notification.send(firstComment,firstPost)