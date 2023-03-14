export const formatState = (state: string) => {
  switch (state.toLocaleUpperCase()) {
    case "ACRE":
      return "AC";
    case "AMAZONAS":
      return "AM";
    case "AMAPÁ":
      return "AP";
    case "ALAGOAS":
      return "AL";
    case "BAHIA":
      return "BA";
    case "CEARÁ":
      return "CE";
    case "PARÁ":
      return "PA";
    case "RONDÔNIA":
      return "RO";
    case "RORAIMA":
      return "RR";
    case "TOCANTINS":
      return "TO";
    case "MARANHÃO":
      return "MA";
    case "PARAÍBA":
      return "PB";
    case "PERNAMBUCO":
      return "PE";
    case "PIAUÍ":
      return "PI";
    case "RIO GRANDE DO NORTE":
      return "RN";
    case "SERGIPE":
      return "SE";
    case "GOIÁS":
      return "GO";
    case "MATO GROSSO DO SUL":
      return "MS";
    case "MATO GROSSO":
      return "MT";
    case "ESPÍRITO SANTO":
      return "ES";
    case "MINAS GERAIS":
      return "MG";
    case "RIO DE JANEIRO":
      return "RJ";
    case "SÃO PAULO":
      return "SP";
    case "RIO GRANDE DO SUL":
      return "RS";
    case "SANTA CATARINA":
      return "SC";
    case "PARANÁ":
      return "PR";
    default:
      break;
  }
};