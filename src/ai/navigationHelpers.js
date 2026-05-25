export const parsePathAndHash = (link = "") => {
  const [path, hash] = link.split("#");
  return {
    path: path || "/",
    hash: hash ? `#${hash}` : "",
  };
};

export const smoothScrollToHash = (hash) => {
  if (!hash) return false;
  const target = document.querySelector(hash);
  if (!target) return false;

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
};

export const executeNavigation = ({ link, location, navigate }) => {
  if (!link) return;

  const { path, hash } = parsePathAndHash(link);
  const isSamePath = location.pathname === path;

  if (isSamePath) {
    if (hash) {
      if (location.hash !== hash) {
        navigate(`${path}${hash}`);
      }
      window.requestAnimationFrame(() => {
        smoothScrollToHash(hash);
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  navigate(`${path}${hash}`);
};
