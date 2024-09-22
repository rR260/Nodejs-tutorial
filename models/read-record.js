
// Retrieve and return all users data from the database.

function readData(connection) {
    return new Promise((resolve, reject) => {
        connection.query('select * from user',
        function (error, results, fields) {
            if (error) {
                reject(error);
            } else {
                var data = results;
                resolve(data);
            }
        });
    });
}

function readDataById(connection, id) {
    return new Promise((resolve, reject) => {
        console.log('Querying database with user_id:', id);
        connection.query('select * from user where `user_id`=?',
        [id],
        function (error, results, fields) {
            if (error) {
                console.log('error',error);
                reject(error);
            } else {
                var data = results;
                // console.log('result',results);
                resolve(data);
            }
        });
    });
}
module.exports = {
    readData,
    readDataById
  };