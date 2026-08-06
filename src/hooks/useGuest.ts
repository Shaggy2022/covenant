export function useGuest() {
  const params = new URLSearchParams(window.location.search);

  return params.get("guest");
}