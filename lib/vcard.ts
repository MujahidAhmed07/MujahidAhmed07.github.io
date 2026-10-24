import { profile } from "./data";

export function getVCardString(): string {
  const cleanPhone = profile.phone.replace(/[^\d+]/g, "");

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Ahmed;Mujahid;;;",
    `FN:${profile.name}`,
    "NICKNAME:Mujahid",
    "ORG:WooNinjas",
    `TITLE:${profile.headline} & Plugin Architect`,
    "ROLE:Software Engineer",
    `TEL;TYPE=CELL,VOICE,PREF:${cleanPhone}`,
    `EMAIL;TYPE=INTERNET,PREF:${profile.email}`,
    `URL;TYPE=WORK:https://mujahidahmed07.github.io`,
    `ADR;TYPE=WORK,POSTAL,PARCEL:;;Petaling Jaya;Selangor;;Malaysia`,
    `NOTE:${profile.subhead}`,
    `URL;TYPE=LinkedIn:https://www.linkedin.com/in/mujahid-ahmed-970b98228/`,
    `URL;TYPE=GitHub:https://github.com/MujahidAhmed07`,
    "END:VCARD",
  ].join("\r\n");
}

export function getQrVCardString(): string {
  const cleanPhone = profile.phone.replace(/[^\d+]/g, "");

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Ahmed;Mujahid",
    `FN:${profile.name}`,
    `TEL:${cleanPhone}`,
    `EMAIL:${profile.email}`,
    "URL:https://mujahidahmed07.github.io",
    "END:VCARD",
  ].join("\r\n");
}


export function downloadVCard(): void {
  const vcard = getVCardString();
  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Mujahid_Ahmed.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function downloadQrImage(dataUrl?: string): void {
  const a = document.createElement("a");
  a.href = dataUrl || "/mujahid-ahmed-qr.png";
  a.download = "Mujahid_Ahmed_Contact_QR.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

