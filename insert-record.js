
function insert(connection, user_name, user_specification, user_contact) {
    let params = {
        user_name: user_name,
        user_specification: user_specification,
        user_contact: user_contact
    }
    
    connection.query("INSERT INTO user SET ? ", params,
        function (error, results, fields) {
            if (error) throw error;
            console.log("Record inserted");
        });
}

    module.exports = {
        insert
      };