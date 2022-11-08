export interface cerveza {
    id : number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    target_fg: number,
    target_og: number,
    ebc: number,
    srm: number,
    ph: number,
    attenuation_level: number,
    volume: unit,
    boil_volume: unit,
    method: {
      mash_temp: [
        {
          temp: unit,
          duration: number
        }
      ],
      fermentation: {
        temp: unit
      },
      twist: null
    },
    ingredients: {
      malt: [
        {
          name: string,
          amount: unit
        }
      ],
    hops:Array<hop>,
      yeast: string
    },
    food_pairing: [
      "Spicy carne asada with a pico de gallo sauce",
      "Shredded chicken tacos with a mango chilli lime salsa",
      "Cheesecake with a passion fruit swirl sauce"
    ],
    brewers_tips: string,
    contributed_by: string
  }


export interface unit {
    value: number,
    unit: string
}

export interface hop {
    name: string,
    amount: unit,
    add: string,
    attribute: string,
}