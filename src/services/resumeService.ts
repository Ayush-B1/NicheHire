import { db } from '../lib/firebase';
import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where } from 'firebase/firestore';

export interface Resume {
  id?: string;
  userId: string;
  title: string;
  content: {
    name: string;
    title: string;
    experience: Array<{
      title: string;
      company: string;
      period: string;
      highlights: string[];
    }>;
    education: {
      degree: string;
      school: string;
      period: string;
    };
    skills: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export const saveResume = async (resume: Omit<Resume, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'resumes'), resume);
    return docRef.id;
  } catch (error) {
    console.error('Error saving resume:', error);
    throw error;
  }
};

export const getUserResumes = async (userId: string): Promise<Resume[]> => {
  try {
    const q = query(collection(db, 'resumes'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Resume[];
  } catch (error) {
    console.error('Error getting user resumes:', error);
    throw error;
  }
};

export const updateResume = async (resumeId: string, updates: Partial<Resume>): Promise<void> => {
  try {
    const resumeRef = doc(db, 'resumes', resumeId);
    await updateDoc(resumeRef, {
      ...updates,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating resume:', error);
    throw error;
  }
};

export const deleteResume = async (resumeId: string): Promise<void> => {
  try {
    const resumeRef = doc(db, 'resumes', resumeId);
    await deleteDoc(resumeRef);
  } catch (error) {
    console.error('Error deleting resume:', error);
    throw error;
  }
}; 