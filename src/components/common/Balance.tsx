import { formatCurrencyAmount } from "../../utils";
import { Spinner } from "./Spinner";
import { TokenBalanceReponseDTO } from "@socket.tech/socket-v2-sdk";
import { styled } from "styled-components";

export const Balance = ({
  token,
  isLoading,
  onClick,
}: {
  token: TokenBalanceReponseDTO["result"];
  isLoading: boolean;
  onClick?: () => void;
}) => {
  const _formattedBalance = formatCurrencyAmount(
    token?.balance,
    token?.decimals,
    5
  );
  return (
    <Baldiv>
      Bal: {token && _formattedBalance}
    <button
      disabled={!onClick}
      className={`button ${
        onClick ? "" : ""
      }`}
      onClick={onClick}
    >
      <span className="">Max</span>
      {isLoading && <Spinner size={3} />}
    </button>
    </Baldiv>
  );
};

const Baldiv= styled.div`
color: rgb(0,0,0);
font-weight: bold;
.button{
  margin-left: 7px;
  border-radius: 5px;
  padding: 5px;
  color: rgb(0,0,0);
  border: none;
  background-color: rgb(241,241,241)
}
`
