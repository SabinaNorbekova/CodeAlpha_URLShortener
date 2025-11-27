import prisma from '../config/db.js';
import { nanoid } from 'nanoid';

export const createShortUrl = async (originalUrl) => {
  const shortCode = nanoid(6);

  const newUrl = await prisma.url.create({
    data: {
      originalUrl,
      shortCode,
    },
  });

  return newUrl;
};

export const getUrlByCode = async (shortCode) => {
  const urlRecord = await prisma.url.findUnique({
    where: { shortCode },
  });

  if (urlRecord) {
    await prisma.url.update({
      where: { id: urlRecord.id },
      data: { clicks: urlRecord.clicks + 1 },
    });
  }

  return urlRecord;
};
