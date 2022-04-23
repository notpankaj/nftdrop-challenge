import Image from "next/image"

interface Image {
    asset: {
        url: string
    }
}

export interface Creator {
        _id: string,
        name: string,
        address: string,
        slug : {
           current: string
        },
        image: Image,
        bio: String
}

export interface Collection{
    _id: string,
    title: string,
    address: string,
    description: string,
    nftCollectionName : string,
    mainImage : Image,
    previewImage: Image,
    creator : Creator,
    slug:  { 
      current: string
    }
}