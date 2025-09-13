import { getCountries } from "@/lib/data-service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SelectCountry = {
  defaultCountry: string;
  name: string;
  id: string;
};

export default async function SelectCountry({
  defaultCountry,
  name,
  id,
}: SelectCountry) {
  const countries = await getCountries();
  const flag =
    countries.find((country) => country.name === defaultCountry)?.flag ?? "";

  return (
    <Select name={name} defaultValue={`${defaultCountry}%${flag}`}>
      <SelectTrigger id={id} className="w-full cursor-pointer">
        <SelectValue placeholder="Select country..." />
      </SelectTrigger>
      <SelectContent>
        {countries.map((c) => (
          <SelectItem value={`${c.name}%${c.flag}`} key={c.name}>
            {c.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
