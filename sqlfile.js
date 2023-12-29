// var con = mysql.createConnection({  
//     host: "localhost",  
//     user: "root",  
//     password: "password",
//   });  
//   con.connect(function(err) {  
//     if (err) throw err;  
//     console.log("msql Connected!");  
//   });  
  
//   con.connect((err) => {
//     if (err) {
//       console.error("Error connecting to MySQL:", err);
//     } else {
//       console.log("Connected to MySQL");
  
//       // Create the database if it doesn't exist
//       con.query("CREATE DATABASE IF NOT EXISTS shoes_api_data", (createErr) => {
//         if (createErr) {
//           console.error("Error creating database:", createErr);
//         } else {
//           console.log("Database created or already exists");
//         }
//       });
  
//       // Switch to the created database
//       con.query("USE shoes_api_data", (useErr) => {
  
//         con.query(
//           "CREATE TABLE IF NOT EXISTS users (id VARCHAR(36) PRIMARY KEY, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)",
//           (tableCreateErr) => {
//             if (tableCreateErr) {
//               console.error("Error creating users table:", tableCreateErr);
//             } else {
//               console.log("Users table created or already exists");
//             }
//           }
//         );
//       });
//     }
//   });
  
// Login endpoint
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;

//   db.query(
//     'SELECT * FROM users WHERE username = ?',
//     [username],
//     async (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error fetching user');
//       } else if (result.length > 0) {
//         const match = await bcrypt.compare(password, result[0].password);

//         if (match) {
//           res.status(200).send('Login successful');
//         } else {
//           res.status(401).send('Incorrect password');
//         }
//       } else {
//         res.status(404).send('User not found');
//       }
//     }
//   );
// });

// app.post("/register", (req, res) => {
//   const userId = uuid.v4();
//   // const username = req.body
//   // const password = req.body
 
//   const { username, password } = req.body;
//   console.log("Received data:", { userId, username, password });
//   console.log("Request headers:", req.headers);


//   const sql = "INSERT INTO users (id,username,password) VALUES (?,?,?)";
//   // console.log(sql)
//   con.query(sql, [userId, username, password], (err, result) => {
//     if (result) {
//       res.status(200).send("User registered successfully",result);
//     } else {
//       console.error("Error registering user:", err);
//       res.status(500).send("Error registering user");
//     }
//   });
// });
