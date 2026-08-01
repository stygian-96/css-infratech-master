"use client";

import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib";

type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "onChange" | "value" | "ref"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, onChange, value, ...props }, ref) => {
      return (
        <RPNInput.default
          ref={ref}
          className={cn("flex bg-white rounded-xl", className)}
          flagComponent={FlagComponent}
          countrySelectComponent={CountrySelect}
          inputComponent={InputComponent}
          smartCaret={false}
          value={value || undefined}
          onChange={(v) => onChange?.(v || ("" as RPNInput.Value))}
          {...props}
        />
      );
    },
  );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
  <Input
    className={cn(
      // text-black and text-xs (small)
      "rounded-e-xl rounded-s-none border-l-0 bg-white text-black text-xs placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0 h-10",
      className,
    )}
    {...props}
    ref={ref}
  />
));
InputComponent.displayName = "InputComponent";

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: { label: string; value: RPNInput.Country | undefined }[];
  onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover
      open={isOpen}
      modal
      onOpenChange={(open) => {
        setIsOpen(open);
        if (open) setSearchValue("");
      }}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          // Height reduced to h-10 to match small text
          className="flex gap-1 rounded-e-none rounded-s-xl border-r-0 px-2 bg-white text-black hover:bg-white hover:text-black focus:z-10 h-10 border-gray-200"
          disabled={disabled}
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronsUpDown
            className={cn(
              "-mr-1 size-3 text-black",
              disabled ? "hidden" : "opacity-100",
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0 bg-white border-gray-200 shadow-xl">
        <Command className="bg-white">
          <CommandInput
            value={searchValue}
            onValueChange={setSearchValue}
            placeholder="Search country..."
            // Small black text for search
            className="text-black text-xs h-9"
          />
          <CommandList className="bg-white">
            <ScrollArea className="h-72 bg-white">
              <CommandEmpty className="text-black text-xs py-2 text-center">
                No country found.
              </CommandEmpty>
              <CommandGroup className="bg-white">
                {countryList.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={onChange}
                      onSelectComplete={() => setIsOpen(false)}
                    />
                  ) : null,
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
  onSelectComplete: () => void;
}

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
  onSelectComplete,
}: CountrySelectOptionProps) => {
  const handleSelect = () => {
    onChange(country);
    onSelectComplete();
  };

  return (
    <CommandItem
      className={cn(
        "gap-2 cursor-pointer py-1.5 transition-colors",
        "text-black bg-white",
        "aria-selected:bg-black aria-selected:text-white",
      )}
      onSelect={handleSelect}
    >
      <FlagComponent country={country} countryName={countryName} />

      <span className="flex-1 text-xs font-medium">{countryName}</span>

      <span
        className={cn(
          "text-[10px]",
          // Ensure calling code also turns white on hover
          "text-black/60 group-aria-selected:text-white/80",
        )}
      >
        {`+${RPNInput.getCountryCallingCode(country)}`}
      </span>

      <CheckIcon
        className={cn(
          "ml-auto size-3",
          country === selectedCountry ? "opacity-100" : "opacity-0",
        )}
      />
    </CommandItem>
  );
};

const FlagComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="flex h-3 w-4.5 overflow-hidden rounded-sm bg-white [&_svg]:size-full">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
