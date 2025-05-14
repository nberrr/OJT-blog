import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { existsSync } from 'fs';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const image = formData.get('image') as File;
    const coverPhoto = formData.get('coverPhoto') as File;
    const week = formData.get('week') as string;

    if (!title || !description || !image || !coverPhoto || !week) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create week directory if it doesn't exist
    const weekDir = join(process.cwd(), 'public/uploads', week);
    if (!existsSync(weekDir)) {
      await mkdir(weekDir, { recursive: true });
    }

    // Generate unique filenames
    const uniqueId = uuidv4();
    const imageFilename = `${uniqueId}-${image.name}`;
    const coverPhotoFilename = `${uniqueId}-cover-${coverPhoto.name}`;

    // Save the images
    const imageBytes = await image.arrayBuffer();
    const coverPhotoBytes = await coverPhoto.arrayBuffer();
    
    await writeFile(join(weekDir, imageFilename), Buffer.from(imageBytes));
    await writeFile(join(weekDir, coverPhotoFilename), Buffer.from(coverPhotoBytes));

    // Create entry object
    const entry = {
      id: uniqueId,
      title,
      description,
      imageUrl: `/uploads/${week}/${imageFilename}`,
      coverPhotoUrl: `/uploads/${week}/${coverPhotoFilename}`,
      week,
      createdAt: new Date().toISOString(),
    };

    // Here you would typically save the entry to a database
    // For now, we'll just return the entry object
    return NextResponse.json(entry);
  } catch (error) {
    console.error('Error processing weekly entry:', error);
    return NextResponse.json(
      { error: 'Error processing weekly entry' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Here you would typically fetch entries from a database
    // For now, we'll return an empty array
    return NextResponse.json([]);
  } catch (error) {
    console.error('Error fetching weekly entries:', error);
    return NextResponse.json(
      { error: 'Error fetching weekly entries' },
      { status: 500 }
    );
  }
} 