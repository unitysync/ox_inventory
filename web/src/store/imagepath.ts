export let imagepath = 'images';
export let imageversion = '';

export function setImagePath(path: string) {
  if (path && path !== '') imagepath = path;
}

export function setImageVersion(version?: string) {
  imageversion = version || '';
}
