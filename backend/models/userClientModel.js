import mangoose from 'mongoose';

const userClientSchema = new mangoose.Schema({
    clientName: {
        type: String,
        required: true,
        trim: true,
    },
    clientEmail : {
        type: String,
        required: true,
        lowercase: true,
    },
    clientPassword : {
        type: String,
        required: true,
        trim: true,
    },
    isVerifiedByAdmin: {
        type: Boolean,
        default: false,
    },
    isEmailVerified: {
        type: Boolean,
        default: false, 
    },
    emailVerificationToken: {
        type: String,
    },
    emailVerificationTokenExpires: {
        type: Date,
    },
}) 

export default mangoose.model("userClient", userClientSchema);