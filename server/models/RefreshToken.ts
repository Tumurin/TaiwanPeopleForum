import mongoose from "mongoose";

export interface RefreshTokenDocument extends Document {
    token: string;
    createdAt: Date;
    updatedAt: Date;
}

const TokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 43200
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
        expires: 43200
    }
});

export const RefreshToken = mongoose.model<RefreshTokenDocument>("RefreshToken", TokenSchema);
