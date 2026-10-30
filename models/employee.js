const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const employeeSchema = new mongoose.Schema
({
    name:
    {
        type: String,
        required: true,
    },

    email:
    {
        type: String,
        unique: true,
        required: true,
    },

    password:
    {
        type: String,
        required: true,
    },

    department:
    {
        type: String,
        required: true,
    },

    role:
    {
        type: String,
        required: true,
    },

});

employeeSchema.pre('save', async function(next)
{
    if(!this.isModified('password')) return next();
    
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
});

employeeSchema.methods.comparePassword = async function(candidatePassword)
{
    return await bcrypt.compare(candidatePassword, this.password);
};


const Employee = mongoose.model("employee",employeeSchema);

module.exports = Employee;