import fetch from 'node-fetch';

export function tryRequest<T = unknown>(request: Promise<T>, count = 0): Promise<T> {
  return request.catch((e) => (count > 1 ? tryRequest(request, count - 1) : Promise.reject(e)));
}

tryRequest(fetch('http://test.ru'), 3)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));
