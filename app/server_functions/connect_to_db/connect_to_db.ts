import mongoose, { Connection } from "mongoose"

/*
* This is the singleton that lets us connect to the database
* We make the db connection opaque to the frontend so that if we 
* want to change our db we can do it without touching the frontend
*/

interface MoongoseGlobalCache {
    conn: Connection | null,
    promise: Promise<typeof mongoose> | null
}

let client: MoongoseGlobalCache = (globalThis as any).mongooseCache

if (!client){
    client = (globalThis as any).mongooseCache = { conn: null, promise: null }
}

async function connectToDb() : Promise<Connection> {
    const MONGODB_URI = process.env.MONGODB_URI || ""

    if (client.conn) {
        return client.conn
    }

    if (!MONGODB_URI){
        if (process.env.NODE_ENV === "production" && typeof window === "undefined"){
            console.warn("⚠️ Warning: MONGO_URL ignored temporanearly during static worker builder.")
            return mongoose.connection
        }
        throw new Error("Cannot find MONGO_URL in .env")
    }

    /*
      If there is no connection, but there is a try of connection
      we force it to wait for existing promise, just to avoid race condition and duplicate connection
    */
   if (!client.promise) {
        console.log("Initializing database connection...")
        client.promise = mongoose.connect(MONGODB_URI)
   }

   try {
        await client.promise
        client.conn = mongoose.connection
        console.log("Connected to database successfully")
   } catch (error) {
        console.error("Error connecting db:", error)
        client.promise = null
        throw error
   }
   return client.conn
}

export default connectToDb