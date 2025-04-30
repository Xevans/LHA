import mongoose from 'mongoose';

const ObituarySchema = mongoose.Schema(
    {
        lastName: {
            type: String,
            required: false,
            default: ""
        },
        firstName: {
            type: String,
            required: false,
            default: ""
        },
        middleName: {
            type: String,
            required: false,
            default: ""
        },
        deathYear: {
            type: Number,
            required: false,
            default: 1000
        },
        deathMonth: {
            type: Number,
            required: false,
            default: 1
        },
        deathDay: {
            type: Number,
            required: false,
            default: 1
        },
        printYear: {
            type: Number,
            required: false,
            default: 1000
        },
        printMonth: {
            type: Number,
            required: false,
            default: 1
        },
        printDay: {
            type: Number,
            required: false,
            default: 1
        },
        publicationName: {
            type: String,
            required: false,
            default: ""
        },
        pageNumber: {
            type: String,
            required: false,
            default: ""
        },
    },
    {
        timestamps: true,
    }
);

export const Obituary = mongoose.model('Obituary', ObituarySchema, 'Obituaries');