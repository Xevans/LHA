import mongoose from 'mongoose';

const gpmagazineSchema = mongoose.Schema(
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
        publishDecade: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const GPmagazine = mongoose.model('GPmagazine', gpmagazineSchema, 'GrossePointeMagazine');