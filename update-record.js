function updateUser(connection, user_id , user_name, user_specification, user_contact) {

    
    connection.query('UPDATE `user` SET `user_name`=?,`user_specification`=?, `user_contact`=? where `user_id`=?',
    [user_name, user_specification, user_contact, user_id],
    function (error, results, fields) {
        if (error) throw error;
        console.log("Record updated!");
    });
}
module.exports = {
    updateUser
  };