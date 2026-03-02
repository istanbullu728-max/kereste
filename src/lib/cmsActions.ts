"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const PRODUCTS_FILE = path.join(process.cwd(), "src/data/products.json");
const PUBLIC_DIR = path.join(process.cwd(), "public");

export async function uploadHeroImage(formData: FormData) {
    const file = formData.get("file") as File;
    if (!file) return { success: false, error: "No file uploaded" };

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(PUBLIC_DIR, "hero-bg-main.png");

    await fs.writeFile(filePath, buffer);
    revalidatePath("/");
    return { success: true };
}

export async function saveProducts(products: any[]) {
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 4));
    revalidatePath("/");
    return { success: true };
}

export async function uploadProductImage(formData: FormData, filename: string) {
    const file = formData.get("file") as File;
    if (!file) return { success: false, error: "No file uploaded" };

    const buffer = Buffer.from(await file.arrayBuffer());
    const filePath = path.join(PUBLIC_DIR, filename);

    await fs.writeFile(filePath, buffer);
    revalidatePath("/");
    return { success: true, url: filename };
}
