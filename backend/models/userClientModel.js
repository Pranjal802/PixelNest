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
    isVarifiedByAdmin: {
        type: Boolean,
        default: false,
    },
}) 

export default mangoose.model("userClient", userClientSchema);