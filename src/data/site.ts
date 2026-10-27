// Single source of truth. Do not invent contact/location data until confirmed.
export const site = {
  name: 'DS67homeworkshop',
  title: 'DS67homeworkshop — Bengkel Motor, Custom & Race Performance',
  description: 'Bengkel motor untuk service, tune up, bore up, porting 2-tak/4-tak, custom frame, restorasi, mapping ECU, paketan mesin race, dan konsultasi rental motor grasstrack.',
  ownerPhoto: '/images/owner.webp', // Example: '/images/owner.webp' (upload photo to public/images/)
  whatsapp: '6281234567890', // Example: '6281234567890' (numbers only)
  instagram: '', // Example: 'https://instagram.com/account'
  address: '',
  hours: '',
};
export const services = [
  {no:'01', name:'Servis Besar dan Kecil', tag:'Pemeliharaan', description:'Perawatan berkala hingga pengerjaan mesin menyeluruh sesuai kebutuhan motor.'},
  {no:'02', name:'Tune Up', tag:'Performa', description:'Penyetelan mesin untuk meningkatkan respons dan menyesuaikan performa dengan kebutuhan penggunaan.'},
  {no:'03', name:'Bore Up', tag:'Harian dan Kompetisi', description:'Peningkatan kapasitas mesin sesuai kebutuhan penggunaan harian atau kompetisi.'},
  {no:'04', name:'Porting 2T / 4T', tag:'Mesin 2-Tak dan 4-Tak', description:'Pengerjaan saluran masuk dan buang pada mesin 2-tak atau 4-tak sesuai kebutuhan performa.'},
  {no:'05', name:'Custom Frame', tag:'Fabrikasi', description:'Pembuatan dan penyesuaian rangka untuk motor trail, grasstrack, adventure, klasik, dan model sesuai permintaan.'},
  {no:'06', name:'Modifikasi & Restorasi', tag:'Modifikasi', description:'Modifikasi dan pemulihan kondisi motor sesuai kebutuhan serta kesepakatan pengerjaan.'},
  {no:'07', name:'Mapping ECU', tag:'Elektronik', description:'Penyetelan ECU standar dan ECU racing BRT berdasarkan konfigurasi mesin.'},
  {no:'08', name:'Paket Mesin Balap', tag:'Persiapan Balap', description:'Pengerjaan paket mesin balap dengan spesifikasi yang disesuaikan dengan regulasi kelas kompetisi.'},
];
export const whatsappUrl = site.whatsapp ? `https://wa.me/${site.whatsapp}` : null;
