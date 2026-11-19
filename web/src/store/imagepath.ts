export let imagepath = 'images';
export let imageversion = '';
export let imageextension = 'png';

export function setImagePath(path: string) {
  if (path && path !== '') imagepath = path;
}

export function setImageVersion(version?: string) {
  imageversion = version || '';
}

export function setImageExtension(extension?: string) {
  imageextension = extension?.replace(/^\./, '') || 'png';
}
