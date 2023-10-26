export interface SearchResponse {
  data:        Comments[];

}

export interface Comments {
  postId: number;
  id:     number;
  name:   string;
  email:  string;
  body:   string;
}




export interface Photo {
  albumId:      number;
  id:           number;
  title:        string;
  url:          string;
  thumbnailUrl: string;
  completed?:   boolean | string;
  body?:        string;
}
