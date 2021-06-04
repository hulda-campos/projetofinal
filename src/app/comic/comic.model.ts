export class Comic {
    constructor(
      public id: string,
      public titulo: string,
      public autor: string,
      public editora: string,
      public genero: string,
      public data: string, 
      public edicao: number,
      public formato: string,
      public agenda: string,
      public imageUrl: string
    ) {}
  }
  