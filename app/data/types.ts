export type LocaleKey = "es" | "en";

export type MediaImage = {
  type: "image";
  src: string;       
  alt: string;    
};

export type MediaVideo = {
  type: "video";
  src: string;      
  poster?: string;   
  alt: string;    
};

export type ProjectBase = {
  id: string;                  
  kind: "web" | "mobile";
  tech: string[];              
  repo?: string;               
  live?: string;               
  media: (MediaImage | MediaVideo)[]; 
  titleKey: string;            
  descKey: string; 
  features: string[]          
};
