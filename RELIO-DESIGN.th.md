# RELIO — Design System

คู่มือแบรนด์และอินเทอร์เฟซ CRM / OMS · Revision 2

## แนวคิด

เชื่อมข้อมูลลูกค้าและออเดอร์ด้วยระบบที่ใส่ใจ เป็นมิตร และเข้าใจง่าย

Caring · Friendly · Connected

## สีและบทบาท

Aqua #28C6CD แทน CRM; Blue #1463D6 แทน OMS พื้น ข้อความ และเส้นขอบเป็นสีกลาง ไม่ย้อมทั้งหน้าให้เป็นสีแบรนด์

| Token | Light | Dark |
|---|---|---|
| --bg-canvas | #F7F8FA | #18191B |
| --bg-surface | #fff | #222427 |
| --bg-raised | #F0F2F5 | #2D3035 |
| --text-primary | #202124 | #F5F6F7 |
| --text-secondary | #525866 | #C2C7D0 |
| --text-muted | #626B78 | #A0A8B4 |
| --border-default | #D8DDE5 | #41464F |
| --border-control | #7D8592 | #7D8592 |
| --brand-crm | #28C6CD | #28C6CD |
| --brand-oms | #1463D6 | #1463D6 |
| --crm-bg | #E9FAFB | #193437 |
| --crm-fg | #086B73 | #63DCE2 |
| --oms-bg | #EDF4FF | #1E2E48 |
| --oms-fg | #1463D6 | #8DBBFF |
| --action-primary | #1463D6 | #1463D6 |
| --action-primary-hover | #0F4FAE | #0F4FAE |
| --action-on-primary | #fff | #fff |
| --link | #1463D6 | #8DBBFF |
| --focus-ring | #1463D6 | #8DBBFF |
| --status-success | #18734A | #78D9A2 |
| --status-warning | #8A4B08 | #F2C46D |
| --status-danger | #B42318 | #FFA49B |

## ตัวอักษร

Bai Jamjuree · 400 / 500 / 600 / 700
เนื้อหา 16px / 1.65; ภาษาไทย letter-spacing: 0; หัวข้อ 24–48px และไม่ตัดสระ/วรรณยุกต์ ตัวเลขใช้ tabular-nums

## คอมโพเนนต์

- ปุ่มหลัก Blue ตัวอักษรขาว Hover #0F4FAE ปุ่มรองใช้สีเทากลาง
- CRM ใช้ crm-bg/crm-fg; OMS ใช้ oms-bg/oms-fg
- ไอคอนทั่วไปและข้อความทั่วไปใช้สีกลาง
- ช่องกรอกมี label และข้อผิดพลาดที่บอกวิธีแก้
- ใช้ป้ายกำกับร่วมกับสี ไม่สื่อสถานะด้วยสีอย่างเดียว

## ระยะห่างและรูปทรง

หน่วยพื้นฐาน 4px; ช่องว่าง 8/12/16/24/32/48/64px ปุ่ม specimen มุม pill, input 12px, icon tile 14px, stat tile 16px, card 20px, panel 24px ส่วนปุ่มของหน้าคู่มือใช้มุม 8px แยกจาก specimen

## ภาษาและธีม

ไทย/English เป็นตัวเลือกแยกจาก Light/Dark เก็บ preference เฉพาะเครื่อง ห้ามแปลชื่อ token ค่า HEX ชื่อไฟล์ และ URL Dark Mode ใช้พื้นเทาถ่าน ไม่ใช้เงา

## มาสคอตและโลโก้

ใช้ไฟล์ต้นฉบับ CRM ตัวใหญ่สี Aqua, OMS ตัวเล็กสีน้ำเงินอยู่ด้านขวา คงหน้า สี สัดส่วนและแสงจากภาพที่อนุมัติ ไม่วาดตัวใหม่หรือเปลี่ยนโลโก้ Side/Back เป็นภาพอ้างอิง 3D ไม่ใช่ท่าประกอบหน้า

ภาพ PNG เป็นภาพ Raster; SVG โลโก้เป็น Vector ขนาด PNG ตามไฟล์จริง ไม่ใช่ไฟล์ความละเอียดสูงทุกภาพ

## น้ำเสียง

Warm · Clear · Helpful
ข้อความสั้น บอกสิ่งที่เกิดขึ้นและขั้นตอนถัดไป เช่น “บันทึกข้อมูลลูกค้าแล้ว เพิ่มออเดอร์ต่อได้เลย”

## การเข้าถึง

ข้อความปกติ contrast อย่างน้อย 4.5:1; ขอบ control ที่จำเป็น 3:1; focus 2px offset 2px; เป้าสัมผัสสำคัญ 44px; รองรับ reduced motion; raw Aqua ห้ามเป็นข้อความเล็กบนขาว

## แหล่งอ้างอิง

- [Phosphor Icons](https://phosphoricons.com/)
- [Bai Jamjuree](https://fonts.google.com/specimen/Bai+Jamjuree)
- [Refero reference](https://styles.refero.design/style/9946887b-ffa9-4276-af81-ae6352795afb)

## CSS

```css
:root {
  --bg-canvas: #F7F8FA;
  --bg-surface: #fff;
  --bg-raised: #F0F2F5;
  --text-primary: #202124;
  --text-secondary: #525866;
  --text-muted: #626B78;
  --border-default: #D8DDE5;
  --border-control: #7D8592;
  --brand-crm: #28C6CD;
  --brand-oms: #1463D6;
  --crm-bg: #E9FAFB;
  --crm-fg: #086B73;
  --oms-bg: #EDF4FF;
  --oms-fg: #1463D6;
  --action-primary: #1463D6;
  --action-primary-hover: #0F4FAE;
  --action-on-primary: #fff;
  --link: #1463D6;
  --focus-ring: #1463D6;
  --status-success: #18734A;
  --status-warning: #8A4B08;
  --status-danger: #B42318;
  color-scheme: light;
}

[data-theme="dark"] {
  --bg-canvas: #18191B;
  --bg-surface: #222427;
  --bg-raised: #2D3035;
  --text-primary: #F5F6F7;
  --text-secondary: #C2C7D0;
  --text-muted: #A0A8B4;
  --border-default: #41464F;
  --border-control: #7D8592;
  --crm-bg: #193437;
  --crm-fg: #63DCE2;
  --oms-bg: #1E2E48;
  --oms-fg: #8DBBFF;
  --link: #8DBBFF;
  --focus-ring: #8DBBFF;
  --status-success: #78D9A2;
  --status-warning: #F2C46D;
  --status-danger: #FFA49B;
  color-scheme: dark;
}
```
