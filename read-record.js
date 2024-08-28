
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
module.exports = {
    readData
  };