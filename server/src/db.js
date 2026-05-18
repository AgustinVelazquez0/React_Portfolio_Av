import mongoose from "mongoose";

/**
 * Conecta a Mongo si hay URI. Si no, loguea un warning y sigue sin DB.
 * Las rutas que dependan de Mongo deben chequear `isDbConnected()` y
 * responder 503 si no está disponible.
 *
 * Devuelve `true` si conectó, `false` si fue skipeado.
 */
export async function connectDb(mongoUri) {
  if (!mongoUri) {
    console.warn(
      "[db] MONGODB_URI not set — server starting without DB. " +
        "Routes that depend on Mongo will return 503."
    );
    return false;
  }

  mongoose.set("strictQuery", true);

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 8000,
    });
    console.log("[db] connected");
    return true;
  } catch (err) {
    console.warn(
      `[db] connection failed (${err.message}) — server starting without DB.`
    );
    return false;
  }
}

export function isDbConnected() {
  return mongoose.connection.readyState === 1;
}
