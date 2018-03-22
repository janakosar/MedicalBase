/**
 * Created by yana on 22.03.18.
 */
export class Patient {

  id: number;
  name: string;
  medicalNote: string;

  constructor(id: number, name: string, medicalNote: string){
    this.id = id;
    this.name = name;
    this.medicalNote = medicalNote;
  }

}
