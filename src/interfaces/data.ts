// Generated by https://quicktype.io

import { Character } from "../characters/interfaces/character";

export interface Data {
    offset:  number;
    limit:   number;
    total:   number;
    count:   number;
    results: Character[]
}



export interface Comics {
    available:     number;
    collectionURI: string;
    items:         ComicsItem[];
    returned:      number;
}

export interface ComicsItem {
    resourceURI: string;
    name:        string;
}

export interface Stories {
    available:     number;
    collectionURI: string;
    items:         StoriesItem[];
    returned:      number;
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        ItemType;
}

export enum ItemType {
    Cover = "cover",
    InteriorStory = "interiorStory",
}

export interface Thumbnail {
    path:      string;
    extension: Extension;
}

export enum Extension {
    Jpg = "jpg",
}

export interface URL {
    type: URLType;
    url:  string;
}

export enum URLType {
    Comiclink = "comiclink",
    Detail = "detail",
    Wiki = "wiki",
}
