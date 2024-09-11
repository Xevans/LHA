import mongoose from 'mongoose';

const gpcivicSchema = mongoose.Schema(
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

export const GPcivic = mongoose.model('GPcivic', gpcivicSchema, 'GrossePointeCivic');