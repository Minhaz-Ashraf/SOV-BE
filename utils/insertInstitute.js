import mongoose from 'mongoose';
import connectDb from '../db/index.js';
import { Institute } from '../models/institute.model.js';
import { instituteData } from './instituteData.js';
import { updatedData } from './UpdatedInstituteData.js';

async function updateInstitutes() {
  try {
    await connectDb();

    const institutes = instituteData.flat();

    for (const institute of institutes) {
      await Institute.updateOne(
        { instituteName: institute.instituteName },
        {
          $set: {
            websiteUrl: institute.websiteUrl,
          },
        }
      );
    }

    console.log('Institutes updated successfully with website URLs!');
  } catch (error) {
    console.error('Error updating institutes:', error);
  } finally {
    mongoose.connection.close();
  }
}

updateInstitutes();
