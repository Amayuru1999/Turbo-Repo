import { Button } from "@mui/material";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { TransactionsGrid } from "../components/transactions/transactions-grid.component";
import { selectCurrentUser } from "../slices/auth.slice";




const HomePage: React.FC = () => {
    const user = useAppSelector((state) => selectCurrentUser(state));


    const handleConnectCoinbase = () => {
        const REACT_APP_COINBASE_AUTH_URL="http://localhost:3002/coinbase/auth";
        const url = REACT_APP_COINBASE_AUTH_URL;
        if (url) {
          console.log('Redirecting to:', url);
          window.location.href = url;
        } else {
          console.error('Coinbase auth URL is not defined');
        }
      };
      
      return (
        <div className="flex justify-center items-center flex-col h-screen">
          {user?.isCoinbaseAuthorized ? (
            <TransactionsGrid />
          ) : (
            <Button
              variant="contained"
              size="large"
              onClick={handleConnectCoinbase}
            >
              Connect Coinbase
            </Button>
          )}
        </div>
      );
};

export { HomePage };