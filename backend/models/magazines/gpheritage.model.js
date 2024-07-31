import mongoose from 'mongoose';

const gpheritageSchema = mongoose.Schema(
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
    },
    {
        timestamps: true,
    }
);

export const GPheritage = mongoose.model('GPheritage', gpheritageSchema, 'GrossePointeHeritage');