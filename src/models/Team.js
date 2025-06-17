import pkg from 'mongoose';
const { Schema, model } = pkg;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }]
}, {
    timestamps: true
});

export default model('Team', teamSchema);