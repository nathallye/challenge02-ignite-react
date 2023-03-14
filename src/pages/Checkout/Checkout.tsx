import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useCart } from "../../hooks/useCart";

import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";

import { CompleteOrderContainer } from "./styles";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    }
  })
});

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type SuccessFormData = OrderData;

export const Checkout = () => {
  const confirmOrderForm = useForm<SuccessFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined
    }
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();
  const { cleanCart } = useCart();

  function successHandler(data: SuccessFormData) {
    navigate("/Success", {
      state: data
    });

    cleanCart();

    // console.log(data);
  }

  return (
    <FormProvider {...confirmOrderForm}>
    <CompleteOrderContainer
      className="container"
      onSubmit={handleSubmit(successHandler)}
    >
      <CheckoutForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  </FormProvider>
  );
};
