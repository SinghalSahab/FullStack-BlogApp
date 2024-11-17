import mongoose, { Schema } from "mongoose";

const commentSchema = new mongoose.Schema(
    {
      user: {
        _id: { type: Schema.Types.ObjectId, ref: 'Users' },
        name: { type: String },
      },
      post: { type: Schema.Types.ObjectId,ref: 'Posts' }, 
      desc: { type: String },
    },
    {
      timestamps: true, 
      
    }
  );
  
  const Comments = mongoose.model('Comments', commentSchema);
export default Comments;