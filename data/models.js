const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres@localhost:5432/plex_notfications')


const Subscriber = sequelize.define('subscriber', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastWatch: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'last_watch'
    },
    lastLogin: {
        type: DataTypes.DATE,
        allowNull: true
    }
},
{
    timestamps: true,
    underscored: true
})

const Request = sequelize.define('request',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contentType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subscriberId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Subscriber,
            key: 'id'
        }
    }
},
{underscored: true})

const isLoggedIn = async () => {
    try {
        await sequelize.authenticate();
        return true;
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
      }
}

const addSubscriber = async(name, phoneNumber) => {
    try{
        await Subscriber.create({'name': name, 'phoneNumber': phoneNumber})
    }
    catch(error) {
        console.error("Error Inserting Subscriber Query: ", error)
    }
}

const run = async () => {
    loggedIn = await isLoggedIn()
    loggedIn ? console.log('successfully Connected.') :  console.log('Failed.')
    if (isLoggedIn) { 
        await addSubscriber("Nino Lopez", "+18137316616")
        console.log("added subscriber")
    }
}

run();
