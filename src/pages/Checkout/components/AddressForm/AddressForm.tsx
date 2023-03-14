import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/Input/Input";

import { AddressFormContainer } from "./styles";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export const AddressForm = () => {
  const { register, formState, setValue, setFocus } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  const checkCEP = (e: React.FocusEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");

    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      // console.log(data);
      setValue("street", data.logradouro);
      setValue("neighborhood", data.bairro);
      setValue("city", data.localidade);
      setValue("uf", data.uf);
      setFocus("number");
    });
  }

  return (
    <AddressFormContainer>
      {/* TODO: Verificar lib que busca endereço pelo cep e fazer alto complete */}
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        onBlur={checkCEP}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        type="number"
        placeholder="Número"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register("neighborhood")}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder="Cidade"
        {...register("city")}
        error={errors.city?.message}
      />
      <Input 
        placeholder="UF" 
        {...register("uf")} 
        error={errors.uf?.message} 
      />
    </AddressFormContainer>
  );
};
