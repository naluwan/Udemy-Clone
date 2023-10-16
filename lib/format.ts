export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('zh-TW', {
    style: 'currency',
    currency: 'NTD',
    // 限制小數點
    maximumFractionDigits: 0,
  }).format(price);
};
