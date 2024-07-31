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
        publishMonth: {
            type: Number,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        publishDay: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

export const GPnews = mongoose.model('GPnews', gpnewsSchema, 'GrossePointeNews');