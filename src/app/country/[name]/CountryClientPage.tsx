"use client";

import { CustomImage } from "@/components/Image/Image";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Country {
    name: string;
}

interface NativeName {
  [languageCode: string]: {
    official: string;
    common: string;
  };
}

interface CountryProps {
    capital: string[];
    name: {
        common: string;
        nativeName: NativeName;
    },
    flags: {
        png: string;
    },
    population: number;
    region: string;
    subregion: string;
    languages: {
        [key: string]: string[];
    },
    currencies: {
        [key: string]: {
            simbol: string;
            name: string;
        }
    }
}

export default function CountryClientPage({name}: Country) {
    const [country, setCountry] = useState<CountryProps[]>([]);
    const realName = name.replace("%20", " ");

    useEffect(() => {
        async function fetchCountry() {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
            setCountry(response.data);
            console.log("data ", response.data)
        }

        fetchCountry();
    }, [name]);

    return (
        <>
            <div className="pl-15 p-10">
                <Link href="/">back</Link>
            </div>
            {country!.map(country => {
                const firstNativeName = Object.values(country.name.nativeName)[0];
                const currencyName = Object.values(country.currencies)[0];
                const nativeLanguages = Object.values(country.languages).map(item => { return item }).join(", ");
                
                return (
                    <div key="" className="grid lg:grid-cols-2 h-[calc(100vh-22rem)] justify-center items-center ml-15 mr-15">
                        <div key="" className="w-full">
                            <CustomImage source={country.flags.png} alt="" width={200} height={260} className="rounded-t-lg w-full h-[100%]" /> 
                        </div>

                        <div className="grid pl-5">
                            <h1 className="mb-5 text-[2.25rem] font-bold">{realName}</h1>
                            <div className="grid lg:grid-cols-2 gap-4">
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <span className="font-bold">Native Name: </span><span>{firstNativeName?.official}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold">Population: </span><span>{country.population}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold">Region: </span><span>{country.region}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold">Sub Region: </span><span>{country.subregion}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold">Capital: </span><span>{country.capital}</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex gap-2">
                                            <span className="font-bold">Top Level Domain: </span><span></span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold">Currencies: </span><span>{currencyName.name}</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="font-bold">Languages: </span><span>{nativeLanguages}</span>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            
        </>
    )
}