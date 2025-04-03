import mongoose from 'mongoose';

const ObituarySchema = mongoose.Schema(
    {
        lastName: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
            required: true,
        },
        deathYear: {
            type: Number,
            required: true,
        },
        deathMonth: {
            type: Number,
            required: true,
        },
        deathDay: {
            type: Number,
            required: true,
        },
        printYear: {
            type: Number,
            required: true,
        },
        printMonth: {
            type: Number,
            required: true,
        },
        printDay: {
            type: Number,
            required: true,
        },
        publicationName: {
            type: String,
            required: true,
        },
        pageNumber: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Obituary = mongoose.model('Obituary', ObituarySchema, 'Obituaries');