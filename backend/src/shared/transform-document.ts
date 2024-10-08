export function transformDocument(document: any): any {
  if (!document) return document;

  const { _id, ...rest } = document;
  return { id: _id, ...rest };
}
