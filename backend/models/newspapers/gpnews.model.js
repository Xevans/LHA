import mongoose from 'mongoose';

const gpnewsSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        fileURL: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const GPnews = mongoose.model('GPnews', gpnewsSchema, 'GrossePointeNews');