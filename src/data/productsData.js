const productsData = [
  {
    id: 1,
    category: "دسته موتور",
    name: "دسته موتور پایین راست رانا",
    price: 0,
    image: "/images/RUNNADMPR.png", // Update this with actual image path
    description: {
      material: "آلومینیوم",
      weight: 1350,
      productionMethod: "ریخته‌گری",
      compatibleCar: "رانا",
    },
    quantity: 0,
  },
  {
    id: 2,
    category: "دسته موتور",
    name: "دسته موتور پایین راست سمند EF7",
    price: 0,
    image: "/images/SAMANDEF7DMPR.png", // Update this with actual image path
    description: {
      material: "آلومینیوم",
      weight: 1800,
      productionMethod: "ریخته‌گری",
      compatibleCar: "سمند EF7",
    },
    quantity: 0,
  },
  {
    id: 3,
    category: "دسته موتور",
    name: "دسته موتور پایین راست پژو 206 تیپ 5 و 6",
    price: 0,
    image: "/images/206T5T6DMPR.png", // Update this with actual image path
    description: {
      material: "آلومینیوم",
      weight: 1200,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پژو 206 تیپ 5 و 6",
    },
    quantity: 0,
  },
  {
    id: 4,
    category: "اورینگ",
    name: "اورینگ دریچه گاز رنو L90",
    price: 0,
    image: "/images/ORingL90.png", // Update this with actual image path
    description: {
      material: "لاستیک",
      weight: 4,
      productionMethod: "پرس",
      compatibleCar: "رنو L90",
    },
    quantity: 0,
  },
  {
    id: 5,
    category: "اورینگ",
    name: "اورینگ ترموستات پژو",
    price: 0,
    image: "/images/PEJOThermostatO-ring.png", // Update this with actual image path
    description: {
      material: "لاستیک",
      weight: 4,
      productionMethod: "پرس",
      compatibleCar: "پژو",
    },
    quantity: 0,
  },
  {
    id: 6,
    category: "درب ترموستات",
    name: "درب ترموستات پراید کاربراتوری",
    price: 0,
    image: "/images/PRIDECDT.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 105,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پراید کاربراتوری",
    },
    quantity: 0,
  },
  {
    id: 7,
    category: "درب ترموستات",
    name: "درب ترموستات پیکان",
    price: 0,
    image: "/images/PEYKANDT.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 80,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پیکان",
    },
    quantity: 0,
  },
  {
    id: 8,
    category: "درب ترموستات",
    name: "درب ترموستات رنو L90 فابریک",
    price: 0,
    image: "/images/RenaultL90DTF.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 60,
      productionMethod: "ریخته‌گری",
      compatibleCar: "رنو L90",
    },
    quantity: 0,
  },
  {
    id: 9,
    category: "درب ترموستات",
    name: "درب ترموستات رنو L90 آلومینیومی",
    price: 0,
    image: "/images/RenaultL90DTA.png", // Update this with actual image path
    description: {
      material: "آلومینیوم",
      weight: 100,
      productionMethod: "ریخته‌گری",
      compatibleCar: "رنو L90",
    },
    quantity: 0,
  },
  {
    id: 10,
    category: "دسته موتور",
    name: "دسته موتور پا مرغی رنو L90",
    price: 0,
    image: "/images/RenaultL90DMP.png", // Update this with actual image path
    description: {
      material: "آلومینیوم",
      weight: 680,
      productionMethod: "ریخته‌گری",
      compatibleCar: "رنو L90",
    },
    quantity: 0,
  },
  {
    id: 11,
    category: "بوش طبق",
    name: "بوش طبق جناقی پژو",
    price: 0,
    image: "/images/Peugeot1800BTJ.png", // Update this with actual image path
    description: {
      material: "آلومینیوم",
      weight: 425,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پژو",
    },
    quantity: 0,
  },
  {
    id: 12,
    category: "درب ترموستات",
    name: "درب ترموستات سمند EF7",
    price: 0,
    image: "/images/SAMANDEF7DT.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 80,
      productionMethod: "ریخته‌گری",
      compatibleCar: "سمند EF7",
    },
    quantity: 0,
  },
  {
    id: 13,
    category: "سه راهی آب",
    name: "سه راهی آب وانت نیسان",
    price: 0,
    image: "/images/NissanJunior3RA.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 120,
      productionMethod: "ریخته‌گری",
      compatibleCar: "وانت نیسان",
    },
    quantity: 0,
  },
  {
    id: 14,
    category: "درب ترموستات",
    name: "درب ترموستات وانت نیسان",
    price: 0,
    image: "/images/NissanJuniorDT.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 85,
      productionMethod: "ریخته‌گری",
      compatibleCar: "وانت نیسان",
    },
    quantity: 0,
  },
  {
    id: 15,
    category: "درب ترموستات",
    name: "درب ترموستات پراید یورو 4",
    price: 0,
    image: "/images/PRIDEE4DT.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 105,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پراید یورو 4",
    },
    quantity: 0,
  },
  {
    id: 16,
    category: "بست لاستیکی",
    name: "بست لاستیکی اگزوز پراید",
    price: 0,
    image: "/images/PRIDEBLE.png", // Update this with actual image path
    description: {
      material: "لاستیک",
      weight: 60,
      productionMethod: "پرس",
      compatibleCar: "پراید",
    },
    quantity: 0,
  },
  {
    id: 17,
    category: "درب ترموستات",
    name: "درب ترموستات پژو 405 انژکتوری",
    price: 0,
    image: "/images/PEUGEOT1800DT.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 130,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پژو 405 انژکتوری",
    },
    quantity: 0,
  },
  {
    id: 18,
    category: "پایه نگهدارنده دسته موتور",
    name: "پایه نگهدارنده دسته موتور راست پژو 206 تیپ 5 و 6",
    price: 0,
    image: "/images/206T5T6PNDM.png", // Update this with actual image path
    description: {
      material: "آلومینیوم",
      weight: 4000,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پژو 206 تیپ 5 و 6",
    },
    quantity: 0,
  },

  {
    id: 19,
    category: "درب ترموستات",
    name: "درب ترموستات پژو 206 تیپ 5 و 6",
    price: 0,
    image: "/images/206T5T6DT.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 80,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پژو 206 تیپ 5 و 6",
    },
    quantity: 0,
  },
  {
    id: 20,
    category: "درب ترموستات",
    name: "درب ترموستات پژو 206 تیپ 2 و 3",
    price: 0,
    image: "/images/206T2T3DT.png", // Update this with actual image path
    description: {
      material: "فلز",
      weight: 80,
      productionMethod: "ریخته‌گری",
      compatibleCar: "پژو 206 تیپ 2 و 3",
    },
    quantity: 0,
  },
];

export default productsData;
