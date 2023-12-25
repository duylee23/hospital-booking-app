
import db from '../models/index';

const getHomePage = async (req,res) => {
    try{
        let data = await db.Users?.findAll();
        console.log('=================')
        console.log(data)
        console.log('=================')

        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })
    } catch(e){
        console.log(e)
    }
}
module.exports = {
    getHomePage: getHomePage
}


