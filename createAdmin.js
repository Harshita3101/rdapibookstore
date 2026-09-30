const User = require('./models/User');
const bcrypt = require('bcrypt');
const createAdmin =  async () => {
    try {
        let user = await User.findOne({ email: 'harshita@yopmail.com' });
        if(user) {
            console.log('User Updated Successfully...');
        } else {
            user = new User();
            user.firstName = 'Harshita';
            user.lastName = 'Solanki';
            user.mobileNo = '8171818132'
            user.email = "harshita@yopmail.com";
            let password = bcrypt.hashSync('12345', 10);
            user.password = password;
            user.userType = 'admin';
            await user.save();
            console.log("User Created Successfully...");
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = createAdmin;