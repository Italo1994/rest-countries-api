import CountryClientPage from "./CountryClientPage";

interface CountryPageProps {
  params: {
    name: string;
  };
}

export default async function CountryPage({ params }: CountryPageProps) {
    const { name } = await params;

    return (
        <CountryClientPage name={name} />
  );
}