const normalize = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const levenshtein = (a, b) => {
  if (a === b) return 0;
  const matrix = Array.from({ length: a.length + 1 }, () => []);

  for (let i = 0; i <= a.length; i += 1) matrix[i][0] = i;
  for (let j = 0; j <= b.length; j += 1) matrix[0][j] = j;

  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost,
      );
    }
  }

  return matrix[a.length][b.length];
};

const fuzzyScore = (token, candidate) => {
  if (!token || !candidate) return 0;
  if (token === candidate) return 1;
  if (candidate.includes(token) || token.includes(candidate)) return 0.85;

  const distance = levenshtein(token, candidate);
  const longest = Math.max(token.length, candidate.length);
  return Math.max(0, 1 - distance / longest);
};

export function matchIntent(query, knowledgeBase) {
  const cleanQuery = normalize(query);
  if (!cleanQuery) return null;

  const tokens = cleanQuery.split(" ").filter(Boolean);

  let bestMatch = null;

  knowledgeBase.forEach((item) => {
    let score = 0;

    if ((item.phrases || []).some((phrase) => cleanQuery.includes(normalize(phrase)))) {
      score += 3;
    }

    (item.keywords || []).forEach((keyword) => {
      const normalizedKeyword = normalize(keyword);
      if (cleanQuery.includes(normalizedKeyword)) {
        score += 1.5;
        return;
      }

      const bestTokenScore = tokens.reduce(
        (acc, token) => Math.max(acc, fuzzyScore(token, normalizedKeyword)),
        0,
      );

      if (bestTokenScore >= 0.82) score += 0.8;
    });

    if (!bestMatch || score > bestMatch.score) {
      bestMatch = { score, item };
    }
  });

  return bestMatch && bestMatch.score >= 1.5 ? bestMatch.item : null;
}
