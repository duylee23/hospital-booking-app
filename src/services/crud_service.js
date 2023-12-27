import db from "../models/index";
import bcrypt from 'bcryptjs'

let salt = bcrypt.genSaltSync(10);

    const createUser = async (data) => {
        return new Promise(async (resolve, reject) => {
            try{
                let hashPassword = await hashUserPassword(data.password)
                await db.Users.create({
                    email: data.email,
                    password: hashPassword,
                    firstName: data.firstName,
                    lastName: data.lastname,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender === '1'? true : false,
                })
                resolve('create user successfully!')
            } catch (e) {
                reject(e)
            }
        })
    }

    const getAllUsers = () => {
        return new Promise((resolve, reject) => {
            try{
                let users = db.Users.findAll({
                    raw: true
                })
                resolve(users)
            }catch (e) {
                reject(e)
            }
        })
    }

    const getUserById = (userId) => {
        return new Promise (async (resolve, reject) => {
            try{
                let user = await db.Users.findOne({
                    where: {id: userId},
                    raw: true
                })
                if(user) {
                    resolve(user)
                } else{
                    resolve([])
                }
            } catch (e) {
                reject(e)
            }
        })
    }

    const hashUserPassword = (password) => {
        return new Promise(async (resolve, reject) => {
            try{
                let hashPassword = await bcrypt.hashSync(password, salt)
                resolve(hashPassword)
            }catch (e) {
                reject(e)
            }
        })
    }

    const updateUserData = (data) => {
        return new Promise (async(resolve, reject) => {
            try{
                let user = await db.Users.findOne({
                    where: {id : data.id},
                   
                })

                if(user){
                    user.firstName = data.firstName,
                    user.lastName = data.lastName,
                    user.email = data.email
                    await user.save()
                    resolve()
                } else{
                    console.log('something wrong!')
                }
            }catch (e) {
                reject(e)
            }
        })
    }

    const deleteUserById = (userId) => {
        return new Promise(async (resolve, reject) => {
            try{
                let user = await db.Users.findOne({
                    where: {id: userId}
                })
                if(user){
                    await user.destroy()
                }
                resolve()
            }catch(e) {
                reject(e)
            }
        })
    }

    module.exports = {  
        createUser : createUser,
        getAllUsers : getAllUsers,
        getUserById: getUserById,
        updateUserData: updateUserData,
        deleteUserById: deleteUserById
    }
