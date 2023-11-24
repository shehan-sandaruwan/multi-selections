import { sports } from "../mock-data/data";

// mock API request
export const fetchmarketData = async () => {
  const marketDataPromice = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sports);
    }, 300);
  });

  return marketDataPromice;
};

export const verifySelection = async () => {
  const validateOutcomeSelection = new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 10);
      resolve({ isValid: random % 2 === 0 });
    }, 300);
  });

  return validateOutcomeSelection;
};
