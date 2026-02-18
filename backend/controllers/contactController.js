import Contact from "../models/contactModel.js"


export default async function createContact (req, res) {
    try{
        // const { name, email, subject, message } = req.body;
        const contact  = await Contact.create(req.body)
        console.log(contact);
        // console.log(`demo sent a mesage for contact..`);
        res.status(201).send("contact created successfully");
    }catch(error){
        console.log("Error while creating contact...", error.message);
    }
}
