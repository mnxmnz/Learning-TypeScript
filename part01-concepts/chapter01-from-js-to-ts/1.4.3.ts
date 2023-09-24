interface Painter {
  finish(): boolean;
  ownMaterials: Material[];
  paint(painting: string, materials: Material[]): boolean;
}

export function paintPainting(painter: Painter, painting): boolean {
  return painter.prepare().paint(painting, painter.ownMaterials).finish();
}
