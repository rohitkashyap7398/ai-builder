import { gymTemplate } from "@/lib/templates/gym";
import { companyTemplate } from "@/lib/templates/company";
import { portfolioTemplate } from "@/lib/templates/portfolio";
import { restaurantTemplate } from "@/lib/templates/restaurant";

export function selectTemplate(prompt: string) {
  const text = prompt.toLowerCase();

  if (text.includes("gym")) {
    return gymTemplate;
  }

  if (text.includes("company")) {
    return companyTemplate;
  }

  if (text.includes("portfolio")) {
    return portfolioTemplate;
  }

  if (text.includes("restaurant")) {
    return restaurantTemplate;
  }

  return companyTemplate;
}