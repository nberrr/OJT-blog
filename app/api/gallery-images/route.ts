import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function GET() {
  try {
    const galleryDir = path.join(process.cwd(), 'public/uploads/photoGallery');
    const files = fs.readdirSync(galleryDir);
    
    const images = await Promise.all(
      files
        .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file))
        .map(async (file) => {
          const filePath = path.join(galleryDir, file);
          const metadata = await sharp(filePath).metadata();
          let orientation = 'square';
          if (metadata.width && metadata.height) {
            if (metadata.width > metadata.height) orientation = 'landscape';
            else if (metadata.width < metadata.height) orientation = 'portrait';
          }
          return {
            src: `/uploads/photoGallery/${file}`,
            width: metadata.width || 0,
            height: metadata.height || 0,
            orientation,
          };
        })
    );
    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load gallery images' }, { status: 500 });
  }
} 