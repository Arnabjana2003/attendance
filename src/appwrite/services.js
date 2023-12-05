import { Client, Databases, ID, Query, Storage } from "appwrite";

export class Services{
    client = new Client();
    databases

    constructor(){
        this.client
        .setEndpoint(String(import.meta.env.VITE_APPWRITE_URL))
        .setProject(String(import.meta.env.VITE_APPWRITE_PROJECT_ID));
        this.databases = new Databases(this.client);
    }

    async addStudent(collectionId,name,roll){
            return await this.databases.createDocument(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                collectionId,
        ID.unique(),
        { name,roll}
            )
    }
    async attendance(collectionId,rollLists){
            return await this.databases.createDocument(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                collectionId,
        ID.unique(),
        {rollLists}
            )
    }

    
  async getStudents(collectionId) {
      return await this.databases.listDocuments(
        String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
        collectionId,
        // queries
      )
    }
  

}

const services = new Services();
export default services;