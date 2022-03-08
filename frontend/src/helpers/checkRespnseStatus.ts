export default function checkResponseStatus(status: number): boolean {
  return status >= 200 && status < 400;
}
