const { Employee } = require('../models/Employee')
const { User } = require('../models/User')


const resolvers = {
    Query:{
        getAllUsers: async (root) =>{            
            const user = await User.find({})
            return user
        },
        getAllEmployees: async (root)=>{
            const employee = await Employee.find({})
            console.log(employee);
            return employee
    },
        login: async (root, {username, password, email})=>{
            const user = await User.find({username: username, password: password, email:email})
            console.log(user[0]);
            return user[0]
    },
        searchEmployee: async (root, {_id})=>{
            const employee = await Employee.findById({_id: _id})
            return employee
    }
},

    Mutation: {
        signup: async (root, {username, email, password} ) => {
            const newUser = new User({
                username: username,
                email: email,
                password: password
            })
            return new Promise((resolve, reject) => {
                newUser.save((err) => {
                    if (err) {
                        reject(err)
                    }
                    else resolve(newUser)
                })
            })
        },
        updateEmployeeById: async (root, {_id, input}) => {
            const employee = await Employee.findById({_id: _id})
            if (input.email !== undefined) {
                employee.email = input.email
            } 
            if (input.firstname !== undefined) {
                employee.firstname = input.firstname
            } 
            if (input.lastname !== undefined) {
                employee.lastname = input.lastname
            } 
            if (input.gender !== undefined) {
                employee.gender = input.gender
            } 
            if (input.salary !== undefined) {
                employee.salary = input.salary
            }

            try {
                await employee.save()
                console.log(employee);
                return employee
            } catch (err) {
                return err
            }

        },
        createEmployee: async (root, {input}) => {
            const newEmpl = new Employee({
                firstname: input.firstname,
                lastname: input.lastname,
                email: input.email,
                gender: input.gender,
                salary: input.salary
            })
            return new Promise((resolve, reject) => {
                newEmpl.save((err) => {
                    if (err) {
                        reject(err)
                    }
                    else resolve(newEmpl)
                })
            })
        },
        deleteEmployeeById: async (root, {_id}) => {
            console.log(_id);
            try {
                const delEmp = await Employee.findByIdAndDelete({_id: _id})
                return delEmp
            } catch (err) {
                return err
            }

        }
    }

}

module.exports = {resolvers}