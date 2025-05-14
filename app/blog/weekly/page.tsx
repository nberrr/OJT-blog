'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';

interface WeeklyEntry {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  coverPhotoUrl: string;
  week: string;
  createdAt: string;
}

export default function WeeklyEntriesPage() {
  const [entries, setEntries] = useState<WeeklyEntry[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [week, setWeek] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [coverPhoto, setCoverPhoto] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [coverPhotoPreview, setCoverPhotoPreview] = useState<string>('');

  // Fetch existing entries on component mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch('/api/weekly-entries');
      if (response.ok) {
        const data = await response.json();
        setEntries(data);
      }
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'cover') => {
    const file = e.target.files?.[0];
    if (file) {
      if (type === 'image') {
        setImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setCoverPhoto(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setCoverPhotoPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!image || !coverPhoto || !week) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('coverPhoto', coverPhoto);
    formData.append('week', week);

    try {
      const response = await fetch('/api/weekly-entries', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const newEntry = await response.json();
        setEntries([newEntry, ...entries]);
        // Reset form
        setTitle('');
        setDescription('');
        setWeek('');
        setImage(null);
        setCoverPhoto(null);
        setImagePreview('');
        setCoverPhotoPreview('');
      }
    } catch (error) {
      console.error('Error creating weekly entry:', error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Weekly Entries</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <Label htmlFor="week">Week</Label>
          <Select value={week} onValueChange={setWeek} required>
            <SelectTrigger>
              <SelectValue placeholder="Select week" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                <SelectItem key={num} value={`week${num}`}>
                  Week {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="coverPhoto">Cover Photo</Label>
          <Input
            id="coverPhoto"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'cover')}
            required
          />
          {coverPhotoPreview && (
            <div className="mt-2">
              <Image
                src={coverPhotoPreview}
                alt="Cover Preview"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="image">Additional Image</Label>
          <Input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 'image')}
            required
          />
          {imagePreview && (
            <div className="mt-2">
              <Image
                src={imagePreview}
                alt="Preview"
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          )}
        </div>
        
        <Button type="submit">Create Entry</Button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entries.map((entry) => (
          <Card key={entry.id} className="p-4">
            <div className="relative w-full h-48 mb-4">
              <Image
                src={entry.coverPhotoUrl}
                alt={entry.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{entry.title}</h2>
            <p className="text-gray-600">{entry.description}</p>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">Week: {entry.week}</p>
              <p className="text-sm text-gray-500">
                {new Date(entry.createdAt).toLocaleDateString()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
} 