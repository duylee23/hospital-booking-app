
import db from '../models/index';

    const getHomePage = async (req,res) => {
        try{
            let data = await db.Users?.findAll();
            return res.render('homePage.ejs', {
                data: JSON.stringify(data)
            })
        } catch(e){
            console.log(e)
        }
    }
    const getCrud = (req,res) => { 
        return res.render('crud.ejs')
    }
    const postCrud = (req,res) => {
        console.log(req.body)
        return res.send('post from body')
    }

module.exports = {
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud
}


