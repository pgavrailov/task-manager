//CRUD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5f8353f929282f4b1c8ba546")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age: 44}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({age: 44}).count((error, count) => {
    //     console.log(count)
    // })

    db.collection('tasks').findOne({_id: new ObjectId("5f8350aeb001f623e8b911e1")}, (error, task ) => {
        if (error) {
            return console.log('Unable to fetch')
        }
        console.log(task)
    })

    db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
        if (error){
            return console.log('Unable to ')
        }

        console.log(tasks)
    })
})