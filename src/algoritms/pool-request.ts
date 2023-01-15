import fetch from 'node-fetch';

export function poolRequest(urls: string[], callback: (results) => void, count: number): void {
  Promise.all(
    urls.splice(0, count).map((url) => {
      return fetch(url);
    }),
  ).then((results) => {
    callback(results);

    if (urls.length > 0) {
      poolRequest(urls, callback, count);
    }
  });
}

export async function asyncPoolRequest(urls: string[], callback: (results) => void, count: number) {
  for (let i = 0; i < urls.length; i = i + count) {
    callback(await Promise.all(urls.splice(i, count).map((url) => fetch(url))));
  }
}

const urls = [
  'http://example-app/data/1.json',
  'http://example-app/data/2.json',
  'http://example-app/data/3.json',
  'http://example-app/data/4.json',
  'http://example-app/data/5.json',
  'http://example-app/data/6.json',
  'http://example-app/data/7.json',
  'http://example-app/data/8.json',
  'http://example-app/data/9.json',
  'http://example-app/data/10.json',
];

poolRequest(
  [...urls, ...urls],
  (results) => {
    console.log('----');
    console.log(...results);
  },
  3,
);
