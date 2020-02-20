# Running the application
0. Using node v12.9.0, 
1. Using MySql 8 as database, copy and paste ```CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `created` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci```
2. Edit database/db.js accordingly 
3. In the root folder, open terminal and type `npm i`
4. then followed with `nodemon server.js `
5. in the client folder, open terminal and type ` npm i`
6. then followed with `npm start`