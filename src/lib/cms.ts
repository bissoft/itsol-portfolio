"use server";

import dbConnect from "@/lib/db";
import Hero, { IHeroContent } from "@/lib/models/Hero";
import CompanyStats, { ICompanyStatsContent } from "@/lib/models/CompanyStats";
import Awards, { IAwardsContent } from "@/lib/models/Awards";
import ServicesContent, { IServicesContent } from "@/lib/models/Services";
import ProjectsContent, { IProjectsContent } from "@/lib/models/Projects";
import ConversationsContent, {
  IConversationsContent,
} from "@/lib/models/Conversations";
import PartnersContent, { IPartnersContent } from "@/lib/models/Partners";
import WhyChooseUsContent, {
  IWhyChooseUsContent,
} from "@/lib/models/WhyChooseUs";
import IndustriesContent, { IIndustriesContent } from "@/lib/models/Industries";
import TeamsContent, { ITeamContent } from "@/lib/models/Team";
import BlogsContent, { IBlogsContent } from "@/lib/models/Blogs";
import FaqsContent, { IFaqsContent } from "@/lib/models/Faqs";
import AboutContent, { IAboutContent } from "@/lib/models/About";
import LeadMagnetContent, { ILeadMagnetContent } from "@/lib/models/LeadMagnet";
import NavbarMenuContent, { INavbarMenuContent } from "@/lib/models/NavbarMenu";
import IndustryPage, { IIndustryPageContent } from "@/lib/models/IndustryPage";
import ServicePage, { IServicePageContent } from "@/lib/models/ServicePage";
import EngagementPage from "@/lib/models/EngagementPage";
import HireDevPage from "@/lib/models/HireDevPage";
import CareersContent, { ICareersContent } from "@/lib/models/Careers";
import { revalidatePath } from "next/cache";
import {
  HeroData,
  defaultHeroData,
  CompanyStatsData,
  defaultStatsData,
  ServicesData,
  defaultServicesData,
  ProjectsData,
  defaultProjectsData,
  ConversationsData,
  defaultConversationsData,
  PartnersData,
  defaultPartnersData,
  WhyChooseUsData,
  defaultWhyChooseUsData,
  IndustriesData,
  defaultIndustriesData,
  TeamData,
  defaultTeamData,
  BlogsData,
  defaultBlogsData,
  FaqsData,
  defaultFaqsData,
  AboutData,
  defaultAboutData,
  LeadMagnetData,
  defaultLeadMagnetData,
  NavbarData,
  defaultNavbarData,
  CareersData,
  defaultCareersData,
  AwardsData,
  defaultAwardsData,
} from "@/lib/cms-defaults";

// --- HERO SECTION ---

export async function getHeroData(): Promise<HeroData> {
  await dbConnect();
  try {
    const hero = await Hero.findOne().lean<IHeroContent>();
    if (hero) {
      const { _id, ...rest } = hero as any;
      return JSON.parse(JSON.stringify({ ...defaultHeroData, ...rest }));
    }
    return defaultHeroData;
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return defaultHeroData;
  }
}

export async function updateHeroData(data: HeroData): Promise<void> {
  await dbConnect();
  try {
    await Hero.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating hero data:", error);
    throw new Error("Failed to update hero data");
  }
}

// --- COMPANY STATS SECTION ---

export async function getStatsData(): Promise<CompanyStatsData> {
  await dbConnect();
  try {
    const stats = await CompanyStats.findOne().lean<ICompanyStatsContent>();
    if (stats) {
      const { _id, ...rest } = stats as any;
      return JSON.parse(JSON.stringify({ ...defaultStatsData, ...rest }));
    }
    return defaultStatsData;
  } catch (error) {
    console.error("Error fetching stats data:", error);
    return defaultStatsData;
  }
}

export async function updateStatsData(data: CompanyStatsData): Promise<void> {
  await dbConnect();
  try {
    await CompanyStats.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating stats data:", error);
    throw new Error("Failed to update stats data");
  }
}

// --- SERVICES SECTION ---

export async function getServicesData(): Promise<ServicesData> {
  await dbConnect();
  try {
    const services = await ServicesContent.findOne().lean<IServicesContent>();
    if (services) {
      const dbData = services as any;
      // Merge: keep DB data but ensure all default services exist by checking IDs
      const mergedServices = [...defaultServicesData.services];

      if (dbData.services && Array.isArray(dbData.services)) {
        dbData.services.forEach((dbService: any) => {
          const idx = mergedServices.findIndex(
            (s) => s.id === dbService.id || s.name === dbService.name,
          );
          if (idx !== -1) {
            mergedServices[idx] = { ...mergedServices[idx], ...dbService };
          } else {
            mergedServices.push(dbService);
          }
        });
      }

      return JSON.parse(
        JSON.stringify({
          ...defaultServicesData,
          ...dbData,
          services: mergedServices,
        }),
      );
    }
    return defaultServicesData;
  } catch (error) {
    console.error("Error fetching services data:", error);
    return defaultServicesData;
  }
}

export async function updateServicesData(data: ServicesData): Promise<void> {
  await dbConnect();
  try {
    await ServicesContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating services data:", error);
    throw new Error("Failed to update services data");
  }
}

// --- PROJECTS SECTION ---

export async function getProjectsData(): Promise<ProjectsData> {
  await dbConnect();
  try {
    const doc = await ProjectsContent.findOne().lean();
    if (doc) {
      // Return DB data as primary, but overlay defaults if something is missing
      return JSON.parse(JSON.stringify({ ...defaultProjectsData, ...doc }));
    }
    return defaultProjectsData;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return defaultProjectsData;
  }
}

export async function updateProjectsData(data: ProjectsData): Promise<void> {
  await dbConnect();
  try {
    const { _id, createdAt, updatedAt, __v, ...updateData } = data as any;

    // Find existing doc or create new
    let doc = await ProjectsContent.findOne();
    if (!doc) {
      doc = new ProjectsContent(updateData);
    } else {
      // Use .set() to update all fields at once - more robust for Mongoose tracking
      doc.set({
        heading: updateData.heading,
        subheading: updateData.subheading,
        ctaHeading: updateData.ctaHeading,
        ctaButtonText: updateData.ctaButtonText,
        projects: updateData.projects,
        testimonials: updateData.testimonials,
      });
    }

    await doc.save();

    revalidatePath("/");
    revalidatePath("/portfolio");
    revalidatePath("/admin/projects");
  } catch (error) {
    console.error("Error updating projects data:", error);
    throw new Error("Failed to update projects data");
  }
}

// --- CONVERSATIONS SECTION ---

export async function getConversationsData(): Promise<ConversationsData> {
  await dbConnect();
  try {
    const conversations =
      await ConversationsContent.findOne().lean<IConversationsContent>();
    if (conversations) {
      const { _id, ...rest } = conversations as any;
      return JSON.parse(
        JSON.stringify({ ...defaultConversationsData, ...rest }),
      );
    }
    return defaultConversationsData;
  } catch (error) {
    console.error("Error fetching conversations data:", error);
    return defaultConversationsData;
  }
}

export async function updateConversationsData(
  data: ConversationsData,
): Promise<void> {
  await dbConnect();
  try {
    await ConversationsContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating conversations data:", error);
    throw new Error("Failed to update conversations data");
  }
}

// --- PARTNERS SECTION ---

export async function getPartnersData(): Promise<PartnersData> {
  await dbConnect();
  try {
    const partners = await PartnersContent.findOne().lean<IPartnersContent>();
    if (partners) {
      const { _id, ...rest } = partners as any;
      return JSON.parse(JSON.stringify({ ...defaultPartnersData, ...rest }));
    }
    return defaultPartnersData;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    return defaultPartnersData;
  }
}

export async function updatePartnersData(data: PartnersData): Promise<void> {
  await dbConnect();
  try {
    await PartnersContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating partners data:", error);
    throw new Error("Failed to update partners data");
  }
}

// --- WHY CHOOSE US SECTION ---

export async function getWhyChooseUsData(): Promise<WhyChooseUsData> {
  await dbConnect();
  try {
    const data = await WhyChooseUsContent.findOne().lean<IWhyChooseUsContent>();
    if (data) {
      const { _id, ...rest } = data as any;
      return JSON.parse(JSON.stringify({ ...defaultWhyChooseUsData, ...rest }));
    }
    return defaultWhyChooseUsData;
  } catch (error) {
    console.error("Error fetching Why Choose Us data:", error);
    return defaultWhyChooseUsData;
  }
}

export async function updateWhyChooseUsData(
  data: WhyChooseUsData,
): Promise<void> {
  await dbConnect();
  try {
    await WhyChooseUsContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating Why Choose Us data:", error);
    throw new Error("Failed to update Why Choose Us data");
  }
}

// --- INDUSTRIES SECTION ---

export async function getIndustriesData(): Promise<IndustriesData> {
  await dbConnect();
  try {
    const data = await IndustriesContent.findOne().lean<IIndustriesContent>();
    if (data) {
      const { _id, ...rest } = data as any;
      return JSON.parse(JSON.stringify({ ...defaultIndustriesData, ...rest }));
    }
    return defaultIndustriesData;
  } catch (error) {
    console.error("Error fetching industries data:", error);
    return defaultIndustriesData;
  }
}

export async function updateIndustriesData(
  data: IndustriesData,
): Promise<void> {
  await dbConnect();
  try {
    await IndustriesContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating industries data:", error);
    throw new Error("Failed to update industries data");
  }
}

// --- TEAM SECTION ---

export async function getTeamData(): Promise<TeamData> {
  await dbConnect();
  try {
    const data = await TeamsContent.findOne().lean<ITeamContent>();
    if (data) {
      const { _id, ...rest } = data as any;
      return JSON.parse(JSON.stringify({ ...defaultTeamData, ...rest }));
    }
    return defaultTeamData;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return defaultTeamData;
  }
}

export async function updateTeamData(data: TeamData): Promise<void> {
  await dbConnect();
  try {
    await TeamsContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating team data:", error);
    throw new Error("Failed to update team data");
  }
}

// --- BLOGS SECTION ---

export async function getBlogsData(): Promise<BlogsData> {
  await dbConnect();
  try {
    const data = await BlogsContent.findOne().lean();
    if (data) {
      const dbData = data as any;
      const safeBlogs = (dbData.blogs || []).map((blog: any, idx: number) => {
        const defaultBlog =
          defaultBlogsData.blogs[idx] || defaultBlogsData.blogs[0];
        return {
          ...defaultBlog,
          ...blog,
          author: blog.author || defaultBlog.author || "ITSOL Team",
          authorImage: blog.authorImage || defaultBlog.authorImage || "",
        };
      });

      return JSON.parse(
        JSON.stringify({
          ...defaultBlogsData,
          ...dbData,
          blogs: safeBlogs,
        }),
      );
    }
    return defaultBlogsData;
  } catch (error) {
    console.error("Error fetching blogs data:", error);
    return defaultBlogsData;
  }
}

export async function updateBlogsData(data: BlogsData): Promise<void> {
  await dbConnect();
  try {
    let doc = await BlogsContent.findOne();
    if (!doc) {
      doc = new BlogsContent(data);
    } else {
      doc.heading = data.heading;
      doc.blogs = data.blogs.map((blog) => ({
        type: blog.type,
        title: blog.title,
        category: blog.category,
        image: blog.image,
        link: blog.link,
        author: blog.author,
        authorImage: blog.authorImage,
      }));
    }
    await doc.save();
    revalidatePath("/");
    revalidatePath("/insights");
  } catch (error) {
    console.error("Error updating blogs data:", error);
    throw new Error("Failed to update blogs data");
  }
}

// --- FAQS SECTION ---

export async function getFaqsData(): Promise<FaqsData> {
  await dbConnect();
  try {
    const data = await FaqsContent.findOne().lean<IFaqsContent>();
    if (data) {
      const { _id, ...rest } = data as any;
      return JSON.parse(JSON.stringify({ ...defaultFaqsData, ...rest }));
    }
    return defaultFaqsData;
  } catch (error) {
    console.error("Error fetching faqs data:", error);
    return defaultFaqsData;
  }
}

export async function updateFaqsData(data: FaqsData): Promise<void> {
  await dbConnect();
  try {
    await FaqsContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating faqs data:", error);
    throw new Error("Failed to update faqs data");
  }
}

// --- AWARDS SECTION ---

export async function getAwardsData(): Promise<AwardsData> {
  await dbConnect();
  try {
    const data = await Awards.findOne().lean<IAwardsContent>();
    if (data) {
      const { _id, ...rest } = data as any;
      return JSON.parse(JSON.stringify({ ...defaultAwardsData, ...rest }));
    }
    return defaultAwardsData;
  } catch (error) {
    console.error("Error fetching awards data:", error);
    return defaultAwardsData;
  }
}

export async function updateAwardsData(data: AwardsData): Promise<void> {
  await dbConnect();
  try {
    await Awards.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating awards data:", error);
    throw new Error("Failed to update awards data");
  }
}
// --- ABOUT US SECTION ---

export async function getAboutData(): Promise<AboutData> {
  await dbConnect();
  try {
    const data = await AboutContent.findOne().lean<IAboutContent>();
    if (data) {
      const { _id, ...rest } = data as any;
      return JSON.parse(JSON.stringify({ ...defaultAboutData, ...rest }));
    }
    return defaultAboutData;
  } catch (error) {
    console.error("Error fetching about data:", error);
    return defaultAboutData;
  }
}

export async function updateAboutData(data: AboutData): Promise<void> {
  await dbConnect();
  try {
    await AboutContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/about-us");
  } catch (error) {
    console.error("Error updating about data:", error);
    throw new Error("Failed to update about data");
  }
}

// --- CAREERS SECTION ---

export async function getCareersData(): Promise<CareersData> {
  await dbConnect();
  try {
    const data = await CareersContent.findOne().lean<ICareersContent>();
    if (data) {
      const { _id, ...rest } = data as any;
      return JSON.parse(JSON.stringify({ ...defaultCareersData, ...rest }));
    }
    return defaultCareersData;
  } catch (error) {
    console.error("Error fetching careers data:", error);
    return defaultCareersData;
  }
}

export async function updateCareersData(data: CareersData): Promise<void> {
  await dbConnect();
  try {
    await CareersContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/careers");
  } catch (error) {
    console.error("Error updating careers data:", error);
    throw new Error("Failed to update careers data");
  }
}

// --- LEAD MAGNET SECTION ---

export async function getLeadMagnetData(): Promise<LeadMagnetData> {
  await dbConnect();
  try {
    const data = await LeadMagnetContent.findOne().lean<ILeadMagnetContent>();
    if (data) {
      const { _id, ...rest } = data as any;
      return JSON.parse(JSON.stringify({ ...defaultLeadMagnetData, ...rest }));
    }
    return defaultLeadMagnetData;
  } catch (error) {
    console.error("Error fetching lead magnet data:", error);
    return defaultLeadMagnetData;
  }
}

export async function updateLeadMagnetData(
  data: LeadMagnetData,
): Promise<void> {
  await dbConnect();
  try {
    await LeadMagnetContent.findOneAndUpdate({}, data, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
    revalidatePath("/");
  } catch (error) {
    console.error("Error updating lead magnet data:", error);
    throw new Error("Failed to update lead magnet data");
  }
}

// --- NAVBAR MENU SECTION ---

export async function getNavbarData(
  includeHidden = false,
): Promise<NavbarData> {
  await dbConnect();
  try {
    const data = await NavbarMenuContent.findOne().lean<INavbarMenuContent>();
    if (data) {
      const dbData = data as any;

      // We prioritize DB menus directly to preserve order and content
      let menus = dbData.menus ? [...dbData.menus] : [];

      // If DB is empty, use defaults
      if (menus.length === 0) {
        menus = [...defaultNavbarData.menus];
      }

      // Filter hidden if needed
      if (!includeHidden) {
        menus = menus.filter((m: any) => m.isVisible !== false);
      }

      // Format for return
      return JSON.parse(
        JSON.stringify({
          ...defaultNavbarData,
          ...dbData,
          menus: menus.sort(
            (a: any, b: any) => (a.order ?? 0) - (b.order ?? 0),
          ),
        }),
      );
    }
    return defaultNavbarData;
  } catch (error) {
    console.error("Error fetching navbar data:", error);
    return defaultNavbarData;
  }
}

export async function updateNavbarData(data: NavbarData): Promise<void> {
  await dbConnect();
  try {
    // Strip metadata to avoid conflicts
    const { _id, createdAt, updatedAt, __v, ...updateData } = data as any;

    await NavbarMenuContent.findOneAndUpdate({}, updateData, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
      overwrite: true, // Replace entire document content
    });

    revalidatePath("/", "layout"); // Revalidate everything including navbar
    revalidatePath("/");
    revalidatePath("/admin/navbar");
    revalidatePath("/services/[slug]", "layout");
    revalidatePath("/hire-dev/[slug]", "layout");
    revalidatePath("/industries/[slug]", "layout");
  } catch (error) {
    console.error("Error updating navbar data:", error);
    throw new Error("Failed to update navbar data");
  }
}

// --- HELPER FOR AUTO-POPULATING PROJECT LINKS ---
async function populateProjectLinks(targetData: any) {
  if (!targetData || !targetData.projects || targetData.projects.length === 0) {
    return targetData;
  }

  try {
    const projectsData = await getProjectsData();
    const allProjects = projectsData.projects || [];

    targetData.projects = targetData.projects.map((proj: any) => {
      // If link already exists, keep it
      if (proj.link) return proj;

      const normalizedProjTitle = proj.title?.toLowerCase().trim();
      const projTags =
        proj.tags?.map((t: string) => t.toLowerCase().trim()) || [];

      // 1. Try exact title match
      let match = allProjects.find(
        (p: any) => p.title.toLowerCase().trim() === normalizedProjTitle,
      );

      // 2. Try tag-based match (if titles don't match)
      if (!match && projTags.length > 0) {
        match = allProjects.find((p: any) => {
          const pTags =
            p.tags?.map((t: string) => t.toLowerCase().trim()) || [];
          return (
            projTags.every((t: string) => pTags.includes(t)) && pTags.length > 0
          );
        });
      }

      // 3. Try image match (very unique)
      if (!match && proj.image) {
        match = allProjects.find((p: any) => p.imageUrl === proj.image);
      }

      // 4. Try partial title match or content match
      if (!match) {
        match = allProjects.find(
          (p: any) =>
            normalizedProjTitle?.includes(p.title.toLowerCase().trim()) ||
            p.title.toLowerCase().trim().includes(normalizedProjTitle),
        );
      }

      if (match) {
        return { ...proj, link: match.id };
      }
      return proj;
    });
  } catch (err) {
    console.error("Error auto-populating project links:", err);
  }
  return targetData;
}

// --- INDUSTRY DETAIL PAGES SECTION ---

export async function getIndustryPageData(slug: string): Promise<any> {
  await dbConnect();
  try {
    const data = await IndustryPage.findOne({
      slug: { $regex: new RegExp(`^${slug}$`, "i") },
    }).lean();
    if (!data) return null;

    const populated = await populateProjectLinks(
      JSON.parse(JSON.stringify(data)),
    );
    return populated;
  } catch (error) {
    console.error(`Error fetching industry page data for ${slug}:`, error);
    return null;
  }
}

export async function updateIndustryPageData(
  slug: string,
  data: any,
): Promise<void> {
  await dbConnect();
  try {
    const { _id, createdAt, updatedAt, __v, ...updateData } = data;
    await IndustryPage.findOneAndUpdate(
      { slug: { $regex: new RegExp(`^${slug}$`, "i") } },
      { ...updateData, slug },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );
    revalidatePath(`/industries/${slug}`);
  } catch (error) {
    console.error(`Error updating industry page data for ${slug}:`, error);
    throw new Error(`Failed to update industry page data for ${slug}`);
  }
}

// --- SERVICE DETAIL PAGES SECTION ---

export async function getServicePageData(slug: string): Promise<any> {
  await dbConnect();
  try {
    const data = await ServicePage.findOne({
      slug: { $regex: new RegExp(`^${slug}$`, "i") },
    }).lean();
    if (!data) return null;

    const populated = await populateProjectLinks(
      JSON.parse(JSON.stringify(data)),
    );
    return populated;
  } catch (error) {
    console.error(`Error fetching service page data for ${slug}:`, error);
    return null;
  }
}

export async function updateServicePageData(
  slug: string,
  data: any,
): Promise<void> {
  await dbConnect();
  try {
    const { _id, createdAt, updatedAt, __v, ...updateData } = data;
    await ServicePage.findOneAndUpdate(
      { slug: { $regex: new RegExp(`^${slug}$`, "i") } },
      { ...updateData, slug },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );
    revalidatePath(`/services/${slug}`);
  } catch (error) {
    console.error(`Error updating service page data for ${slug}:`, error);
    throw new Error(`Failed to update service page data for ${slug}`);
  }
}
// --- ENGAGEMENT DETAIL PAGES SECTION ---

export async function getEngagementPageData(slug: string): Promise<any> {
  await dbConnect();
  try {
    const data = await EngagementPage.findOne({
      slug: { $regex: new RegExp(`^${slug}$`, "i") },
    }).lean();
    return data ? JSON.parse(JSON.stringify(data)) : null;
  } catch (error) {
    console.error(`Error fetching engagement page data for ${slug}:`, error);
    return null;
  }
}

export async function updateEngagementPageData(
  slug: string,
  data: any,
): Promise<void> {
  await dbConnect();
  try {
    const { _id, createdAt, updatedAt, __v, ...updateData } = data;
    await EngagementPage.findOneAndUpdate(
      { slug: { $regex: new RegExp(`^${slug}$`, "i") } },
      { ...updateData, slug },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );
    revalidatePath(`/engagement/${slug}`);
  } catch (error) {
    console.error(`Error updating engagement page data for ${slug}:`, error);
    throw new Error(`Failed to update engagement page data for ${slug}`);
  }
}

// --- HIRE DEV DETAIL PAGES SECTION ---

export async function getHireDevPageData(slug: string): Promise<any> {
  await dbConnect();
  try {
    if (!slug) return null;
    const normalizedSlug = slug.trim().toLowerCase();

    // Try exact match first for performance and reliability
    let data = await HireDevPage.findOne({ slug: normalizedSlug }).lean();

    // Fallback to case-insensitive regex if not found
    if (!data) {
      data = await HireDevPage.findOne({
        slug: { $regex: new RegExp(`^${normalizedSlug}$`, "i") },
      }).lean();
    }

    return data ? JSON.parse(JSON.stringify(data)) : null;
  } catch (error) {
    console.error(`Error fetching hire dev page data for ${slug}:`, error);
    return null;
  }
}

export async function updateHireDevPageData(
  slug: string,
  data: any,
): Promise<void> {
  await dbConnect();
  try {
    const normalizedSlug = slug.trim().toLowerCase();
    const { _id, createdAt, updatedAt, __v, ...updateData } = data;

    await HireDevPage.findOneAndUpdate(
      { slug: { $regex: new RegExp(`^${normalizedSlug}$`, "i") } },
      { ...updateData, slug: normalizedSlug },
      {
        upsert: true,
        new: true,
        setDefaultsOnInsert: true,
      },
    );

    // Narrow revalidation for the specific page
    revalidatePath(`/hire-dev/${normalizedSlug}`);

    // Broader revalidation to ensure layouts and shared components update
    revalidatePath("/hire-dev/[slug]", "layout");
    revalidatePath("/", "layout");
    revalidatePath("/admin/hire-dev/editor");
  } catch (error) {
    console.error(`Error updating hire dev page data for ${slug}:`, error);
    throw new Error(`Failed to update hire dev page data for ${slug}`);
  }
}
