"use client";

import { useState } from "react";
import { products as initialProducts } from "@/data/products";
import { uploadHeroImage, saveProducts, uploadProductImage } from "@/lib/cmsActions";
import { Plus, Trash2, Upload, Save, Image as ImageIcon } from "lucide-react";
import { Product } from "@/types";

export default function AdminPage() {
    const [products, setProducts] = useState<Product[]>(initialProducts);
    const [heroUploading, setHeroUploading] = useState(false);
    const [saving, setSaving] = useState(false);

    // Hero Background Upload
    const handleHeroUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setHeroUploading(true);
        const formData = new FormData();
        formData.append("file", file);

        const res = await uploadHeroImage(formData);
        setHeroUploading(false);
        if (res.success) {
            alert("Arka plan görseli başarıyla güncellendi!");
        } else {
            alert("Hata: " + res.error);
        }
    };

    // Product Image Upload
    const handleProductImageUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        // Generate a filename based on product title or timestamp
        const filename = `/product-${Date.now()}-${file.name.replace(/\s+/g, "-")}`;

        const res = await uploadProductImage(formData, filename);
        if (res.success) {
            const updated = [...products];
            updated[index].image = filename;
            setProducts(updated);
        }
    };

    // Add Product
    const addProduct = () => {
        const newProduct: Product = {
            id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
            title: "Yeni Ürün",
            description: "Açıklama giriniz...",
            image: "/placeholder.jpg"
        };
        setProducts([...products, newProduct]);
    };

    // Delete Product
    const deleteProduct = (id: number) => {
        if (confirm("Bu ürünü silmek istediğinize emin misiniz?")) {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    // Update Product Field
    const updateProduct = (index: number, field: keyof Product, value: string) => {
        const updated = [...products];
        (updated[index] as any)[field] = value;
        setProducts(updated);
    };

    // Save All Changes
    const handleSave = async () => {
        setSaving(true);
        const res = await saveProducts(products);
        setSaving(false);
        if (res.success) {
            alert("Değişiklikler başarıyla kaydedildi!");
        } else {
            alert("Uygulama hatası!");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8 pt-24">
            <div className="max-w-5xl mx-auto space-y-8">
                <header className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Zeynel İstanbullu CMS</h1>
                        <p className="text-gray-500 text-sm">Site içeriğini buradan kolayca yönetebilirsiniz.</p>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 bg-[#B8860B] hover:bg-[#A0722A] text-white px-6 py-2.5 rounded-full font-bold transition-all disabled:opacity-50"
                    >
                        <Save size={20} />
                        {saving ? "Kaydediliyor..." : "Tümünü Kaydet"}
                    </button>
                </header>

                {/* Hero Background Section */}
                <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                    <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                        <ImageIcon size={22} className="text-[#B8860B]" />
                        Anasayfa Arka Plan Görseli
                    </h2>
                    <div className="flex border-2 border-dashed border-gray-200 rounded-xl p-8 justify-center items-center group hover:border-[#B8860B] transition-colors relative h-48 overflow-hidden">
                        <input
                            type="file"
                            onChange={handleHeroUpload}
                            accept="image/*"
                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        />
                        <div className="text-center space-y-2">
                            <Upload className="mx-auto text-gray-400 group-hover:text-[#B8860B]" size={32} />
                            <p className="text-sm text-gray-500">
                                {heroUploading ? "Yükleniyor..." : "Yeni arkaplan görselini yüklemek için tıklayın veya sürükleyin"}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Products Section */}
                <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                            <Plus size={22} className="text-[#B8860B]" />
                            Ürünlerimizi Yönet
                        </h2>
                        <button
                            onClick={addProduct}
                            className="flex items-center gap-1 text-sm font-bold text-[#B8860B] hover:text-[#A0722A]"
                        >
                            <Plus size={18} /> Yeni Ürün Ekle
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {products.map((product, index) => (
                            <div key={product.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-4 relative group">
                                <button
                                    onClick={() => deleteProduct(product.id)}
                                    className="absolute top-2 right-2 p-2 text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <Trash2 size={18} />
                                </button>

                                <div className="flex gap-4">
                                    <div className="w-24 h-24 rounded-lg bg-gray-200 overflow-hidden relative border border-gray-200 flex-shrink-0">
                                        <img src={product.image} alt="" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <input
                                                type="file"
                                                onChange={(e) => handleProductImageUpload(index, e)}
                                                accept="image/*"
                                                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                            />
                                            <Upload className="text-white" size={20} />
                                        </div>
                                    </div>

                                    <div className="flex-1 space-y-3">
                                        <input
                                            type="text"
                                            value={product.title}
                                            onChange={(e) => updateProduct(index, "title", e.target.value)}
                                            placeholder="Ürün Başlığı"
                                            className="w-full bg-transparent border-b border-gray-200 py-1 font-bold text-gray-800 focus:outline-none focus:border-[#B8860B]"
                                        />
                                        <textarea
                                            value={product.description}
                                            onChange={(e) => updateProduct(index, "description", e.target.value)}
                                            placeholder="Ürün Açıklaması"
                                            rows={2}
                                            className="w-full bg-transparent text-sm text-gray-500 border-none focus:outline-none resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
