# Owat Maid — Website Redesign

เว็บไซต์ใหม่ของ **บริษัท โอวาท โปร แอนด์ ควิก จำกัด** (Owat Maid / โอวาทเมด) ผู้ให้บริการทำความสะอาดครบวงจร
คำขวัญ: *"โอวาทเมด สะอาดดี สังคมดี"*

Static multi-page site — เปิดได้ทันทีด้วยการ double-click `index.html` (ไม่ต้องรัน build/server)

## หน้าเว็บ (Pages)

| ไฟล์ | หน้า |
|------|------|
| `index.html` | หน้าแรก (landing) |
| `services.html` | บริการ — แม่บ้านประจำ, งานเฉพาะทาง, จัดหาแรงงาน |
| `about.html` | เกี่ยวกับเรา — ประวัติ, วิสัยทัศน์, นโยบาย, รางวัล, ทีมงาน |
| `clients.html` | ลูกค้า / ผลงาน / พื้นที่ให้บริการ |
| `products.html` | สินค้าและอุปกรณ์ (มีช่องค้นหา) |
| `contact.html` | ติดต่อ + ฟอร์มขอใบเสนอราคา + Google Maps |

## โครงสร้าง

```
.
├── index.html, services.html, about.html, clients.html, products.html, contact.html
├── assets/
│   ├── styles.css      # CSS ร่วมทุกหน้า (design tokens, components, responsive)
│   ├── site.js         # header / footer / FAB + behaviors ร่วม (inject ด้วย JS)
│   └── *.webp, *.png   # รูปและโลโก้
└── README.md
```

## สถาปัตยกรรม (Architecture)

- **Shared header/footer** — `site.js` inject markup ของ header, drawer, footer, ปุ่มติดต่อลอย (FAB) และ back-to-top เข้า DOM เป็น JS string (ไม่ใช้ `fetch`) จึงทำงานได้บน `file://` (double-click) แก้ที่เดียวมีผลทุกหน้า
- **Design tokens** — สี/ระยะ/เงา กำหนดเป็น CSS variables ใน `:root` (OKLCH)
- **โทนสี** — ส้ม `#ef4923` + ขาว + ดำ (brand orange / white / near-black)
- **Fonts** — Kanit (หัวข้อ), Sarabun (เนื้อหา + ปุ่ม) จาก Google Fonts
- **Accessibility** — skip link, ARIA, label ครบ, contrast ≥ 4.5:1, keyboard nav, `prefers-reduced-motion`
- **Responsive** — desktop / tablet / mobile (มี burger drawer)

## ฟีเจอร์

- ฟอร์มขอใบเสนอราคา (ขณะนี้เป็น front-end อย่างเดียว ยังไม่ส่งไป backend)
- ค้นหาสินค้าในหน้า products (live filter)
- ระบบลูกค้า (portal) แบบ preview/mockup ในหน้าแรก
- Google Maps embed ในหน้าติดต่อ

## ข้อมูลติดต่อ

- โทร 02-907-4471-4 · อีเมล maid@o-wat.com · LINE @owatmaid
- สาขา: กรุงเทพฯ (สำนักงานใหญ่), ชลบุรี, ลพบุรี

## สิ่งที่ทำต่อได้

- ต่อฟอร์มขอใบเสนอราคาให้ส่งจริง (email / Formspree / API)
- ปรับพิกัด Google Maps ให้ตรงเป๊ะ
- เพิ่มหน้าบทความ/ข่าวสาร
