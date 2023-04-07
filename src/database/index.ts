import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database_rentx",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
})
console.log("DataBase")
AppDataSource.initialize()
.then(() => {
console.log("Data Source has been initialized!")
})
.catch((err) => {
console.error("Error during Data Source initialization", err)
})