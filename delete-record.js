function deleteData(connection, user_id) {

    connection.query(
        'DELETE FROM user where user_id = ?', user_id, (err, result) => {
            if (err) throw err;
            console.log("Deleted User");
        }
    );
}

module.exports = {
    deleteData
  };