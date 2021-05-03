export const getVpdr = () => {
  const isWindow = typeof window !== 'undefined';
  const html = document.documentElement;
  const circle = document.getElementById("bg-circle");
  const circleWidth = circle.clientWidth;
  if (!isWindow) return false;
  const vph = Math.pow(html.offsetHeight, 2); // Height
  const vpw = Math.pow(html.offsetWidth, 2); // Width
  const vpd = Math.sqrt(vph + vpw); // Diagonal
  return (vpd * 2) / circleWidth; // Circle radius
};