import app from "./app.js"
import { sequelize } from "./database/database.js";

import "./models/Project.js";
import "./models/Task.js";


async function main() {
    try {
        await sequelize.authenticate();
        console.log("Database connected!");
        /* https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization */
        await sequelize.sync({ force: true });
    } catch (e) {
        console.log("Database connection failed!", e);
    }

    app.listen(3000, (_) => console.log("Server is running on port 3000"));
}

main();