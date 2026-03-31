import { usePortfolioContext } from "../context/PortfolioContext";

export const usePortfolio = () => {
  return usePortfolioContext();
};