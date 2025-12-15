

const options = {
    listenPort : process.env.PORT || 3001,
    mongoHost: process.env.MONGO_HOST || 'localhost'
};

export default options;