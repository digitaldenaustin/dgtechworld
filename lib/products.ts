export type ProductStatus = "available" | "pending" | "sold";

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  brand: string;
  price: number | null;
  status: ProductStatus;
  condition: string;
  summary: string;
  images: string[];
  highlights: string[];
  included: string[];
  notes: string[];
};

export const products: Product[] = [
  {
    slug: "playstation-5-disc-edition",
    title: "Sony PlayStation 5 Disc Edition",
    shortTitle: "PS5 Disc Edition",
    category: "Gaming",
    brand: "Sony",
    price: 299,
    status: "available",
    condition: "Excellent",
    summary: "Barely used, fully tested, factory reset, and complete with original packaging.",
    images: [
      "/products/ps5/cover.jpeg",
      "/products/ps5/package.jpeg",
      "/products/ps5/testing.jpeg",
      "/products/ps5/console.jpeg"
    ],
    highlights: ["Disc edition", "Fully tested", "Factory reset", "Test before purchase"],
    included: ["PS5 console", "DualSense controller", "HDMI cable", "Power cable", "USB charging cable", "Original stand", "Manuals", "Original box and inserts"],
    notes: ["Local pickup only in North Austin", "Price is firm", "No trades", "Everything included is shown in the photos"]
  },
  {
    slug: "iphone-16-pro-max-256gb-unlocked",
    title: "Apple iPhone 16 Pro Max 256GB — Factory Unlocked",
    shortTitle: "iPhone 16 Pro Max",
    category: "Phones",
    brand: "Apple",
    price: 599,
    status: "available",
    condition: "Excellent",
    summary: "Factory unlocked with no SIM restrictions, clean IMEI, 89% battery health, and fully tested.",
    images: [
      "/products/iphone-16-pro-max/cover.jpeg",
      "/products/iphone-16-pro-max/front.jpeg",
      "/products/iphone-16-pro-max/about.jpeg",
      "/products/iphone-16-pro-max/battery.jpeg"
    ],
    highlights: ["256GB", "Factory unlocked", "89% battery health", "Clean IMEI"],
    included: ["iPhone 16 Pro Max 256GB"],
    notes: ["Face ID, cameras, speakers and buttons tested", "Factory reset", "Cash only", "Local pickup in North Austin"]
  },
  {
    slug: "nintendo-switch-oled-white",
    title: "Nintendo Switch OLED — White",
    shortTitle: "Nintendo Switch OLED",
    category: "Gaming",
    brand: "Nintendo",
    price: null,
    status: "available",
    condition: "Excellent",
    summary: "Fully functional OLED model with official dock, power adapter, HDMI cable, and Joy-Con grip.",
    images: [
      "/products/switch-oled/cover.jpeg",
      "/products/switch-oled/screen.jpeg",
      "/products/switch-oled/back.jpeg",
      "/products/switch-oled/dock.jpeg"
    ],
    highlights: ["OLED model", "White Joy-Con", "Official dock", "Factory reset"],
    included: ["Switch OLED console", "White Joy-Con controllers", "Official Nintendo dock", "Official power adapter", "HDMI cable", "Joy-Con grip"],
    notes: ["Price will be added after confirmation", "Local pickup only", "No trades", "Photos show the exact item"]
  },
  {
    slug: "sony-a7r-iii-camera-body",
    title: "Sony A7R III Full-Frame Mirrorless Camera Body",
    shortTitle: "Sony A7R III",
    category: "Cameras",
    brand: "Sony",
    price: 750,
    status: "available",
    condition: "Good",
    summary: "Fully tested professional full-frame camera body with a clean sensor and normal cosmetic wear.",
    images: [
      "/products/sony-a7r3/cover.jpeg",
      "/products/sony-a7r3/back.jpeg",
      "/products/sony-a7r3/sensor.jpeg",
      "/products/sony-a7r3/accessories.jpeg"
    ],
    highlights: ["42.4MP full frame", "4K video", "5-axis stabilization", "Clean sensor"],
    included: ["Sony A7R III camera body", "Genuine Sony NP-FZ100 battery", "Peak Design strap", "Neewer wireless remote/controller"],
    notes: ["Normal cosmetic wear", "No lens or charger included", "Local pickup in North Austin", "No trades"]
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(price: number | null) {
  return price === null ? "Contact for price" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(price);
}
