import IndustryPage from "./models/IndustryPage";
import dbConnect from "./db";
import { seedIndustryPages } from "./seed-data";

async function run() {
  console.log("Connecting...");
  await dbConnect();
  console.log("Connected.");
  const count = await IndustryPage.countDocuments();
  console.log(`Current count: ${count}`);
  if (count === 0) {
    console.log("Seeding...");
    await seedIndustryPages();
    console.log("Seeded.");
  }
  const all = await IndustryPage.find({}, { slug: 1 });
  console.log(`Slugs: ${all.map((d) => d.slug).join(", ")}`);
  process.exit(0);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
