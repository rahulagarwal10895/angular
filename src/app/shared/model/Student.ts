export class Student{
    public id:number;
    public studentName:string;      
    public category:string;
    public dob:Date;
    public fname:string;
    public mname:string;
    public score:number;
    public email:string;
    public contact:string;
    public documents:Document;

    constructor(){
        this.documents=new Document();
    }
}

export class Document{
    public domicileCertificate:boolean;
   public birthCertificate:boolean;
   public previousMarksheets:boolean;
   public policeClearance:boolean;
   public passport:boolean;
   public signedDeclaration:boolean;


}

export class AvailableDocuments{
    public name:string;
    public isRequired:boolean;
}