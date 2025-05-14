import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    // Extract week number from slug (e.g., "week-1-introduction" -> "week1")
    const weekMatch = params.slug.match(/week-(\d+)/);
    if (!weekMatch) {
      return NextResponse.json(
        { error: 'Invalid entry slug' },
        { status: 400 }
      );
    }

    const weekNumber = weekMatch[1];
    const weekDir = `week${weekNumber}`;
    const weekPath = join(process.cwd(), 'public/uploads', weekDir);

    // Get all images from the gallery directory
    const galleryDir = join(weekPath, 'gallery');
    const galleryFiles = await readdir(galleryDir);
    
    // Create gallery array with image paths
    const gallery = galleryFiles.map(file => ({
      src: `/uploads/${weekDir}/gallery/${file}`,
      alt: `Week ${weekNumber} - ${file.split('.')[0]}`
    }));

    // Get the cover image
    const coverImage = `/uploads/${weekDir}/cover.jpg`;

    // Create the entry object
    const entry = {
      title: `Week ${weekNumber}: ${params.slug.split('-').slice(2).join(' ').replace(/\b\w/g, l => l.toUpperCase())}`,
      date: getWeekDate(parseInt(weekNumber)),
      week: parseInt(weekNumber),
      content: getWeekContent(parseInt(weekNumber)),
      coverImage,
      gallery
    };

    return NextResponse.json(entry);
  } catch (error) {
    console.error('Error fetching weekly entry:', error);
    return NextResponse.json(
      { error: 'Error fetching weekly entry' },
      { status: 500 }
    );
  }
}

function getWeekDate(week: number): string {
  const startDate = new Date('2025-02-24'); // Week 1 start date
  const weekStart = new Date(startDate);
  weekStart.setDate(startDate.getDate() + (week - 1) * 7);
  
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 4);

  return `${weekStart.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${weekEnd.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
}

function getWeekContent(week: number): string {
  const contentMap: { [key: number]: string } = {
    1: "My first week of OJT was an exciting journey into the professional world. I learned about the company's culture, met my team members, and started understanding the development workflow. The week was filled with orientation sessions, team introductions, and initial project overviews.",
    2: "This week focused on getting hands-on with development tasks. I started working on small features and learned about the codebase structure and development practices. The team was very supportive in helping me understand the project architecture and coding standards.",
    3: "Took on my first significant project this week. Learned about project planning, task management, and the importance of clear communication in development. The challenge helped me grow both technically and professionally.",
    4: "Focused on improving team collaboration and communication. Participated in code reviews and learned from senior developers' feedback. The team's mentorship has been invaluable in my growth.",
    5: "Celebrated Women's Month while continuing our development work. Participated in special events and discussions about diversity in tech. It was inspiring to see the company's commitment to inclusivity.",
    6: "Explored new technologies and frameworks. Started implementing modern development practices and tools in our projects. The learning curve was steep but rewarding.",
    7: "Deepened my understanding of the project architecture and started contributing more significantly to the codebase. The team's trust in my abilities has been motivating.",
    8: "Worked on optimizing existing features and implementing new ones. Learned about performance optimization and best practices in web development.",
    9: "Reflected on the journey so far and prepared for upcoming challenges. The experience has been transformative, and I'm excited for what's next."
  };

  return contentMap[week] || "Content for this week is being prepared.";
} 