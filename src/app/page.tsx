"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/Card/Card";
import { Container } from "@/components/Container/Container";
import { ContainerCountry } from "@/components/ContainerCountry/ContainerCountry";
import { CustomImage } from "@/components/Image/Image";
import { Input } from "@/components/Input/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CountryProps {
  capital: string[],
  flags: {
    png: string;
  },
  name: {
    common: string;
  },
  population: number;
  region: string;
}

export default function Home() {
  const [countries, setCountries] = useState<CountryProps[]>([]);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() =>  {

    async function fetchCountries() {
      const response = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`);
      setCountries(response.data)
    }

    fetchCountries()
    
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
      
      <Container>
        <Input onChange={(e) => setSearch(e.target.value)} />
        <ContainerCountry>

            {filteredCountries.map((country) => {
              return (
                <Card 
                  key={country.name.common}
                  onClick={() => router.push(`/country/${encodeURIComponent(country.name.common)}`)}
                >
                  <CardHeader>
                    <CustomImage source={country.flags.png} alt="" width={200} height={260} className="rounded-t-lg w-full h-[100%]" />
                  </CardHeader>
                  <CardDescription>
                    <CardTitle title={country.name.common} />
                    <ul className="grid gap-1">
                      <li><span className="font-bold">Population: </span>{country.population}</li>
                      <li><span className="font-bold">Region: </span>{country.region}</li>
                      <li><span className="font-bold">Capital: </span>{country.capital}</li>
                    </ul>
                  </CardDescription>
                </Card>
              )
            })}
          
        </ContainerCountry>
      </Container>
    </>
  );
}
