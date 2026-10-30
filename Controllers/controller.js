const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');

const generateToken = (Employee) =>
{
    const payload =
    {
        id: Employee._id,
        email: Employee.email
    };

    const options =
    {
        expiresIn: '1h'
    };

    return jwt.sign(payload, process.env.JWT_SECRET, options);
};

const verifyToken = (token) =>
{
    return jwt.verify(token, process.env.JWT_SECRET);
};

async function handleCreate(req, res)
{
    const { name, email, password, department, role,  } = req.body;

    try
    {
        const employee = await Employee.create
        ({
            name,
            email,
            password,
            department, 
            role,   
        });

        res.redirect("/");

        employee.save();
    }

    catch(err)
    {
        res.status(500);
    }
};

async function handleRead(req, res)
{
    try
    {
        const allEmp = await Employee.find({});
        res.send(allEmp);
    }
    catch(err)
    {
        res.send("ERROR OCCURED = ",err)
    }
};

async function handleUpdate(req, res) 
{
    const { name, department, role, email, password } = req.body;
    const id = req.params._id;

    try 
    {
        const employee = await Employee.findByIdAndUpdate(
            id,
            {
                name,
                department,
                role,
                email,
                password,
            },
            { new: true, runValidators: true } // This option returns the updated document
        );

        if (!employee) 
        {
            return res.status(404).send("Employee not found");
        }

        console.log("UPDATED = ",employee);
        res.json({ message: "Successfully updated", employee });
    } 
    catch (err) 
    {
        res.status(500).json({ error: "ERROR OCCURRED", details: err.message });
    }
};


async function handleDelete(req, res)
{
    const id = req.params._id;
    try
    {
        const employee = await Employee.findByIdAndDelete(id);
        if(!employee)
        {
            res.status(404).send("Employee not found");
        }
        res.send("Employee has been deleted");
    }
    catch(err)
    {
        res.json({err : "err occur"});
    }
};

async function handleListByRole(req, res)
{
    const role = req.params.role;
    try
    {
        const allEmp = await Employee.find({role: role});
        res.json({allEmp});
        console.log({allEmp});
    }
    catch(err)
    {
        res.send("ERROR OCCURED = ",err)
    }
};




module.exports =
{
    generateToken,
    verifyToken,
    handleCreate,
    handleRead,
    handleUpdate,
    handleDelete,
    handleListByRole,
}

