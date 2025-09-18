import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src', 'content', 'content.json');

export async function GET() {
  try {
    const fileContent = await fs.readFile(CONTENT_FILE_PATH, 'utf-8');
    const content = JSON.parse(fileContent);
    return NextResponse.json(content);
  } catch (error) {
    console.error('Error reading content file:', error);
    return NextResponse.json(
      { error: 'Failed to read content file' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const newContent = await request.json();
    
    // Validate that the content has the required structure
    if (!newContent || typeof newContent !== 'object') {
      return NextResponse.json(
        { error: 'Invalid content format' },
        { status: 400 }
      );
    }

    // Create a backup of the current file
    try {
      const currentContent = await fs.readFile(CONTENT_FILE_PATH, 'utf-8');
      const backupPath = path.join(process.cwd(), 'src', 'content', `content.backup.${Date.now()}.json`);
      await fs.writeFile(backupPath, currentContent);
    } catch (backupError) {
      console.warn('Could not create backup:', backupError);
    }

    // Write the new content
    await fs.writeFile(CONTENT_FILE_PATH, JSON.stringify(newContent, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating content file:', error);
    return NextResponse.json(
      { error: 'Failed to update content file' },
      { status: 500 }
    );
  }
}