export type Brand = {
  key: string;
  name: string;
  short?: string;
  color?: string;
  icon: string;
};

export type EarningBrand = Brand & { rate: number };

export const drive = (id: string) => `https://drive.google.com/uc?export=view&id=${id}`;

// Full brand list (replace *_FILE_ID with real Google Drive file IDs)
export const ALL_BRANDS: Brand[] = [
  { key: "zepto", name: "Zepto", short: "Z", color: "bg-purple-100", icon: drive("1ANAZOUJbd9gneq5ibr66Db7uIzlufST9") },
  { key: "swiggy", name: "Swiggy", short: "S", color: "bg-orange-100", icon: drive("1piLnN2LYMH6KCSSOqrJMjVqSczRTb5RX") },
  { key: "myntra", name: "Myntra", short: "M", color: "bg-rose-100", icon: drive("1Qxjqu1NOqDYmY1whqAQK-ZC1OWAaRCYJ") },
  { key: "rapido", name: "Rapido", short: "R", color: "bg-amber-100", icon: drive("1PPa_Cot4wD79lmjG8os5ZbDTcIgwR-ZO") },

  { key: "nykaa", name: "Nykaa", short: "N", color: "bg-pink-100", icon: drive("1JA8hdUH7fAcZp1v1fCrE8DFOXJ5nK9AN") },
  { key: "mcdonalds", name: "McDonalds", short: "Mc", color: "bg-yellow-200", icon: drive("1Ad4oNZN0NWqaBKtRMYKQbDsscxByoaJG") },
  { key: "native", name: "Native by UC", short: "UC", color: "bg-teal-100", icon: drive("1SrEZRQt-oO4cJJtaS-YVt6zIroMU9KCF") },
  { key: "dominos", name: "Dominos", short: "D", color: "bg-blue-100", icon: drive("1nUm4VpVTKAkPJVVViqiSRfsjN0Ij6kHA") },
  { key: "ixigo", name: "Ixigo", short: "I", color: "bg-orange-100", icon: drive("1YaKHJLeaS2MUDSw-iQd8wmEiDI_Wb1rI") },
  { key: "pvr", name: "PVR INOX", short: "PV", color: "bg-yellow-100", icon: drive("1o88F_cowDFns0Pch1bp_1VSMuxi-tsnd") },
  { key: "chaayos", name: "Chaayos", short: "Ch", color: "bg-green-100", icon: drive("1H79rNEK1_48IV2MCXDh4wajiopDXjfTi") },
  { key: "decathlon", name: "Decathlon", short: "D", color: "bg-blue-600", icon: drive("1xD1PL--p6jJPM90TqTWmvqp7x2D_diOn") },
  { key: "bluetail", name: "Blue Tokai", short: "BT", color: "bg-cyan-100", icon: drive("1vusw52qIqa3uXqWVQbtB10uyDLSRz17y") },
  { key: "looks", name: "Looks Salon", short: "LS", color: "bg-neutral-100", icon: drive("1tkK7Gsx418eZlxzBXStyjlhdnc1IA2_9") },
  { key: "pharmeasy", name: "PharmEasy", short: "P", color: "bg-emerald-100", icon: drive("15ay_7oYCCkCqVBREWKWHu0d9CSV7VVaS") },
  { key: "boat", name: "BOAT", short: "B", color: "bg-red-100", icon: drive("16Xs1t4cRVo9Hm6FEhCTzyW2PnXeop3HF") },
  { key: "redbus", name: "RedBus", short: "RB", color: "bg-red-200", icon: drive("14jLVXtNcWJcSPx4Cz6IMvKDQBj2GRrMG") },
  { key: "giva", name: "GIVA", short: "G", color: "bg-pink-100", icon: drive("1Af524OukTX__JvbftIHc4rY6X-RmlkNt") },
  { key: "eatfit", name: "EatFit Club", short: "EF", color: "bg-lime-100", icon: drive("1Jtu9GaGG5X2VylU4QrtAgWhyMwOs3IIn") },
  { key: "mokobara", name: "Mokobara", short: "Mo", color: "bg-indigo-100", icon: drive("1ge9empE4AWfp9-T6i8eivi3wrA3D9Ns7") },
  { key: "wholetruth", name: "The Whole Truth", short: "TWT", color: "bg-amber-100", icon: drive("164ltA2aOgUQ9BBcgAtF-UpvuY0Cd_9mA") },
  { key: "lifestyle", name: "Lifestyle", short: "L", color: "bg-neutral-200", icon: drive("1J7Uw_xrro18PcT8qF-NYwAh3tD7u0fYP") },
  { key: "bblunt", name: "Bblunt", short: "bb", color: "bg-amber-200", icon: drive("1bOwb2EOl31hpB6GVz11UDfZcNVNcEZz4") },
  { key: "shuttl", name: "Shuttl", short: "Sh", color: "bg-sky-100", icon: drive("137HcbLOWoVbHK6eEKi2S__3q7dd9xQEY") },
  { key: "vijaysales", name: "Vijay Sales", short: "VS", color: "bg-red-100", icon: drive("1KzHrVCQLoLxdRI8zUdGOU0T_WswXJHyW") },

  { key: "ddecor", name: "D'Decor", short: "DD", color: "bg-amber-200", icon: drive("14DqJkQDdQsze3JpKZJS7Vxtnu1_tGEsI") },
  { key: "mancompany", name: "The Man Company", short: "TMC", color: "bg-stone-100", icon: drive("1G0Ak9HBNetWt74aEgs7BJ0sqpaQIKMXv") },
  { key: "goodbug", name: "The Good Bug", short: "GB", color: "bg-yellow-100", icon: drive("1JgloPB6E1K9elZTf5p1LqknxVDc_V4sV") },

  { key: "mymuse", name: "MyMuse", short: "MM", color: "bg-fuchsia-100", icon: drive("1qvmKp3Ng5DLFbST52TZ_PS3xpe_PHx9x") },
  { key: "oziva", name: "Oziva", short: "O", color: "bg-emerald-100", icon: drive("1M3IwR98z9p1iQ71yRgRHSkz1-1aGLgMB") },

  // { key: "natures", name: "Nature's Basket", short: "NB", color: "bg-green-200", icon: drive("1rMOZPtxZAJLS1RoaWT9eH9IC_k-ANqu7") },
];

// Derived list with earning rates for use in HowItWorks and other calculators
export const EARNING_BRANDS: EarningBrand[] = ALL_BRANDS.map(b => ({ ...b, rate: 0.1 }));

export const circleBrands: Brand[] = [
  { key: "zepto", name: "Zepto", short: "Z", color: "bg-purple-100", icon: drive("1ANAZOUJbd9gneq5ibr66Db7uIzlufST9") },
  { key: "swiggy", name: "Swiggy", short: "S", color: "bg-orange-100", icon: drive("1piLnN2LYMH6KCSSOqrJMjVqSczRTb5RX") },
  { key: "myntra", name: "Myntra", short: "M", color: "bg-rose-100", icon: drive("1Qxjqu1NOqDYmY1whqAQK-ZC1OWAaRCYJ") },
  { key: "rapido", name: "Rapido", short: "R", color: "bg-amber-100", icon: drive("1PPa_Cot4wD79lmjG8os5ZbDTcIgwR-ZO") },

  { key: "nykaa", name: "Nykaa", short: "N", color: "bg-pink-100", icon: drive("1JA8hdUH7fAcZp1v1fCrE8DFOXJ5nK9AN") },
  { key: "mcdonalds", name: "McDonalds", short: "Mc", color: "bg-yellow-200", icon: drive("1Ad4oNZN0NWqaBKtRMYKQbDsscxByoaJG") },
  { key: "native", name: "Native by UC", short: "UC", color: "bg-teal-100", icon: drive("1SrEZRQt-oO4cJJtaS-YVt6zIroMU9KCF") },
]

