import mongoose from 'mongoose';

const gpreviewSchema = mongoose.Schema(
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

export const GPreview = mongoose.model('GPreview', gpreviewSchema, 'GrossePointeReview');