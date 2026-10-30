"use server";

export type ProjectSector = "education" | "business" | "healthcare" | "personal" | "custom";

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  sector: ProjectSector;
  budget: string;
  scope: string;
}

export interface LeadFormState {
  success: boolean;
  message: string;
  errors?: Record<string, string>;
  submittedData?: LeadFormData;
}

const VALID_SECTORS: ProjectSector[] = [
  "education",
  "business",
  "healthcare",
  "personal",
  "custom",
];

const VALID_BUDGETS = [
  "₹1,200 - ₹5,000",
  "₹8,000 - ₹18,000",
  "₹18,000 - ₹35,000",
  "₹35,000+",
];

export async function submitLead(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  // Simulate small network latency for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 600));

  const fullName = (formData.get("fullName") as string)?.trim() || "";
  const phone = (formData.get("phone") as string)?.trim() || "";
  const email = (formData.get("email") as string)?.trim() || "";
  const sector = (formData.get("sector") as string)?.trim() as ProjectSector;
  const budget = (formData.get("budget") as string)?.trim() || "";
  const scope = (formData.get("scope") as string)?.trim() || "";

  const errors: Record<string, string> = {};

  // 1. Full Name Validation: Required, minimum 2 characters
  if (!fullName || fullName.length < 2) {
    errors.fullName = "Please enter your full name (minimum 2 characters).";
  }

  // 2. WhatsApp / Phone Validation: Required, valid 10-digit Indian number or international E.164
  const cleanPhone = phone.replace(/[\s\-()]/g, "");
  const indianPhoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
  const internationalPhoneRegex = /^\+?[1-9]\d{7,14}$/;

  if (!cleanPhone) {
    errors.phone = "WhatsApp or phone number is required.";
  } else if (!indianPhoneRegex.test(cleanPhone) && !internationalPhoneRegex.test(cleanPhone)) {
    errors.phone = "Please enter a valid 10-digit mobile or international phone number.";
  }

  // 3. Email Address Validation: Required, valid format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = "Email address is required for scope proposal delivery.";
  } else if (!emailRegex.test(email)) {
    errors.email = "Please enter a valid RFC-compliant email address.";
  }

  // 4. Target Sector Validation: Required, one of valid sectors
  if (!sector || !VALID_SECTORS.includes(sector)) {
    errors.sector = "Please select your target project sector.";
  }

  // 5. Estimated Budget Validation: Required, one of valid budget bands
  if (!budget || !VALID_BUDGETS.includes(budget)) {
    errors.budget = "Please select an estimated investment range.";
  }

  // 6. Project Scope / Requirements: Required, minimum 10 characters
  if (!scope || scope.length < 10) {
    errors.scope = "Please describe your project scope (minimum 10 characters).";
  }

  // Return errors if validation fails
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the highlighted errors before submitting.",
      errors,
    };
  }

  // Resilience & Handover: Log structured lead payload (ready for Supabase / Resend)
  const leadPayload: LeadFormData = {
    fullName,
    phone,
    email,
    sector,
    budget,
    scope,
  };

  console.log("=== [ORBINEST LEAD INTAKE] New Inquiry Received ===");
  console.log(JSON.stringify(leadPayload, null, 2));

  return {
    success: true,
    message:
      "Inquiry received! One of our 3 engineers will reply via WhatsApp or email within 2-4 hours.",
    submittedData: leadPayload,
  };
}
