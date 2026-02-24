import mongoose from "mongoose";
import fs from "fs";
import path from "path";

// Manually load env since we are running as a script
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, "utf-8");
  envFile.split("\n").forEach(line => {
    const [key, value] = line.split("=");
    if (key && value) {
      process.env[key.trim()] = value.trim();
    }
  });
}

const MONGODB_URI = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGO_URI;

async function check() {
  console.log("URI found:", MONGODB_URI ? "YES" : "NO");
  if (!MONGODB_URI) {
    console.error("No URI found in .env.local");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to MongoDB");
    
    // Check collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("Collections:", collections.map(c => c.name));
    
    const industryPages = mongoose.connection.db.collection("industrypages");
    const count = await industryPages.countDocuments();
    console.log("IndustryPages count:", count);
    
    const docs = await industryPages.find({}).toArray();
    console.log("Slugs in DB:", docs.map(d => d.slug));
    
  } catch (err) {
    console.error("Connection error:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

check();
