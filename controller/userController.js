const { connect  } = require('../config/sqlServer');
const sql = require('mssql')
const getUsers = async (req, res) => {
  try {
    const pool = await connect();
    const result = await pool.request().query('SELECT * FROM EMPs');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};
 
const updateUser = async (req, res) => {
  const { userID } = req.params;
  const { EmpName,Address,Phonenumber } = req.body;
  console.log("akvkfdkvkfdakv");
  
  try {
    const pool = await connect();
    const result = await pool.request()
      .input('EmpName', sql.VarChar, EmpName)
      .input('EmpId', sql.Int, userID)
      .input('Address',sql.VarChar,Address)
      .input('Phonenumber',sql.VarChar,Phonenumber)
      .query('UPDATE EMPs SET EmpName = @EmpName,Address = @Address,Phonenumber = @Phonenumber WHERE EmpId = @EmpId');

    res.json({ message: 'User updated successfully' });
  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ error: 'Failed to update user' });
  }
};
const deleteUser = async (req, res) => {
   const { userID } = req.params;
  
  console.log("akvkfdkvkfdakv");
  
  try {
    const pool = await connect();
    const result = await pool.request()
     
      .input('EmpId', sql.Int, userID)
      .query('DELETE from EMPs WHERE EmpId = @EmpId');

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error deleting user:', err);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};
const insertUser = async (req, res) => {
  const { userID } = req.params;
  const { EmpName,Address,Phonenumber } = req.body;
  console.log("akvkfdkvkfdakv");
  
  try {
    const pool = await connect();
    const result = await pool.request()
      .input('EmpName', sql.VarChar, EmpName)
      .input('EmpId', sql.Int, userID)
      .input('Address',sql.VarChar,Address)
      .input('Phonenumber',sql.VarChar,Phonenumber)
      .query('INSERT INTO EMPs (EmpName,Address,Phonenumber) VALUES(@EmpName,@Address,@Phonenumber)');

    res.json({ message: 'User inserted successfully' });
  } catch (err) {
    console.error('Error inserting user:', err);
    res.status(500).json({ error: 'Failed to insert user' });
  }
};

module.exports ={
    getUsers,
    updateUser,
    deleteUser,
    insertUser
}