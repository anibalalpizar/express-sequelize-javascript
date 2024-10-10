import app from "./app.js"
import { sequelize } from "./database/database.js";


async function main() {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
    } catch (e) {
        console.log("Database connection failed!", e);
    }

    app.listen(3000, (_) => console.log("Server is running on port 3000"));
}

main();