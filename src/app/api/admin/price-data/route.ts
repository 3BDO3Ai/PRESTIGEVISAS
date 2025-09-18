import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'src', 'content', 'content.json');

export async function PUT(request: NextRequest) {
  try {
    const { priceData } = await request.json();
    
    // Validate price data
    if (!Array.isArray(priceData)) {
      return NextResponse.json(
        { error: 'Price data must be an array' },
        { status: 400 }
      );
    }

    // Validate each price item
    for (const item of priceData) {
      if (!item.productValue || !item.transferAmount || !item.firstPayment) {
        return NextResponse.json(
          { error: 'Each price item must have productValue, transferAmount, and firstPayment' },
          { status: 400 }
        );
      }
    }

    // Read current content
    const fileContent = await fs.readFile(CONTENT_FILE_PATH, 'utf-8');
    const content = JSON.parse(fileContent);

    // Create backup
    try {
      const backupPath = path.join(process.cwd(), 'src', 'content', `content.backup.${Date.now()}.json`);
      await fs.writeFile(backupPath, fileContent);
    } catch (backupError) {
      console.warn('Could not create backup:', backupError);
    }

    // Update only the priceData
    content.priceData = priceData;

    // Write updated content
    await fs.writeFile(CONTENT_FILE_PATH, JSON.stringify(content, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating price data:', error);
    return NextResponse.json(
      { error: 'Failed to update price data' },
      { status: 500 }
    );
  }
}