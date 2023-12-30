import e from 'express';
import db from '../models/index';
import crud_service from '../services/crud_service'


    const getHomePage = async (req,res) => {
        try{
            let data = await db.Users?.findAll();
            return res.render('homePage.ejs')
        } catch(e){
            console.log(e)
        }
    }

    const getCrud = (req,res) => { 
        return res.render('crud.ejs')
    }

    const getUsers = async (req,res) => {
        let data = await crud_service.getAllUsers()
        return res.render('showUsers.ejs', {data})
    }

    const editUser = async (req,res) => {
        let userId = req.query.id;
        if(userId) {
            let userData = await crud_service.getUserById(userId)
            return res.render('editUser.ejs', {userData})
        }
        else{
            return res.send('User not found!')
        }
        
    }

    const postCrud = async (req,res) => {
        let message = await crud_service.createUser(req.body)
        console.log(message)
        return res.redirect('/get-crud')
    }

    const putCrud = async (req, res) => {
        let data = req.body;
        await crud_service.updateUserData(data);
        return res.redirect('/get-crud')
    }

    const deleteCrud = async (req,res) => {
        let userId = req.query.id;
        if(userId) {
            await crud_service.deleteUserById(userId)
            return res.redirect('/get-crud')
        }
        return res.send('user not found!!!')
        
    }



module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
    getUsers: getUsers,
    editUser: editUser,
    putCrud : putCrud,
    deleteCrud : deleteCrud
}




