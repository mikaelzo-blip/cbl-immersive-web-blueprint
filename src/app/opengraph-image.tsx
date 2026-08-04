import { ImageResponse } from 'next/og';

export const alt = 'CV Cakrawala Buana Lestari - Kontraktor dan penyedia solusi teknis berbasis proyek';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '76px',
          color: '#ffffff',
          background: 'linear-gradient(135deg, #0F2942 0%, #15426B 65%, #0E6BA8 100%)',
        }}
      >
        <div style={{ color: '#F97316', fontSize: 34, fontWeight: 700, marginBottom: 24 }}>CBL</div>
        <div style={{ fontSize: 62, fontWeight: 800, lineHeight: 1.12 }}>CV Cakrawala Buana Lestari</div>
        <div style={{ fontSize: 30, marginTop: 28, color: '#E2E8F0' }}>
          Kontraktor dan penyedia solusi teknis berbasis proyek
        </div>
        <div style={{ fontSize: 22, marginTop: 54, color: '#BAE6FD' }}>
          Kelistrikan & Otomasi · Mekanikal · HVAC · Pompa · Pencahayaan
        </div>
      </div>
    ),
    size,
  );
}
