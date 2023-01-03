//import type { Message } from './message.interface';


/*export interface Message{
    id: { type: Number, unique: true, required: true },
    userId: { type: String, required: true},
    description: { type: String, required: true},
    imageUrl: { type: String, required: true},
    likes: { type: Number, default:0},
    dislikes: { type: Number,default:0},
    usersLiked:{type: [String] ,required:false},
    usersDisliked: {type:[String] , required:false },
    message_id: { type: Number, unique: true, required: true }
}*/
export interface Message {
  description: string;
  createdAt?: string;
 
 
}


export interface MessageForm {
  description: string;
  

  

 
 
}
   
