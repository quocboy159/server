import userEntity from '../models/user'

const getAllUsers = async () => await userEntity.find().exec();

const createUser = async(userRequest) => {
    const user = new userEntity(userRequest);
    return await user.save();
}

const findUserByEmail = async (email) => {
    if (!email) {
        return null;
    }

    const user = await userEntity.findOne({ email }).exec();
    return user;
};

export {
    findUserByEmail,
    getAllUsers,
    createUser
}

